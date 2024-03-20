var mode = window.localStorage.getItem("mode") || "light";
var root = document.documentElement;  // Define the 'root' variable to reference the document's root element

var e, t, r, a, n, o, l, i; // Declare 't' here as well
null !== (e = document.querySelector('[data-bs-toggle="mode"]')) && (t = e.querySelector(".form-check-input"), "dark" === mode ? (root.classList.add("dark-mode"), t.checked = true) : (root.classList.remove("dark-mode"), t.checked = false), e.addEventListener("click", function (e) {
  t.checked ? (root.classList.add("dark-mode"), window.localStorage.setItem("mode", "dark")) : (root.classList.remove("dark-mode"), window.localStorage.setItem("mode", "light"));
}));



function ownKeys(t, e) {
    var r, a = Object.keys(t);
    return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function (e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable;
    })), a.push.apply(a, r)), a;
  }
  
  function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {};
      e % 2 ? ownKeys(Object(r), !0).forEach(function (e) {
        _defineProperty(t, e, r[e]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
      });
    }
  
    return t;
  }
  
  function _defineProperty(e, t, r) {
    return t = _toPropertyKey(t), t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e;
  }
  
  function _toPropertyKey(e) {
    e = _toPrimitive(e, "string");
    return "symbol" === _typeof(e) ? e : String(e);
  }
  
  function _toPrimitive(e, t) {
    if ("object" !== _typeof(e) || null === e) return e;
    var r = e[Symbol.toPrimitive];
  
    if (void 0 === r) {
      return ("string" === t ? String : Number)(e);
    }
  
    r = r.call(e, t || "default");
    if ("object" !== _typeof(r)) return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  
  function _typeof(e) {
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, _typeof(e);
  }
  
  /**
   * Around | Multipurpose Bootstrap HTML Template
   * Copyright 2022 Createx Studio
   * Theme core scripts
   *
   * @author Createx Studio
   * @version 3.1.0
   */
  !function () {
    "use strict";
    var t, e, r, a, n, o, l, i;
    null !== (e = document.querySelector('[data-bs-toggle="mode"]')) && (t = e.querySelector(".form-check-input"), "dark" === mode ? (root.classList.add("dark-mode"), t.checked = !0) : (root.classList.remove("dark-mode"), t.checked = !1), e.addEventListener("click", function (e) {
      t.checked ? (root.classList.add("dark-mode"), window.localStorage.setItem("mode", "dark")) : (root.classList.remove("dark-mode"), window.localStorage.setItem("mode", "light"));
    })), null != (a = document.querySelector(".navbar.fixed-top")) && (a.classList, r = function (e) {
      20 < e.currentTarget.pageYOffset ? (a.classList.add("navbar-stuck"), a.classList.contains("navbar-ignore-dark-mode") && a.classList.remove("ignore-dark-mode")) : (a.classList.remove("navbar-stuck"), a.classList.contains("navbar-ignore-dark-mode") && a.classList.add("ignore-dark-mode"));
    }, window.addEventListener("load", function (e) {
      r(e);
    }), window.addEventListener("scroll", function (e) {
      r(e);
    })), null !== document.querySelector("[data-aos]") && AOS.init(), new SmoothScroll("[data-scroll]", {
      speed: 800,
      speedAsDuration: !0,
      offset: function offset(e, t) {
        return t.dataset.scrollOffset || 20;
      },
      header: "[data-scroll-header]",
      updateURL: !1
    }), null != (i = document.querySelector(".btn-scroll-top")) && (n = parseInt(450, 10), o = i.querySelector("svg circle"), l = o.getTotalLength(), o.style.strokeDasharray = l, o.style.strokeDashoffset = l, window.addEventListener("scroll", function (e) {
      e.currentTarget.pageYOffset > n ? i.classList.add("show") : i.classList.remove("show"), e = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight), o.style.strokeDashoffset = l - l * e;
    })), function () {
      var n, o = document.querySelectorAll(".masonry-grid");
      if (null !== o) for (var e = 0; e < o.length; e++) {
        var t = function (e) {
          imagesLoaded(e, function () {
            new Masonry(e, {
              itemSelector: ".masonry-grid-item",
              columnWidth: ".masonry-grid-sizer",
              percentPosition: !0
            });
          });
        };
  
        t(o[e]);
      }
  
      if (null !== (n = document.querySelector(".countdown")) && 0 < n.length) {
        var r = new Date(n.dataset.countdown),
            a = n.querySelector(".countdown-days .number"),
            l = n.querySelector(".countdown-hours .number"),
            i = n.querySelector(".countdown-minutes .number"),
            s = n.querySelector(".countdown-seconds .number");
        setInterval(function () {
          var e = new Date().getTime(),
              t = r - e,
              e = Math.floor(t / 864e5);
          t = Math.floor(t % 864e5 / 36e5);
          var r = Math.floor(t % 36e5 / 6e4);
          t = Math.floor(t % 6e4 / 1e3);
          a.innerText = String(e).padStart(2, "0"), l.innerText = String(t).padStart(2, "0"), i.innerText = String(r).padStart(2, "0"), s.innerText = String(t).padStart(2, "0");
        }, 1e3);
      }
  
      if (null !== (n = document.querySelectorAll(".typed-text")) && 0 < n.length) for (var c = function c(e) {
        var t = n[e],
            r = new Typed(t, {
          strings: JSON.parse(t.dataset.typedItems),
          typeSpeed: 60,
          backSpeed: 25,
          backDelay: 2e3,
          startDelay: 500,
          loop: !0,
          showCursor: !0,
          cursorChar: "|"
        });
        t.classList.contains("cursor-light") && (r.cursor.classList.add("typed-cursor-light"), r.cursor.classList.remove("typed-cursor-dark")), t.classList.contains("cursor-dark") && (r.cursor.classList.add("typed-cursor-dark"), r.cursor.classList.remove("typed-cursor-light"));
      }, d = 0; d < n.length; d++) {
        c(d);
      }
    }();
  }();
  