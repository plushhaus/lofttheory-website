/* =========================================================================
   LOFTTHEORY.OC — "Talk to a real human" floating widget
   =========================================================================
   Drop this script tag on any page:
       <script src="chat-widget.js" defer></script>
   The widget injects its own styles and HTML — no other setup needed.

   To change the phone number / email, edit the CONFIG block below.
   ========================================================================= */
(function() {
  var CONFIG = {
    phone: '949.538.7182',
    phoneRaw: '9495387182',
    email: 'hello@lofttheoryoc.com',
    bookingUrl: 'index.html#book'
  };

  /* ---------- STYLES ---------- */
  var css = '' +
    '#cw-launcher {' +
    '  position: fixed; right: 20px; bottom: 20px;' +
    '  width: 60px; height: 60px; border-radius: 50%;' +
    '  background: #C8745A; color: #FAF7F2;' +
    '  border: none; cursor: pointer;' +
    '  display: flex; align-items: center; justify-content: center;' +
    '  box-shadow: 0 4px 16px rgba(42,38,34,0.18), 0 8px 32px rgba(42,38,34,0.10);' +
    '  z-index: 100;' +
    '  transition: transform 0.18s ease, background 0.18s ease, box-shadow 0.18s ease;' +
    '}' +
    '#cw-launcher:hover { background: #A55A42; transform: translateY(-2px) scale(1.04); }' +
    '#cw-launcher:active { transform: translateY(0) scale(0.98); }' +
    '#cw-launcher svg { width: 26px; height: 26px; }' +
    '#cw-launcher .cw-pulse {' +
    '  position: absolute; inset: -4px; border-radius: 50%;' +
    '  background: #C8745A; opacity: 0.35;' +
    '  animation: cw-pulse 2.4s ease-out infinite;' +
    '  z-index: -1; pointer-events: none;' +
    '}' +
    '@keyframes cw-pulse {' +
    '  0% { transform: scale(0.95); opacity: 0.35; }' +
    '  80%, 100% { transform: scale(1.4); opacity: 0; }' +
    '}' +
    '#cw-launcher[aria-expanded="true"] .cw-pulse { display: none; }' +

    '#cw-panel {' +
    '  position: fixed; right: 20px; bottom: 92px;' +
    '  width: min(340px, calc(100vw - 40px));' +
    '  background: #FAF7F2; color: #2A2622;' +
    '  border-radius: 12px;' +
    '  box-shadow: 0 4px 20px rgba(42,38,34,0.10), 0 16px 48px rgba(42,38,34,0.18);' +
    '  z-index: 100;' +
    '  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;' +
    '  overflow: hidden;' +
    '  transform-origin: bottom right;' +
    '  transform: translateY(8px) scale(0.96); opacity: 0;' +
    '  pointer-events: none;' +
    '  transition: transform 0.22s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.18s ease;' +
    '}' +
    '#cw-panel[data-open="true"] {' +
    '  transform: translateY(0) scale(1); opacity: 1; pointer-events: auto;' +
    '}' +
    '#cw-panel header {' +
    '  background: #2A2622; color: #FAF7F2;' +
    '  padding: 18px 20px; display: flex; justify-content: space-between; align-items: flex-start; gap: 12px;' +
    '}' +
    '#cw-panel header h3 {' +
    '  font-family: "Fraunces", Georgia, serif;' +
    '  font-size: 20px; font-weight: 400; line-height: 1.2; margin: 0;' +
    '  letter-spacing: -0.01em;' +
    '}' +
    '#cw-panel header em { color: #C8745A; font-style: italic; }' +
    '#cw-panel header p {' +
    '  font-size: 12px; color: rgba(250,247,242,0.7); margin: 4px 0 0;' +
    '  letter-spacing: 0.04em;' +
    '}' +
    '#cw-close {' +
    '  background: none; border: none; cursor: pointer; color: rgba(250,247,242,0.7);' +
    '  padding: 0; width: 24px; height: 24px; flex-shrink: 0;' +
    '  display: flex; align-items: center; justify-content: center;' +
    '  border-radius: 4px; transition: color 0.15s, background 0.15s;' +
    '}' +
    '#cw-close:hover { color: #FAF7F2; background: rgba(250,247,242,0.1); }' +

    '.cw-body { padding: 20px; }' +
    '.cw-intro {' +
    '  font-size: 14px; color: #5A5048; line-height: 1.5; margin: 0 0 16px;' +
    '}' +
    '.cw-action {' +
    '  display: flex; align-items: center; gap: 12px;' +
    '  width: 100%; text-align: left;' +
    '  padding: 14px 16px;' +
    '  border-radius: 8px;' +
    '  font-size: 14px; font-weight: 500;' +
    '  text-decoration: none;' +
    '  margin-bottom: 8px;' +
    '  transition: background 0.15s, transform 0.1s;' +
    '  cursor: pointer;' +
    '  font-family: inherit;' +
    '  border: none;' +
    '}' +
    '.cw-action:active { transform: translateY(1px); }' +
    '.cw-primary {' +
    '  background: #2A2622; color: #FAF7F2;' +
    '}' +
    '.cw-primary:hover { background: #C8745A; }' +
    '.cw-secondary {' +
    '  background: #F2ECE1; color: #2A2622;' +
    '  border: 1px solid #DDD3C4;' +
    '}' +
    '.cw-secondary:hover { background: #E8DFD3; }' +
    '.cw-action svg { width: 18px; height: 18px; flex-shrink: 0; }' +
    '.cw-label { display: flex; flex-direction: column; gap: 1px; flex: 1; }' +
    '.cw-label-main { font-weight: 500; }' +
    '.cw-label-sub { font-size: 12px; opacity: 0.7; font-weight: 400; }' +
    '.cw-foot {' +
    '  margin-top: 12px; padding-top: 14px; border-top: 1px solid #DDD3C4;' +
    '  font-size: 12px; color: #5A5048; text-align: center; line-height: 1.5;' +
    '}' +
    '.cw-foot a { color: #C8745A; text-decoration: none; border-bottom: 1px solid currentColor; }' +
    '.cw-foot a:hover { color: #A55A42; }' +

    '@media (max-width: 480px) {' +
    '  #cw-launcher { right: 16px; bottom: 16px; width: 56px; height: 56px; }' +
    '  #cw-panel { right: 16px; bottom: 84px; }' +
    '}';

  /* ---------- HTML ---------- */
  var html =
    '<button id="cw-launcher" aria-label="Talk to a real human" aria-expanded="false" aria-controls="cw-panel">' +
      '<span class="cw-pulse"></span>' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>' +
      '</svg>' +
    '</button>' +

    '<div id="cw-panel" role="dialog" aria-labelledby="cw-title" aria-modal="false" data-open="false">' +
      '<header>' +
        '<div>' +
          '<h3 id="cw-title">Talk to a <em>real human.</em></h3>' +
          '<p>NO BOTS · NO PHONE TREE</p>' +
        '</div>' +
        '<button id="cw-close" aria-label="Close">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">' +
            '<line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/>' +
          '</svg>' +
        '</button>' +
      '</header>' +
      '<div class="cw-body">' +
        '<p class="cw-intro">Real person on the other end. Text is fastest — usually a reply within an hour during the day.</p>' +

        '<a class="cw-action cw-primary" href="sms:' + CONFIG.phoneRaw + '">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
            '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>' +
          '</svg>' +
          '<span class="cw-label">' +
            '<span class="cw-label-main">Text us</span>' +
            '<span class="cw-label-sub">' + CONFIG.phone + '</span>' +
          '</span>' +
        '</a>' +

        '<a class="cw-action cw-secondary" href="tel:' + CONFIG.phoneRaw + '">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
            '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>' +
          '</svg>' +
          '<span class="cw-label">' +
            '<span class="cw-label-main">Call us</span>' +
            '<span class="cw-label-sub">' + CONFIG.phone + '</span>' +
          '</span>' +
        '</a>' +

        '<a class="cw-action cw-secondary" href="mailto:' + CONFIG.email + '">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
            '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>' +
            '<polyline points="22,6 12,13 2,6"/>' +
          '</svg>' +
          '<span class="cw-label">' +
            '<span class="cw-label-main">Email</span>' +
            '<span class="cw-label-sub">' + CONFIG.email + '</span>' +
          '</span>' +
        '</a>' +

        '<p class="cw-foot">Or <a href="' + CONFIG.bookingUrl + '">book a viewing →</a></p>' +
      '</div>' +
    '</div>';

  /* ---------- INJECT + WIRE ---------- */
  function init() {
    var styleEl = document.createElement('style');
    styleEl.id = 'cw-styles';
    styleEl.textContent = css;
    document.head.appendChild(styleEl);

    var container = document.createElement('div');
    container.id = 'cw-root';
    container.innerHTML = html;
    document.body.appendChild(container);

    var launcher = document.getElementById('cw-launcher');
    var panel = document.getElementById('cw-panel');
    var closeBtn = document.getElementById('cw-close');

    function open() {
      panel.setAttribute('data-open', 'true');
      launcher.setAttribute('aria-expanded', 'true');
    }
    function close() {
      panel.setAttribute('data-open', 'false');
      launcher.setAttribute('aria-expanded', 'false');
    }
    function toggle() {
      panel.getAttribute('data-open') === 'true' ? close() : open();
    }

    launcher.addEventListener('click', toggle);
    closeBtn.addEventListener('click', close);

    // Close on outside click
    document.addEventListener('click', function(e) {
      if (panel.getAttribute('data-open') !== 'true') return;
      if (panel.contains(e.target) || launcher.contains(e.target)) return;
      close();
    });

    // Close on Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && panel.getAttribute('data-open') === 'true') close();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
