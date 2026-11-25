/* =========================================================
   TAAROUGEM — PRODUCTS & SHOP SETTINGS
   This one file is read by both the website and the Stripe checkout,
   so prices only ever need to be changed here.

   - price: in euros (e.g. 28 or 28.50)
   - image: optional, a real photo, e.g. "photos/sable.jpg".
            Without one, the site shows a drawing.
   ========================================================= */
const PRODUCTS = [
  {id:"sable",  name:"Sable",  type:"Beaded", price:28, tag:"Bestseller", style:"beads", colors:["#d8b98f","#c49a6c","#efe0c8"], desc:"Soft sand-coloured beads with a single gold-tone accent. An everyday piece that goes with everything.", details:["Glass & wooden beads","Gold-tone accent bead","Elastic, easy to slip on"]},
  {id:"corail", name:"Corail", type:"Beaded", price:32, tag:"New",        style:"beads", colors:["#c8603f","#e08e6d","#f3c3a8"], desc:"Warm coral tones that catch the sun. Made to be stacked or worn alone.", details:["Coral-tone glass beads","Gold-tone spacers","Elastic, easy to slip on"]},
  {id:"nuit",   name:"Nuit",   type:"Stone",  price:38, tag:"",           style:"beads", colors:["#2d2a33","#4a4552","#7a7383"], desc:"Deep, night-sky stones with a gentle shine. Quietly elegant.", details:["Natural onyx-style stones","8 mm beads","Elastic, easy to slip on"]},
  {id:"perle",  name:"Perle",  type:"Chain",  price:42, tag:"",           style:"chain", colors:["#c9a86a","#f6efe6"], desc:"A fine gold-tone chain dotted with small freshwater-style pearls.", details:["Gold-tone chain","Pearl-style beads","Adjustable clasp"]},
  {id:"olive",  name:"Olive",  type:"Woven",  price:24, tag:"",           style:"woven", colors:["#7d8455","#a5a878","#c19a5b"], desc:"A hand-woven cord bracelet in olive and gold, with a sliding knot.", details:["Hand-woven waxed cord","Sliding knot, adjustable","Water-friendly"]},
  {id:"ambre",  name:"Ambre",  type:"Stone",  price:36, tag:"Limited",    style:"beads", colors:["#c07a2c","#e0a64f","#8e5420"], desc:"Honey and amber tones, glowing like late-afternoon light.", details:["Amber-tone stones","Gold-tone accent bead","Elastic, easy to slip on"]},
];

const SHOP = {
  currency: "eur",
  sizes: ["XS","S","M","L"],
  sizeGuide: "XS 14 · S 15.5 · M 17 · L 18.5 cm",
  freeShippingFrom: 60,   // free shipping when the bag reaches this amount
  shippingPrice: 4.90,    // otherwise, this shipping price
  shippingName: "Standard shipping",
  // countries you ship to (two-letter codes)
  shipTo: ["FR","BE","LU","CH","DE","NL","ES","IT","PT","AT","IE","GB"],
};

/* (technical: lets both the website and the checkout read this file) */
if (typeof module !== "undefined") module.exports = { PRODUCTS, SHOP };
else window.TAAROUGEM = { PRODUCTS, SHOP };
