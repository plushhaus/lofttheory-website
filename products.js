/* =========================================================================
   LOFTTHEORY.OC — PRODUCT INVENTORY
   =========================================================================

   This file is the single source of truth for what's on the site. It's
   regenerated automatically when you run "sync inventory" against your
   MJ Flips - Website Inventory sheet. Manual edits are fine, but they'll
   be overwritten on the next sync.

   Last sync: 2026-05-11 from MJ Flips · Website tab (15 listings — 10 live, 5 sold)

   FIELD GUIDE:
     id           — short unique slug, lowercase, dashes-only. Used in URLs/anchors.
     name         — display name shown to customers
     brand        — original retailer (Castlery, West Elm, Albany Park, etc.)
                    The retailer's logo is auto-rendered everywhere this
                    product appears (cards + detail page) — the mapping lives
                    in /brand-logos.js. If the brand isn't mapped yet, drop
                    the SVG in /logos and add a line to brand-logos.js.
     category     — one of: "sectionals" | "chairs" | "tables" | "beds" | "lighting" | "decor"
     condition    — one of: "overstock" | "open-box-with-box" | "open-box-no-box" |
                              "open-box" | "showroom" | "like-new" | "return"
                    (overstock = sealed in original packaging /
                     open-box-with-box = customer opened, never used, original box still included /
                     open-box-no-box = customer opened, never used, original box discarded /
                     open-box = generic open-box (legacy — prefer the with-box / no-box variants) /
                     showroom = floor sample / like-new = lightly used / return = customer return)
     price        — current asking price, number (no $ sign, no commas)
     retailPrice  — original retail price (for the strikethrough), number
     dimensions   — short string, e.g. "84\"W × 38\"D × 33\"H"
                    Use "Measurements available on request" if you don't have them yet.
     description  — 1–2 sentence honest description (auto-written from sheet Notes)
     photos       — array of filenames in /photos folder. First photo is the cover.
     featured     — true to show on the homepage (3 max). false otherwise.
     available    — true if still on the floor. false moves it to the Sold page.
                    SYNC RULE: Available column in the MJ Flips · Website tab maps directly:
                      "yes" → available: true   (shows on shop page + homepage if featured)
                      "no"  → available: false  (moves to /sold.html)
                    A product never gets removed from products.js — flipping available to false
                    just relocates it. This preserves SEO, old links, and the sold archive.
     soldDate     — ISO date string "YYYY-MM-DD" for sold items (optional, sorts the Sold page)

   ========================================================================= */

