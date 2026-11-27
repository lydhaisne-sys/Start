/* =========================================================
   TAAROUGEM — PRODUCTS & SHOP SETTINGS
   This one file is read by both the website and the Stripe checkout,
   so prices only ever need to be changed here.

   - price: in euros (e.g. 28 or 28.50)
   - intentions: the feelings or energies the stone is associated with
   - stone / meaning: shown gently in the product details
   - image: optional, a real photo, e.g. "photos/sable.jpg".
            Without one, the site shows a drawing.
   ========================================================= */
const PRODUCTS = [
  {id:"obsidienne", intentions:["Protection","Grounding"], stone:"Obsidian",
   meaning:"Traditionally worn as a shield, obsidian is said to absorb negative energy and help you feel grounded and protected.",
   name:"Obsidienne", type:"Bangle", price:68, tag:"Bestseller", style:"bangle", material:"obsidian",
   desc:"A deep, glossy black bangle with a soft rounded profile. Bold on its own, striking when stacked.",
   details:["Polished high-shine finish","Chunky rounded profile","Slips over the hand"]},
  {id:"ivoire", intentions:["Calm","Balance"], stone:"Howlite",
   meaning:"Soft and creamy, howlite is associated with calm and patience, a gentle reminder to slow down and breathe.",
   name:"Ivoire", type:"Bangle", price:72, tag:"New", style:"bangle", material:"ivory",
   desc:"Creamy ivory with warm amber veining, like polished stone. No two pieces share the same pattern.",
   details:["Marbled ivory and amber","Chunky rounded profile","Each piece unique"]},
  {id:"nacre", intentions:["Intuition","Softness"], stone:"Mother-of-pearl",
   meaning:"Born from the sea, mother-of-pearl has long symbolised intuition, gentleness and emotional softness.",
   name:"Nacre", type:"Bangle", price:84, tag:"", style:"bangle", material:"nacre",
   desc:"The soft glow of mother-of-pearl, shifting from blush to silver as it catches the light.",
   details:["Pearlescent finish","Chunky rounded profile","Slips over the hand"]},
  {id:"soleil", intentions:["Confidence","Abundance"], stone:"Golden tones",
   meaning:"Warm golden tones are linked to the energy of the sun: confidence, warmth and abundance.",
   name:"Soleil", type:"Bangle", price:78, tag:"", style:"bangle", material:"gold",
   desc:"A hammered gold-tone bangle that catches every ray of light. Warm, bold and made to be noticed.",
   details:["Hand-hammered texture","Gold-tone finish","Slips over the hand"]},
  {id:"grenat", intentions:["Love","Vitality"], stone:"Garnet",
   meaning:"A stone of the heart, garnet is traditionally associated with love, passion and renewed energy.",
   name:"Grenat", type:"Cuff", price:95, tag:"Limited", style:"cuff", material:"polished",
   desc:"A wide polished gold-tone cuff set with a deep garnet-red oval stone. Pure statement.",
   details:["Faceted garnet-red stone","Polished gold-tone cuff","Gently adjustable opening"]},
  {id:"orbes", intentions:["Joy","Energy"], stone:"Golden beads",
   meaning:"Round golden beads evoke joy and light, an easy way to add a little sunshine to every stack.",
   name:"Orbes", type:"Beaded", price:48, tag:"", style:"beads",
   desc:"Large gold-tone beads on a stretch cord. The perfect piece to slip between two bangles.",
   details:["Large polished gold-tone beads","Stretch cord","Made to be stacked"]},
];

/* Photos for the "Instagram" gallery, e.g. ["photos/insta1.jpg", "photos/insta2.jpg", ...]
   Leave empty to show drawings. */
const GALLERY = [];

const SHOP = {
  instagram: "https://www.instagram.com/",   // your Instagram page link
  instagramHandle: "@taarougem",            // shown on the site
  currency: "eur",
  sizes: ["S","M","L"],
  sizeGuide: "inner diameter · S 6 cm · M 6.5 cm · L 7 cm",
  freeShippingFrom: 100,   // free shipping when the bag reaches this amount
  shippingPrice: 4.90,    // otherwise, this shipping price
  shippingName: "Standard shipping",
  // countries you ship to (two-letter codes)
  shipTo: ["FR","BE","LU","CH","DE","NL","ES","IT","PT","AT","IE","GB"],
};

/* (technical: lets both the website and the checkout read this file) */
if (typeof module !== "undefined") module.exports = { PRODUCTS, SHOP, GALLERY };
else window.TAAROUGEM = { PRODUCTS, SHOP, GALLERY };
