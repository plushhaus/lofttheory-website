/* =========================================================================
   LOFTTHEORY.OC — Email signup popup ("Unlock 10% off + first dibs")
   =========================================================================
   Drop on any page: <script src="popup.js" defer></script>
   The script injects its own styles + HTML — no other setup needed.

   ⚠️  POPUP IS DISABLED BY DEFAULT.
       To turn it on you need TWO things below:
         1. CONFIG.mailchimpUrl       — the Form Action URL from Mailchimp
         2. CONFIG.mailchimpHoneypot  — the hidden anti-bot field name
         3. flip CONFIG.enabled to true
       Until enabled is true AND mailchimpUrl is non-empty, the popup
       never shows — live visitors see nothing.

   HOW TO GET THE MAILCHIMP VALUES:
       Mailchimp dashboard → Audience → Signup forms → Embedded forms.
       In the generated HTML look for:
         <form action="https://....list-manage.com/subscribe/post?u=XXX&id=YYY">
       Paste that full URL into CONFIG.mailchimpUrl.
       Then look for a hidden input near the bottom like:
         <input type="text" name="b_XXX_YYY" ...>
       Paste the "b_XXX_YYY" name into CONFIG.mailchimpHoneypot.
   ========================================================================= */
(function() {
  var CONFIG = {
    enabled: true,                   // ← LIVE
    mailchimpUrl: 'https://lofttheoryoc.us18.list-manage.com/subscribe/post?u=fd2dd930724aed179d43d8ad1&id=4ce68c23da&f_id=0032a3e6f0',
    mailchimpHoneypot: 'b_fd2dd930724aed179d43d8ad1_4ce68c23da',

    image: 'photos/lulu-and-georgia-cleary-swivel-chairs/01.jpg',
    delayMs: 8000,                   // show after 8 seconds on the page
    dismissDays: 7,                  // hide for N days after "No thanks" / X
    signupDays: 365,                 // hide for N days after a signup
    storageKey: 'lt-popup-state'
  };

  /* ---------- visibility gating ---------- */
  function shouldShow() {
    if (!CONFIG.enabled || !CONFIG.mailchimpUrl) return false;
    try {
      var raw = localStorage.getItem(CONFIG.storageKey);
      if (!raw) return true;
      var state = JSON.parse(raw);
      return !(state.expiresAt && Date.now() < state.expiresAt);
    } catch (e) { return true; }
  }
  function rememberDismissed(days) {
    try {
      localStorage.setItem(CONFIG.storageKey, JSON.stringify({
        expiresAt: Date.now() + days * 86400000
      }));
    } catch (e) {}
  }

  /* ---------- styles ---------- */
  var css = '' +
    '#lt-pop-overlay {' +
    '  position: fixed; inset: 0; z-index: 200;' +
    '  background: rgba(42,38,34,0.55);' +
    '  display: flex; align-items: center; justify-content: center;' +
    '  padding: 24px;' +
    '  opacity: 0; pointer-events: none;' +
    '  transition: opacity 0.25s ease;' +
    '}' +
    '#lt-pop-overlay[data-open="true"] { opacity: 1; pointer-events: auto; }' +

    '#lt-pop {' +
    '  position: relative;' +
    '  width: 100%; max-width: 880px;' +
    '  background: #FAF7F2; color: #2A2622;' +
    '  border-radius: 14px; overflow: hidden;' +
    '  box-shadow: 0 30px 80px rgba(42,38,34,0.32), 0 8px 24px rgba(42,38,34,0.18);' +
    '  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;' +
    '  display: grid; grid-template-columns: 1fr 1fr;' +
    '  transform: translateY(12px) scale(0.98); opacity: 0;' +
    '  transition: transform 0.28s cubic-bezier(0.2,0.8,0.2,1), opacity 0.22s ease;' +
    '  max-height: calc(100vh - 48px); overflow-y: auto;' +
    '}' +
    '#lt-pop-overlay[data-open="true"] #lt-pop {' +
    '  transform: translateY(0) scale(1); opacity: 1;' +
    '}' +

    '#lt-pop-img {' +
    '  background-size: cover; background-position: center;' +
    '  background-color: #F2ECE1;' +
    '  min-height: 380px;' +
    '}' +

    '#lt-pop-body {' +
    '  padding: 44px 40px 36px;' +
    '  display: flex; flex-direction: column; justify-content: center;' +
    '}' +
    '.lt-pop-eyebrow {' +
    '  font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;' +
    '  color: #d96a1f; font-weight: 600;' +
    '  margin: 0 0 14px;' +
    '}' +
    '.lt-pop-heading {' +
    '  font-family: "Fraunces", Georgia, serif;' +
    '  font-size: 34px; line-height: 1.05; font-weight: 400;' +
    '  letter-spacing: -0.015em;' +
    '  margin: 0 0 14px;' +
    '}' +
    '.lt-pop-heading em { color: #d96a1f; font-style: italic; }' +
    '.lt-pop-sub {' +
    '  font-size: 14px; line-height: 1.55; color: #5A5048;' +
    '  margin: 0 0 22px;' +
    '}' +

    '#lt-pop-form { display: flex; flex-direction: column; gap: 10px; }' +
    '#lt-pop-form input[type="email"] {' +
    '  width: 100%; padding: 13px 14px;' +
    '  border: 1px solid #DDD3C4; border-radius: 8px;' +
    '  background: #FAF7F2; color: #2A2622;' +
    '  font: inherit; font-size: 14px;' +
    '  transition: border-color 0.15s, box-shadow 0.15s;' +
    '  box-sizing: border-box;' +
    '}' +
    '#lt-pop-form input[type="email"]:focus {' +
    '  outline: none; border-color: #d96a1f;' +
    '  box-shadow: 0 0 0 3px rgba(217,106,31,0.16);' +
    '}' +
    '#lt-pop-form button[type="submit"] {' +
    '  width: 100%; padding: 14px 16px;' +
    '  background: #d96a1f; color: #FAF7F2;' +
    '  border: none; border-radius: 8px;' +
    '  font: inherit; font-size: 14px; font-weight: 600;' +
    '  letter-spacing: 0.04em; text-transform: uppercase;' +
    '  cursor: pointer;' +
    '  transition: background 0.15s, transform 0.1s;' +
    '}' +
    '#lt-pop-form button[type="submit"]:hover { background: #c2530f; }' +
    '#lt-pop-form button[type="submit"]:active { transform: translateY(1px); }' +

    '#lt-pop-dismiss {' +
    '  margin-top: 14px; align-self: center;' +
    '  background: none; border: none; padding: 6px 8px;' +
    '  font: inherit; font-size: 12px; font-weight: 500;' +
    '  color: #5A5048; letter-spacing: 0.08em; text-transform: uppercase;' +
    '  cursor: pointer; opacity: 0.7;' +
    '  transition: opacity 0.15s, color 0.15s;' +
    '}' +
    '#lt-pop-dismiss:hover { opacity: 1; color: #2A2622; }' +

    '#lt-pop-close {' +
    '  position: absolute; top: 14px; right: 14px;' +
    '  width: 36px; height: 36px;' +
    '  background: rgba(250,247,242,0.9); color: #2A2622;' +
    '  border: 1px solid #DDD3C4; border-radius: 50%;' +
    '  cursor: pointer;' +
    '  display: flex; align-items: center; justify-content: center;' +
    '  transition: background 0.15s, transform 0.1s;' +
    '  z-index: 2;' +
    '}' +
    '#lt-pop-close:hover { background: #FAF7F2; transform: scale(1.05); }' +
    '#lt-pop-close svg { width: 16px; height: 16px; }' +

    '#lt-pop-thanks {' +
    '  display: none;' +
    '  text-align: center; padding: 12px 0 4px;' +
    '}' +
    '#lt-pop-thanks h3 {' +
    '  font-family: "Fraunces", Georgia, serif;' +
    '  font-size: 24px; font-weight: 400; margin: 0 0 8px; color: #2A2622;' +
    '}' +
    '#lt-pop-thanks h3 em { color: #d96a1f; font-style: italic; }' +
    '#lt-pop-thanks p {' +
    '  font-size: 14px; color: #5A5048; line-height: 1.55; margin: 0;' +
    '}' +

    /* ----- mobile: stack vertically ----- */
    '@media (max-width: 680px) {' +
    '  #lt-pop-overlay { padding: 16px; align-items: flex-end; }' +
    '  #lt-pop { grid-template-columns: 1fr; max-height: calc(100vh - 32px); }' +
    '  #lt-pop-img { min-height: 180px; }' +
    '  #lt-pop-body { padding: 28px 24px 24px; }' +
    '  .lt-pop-heading { font-size: 26px; }' +
    '}';

  /* ---------- HTML ---------- */
  function buildHtml() {
    var honeypotInput = CONFIG.mailchimpHoneypot
      ? '<div style="position:absolute;left:-5000px" aria-hidden="true">' +
        '<input type="text" name="' + CONFIG.mailchimpHoneypot + '" tabindex="-1" value="">' +
        '</div>'
      : '';
    return '' +
      '<button id="lt-pop-close" aria-label="Close">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">' +
          '<line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/>' +
        '</svg>' +
      '</button>' +
      '<div id="lt-pop-img" style="background-image:url(\'' + CONFIG.image + '\')"></div>' +
      '<div id="lt-pop-body">' +
        '<div id="lt-pop-form-wrap">' +
          '<p class="lt-pop-eyebrow">First-visit offer</p>' +
          '<h2 class="lt-pop-heading">Unlock <em>10% off</em><br>+ first dibs.</h2>' +
          '<p class="lt-pop-sub">Get 10% off your first piece — and an email the moment new inventory hits the floor, before it goes public.</p>' +
          '<form id="lt-pop-form" action="' + CONFIG.mailchimpUrl + '" method="post" target="_blank" novalidate>' +
            '<input type="email" name="EMAIL" placeholder="Your email" required autocomplete="email">' +
            honeypotInput +
            '<input type="hidden" name="SIGNUP_SOURCE" value="popup-10off">' +
            '<button type="submit">Sign me up</button>' +
          '</form>' +
          '<button id="lt-pop-dismiss" type="button">No thanks</button>' +
        '</div>' +
        '<div id="lt-pop-thanks">' +
          '<h3>You\'re <em>in.</em></h3>' +
          '<p>Check your inbox for the 10% off code — and we\'ll text you when fresh pieces land.</p>' +
        '</div>' +
      '</div>';
  }

  /* ---------- init ---------- */
  function init() {
    if (!shouldShow()) return;

    var styleEl = document.createElement('style');
    styleEl.id = 'lt-pop-styles';
    styleEl.textContent = css;
    document.head.appendChild(styleEl);

    var overlay = document.createElement('div');
    overlay.id = 'lt-pop-overlay';
    overlay.setAttribute('data-open', 'false');
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'lt-pop-heading');
    overlay.innerHTML = '<div id="lt-pop">' + buildHtml() + '</div>';
    document.body.appendChild(overlay);

    var closeBtn = overlay.querySelector('#lt-pop-close');
    var dismissBtn = overlay.querySelector('#lt-pop-dismiss');
    var form = overlay.querySelector('#lt-pop-form');
    var formWrap = overlay.querySelector('#lt-pop-form-wrap');
    var thanks = overlay.querySelector('#lt-pop-thanks');

    function open() { overlay.setAttribute('data-open', 'true'); }
    function close(days) {
      overlay.setAttribute('data-open', 'false');
      rememberDismissed(days || CONFIG.dismissDays);
      setTimeout(function() { overlay.remove(); styleEl.remove(); }, 350);
    }

    closeBtn.addEventListener('click', function() { close(CONFIG.dismissDays); });
    dismissBtn.addEventListener('click', function() { close(CONFIG.dismissDays); });
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) close(CONFIG.dismissDays);
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && overlay.getAttribute('data-open') === 'true') {
        close(CONFIG.dismissDays);
      }
    });

    form.addEventListener('submit', function() {
      // Mailchimp form opens its confirmation in a new tab (target="_blank").
      // We swap to the thank-you state here and auto-close after a beat.
      formWrap.style.display = 'none';
      thanks.style.display = 'block';
      rememberDismissed(CONFIG.signupDays);
      setTimeout(function() { close(CONFIG.signupDays); }, 3500);
    });

    setTimeout(open, 50); // tiny delay so transition runs
  }

  function start() {
    setTimeout(init, CONFIG.delayMs);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
