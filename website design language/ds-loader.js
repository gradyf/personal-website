/* ds-loader.js — resolves the component namespace for cards & UI kits.
   1. If a compiled _ds_bundle.js namespace is already on window, use it.
   2. Else try fetching _ds_bundle.js (quietly — no 404 script tag).
   3. Else fetch + Babel-transform the .jsx sources directly (dev fallback).
   Usage (after React, ReactDOM and Babel standalone are loaded):
     __gfLoadDS("../../").then(NS => { ... }) */
(function () {
  var FILES = [
    "components/core/Specimen.jsx",
    "components/core/Button.jsx",
    "components/core/Tag.jsx",
    "components/core/SectionStrip.jsx",
    "components/content/PageHero.jsx",
    "components/content/LedgerRow.jsx",
    "components/content/PostRow.jsx",
    "components/navigation/SiteHeader.jsx",
    "components/navigation/Ticker.jsx",
    "components/navigation/SiteFooter.jsx",
    "ui_kits/portfolio-site/data.js",
    "ui_kits/portfolio-site/Home.jsx",
    "ui_kits/portfolio-site/CaseStudy.jsx",
    "ui_kits/portfolio-site/About.jsx",
    "ui_kits/portfolio-site/Resume.jsx",
    "ui_kits/portfolio-site/Blog.jsx",
    "ui_kits/portfolio-site/Contact.jsx",
  ];

  function findNS() {
    var keys = Object.keys(window);
    for (var i = 0; i < keys.length; i++) {
      try {
        var v = window[keys[i]];
        if (v && typeof v === "object" && typeof v.Button === "function" && typeof v.SiteHeader === "function") return v;
      } catch (e) {
        /* cross-origin frame or restricted property — skip */
      }
    }
    return null;
  }

  function resolvePath(from, rel) {
    if (rel.charAt(0) !== ".") return rel;
    var parts = from.split("/");
    parts.pop();
    var segs = rel.split("/");
    for (var i = 0; i < segs.length; i++) {
      var s = segs[i];
      if (s === "." || s === "") continue;
      else if (s === "..") parts.pop();
      else parts.push(s);
    }
    return parts.join("/");
  }

  function jsxAdapter(type, props, key) {
    var R = window.React;
    props = props || {};
    var rest = {};
    for (var k in props) if (k !== "children") rest[k] = props[k];
    if (key !== undefined) rest.key = key;
    var children = props.children;
    if (children === undefined) return R.createElement(type, rest);
    if (Array.isArray(children)) return R.createElement.apply(R, [type, rest].concat(children));
    return R.createElement(type, rest, children);
  }

  async function tryBundle(root) {
    try {
      var r = await fetch(root + "_ds_bundle.js");
      if (!r.ok) return null;
      var txt = await r.text();
      (0, eval)(txt);
      return findNS();
    } catch (e) {
      return null;
    }
  }

  async function compileSources(root) {
    var cache = {};
    var ns = {};
    for (var i = 0; i < FILES.length; i++) {
      var f = FILES[i];
      var resp = await fetch(root + f);
      if (!resp.ok) throw new Error("Missing source: " + f);
      var src = await resp.text();
      var code = window.Babel.transform(src, {
        presets: [["env", { modules: "commonjs" }], ["react", { runtime: "classic" }]],
        filename: f,
      }).code;
      var module = { exports: {} };
      var req = (function (from) {
        return function (path) {
          if (path === "react") return window.React;
          if (path === "react-dom") return window.ReactDOM;
          if (path === "react/jsx-runtime" || path === "react/jsx-dev-runtime") {
            return { Fragment: window.React.Fragment, jsx: jsxAdapter, jsxs: jsxAdapter, jsxDEV: jsxAdapter };
          }
          var key = resolvePath(from, path);
          if (cache[key]) return cache[key];
          throw new Error("Unresolved import " + path + " from " + from);
        };
      })(f);
      new Function("require", "module", "exports", code)(req, module, module.exports);
      cache[f] = module.exports;
      Object.assign(ns, module.exports);
    }
    return ns;
  }

  window.__gfLoadDS = async function (root) {
    root = root || "./";
    var ns = findNS();
    if (ns) return ns;
    ns = await tryBundle(root);
    if (ns) return ns;
    return compileSources(root);
  };

  /* Global require shim: Babel-standalone inline scripts may compile JSX to the
     automatic runtime (require("react/jsx-runtime")). Resolve those from globals. */
  if (typeof window.require === "undefined") {
    window.require = function (p) {
      if (p === "react") return window.React;
      if (p === "react-dom" || p === "react-dom/client") return window.ReactDOM;
      if (p === "react/jsx-runtime" || p === "react/jsx-dev-runtime") {
        return { Fragment: window.React.Fragment, jsx: jsxAdapter, jsxs: jsxAdapter, jsxDEV: jsxAdapter };
      }
      throw new Error("Unknown module: " + p);
    };
  }
  /* Register a classic-runtime react preset for inline text/babel scripts:
     use <script type="text/babel" data-presets="gf-classic">. */
  if (window.Babel && window.Babel.registerPreset) {
    window.Babel.registerPreset("gf-classic", {
      presets: [[window.Babel.availablePresets["react"], { runtime: "classic" }]],
    });
  }
})();
