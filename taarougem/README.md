# Taarougem — bracelet shop

## What's in this folder

| File | What it is |
|---|---|
| `index.html` | The shop (home, collection, bag) |
| `products.js` | **Your bracelets, prices, sizes and shipping.** Edit this file to change the shop. |
| `success.html` | The "thank you" page customers see after paying |
| `netlify/functions/checkout.js` | Connects the bag to Stripe (you don't need to touch it) |
| `netlify.toml` | Settings for Netlify, the free host |

## Putting the shop online (one time, about 15 minutes)

1. **Create a free Netlify account** at netlify.com and choose *Sign up with GitHub*.
2. Click **Add new site → Import an existing project → GitHub**, then pick the **Start** repository.
3. On the settings screen:
   - **Branch to deploy:** the branch that holds the shop
   - **Base directory:** `taarougem`
   - Leave the other fields as they are, then click **Deploy**.
4. **Add your Stripe key:**
   - In Stripe, open **Developers → API keys** and copy the **Secret key**. Start with the *test* key (`sk_test_…`).
   - In Netlify, open **Site configuration → Environment variables → Add a variable**.
   - Name: `STRIPE_SECRET_KEY`. Value: paste the key.
   - Then go to **Deploys → Trigger deploy** so the site picks it up.
5. **Test a purchase.** Open your site, add a bracelet and click **Checkout**. Pay with Stripe's test card:
   - Card number: `4242 4242 4242 4242`
   - Expiry date: any future date
   - CVC: any 3 digits

   The order shows up in Stripe under **Payments**, with the size and shipping address.
6. **Go live:** replace the test key in Netlify with your **live** secret key (`sk_live_…`) and trigger a deploy again.

> Never paste your secret key into any file in this folder or into a chat.
> It belongs only in Netlify's environment variables.

## Day-to-day

- **New orders:** Stripe emails you about each payment. You can turn this on in Stripe under *Settings → Notifications*. Each order shows the bracelet, size and shipping address.
- **Change a price or add a bracelet:** edit `products.js`. The shop and the checkout both update automatically.
- **Discount codes:** create them in Stripe (*Product catalogue → Coupons*). Customers can enter them at checkout.

## Adding your photos

1. Put the pictures in a folder called `photos` inside this folder.
2. In `products.js`:
   - **Product photo:** add `image:"photos/name.jpg"` to a bracelet.
   - **Instagram gallery:** list up to 6 pictures in `GALLERY`, e.g. `["photos/insta1.jpg", "photos/insta2.jpg"]`.
   - **Instagram link:** set `instagram` to your page link and `instagramHandle` to your @name.

Square photos (or close to square) look best.

## Healing properties

Each bracelet has `intentions` (e.g. Protection, Calm), a `stone` name and a short `meaning`.
The first intention appears in the "Shop by intention" row on the home page.
Keep the wording gentle: "traditionally associated with…", never "cures" or "heals", which
consumer law doesn't allow for jewellery. A short note on the site says the meanings are shared
for inspiration and don't replace medical advice.
