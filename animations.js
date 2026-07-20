/* =========================================================================
   animations.js — drop-in motion layer for Kalyan-Web
   Add this near the end of <body>, after your existing script.js:
     <script src="script.js?v=20260720-2"></script>
     <script src="animations.js" defer></script>
   Everything here is additive and defensive: it only ever adds classes/
   elements, never removes or rewrites anything script.js already does,
   and it no-ops safely if an element it looks for isn't on the page.
   ========================================================================= */
(function () {
  "use strict";

  var REDUCED = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* 1) Scroll-reveal system ---------------------------------------------
     Targets both static content and content script.js injects later
     (project cards, timeline items, gallery, etc.) via a MutationObserver,
     so it keeps working no matter when/how the JSON data finishes loading.
  --------------------------------------------------------------------- */
  var REVEAL_SELECTORS = [
    ".hero-copy", ".hero-visual",
    ".about .prose > *", "#about .prose > *",
    "#experience-list > *",
    "#project-list > *",
    "#achievement-grid > *",
    "#gallery-grid > *",
    "#technical-skill-cloud > *", "#soft-skill-cloud > *",
    ".certificate-list > *",
    ".section-index", ".section h2"
  ].join(",");

  var io = null;
  if (!REDUCED && "IntersectionObserver" in window) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("kw-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
  }

  function prepareForReveal(el) {
    if (el.classList.contains("kw-reveal") || el.classList.contains("kw-in")) return;
    el.classList.add("kw-reveal");
    if (REDUCED || !io) {
      el.classList.add("kw-in");
      return;
    }
    io.observe(el);
  }

  function scanAndPrepare(root) {
    root = root || document;
    var nodes = root.querySelectorAll ? root.querySelectorAll(REVEAL_SELECTORS) : [];
    nodes.forEach(function (el, i) {
      // small stagger so groups (cards, chips) animate in like a cascade
      el.style.transitionDelay = Math.min(i % 8, 8) * 55 + "ms";
      prepareForReveal(el);
    });
  }

  scanAndPrepare(document);

  var mo = new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      m.addedNodes.forEach(function (node) {
        if (node.nodeType !== 1) return;
        scanAndPrepare(node.parentElement || document);
      });
    });
  });
  mo.observe(document.body, { childList: true, subtree: true });

  /* 2) Button / link ripple ---------------------------------------------- */
  if (!REDUCED) {
    var RIPPLE_SELECTOR = ".button, .portfolio-intro-enter, .portfolio-intro-sound";
    document.addEventListener("click", function (e) {
      var target = e.target.closest ? e.target.closest(RIPPLE_SELECTOR) : null;
      if (!target) return;
      var rect = target.getBoundingClientRect();
      var size = Math.max(rect.width, rect.height) * 1.6;
      var span = document.createElement("span");
      span.className = "kw-ripple";
      span.style.width = span.style.height = size + "px";
      span.style.left = (e.clientX - rect.left - size / 2) + "px";
      span.style.top = (e.clientY - rect.top - size / 2) + "px";
      target.appendChild(span);
      span.addEventListener("animationend", function () { span.remove(); });
    });
  }

  /* 3) Hero aurora glow ---------------------------------------------------- */
  var hero = document.querySelector(".hero");
  if (hero && !REDUCED) {
    var aurora = document.createElement("div");
    aurora.className = "kw-aurora";
    aurora.setAttribute("aria-hidden", "true");
    hero.insertBefore(aurora, hero.firstChild);
  }

  /* 4) Ken Burns zoom on the splash intro image --------------------------- */
  var introMedia = document.querySelector(".portfolio-intro-media");
  if (introMedia && !REDUCED) {
    introMedia.classList.add("kw-kenburns");
  }
})();
