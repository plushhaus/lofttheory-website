/* =========================================================================
   LOFTTHEORY.OC — PRODUCT INVENTORY
   =========================================================================

   This file is the single source of truth for what's on the site. It's
   regenerated automatically when you run "sync inventory" against your
   MJ Flips - Website Inventory sheet. Manual edits are fine, but they'll
   be overwritten on the next sync.

   Last sync: 2026-05-08 from MJ Flips · Website tab (4 active listings)

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
     soldDate     — ISO date string "YYYY-MM-DD" for sold items (optional, sorts the Sold page)

   ========================================================================= */

window.PRODUCTS = [

  /* ----- AVAILABLE (synced from MJ Flips · Website tab) ----- */

  {
    id: "castlery-harper-diningtable-86",
    name: "Castlery Harper Dining Table 86\"",
    brand: "Castlery",
    category: "tables",
    condition: "open-box-with-box",
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
    featured: true,
    available: true
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
      "polyandbark-bo-lounger-chairs/00.jpg",
      "polyandbark-bo-lounger-chairs/09.jpg",
      "polyandbark-bo-lounger-chairs/10.jpg",
      "polyandbark-bo-lounger-chairs/01.jpg",
      "polyandbark-bo-lounger-chairs/02.jpg",
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
    category: "sectionals",
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
    featured: true,
    available: true
  }

];
