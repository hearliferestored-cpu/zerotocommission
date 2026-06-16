/* ──────────────────────────────────────────────────────────────
   Zero to Commission — conversion tracking
   ----------------------------------------------------------------
   TO ACTIVATE: paste your pixel IDs below. Until you do, this file
   does NOTHING (no scripts load, no network calls) — it is safe to
   ship inactive.

   Note: the actual purchase happens on Digistore24's checkout, not
   on this site. The Purchase/CompletePayment event below fires on
   the thank-you page as a client-side signal. For the most accurate
   conversion data, also configure tracking in your Digistore24
   vendor dashboard (Account > Tracking / Conversion pixel).
   ────────────────────────────────────────────────────────────── */
(function () {
  // ── PASTE YOUR IDs HERE ──
  var META_PIXEL_ID   = '';     // e.g. '1234567890123456'
  var TIKTOK_PIXEL_ID = '';     // e.g. 'CABCDEFGHIJKLMNOP'

  // ── Purchase event settings (front-end product price) ──
  var PURCHASE_VALUE = 47.00;
  var CURRENCY       = 'USD';

  var isThankYou = /thankyou(\.html)?$/i.test(location.pathname) ||
                   document.body.getAttribute('data-page') === 'thankyou';

  // ── Meta Pixel ──
  if (META_PIXEL_ID) {
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
      n.queue = []; t = b.createElement(e); t.async = !0; t.src = v;
      s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', META_PIXEL_ID);
    fbq('track', 'PageView');
    if (isThankYou) fbq('track', 'Purchase', { value: PURCHASE_VALUE, currency: CURRENCY });
  }

  // ── TikTok Pixel ──
  if (TIKTOK_PIXEL_ID) {
    !function (w, d, t) {
      w.TiktokAnalyticsObject = t; var ttq = w[t] = w[t] || [];
      ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie", "holdConsent", "revokeConsent", "grantConsent"];
      ttq.setAndDefer = function (t, e) { t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))); }; };
      for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
      ttq.instance = function (t) { for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]); return e; };
      ttq.load = function (e, n) {
        var r = "https://analytics.tiktok.com/i18n/pixel/events.js";
        ttq._i = ttq._i || {}; ttq._i[e] = []; ttq._i[e]._u = r;
        ttq._t = ttq._t || {}; ttq._t[e] = +new Date; ttq._o = ttq._o || {}; ttq._o[e] = n || {};
        var o = d.createElement("script"); o.type = "text/javascript"; o.async = !0;
        o.src = r + "?sdkid=" + e + "&lib=" + t;
        var a = d.getElementsByTagName("script")[0]; a.parentNode.insertBefore(o, a);
      };
      ttq.load(TIKTOK_PIXEL_ID);
      ttq.page();
      if (isThankYou) ttq.track('CompletePayment', { value: PURCHASE_VALUE, currency: CURRENCY });
    }(window, document, 'ttq');
  }
})();
