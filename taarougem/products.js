/* =========================================================
   TAAROUGEM — PRODUCTS & SHOP SETTINGS
   This one file is read by both the website and the Stripe checkout,
   so prices only ever need to be changed here.

   - price: in euros (e.g. 28 or 28.50)
   - image: optional, a real photo, e.g. "photos/sable.jpg".
            Without one, the site shows a drawing.
   ========================================================= */
const PRODUCTS = [
  {id:"obsidienne", name:"Obsidienne", type:"Bangle", price:68, tag:"Bestseller", style:"bangle", material:"obsidian",
   desc:"A deep, glossy black bangle with a soft rounded profile. Bold on its own, striking when stacked.",
   details:["Polished high-shine finish","Chunky rounded profile","Slips over the hand"]},
  {id:"ivoire", name:"Ivoire", type:"Bangle", price:72, tag:"New", style:"bangle", material:"ivory",
   desc:"Creamy ivory with warm amber veining, like polished stone. No two pieces share the same pattern.",
   details:["Marbled ivory and amber","Chunky rounded profile","Each piece unique"]},
  {id:"nacre", name:"Nacre", type:"Bangle", price:84, tag:"", style:"bangle", material:"nacre",
   desc:"The soft glow of mother-of-pearl, shifting from blush to silver as it catches the light.",
   details:["Pearlescent finish","Chunky rounded profile","Slips over the hand"]},
  {id:"soleil", name:"Soleil", type:"Bangle", price:78, tag:"", style:"bangle", material:"gold",
   desc:"A hammered gold-tone bangle that catches every ray of light. Warm, bold and made to be noticed.",
   details:["Hand-hammered texture","Gold-tone finish","Slips over the hand"]},
  {id:"grenat", name:"Grenat", type:"Cuff", price:95, tag:"Limited", style:"cuff", material:"polished",
   desc:"A wide polished gold-tone cuff set with a deep garnet-red oval stone. Pure statement.",
   details:["Faceted garnet-red stone","Polished gold-tone cuff","Gently adjustable opening"]},
  {id:"orbes", name:"Orbes", type:"Beaded", price:48, tag:"", style:"beads",
   desc:"Large gold-tone beads on a stretch cord. The perfect piece to slip between two bangles.",
   details:["Large polished gold-tone beads","Stretch cord","Made to be stacked"]},
];

const SHOP = {
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
if (typeof module !== "undefined") module.exports = { PRODUCTS, SHOP };
else window.TAAROUGEM = { PRODUCTS, SHOP };
