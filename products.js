/* =========================================================================
   LOFTTHEORY.OC — PRODUCT INVENTORY
   =========================================================================

   This file is the single source of truth for what's on the site. It's
   regenerated automatically when you run "sync inventory" against your
   MJ Flips - Website Inventory sheet. Manual edits are fine, but they'll
   be overwritten on the next sync.

   Last sync: 2026-05-06 from MJ Flips · Website tab (3 active listings)

   FIELD GUIDE:
     id           — short unique slug, lowercase, dashes-only. Used in URLs/anchors.
     name         — display name shown to customers
     brand        — original retailer (Castlery, West Elm, Albany Park, etc.)
                    The retailer's logo is auto-rendered everywhere this
                    product appears (cards + detail page) — the mapping lives
                    in /brand-logos.js. If the brand isn't mapped yet, drop
                    the SVG in /logos and add a line to brand-logos.js.
     category     — one of: "couches" | "chairs" | "tables" | "beds" | "lighting" | "decor"
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
    price: 900,
    retailPrice: 1600,
    dimensions: "86.6\"W × 41.3\"D × 29.9\"H",
    description: "Castlery's Harper dining table in chestnut, 86 inches long. Open-box — assembled by the original buyer, then returned because it didn't fit their space. Never actually used; brand-new condition with all original hardware. Original box is no longer included; we'll wrap it for safe transport.",
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
    featured: true,
    available: true
  },

  {
    id: "roveconcepts-maria-coffee-table",
    name: "Maria Coffee Table",
    brand: "Rove Concepts",
    category: "tables",
    condition: "open-box-no-box",
    price: 800,
    retailPrice: 1600,
    dimensions: "48\"W × 32\"D × 14.1\"H",
    description: "Rove Concepts' Maria coffee table in Alabaster Concrete — sculptural pedestal base, oval top in soft off-white. Open-box from a customer return; brand-new condition with no flaws. Original packaging not included; we'll wrap it for safe transport.",
    retailerUrl: "https://www.roveconcepts.com/maria-coffee-table",
    photos: [
      "roveconcepts-maria-coffee-table/01.jpg",
      "roveconcepts-maria-coffee-table/02.jpg",
      "roveconcepts-maria-coffee-table/03.jpg",
      "roveconcepts-maria-coffee-table/04.jpg",
      "roveconcepts-maria-coffee-table/05.jpg"
    ],
    featured: true,
    available: true
  },

  {
    id: "polyandbark-bo-lounger-chairs",
    name: "Bo Lounge Chairs (Set of 2)",
    brand: "Poly & Bark",
    category: "chairs",
    condition: "open-box-with-box",
    price: 900,
    retailPrice: 1748,
    dimensions: "28.8\"W × 32.5\"D × 27.25\"H (each)",
    description: "Pair of Poly & Bark Bo Lounge Chairs in Cognac Tan top-grain leather with a slim black metal frame. Open-box — taken out by the original buyer but didn't fit their space. Never used; brand-new condition with original box included. Sold as a set.",
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
    featured: true,
    available: true
  },

  /* ----- SOLD (manually preserved — add these to the sheet to manage from there) ----- */

  {
    id: "castlery-dawson-l-sofa-storage-ottoman",
    name: "Dawson L-Sofa with Storage Ottoman",
    brand: "Castlery",
    category: "couches",
    condition: "like-new",
    price: 2800,
    retailPrice: 3970,
    dimensions: "Measurements available on request",
    description: "L-shape Dawson configuration with the matching storage ottoman. Lightly used, no flaws.",
    photos: [],
    featured: false,
    available: false,
    soldDate: "2025-12-20"
  },

  {
    id: "castlery-jonathan-6pc-extended-chaise",
    name: "Jonathan 6-Piece Extended Chaise",
    brand: "Castlery",
    category: "couches",
    condition: "like-new",
    price: 2400,
    retailPrice: 3894,
    dimensions: "Measurements available on request",
    description: "Six-piece Jonathan configuration with the extended chaise. Strong frame, clean upholstery, ready to install.",
    photos: [],
    featured: false,
    available: false,
    soldDate: "2026-01-04"
  },

  {
    id: "west-elm-harmony-xl-blue",
    name: "Harmony XL Sofa (Blue)",
    brand: "West Elm",
    category: "couches",
    condition: "like-new",
    price: 800,
    retailPrice: 2500,
    dimensions: "Measurements available on request",
    description: "Deep-seat Harmony XL in blue. Lightly used, structurally perfect.",
    photos: [],
    featured: false,
    available: false,
    soldDate: "2026-01-03"
  },

  {
    id: "rh-white-sectional",
    name: "White Sectional Sofa",
    brand: "RH",
    category: "couches",
    condition: "like-new",
    price: 700,
    retailPrice: 4500,
    dimensions: "Measurements available on request",
    description: "Restoration Hardware sectional in clean white. Inspected end-to-end.",
    photos: [],
    featured: false,
    available: false,
    soldDate: "2026-01-01"
  },

  {
    id: "castlery-seb-extendable-dining-set",
    name: "Seb Extendable Dining Set",
    brand: "Castlery",
    category: "tables",
    condition: "like-new",
    price: 1400,
    retailPrice: 2800,
    dimensions: "Measurements available on request",
    description: "Extendable Seb dining table with chairs. Whole set, in good order.",
    photos: [],
    featured: false,
    available: false,
    soldDate: "2026-01-09"
  },

  {
    id: "castlery-crescent-6-drawer-dresser",
    name: "Crescent 6-Drawer Dresser",
    brand: "Castlery",
    category: "beds",
    condition: "like-new",
    price: 800,
    retailPrice: 1600,
    dimensions: "Measurements available on request",
    description: "Six-drawer Crescent dresser. Drawers run smooth, finish is clean.",
    photos: [],
    featured: false,
    available: false,
    soldDate: "2026-01-11"
  },

  {
    id: "castlery-hamilton-sofa-white",
    name: "Hamilton Sofa (White)",
    brand: "Castlery",
    category: "couches",
    condition: "like-new",
    price: 700,
    retailPrice: 1950,
    dimensions: "Measurements available on request",
    description: "Hamilton sofa in white performance fabric. Light use, no stains.",
    photos: [],
    featured: false,
    available: false,
    soldDate: "2026-01-24"
  },

  {
    id: "rove-concepts-aulus-dining-chairs",
    name: "Aulus Dining Chairs (Set of 4)",
    brand: "Rove Concepts",
    category: "chairs",
    condition: "like-new",
    price: 750,
    retailPrice: 1300,
    dimensions: "Set of 4",
    description: "Set of four Aulus dining chairs from Rove Concepts. All four in matching condition.",
    photos: [],
    featured: false,
    available: false,
    soldDate: "2026-01-26"
  }

];