window.PRODUCTS = [

  /* ----- AVAILABLE (synced from MJ Flips · Website tab) ----- */

  {
    id: "castlery-harper-diningtable-86",
    name: "Castlery Harper Dining Table 86\"",
    brand: "Castlery",
    category: "tables",
    condition: "open-box-no-box",
    color: "Chestnut",
    price: 900,
    retailPrice: 1600,
    dimensions: "86.6\"W × 41.3\"D × 29.9\"H",
    description: "Castlery Harper dining table in chestnut, 86 inches long. New, open-box — the customer opened it but it was too big for their place. Never used; brand-new condition with all original hardware.",
    retailerUrl: "https://www.castlery.com/us/products/harper-dining-table?color_option=chestnut_oak&length=2_2m",
    photos: [
      "castlery-harper-diningtable-86/01.jpg",
      "castlery-harper-diningtable-86/02.jpg",
      "castlery-harper-diningtable-86/03.jpg",
      "castlery-harper-diningtable-86/04.jpg",
      "castlery-harper-diningtable-86/05.jpg",
      "castlery-harper-diningtable-86/06.jpg",
      "castlery-harper-diningtable-86/07.jpg",
      "castlery-harper-diningtable-86/08.jpg"
    ],
    featured: false,
    available: false,
    soldDate: "2026-05-11"
  },

  {
    id: "polyandbark-bo-lounger-chairs",
    name: "Poly & Bark Bo Lounger Chairs (Set of 2)",
    brand: "Poly & Bark",
    category: "chairs",
    condition: "open-box-with-box",
    color: "Cognac Tan",
    price: 900,
    retailPrice: 1748,
    dimensions: "28.8\"W × 32.5\"D × 27.25\"H",
    description: "Pair of Poly & Bark Bo lounge chairs in cognac tan leather. New, still in the original box.",
    retailerUrl: "https://www.polyandbark.com/products/bo-leather-lounge-chair-cognac-tan",
    photos: [
      "polyandbark-bo-lounger-chairs/02.jpg",
      "polyandbark-bo-lounger-chairs/01.jpg",
      "polyandbark-bo-lounger-chairs/03.jpg",
      "polyandbark-bo-lounger-chairs/04.jpg",
      "polyandbark-bo-lounger-chairs/05.jpg",
      "polyandbark-bo-lounger-chairs/06.jpg",
      "polyandbark-bo-lounger-chairs/07.jpg",
      "polyandbark-bo-lounger-chairs/08.jpg"
    ],
    featured: false,
    available: false,
    soldDate: "2026-05-10"
  },

  {
    id: "roveconcepts-maria-coffee-table",
    name: "Rove Concepts Maria Coffee Table",
    brand: "Rove Concepts",
    category: "tables",
    condition: "open-box-no-box",
    color: "Alabaster Concrete",
    price: 800,
    retailPrice: 1600,
    dimensions: "48\"W × 32\"D × 14.1\"H",
    description: "Rove Concepts Maria coffee table in alabaster concrete. New condition, original box no longer included; we'll wrap it for safe transport.",
    retailerUrl: "https://www.roveconcepts.com/maria-coffee-table",
    photos: [
      "roveconcepts-maria-coffee-table/01.jpg",
      "roveconcepts-maria-coffee-table/02.jpg",
      "roveconcepts-maria-coffee-table/03.jpg",
      "roveconcepts-maria-coffee-table/04.jpg",
      "roveconcepts-maria-coffee-table/05.jpg"
    ],
    featured: false,
    available: true
  },

  {
    id: "lovesac-sactional-6piece-darkgrey",
    name: "Lovesac Sactional 6-Piece",
    brand: "Lovesac",
    category: "couches",
    condition: "open-box-no-box",
    color: "Charcoal Grey Corded Velvet",
    price: 2500,
    retailPrice: 8700,
    dimensions: "117\"W × 117\"D × 29\"H",
    description: "Lovesac Sactional 6-piece in charcoal grey corded velvet. New condition, no original box — modular configuration so you can arrange as L-shape, straight, or U-shape.",
    retailerUrl: "https://www.lovesac.com/sactionals/build/6-seats-8-sides2-sactional-sky-grey-corded-velvet",
    photos: [
      "lovesac-sactional-6piece-darkgrey/01.jpg",
      "lovesac-sactional-6piece-darkgrey/02.jpg",
      "lovesac-sactional-6piece-darkgrey/03.jpg"
    ],
    featured: false,
    available: false,
    soldDate: "2026-05-10"
  },

  {
    id: "castlery-dalton-king-size-storage-bed",
    name: "Castlery Dalton King Size Storage Bed",
    brand: "Castlery",
    category: "beds",
    condition: "overstock",
    color: "Beach Linen",
    price: 1400,
    retailPrice: 1900,
    dimensions: "82.7\"W × 89.8\"D × 47.2\"H",
    description: "Castlery Dalton storage bed in beach linen, king size. New in original packaging — never assembled. Features built-in storage under the platform.",
    retailerUrl: "https://www.castlery.com/us/products/dalton-storage-bed?bed_frame_size=king&frame_cover=removable&material=beach_linen",
    photos: [
      "castlery-dalton-king-size-storage-bed/01.jpg",
      "castlery-dalton-king-size-storage-bed/02.jpg",
      "castlery-dalton-king-size-storage-bed/03.jpg",
      "castlery-dalton-king-size-storage-bed/04.jpg",
      "castlery-dalton-king-size-storage-bed/05.jpg",
      "castlery-dalton-king-size-storage-bed/06.jpg",
      "castlery-dalton-king-size-storage-bed/07.jpg",
      "castlery-dalton-king-size-storage-bed/08.jpg"
    ],
    featured: false,
    available: false,
    soldDate: "2026-05-10"
  },

  {
    id: "castlery-marlow-sofa",
    name: "Castlery Marlow Performance Boucle Sofa",
    brand: "Castlery",
    category: "couches",
    condition: "overstock",
    color: "Performance Infinity Boucle, Rust",
    price: 1000,
    retailPrice: 1700,
    dimensions: "70.1\"W × 38.6\"D × 29.9\"H",
    description: "Castlery Marlow armless 2-seater sofa in performance infinity boucle, rust. New condition.",
    retailerUrl: "https://www.castlery.com/us/products/marlow-performance-boucle-armless-2-seater-sofa?material=performance_ginger&leg_color=caramel",
    photos: [
      "castlery-marlow-sofa/01.jpg",
      "castlery-marlow-sofa/02.jpg",
      "castlery-marlow-sofa/03.jpg",
      "castlery-marlow-sofa/04.jpg",
      "castlery-marlow-sofa/05.jpg",
      "castlery-marlow-sofa/06.jpg"
    ],
    featured: false,
    available: false,
    soldDate: "2026-05-10"
  },

  {
    id: "lulu-and-georgia-cleary-swivel-chairs",
    name: "Cleary Swivel Chairs (Set of 2)",
    brand: "Lulu and Georgia",
    category: "chairs",
    condition: "open-box-no-box",
    color: "Sky Blue Velvet",
    price: 1600,
    retailPrice: 4596,
    dimensions: "33\"W × 36\"D × 32\"H",
    description: "Pair of Lulu and Georgia Cleary swivel chairs in sky blue velvet. Open-box — taken out by the original buyer but didn't suit their space. Never used; brand-new condition. Original box not included.",
    retailerUrl: "https://www.luluandgeorgia.com/products/cleary-swivel-chair",
    photos: [
      "lulu-and-georgia-cleary-swivel-chairs/01.jpg",
      "lulu-and-georgia-cleary-swivel-chairs/02.jpg",
      "lulu-and-georgia-cleary-swivel-chairs/03.jpg",
      "lulu-and-georgia-cleary-swivel-chairs/04.jpg",
      "lulu-and-georgia-cleary-swivel-chairs/05.jpg",
      "lulu-and-georgia-cleary-swivel-chairs/06.jpg"
    ],
    featured: true,
    available: true
  },

  {
    id: "bench-made-modern-skinnyfat",
    name: "Skinny Fat Sofa & Chair Set",
    brand: "Bench Made Modern",
    category: "couches",
    condition: "open-box-no-box",
    color: "Ponti Butterscotch",
    price: 2895,
    retailPrice: 8146,
    dimensions: "Sofa: 85\"W × 37\"D × 33\"H · Chair: 45\"W × 37\"D × 33\"H",
    description: "BenchMade Modern Skinny Fat sofa and matching chair, sold as a set. Ponti Butterscotch top-grain leather over solid wood frames with mid-century tapered legs. Open-box — never actually used; brand-new condition. Original packaging not included.",
    retailerUrl: "https://benchmademodern.com/products/skinny-fat-sofa",
    photos: [
      "bench-made-modern-skinnyfat/01.jpg",
      "bench-made-modern-skinnyfat/02.jpg",
      "bench-made-modern-skinnyfat/03.jpg",
      "bench-made-modern-skinnyfat/04.jpg",
      "bench-made-modern-skinnyfat/05.jpg",
      "bench-made-modern-skinnyfat/06.jpg",
      "bench-made-modern-skinnyfat/07.jpg"
    ],
    featured: true,
    available: true
  },

  {
    id: "lulu-and-georgia-tasia-swivel-chair",
    name: "Lulu and Georgia Tasia Swivel Chair",
    brand: "Lulu and Georgia",
    category: "chairs",
    condition: "return",
    color: "Boucle",
    price: 1000,
    retailPrice: 2400,
    dimensions: "43.5\"W × 36.5\"D × 30.5\"H",
    description: "Lulu and Georgia Tasia swivel chair in boucle. Like-new customer return — gently used, no visible wear.",
    retailerUrl: "https://www.luluandgeorgia.com/products/tasia-swivel-chair",
    photos: [
      "lulu-and-georgia-tasia-swivel-chair/01.jpg",
      "lulu-and-georgia-tasia-swivel-chair/02.jpg",
      "lulu-and-georgia-tasia-swivel-chair/03.jpg",
      "lulu-and-georgia-tasia-swivel-chair/04.jpg",
      "lulu-and-georgia-tasia-swivel-chair/05.jpg",
      "lulu-and-georgia-tasia-swivel-chair/06.jpg"
    ],
    featured: false,
    available: true
  },

  {
    id: "castlery-desmond-chair",
    name: "Castlery Desmond Armchair",
    brand: "Castlery",
    category: "chairs",
    condition: "open-box-no-box",
    color: "Performance Mixed-Yarn Chenille, Cream",
    price: 375,
    retailPrice: 799,
    dimensions: "29.5\"W × 30.3\"D × 32.7\"H",
    description: "Castlery Desmond armchair in performance mixed-yarn chenille, cream. Open-box — opened by the buyer but never used. Brand-new condition; original box no longer included.",
    retailerUrl: "https://www.castlery.com/us/products/desmond-armchair",
    photos: [
      "castlery-desmond-chair/01.jpg",
      "castlery-desmond-chair/02.jpg",
      "castlery-desmond-chair/03.jpg",
      "castlery-desmond-chair/04.jpg",
      "castlery-desmond-chair/05.jpg",
      "castlery-desmond-chair/06.jpg"
    ],
    featured: false,
    available: true
  },

  {
    id: "tikamoon-patio-tv-stand",
    name: "Tikamoon Patio Solid Teak TV Stand",
    brand: "Tikamoon",
    category: "decor",
    condition: "open-box-no-box",
    color: "Certified Solid Teak",
    price: 600,
    retailPrice: 1700,
    dimensions: "78\"W × 19\"D × 19\"H",
    description: "Tikamoon Patio TV stand in certified solid teak. Open-box — minor shipping damage to the back cover (purely cosmetic, structure is solid and the damage isn't visible once installed). Beautifully built piece for a third of retail.",
    retailerUrl: "https://www.tikamoon.co/art-patio-solid-teak-tv-stand-884.htm",
    photos: [
      "tikamoon-patio-tv-stand/01.jpg",
      "tikamoon-patio-tv-stand/02.jpg",
      "tikamoon-patio-tv-stand/03.jpg",
      "tikamoon-patio-tv-stand/04.jpg",
      "tikamoon-patio-tv-stand/05.jpg",
      "tikamoon-patio-tv-stand/06.jpg"
    ],
    featured: false,
    available: true
  },

  {
    id: "sundays-showcase-cabinet",
    name: "Sundays Showcase Cabinet",
    brand: "Sundays",
    category: "decor",
    condition: "open-box-no-box",
    color: "White Oak",
    price: 600,
    retailPrice: 2450,
    dimensions: "44\"W × 18\"D × 72\"H",
    description: "Sundays Showcase cabinet in white oak — tall display cabinet, perfect for dining room or entryway. Open-box with minor shipping damage; functionally and structurally perfect.",
    retailerUrl: "https://www.sundays-company.com/products/showcase-cabinet-white-oak",
    photos: [
      "sundays-showcase-cabinet/01.jpg",
      "sundays-showcase-cabinet/02.jpg",
      "sundays-showcase-cabinet/03.jpg",
      "sundays-showcase-cabinet/04.jpg",
      "sundays-showcase-cabinet/05.jpg",
      "sundays-showcase-cabinet/06.jpg",
      "sundays-showcase-cabinet/07.jpg",
      "sundays-showcase-cabinet/08.jpg"
    ],
    featured: false,
    available: true
  },

  {
    id: "havenly-faulkner-4-door-cabinet",
    name: "Havenly Faulkner 4-Door Cabinet",
    brand: "Havenly",
    category: "decor",
    condition: "open-box-no-box",
    color: "Oak Grain",
    price: 500,
    retailPrice: 2760,
    dimensions: "68\"W × 19\"D × 32\"H",
    description: "Havenly (Uttermost) Faulkner 4-door cabinet in oak grain. Open-box — never used; brand-new condition. Original packaging not included.",
    retailerUrl: "https://uttermost.com/faulkner-4-door-cabinet-50054",
    photos: [
      "havenly-faulkner-4-door-cabinet/01.jpg",
      "havenly-faulkner-4-door-cabinet/02.jpg",
      "havenly-faulkner-4-door-cabinet/03.jpg",
      "havenly-faulkner-4-door-cabinet/04.jpg",
      "havenly-faulkner-4-door-cabinet/05.jpg",
      "havenly-faulkner-4-door-cabinet/06.jpg",
      "havenly-faulkner-4-door-cabinet/07.jpg"
    ],
    featured: false,
    available: true
  },

  {
    id: "albany-park-6Pc-Fog",
    name: "Albany Park Kova Pillow Cushion U-Shape (6Pc)",
    brand: "Albany Park",
    category: "couches",
    condition: "open-box-no-box",
    color: "Fog Performance Brushed Canvas",
    price: 1800,
    retailPrice: 5994,
    dimensions: "158.5\"W × 79\"D × 39\"H",
    description: "Albany Park Kova 6-piece pillow-cushion U-shape sectional in fog performance brushed canvas. Open-box — never used; brand-new condition. Massive U-configuration, modular layout.",
    retailerUrl: "https://www.albanypark.com/collections/sectional-sofas/products/kova-pillow-cushion-u-shape?variant=42806622912563",
    photos: [
      "albany-park-6Pc-Fog/01.jpg",
      "albany-park-6Pc-Fog/02.jpg",
      "albany-park-6Pc-Fog/03.jpg",
      "albany-park-6Pc-Fog/04.jpg",
      "albany-park-6Pc-Fog/05.jpg"
    ],
    featured: false,
    available: true
  },

  {
    id: "rovelabs-m1-sofa",
    name: "Rove Lab M1 Sofa (Three Seater)",
    brand: "Rove Lab",
    category: "couches",
    condition: "open-box-no-box",
    color: "Hydrogen Blue",
    price: 500,
    retailPrice: 1995,
    dimensions: "102\"W × 37.7\"D × 24.8\"H",
    description: "Rove Lab M1 three-seater modular sofa in Hydrogen Blue. Open-box — never used; brand-new condition. SmartFoam comfort, spill-resistant OEKO-TEX fabric, tool-free zip-together assembly.",
    retailerUrl: "https://rovelab.com/collections/m1-sofa-collection/products/m1-sofa-three-seater",
    photos: [],
    featured: false,
    available: true
  }

];
