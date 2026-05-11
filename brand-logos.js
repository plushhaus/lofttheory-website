/* =========================================================================
   LOFTTHEORY.OC — BRAND LOGO MAPPING
   =========================================================================

   Maps the `brand` field on a product (in products.js) to a logo file in
   /logos. Add a new entry here whenever you start carrying a new retailer.

   The match is case-insensitive and ignores spaces/punctuation, so
   "West Elm", "west elm", and "WEST ELM" all resolve to the same file.

   Returns:
     { src, alt }   if a logo exists for the brand
     null           if no logo is mapped — caller should fall back to text

   ========================================================================= */

(function() {
  // Keys are normalized (lowercase, no spaces / punctuation).
  // Values are paths relative to the site root.
  var LOGO_FILES = {
    'castlery':       'logos/castlery.svg',
    'westelm':        'logos/westlelm.svg',
    'albanypark':     'logos/albanypark.svg',
    'article':        'logos/article.svg',
    'luluandgeorgia': 'logos/lulu and georgia.svg',
    'lulugeorgia':    'logos/lulu and georgia.svg',
    'polyandbark':    'logos/polyandbark.svg',
    'polybark':       'logos/polyandbark.svg',
    'lovesac':        'logos/lovesac-seeklogo.png',
    'roveconcepts':   'logos/roveconcepts.svg',
    'rove':           'logos/roveconcepts.svg'
    // Bench Made Modern: no logo file yet — falls back to brand text.
    // Brands without a logo file yet (RH, Rove Concepts, etc.) will fall
    // back to the brand text. Drop the SVG into /logos and add a line above
    // to enable the logo.
  };

  function normalize(brand) {
    return String(brand || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  window.getBrandLogo = function(brand) {
    var key = normalize(brand);
    if (!key || !LOGO_FILES[key]) return null;
    return { src: LOGO_FILES[key], alt: brand };
  };
})();
