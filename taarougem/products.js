/* =========================================================
   TAAROUGEM — PRODUCTS & SHOP SETTINGS
   This one file is read by both the website and the Stripe checkout,
   so prices only ever need to be changed here.

   - price: in euros (e.g. 28 or 28.50)
   - intentions: the feelings or energies the stone is associated with
   - stone / meaning: shown gently in the product details
   - images: up to 5 photos of the bracelet, the first one is the main photo
   - video:  optional, e.g. "videos/desert.mp4" (short, filmed vertically)
   - combo:  the stack you suggest with it ("with" = ids of the other bracelets)
   ========================================================= */
const PRODUCTS = [
  {id:"desert",
   combo:{name:"The Earth Stack", with:["tigre","ebene"],
     text:"Picture jasper keeps you grounded, tiger eye adds confidence and ebony brings strength: a warm, steady stack for sunlit days."},
   name:"Désert", type:"Jasper", price:58, tag:"Bestseller",
   images:["photos/desert.jpg","photos/desert-hanging.jpg"],
   intentions:["Grounding","Calm"], stone:"Picture jasper & ebony",
   meaning:"Picture jasper, with its landscapes drawn in the stone, is traditionally linked to the earth: a stone for feeling grounded, patient and calm.",
   desc:"Generous picture jasper beads in sand, honey and caramel tones, with a single ebony wood bead. Every stone tells its own landscape.",
   details:["Natural picture jasper","Ebony wood accent bead","Stretch fit, slips on easily"]},
  {id:"talisman",
   combo:{name:"The Guardian Stack", with:["nuit","ebene"],
     text:"Tiger eye, black agate and ebony: three traditionally protective materials, worn together as a quiet shield."},
   name:"Talisman", type:"Ebony", price:62, tag:"New",
   images:["photos/talisman.jpg","photos/talisman-2.jpg"],
   intentions:["Protection","Focus"], stone:"Ebony & tiger eye",
   meaning:"Tiger eye is traditionally worn as a protective talisman, said to sharpen focus and keep you centred.",
   desc:"Large matte ebony wood beads around a single polished tiger eye nugget. Bold, warm and quietly powerful.",
   details:["Ebony wood beads","Tiger eye nugget","Stretch fit, slips on easily"]},
  {id:"ebene",
   combo:{name:"The Night Stack", with:["nuit","talisman"],
     text:"Deep ebony, banded agate and a glint of tiger eye: strength, balance and focus in shades of night."},
   name:"Ébène", type:"Ebony", price:55, tag:"",
   images:["photos/ebene.jpg","photos/ebene-worn.jpg","photos/ebene-worn-2.jpg"],
   intentions:["Strength","Presence"], stone:"Ebony wood",
   meaning:"Dense and dark, ebony has long been a symbol of strength and protection, a wood made to last.",
   desc:"Oversized ebony wood beads framing a sculptural bicone. Pure, graphic and made to be noticed, alone or doubled.",
   details:["Ebony wood beads","Bicone centre bead","Stretch fit, slips on easily"]},
  {id:"nuit",
   combo:{name:"Light & Shadow", with:["lumiere"],
     text:"The balance of black agate meets the soft light of moonstone and citrine: calm contrast, from day to night."},
   name:"Nuit", type:"Agate", price:58, tag:"",
   images:["photos/nuit.jpg","photos/nuit-worn.jpg"],
   intentions:["Balance","Protection"], stone:"Black banded agate",
   meaning:"Black agate is traditionally associated with balance and protection, a steadying stone for busy days.",
   desc:"Polished black agate with fine white bands, set with faceted beads that catch the light.",
   details:["Natural banded agate","Polished and faceted beads","Stretch fit, slips on easily"]},
  {id:"jardin",
   combo:{name:"The Garden Stack", with:["lumiere"],
     text:"Green aventurine for renewal, with moonstone, citrine and bronzite for intuition and joy: a fresh, luminous stack."},
   name:"Jardin", type:"Aventurine", price:58, tag:"",
   images:["photos/jardin.jpg","photos/jardin-worn.jpg"],
   intentions:["Abundance","Renewal"], stone:"Green aventurine",
   meaning:"Green aventurine is traditionally known as a stone of luck and renewal, associated with growth and new beginnings.",
   desc:"Deep green aventurine with a soft shimmer, finished with silver-tone accents. Stack it with prehnite for a garden of greens.",
   details:["Natural green aventurine","Silver-tone accent beads","Stretch fit, slips on easily"]},
  {id:"lumiere",
   combo:{name:"The Golden Hour", with:["desert"],
     text:"Moonstone, citrine and bronzite with sun-warmed picture jasper: intuition and joy, grounded by the earth."},
   name:"Lumière", type:"Trio", price:120, tag:"Set of 3",
   images:["photos/lumiere.jpg","photos/lumiere-worn.jpg"],
   intentions:["Intuition","Joy"], stone:"Moonstone, citrine & bronzite",
   meaning:"Moonstone is linked to intuition, citrine to joy and light, and bronzite to inner strength: three stones made to be worn together.",
   desc:"A trio of moonstone, citrine and bronzite bracelets. Soft white, golden and deep bronze, layered like light through the day.",
   details:["Moonstone, citrine and bronzite","Set of 3 bracelets","Stretch fit, slips on easily"]},
  {id:"tigre",
   combo:{name:"The Sun Stack", with:["desert","talisman"],
     text:"Tiger eye from every angle, grounded by picture jasper: confidence, courage and protection in golden light."},
   name:"Tigre", type:"Ebony", price:60, tag:"",
   images:["photos/tigre.jpg","photos/tigre-worn.jpg"],
   intentions:["Confidence","Courage"], stone:"Ebony & tiger eye",
   meaning:"With its golden, shifting light, tiger eye is traditionally associated with confidence and courage.",
   desc:"Half matte ebony, half glowing tiger eye. A warm, balanced piece that pairs with everything in the collection.",
   details:["Ebony wood beads","Natural tiger eye","Stretch fit, slips on easily"]},
];

/* Photos for the "Instagram" gallery, e.g. ["photos/insta1.jpg", "photos/insta2.jpg", ...]
   Leave empty to show drawings. */
const GALLERY = [
  "photos/desert-hanging.jpg", "photos/ebene-worn-2.jpg", "photos/jardin-worn.jpg",
  "photos/lumiere-worn.jpg", "photos/nuit-worn.jpg", "photos/tigre-worn.jpg",
];

const SHOP = {
  heroImage: "photos/desert-hanging.jpg",   // big photo at the top
  storyImage: "photos/ebene-worn.jpg",       // round photo in "Our story"
  instagram: "https://www.instagram.com/",   // your Instagram page link
  instagramHandle: "@taarougem",            // shown on the site
  currency: "eur",
  sizes: ["S","M","L"],
  sizeGuide: "wrist size · S 15 cm · M 16.5 cm · L 18 cm",
  freeShippingFrom: 100,   // free shipping when the bag reaches this amount
  shippingPrice: 4.90,    // otherwise, this shipping price
  shippingName: "Standard shipping",
  // countries you ship to (two-letter codes)
  shipTo: ["FR","BE","LU","CH","DE","NL","ES","IT","PT","AT","IE","GB"],
};

/* (technical: lets both the website and the checkout read this file) */
if (typeof module !== "undefined") module.exports = { PRODUCTS, SHOP, GALLERY };
else window.TAAROUGEM = { PRODUCTS, SHOP, GALLERY };
