/*
  Creates a Stripe Checkout page for the customer's bag.

  Prices are always taken from products.js, never from the browser,
  so nobody can change a price before paying.

  Needs one setting in Netlify (Site configuration → Environment variables):
    STRIPE_SECRET_KEY = your Stripe secret key (sk_test_... to test, sk_live_... for real sales)
*/
const { PRODUCTS, SHOP } = require("../../products.js");

const cents = (euros) => Math.round(euros * 100);
const reply = (statusCode, body) => ({
  statusCode,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
});

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return reply(405, { error: "Method not allowed" });

  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return reply(500, { error: "Stripe is not configured yet" });

  let items;
  try {
    items = JSON.parse(event.body || "{}").items;
  } catch {
    return reply(400, { error: "Invalid request" });
  }
  if (!Array.isArray(items) || items.length === 0 || items.length > 50) {
    return reply(400, { error: "Your bag is empty" });
  }

  const site = process.env.URL || `https://${event.headers.host}`;
  const form = new URLSearchParams();
  let subtotal = 0;

  for (const [i, item] of items.entries()) {
    const product = PRODUCTS.find((p) => p.id === item.id);
    const qty = Number(item.qty);
    if (!product || !SHOP.sizes.includes(item.size) || !Number.isInteger(qty) || qty < 1 || qty > 20) {
      return reply(400, { error: "Something in your bag is no longer available" });
    }
    subtotal += product.price * qty;
    const p = `line_items[${i}]`;
    form.append(`${p}[quantity]`, qty);
    form.append(`${p}[price_data][currency]`, SHOP.currency);
    form.append(`${p}[price_data][unit_amount]`, cents(product.price));
    form.append(`${p}[price_data][product_data][name]`, `${product.name} bracelet, size ${item.size}`);
    form.append(`${p}[price_data][product_data][metadata][product_id]`, product.id);
    form.append(`${p}[price_data][product_data][metadata][size]`, item.size);
    const img = (product.images && product.images[0]) || product.image;
    if (img) form.append(`${p}[price_data][product_data][images][0]`, `${site}/${img}`);
  }

  const shipping = subtotal >= SHOP.freeShippingFrom ? 0 : cents(SHOP.shippingPrice);
  form.append("mode", "payment");
  form.append("success_url", `${site}/success.html`);
  form.append("cancel_url", `${site}/#shop`);
  form.append("allow_promotion_codes", "true");
  form.append("billing_address_collection", "auto");
  SHOP.shipTo.forEach((c, i) => form.append(`shipping_address_collection[allowed_countries][${i}]`, c));
  const s = "shipping_options[0][shipping_rate_data]";
  form.append(`${s}[type]`, "fixed_amount");
  form.append(`${s}[display_name]`, shipping ? SHOP.shippingName : "Complimentary shipping");
  form.append(`${s}[fixed_amount][amount]`, shipping);
  form.append(`${s}[fixed_amount][currency]`, SHOP.currency);

  const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: form,
  });
  const session = await res.json();
  if (!res.ok) {
    console.error("Stripe error:", session.error && session.error.message);
    return reply(502, { error: "Could not start checkout" });
  }
  return reply(200, { url: session.url });
};
