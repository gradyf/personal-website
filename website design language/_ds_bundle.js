/* @ds-bundle: {"format":3,"namespace":"GrayForresterDesignSystem_11c4d1","components":[{"name":"LedgerRow","sourcePath":"components/content/LedgerRow.jsx"},{"name":"PageHero","sourcePath":"components/content/PageHero.jsx"},{"name":"PostRow","sourcePath":"components/content/PostRow.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"SectionStrip","sourcePath":"components/core/SectionStrip.jsx"},{"name":"Specimen","sourcePath":"components/core/Specimen.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"Ticker","sourcePath":"components/navigation/Ticker.jsx"},{"name":"About","sourcePath":"ui_kits/portfolio-site/About.jsx"},{"name":"Blog","sourcePath":"ui_kits/portfolio-site/Blog.jsx"},{"name":"CaseStudy","sourcePath":"ui_kits/portfolio-site/CaseStudy.jsx"},{"name":"Contact","sourcePath":"ui_kits/portfolio-site/Contact.jsx"},{"name":"Home","sourcePath":"ui_kits/portfolio-site/Home.jsx"},{"name":"Resume","sourcePath":"ui_kits/portfolio-site/Resume.jsx"},{"name":"CATS","sourcePath":"ui_kits/portfolio-site/data.js"},{"name":"PROJECTS","sourcePath":"ui_kits/portfolio-site/data.js"}],"sourceHashes":{"components/content/LedgerRow.jsx":"a3e2c5713456","components/content/PageHero.jsx":"6529e27ae4bc","components/content/PostRow.jsx":"75bdbaf57ed5","components/core/Button.jsx":"43f8fb9248af","components/core/SectionStrip.jsx":"73ea3c2e5c37","components/core/Specimen.jsx":"d64a10cbb9ab","components/core/Tag.jsx":"f1b16ce720b4","components/navigation/SiteFooter.jsx":"8e4ec0c92009","components/navigation/SiteHeader.jsx":"9bbf9962b5cb","components/navigation/Ticker.jsx":"abd832d43868","ds-loader.js":"af9c44ec69dd","image-slot.js":"9309434cb09c","ui_kits/portfolio-site/About.jsx":"7f13c8911d53","ui_kits/portfolio-site/Blog.jsx":"3dbbeb89acee","ui_kits/portfolio-site/CaseStudy.jsx":"e5005cda9e6c","ui_kits/portfolio-site/Contact.jsx":"cbd954cef9c9","ui_kits/portfolio-site/Home.jsx":"6173310d08c8","ui_kits/portfolio-site/Resume.jsx":"e37ca71a32eb","ui_kits/portfolio-site/data.js":"777ba79d399b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GrayForresterDesignSystem_11c4d1 = window.GrayForresterDesignSystem_11c4d1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/PageHero.jsx
try { (() => {
function PageHero({
  title,
  accent,
  lede,
  notes = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 60,
      padding: "52px 0 44px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-hero)",
      fontWeight: 800,
      lineHeight: "var(--lh-display)",
      letterSpacing: "var(--ls-display)",
      maxWidth: 720,
      color: "var(--ink)"
    }
  }, title, " ", accent ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)"
    }
  }, accent) : null), lede ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "22px 0 0",
      maxWidth: 540,
      fontFamily: "var(--font-text)",
      fontSize: "var(--text-body)",
      lineHeight: "var(--lh-body)",
      color: "var(--ink)"
    }
  }, lede) : null), notes.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      fontWeight: "var(--w-meta)",
      lineHeight: 1.8,
      textAlign: "right",
      flex: "none",
      color: "var(--ink)"
    }
  }, notes.map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, "(", n, ")"))) : null);
}
Object.assign(__ds_scope, { PageHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PageHero.jsx", error: String((e && e.message) || e) }); }

// components/content/PostRow.jsx
try { (() => {
function PostRow({
  date,
  title,
  readTime,
  href,
  onClick,
  last = false
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gridTemplateColumns: "110px 1fr 90px",
      alignItems: "baseline",
      gap: 20,
      padding: "16px 4px",
      borderBottom: last ? "1px solid var(--line-strong)" : "1px solid var(--line)",
      background: hover ? "var(--bg-hover)" : "transparent",
      textDecoration: "none",
      cursor: "pointer",
      transition: "background var(--speed) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: "var(--w-meta)",
      letterSpacing: "1px",
      textTransform: "uppercase",
      color: "var(--ink-meta)"
    }
  }, date), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-h3)",
      fontWeight: 600,
      color: hover ? "var(--text-accent)" : "var(--ink)",
      transition: "color var(--speed) var(--ease-out)"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: "var(--w-meta)",
      letterSpacing: "1px",
      textTransform: "uppercase",
      color: "var(--ink-meta)",
      textAlign: "right"
    }
  }, readTime));
}
Object.assign(__ds_scope, { PostRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PostRow.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  children = "See it now",
  href,
  onClick,
  variant = "solid",
  size = "md"
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    display: "inline-block",
    fontFamily: "var(--font-sans)",
    fontWeight: 800,
    fontSize: size === "sm" ? 12 : 13,
    letterSpacing: "1px",
    textTransform: "uppercase",
    lineHeight: 1.2,
    padding: size === "sm" ? "8px 16px" : "12px 22px",
    textDecoration: "none",
    cursor: "pointer",
    borderRadius: "var(--radius)",
    transition: "background var(--speed-fast) var(--ease-out), color var(--speed-fast) var(--ease-out)"
  };
  const variants = {
    solid: hover ? {
      border: "2px solid var(--ink)",
      background: "transparent",
      color: "var(--ink)"
    } : {
      border: "2px solid var(--ink)",
      background: "var(--ink)",
      color: "var(--paper)"
    },
    outline: hover ? {
      border: "2px solid var(--ink)",
      background: "var(--ink)",
      color: "var(--paper)"
    } : {
      border: "2px solid var(--ink)",
      background: "transparent",
      color: "var(--ink)"
    },
    blue: hover ? {
      border: "2px solid var(--blue)",
      background: "transparent",
      color: "var(--blue)"
    } : {
      border: "2px solid var(--blue)",
      background: "var(--blue)",
      color: "var(--paper)"
    }
  };
  const style = {
    ...base,
    ...(variants[variant] || variants.solid)
  };
  const El = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(El, {
    href: href,
    onClick: onClick,
    style: style,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionStrip.jsx
try { (() => {
function SectionStrip({
  left,
  right,
  strong = true
}) {
  const line = strong ? "1px solid var(--line-strong)" : "1px solid var(--line)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: line,
      borderBottom: line,
      padding: "9px 2px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 24,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: "var(--w-meta)",
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: "var(--ink-meta)"
    }
  }, /*#__PURE__*/React.createElement("span", null, left), right ? /*#__PURE__*/React.createElement("span", null, right) : null);
}
Object.assign(__ds_scope, { SectionStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionStrip.jsx", error: String((e && e.message) || e) }); }

// components/core/Specimen.jsx
try { (() => {
const PATTERNS = {
  grid: {
    backgroundColor: "var(--paper-tile)",
    backgroundImage: "var(--pattern-grid)"
  },
  lines: {
    backgroundColor: "var(--paper-tile)",
    backgroundImage: "var(--pattern-lines)"
  },
  rings: {
    backgroundColor: "var(--paper-tile)",
    backgroundImage: "var(--pattern-rings)"
  },
  dots: {
    backgroundColor: "var(--paper-tile)",
    backgroundImage: "var(--pattern-dots)",
    backgroundSize: "var(--pattern-dots-size)"
  },
  solid: {
    backgroundColor: "var(--paper-tint)"
  }
};
function Specimen({
  pattern = "grid",
  height = 86,
  width,
  label,
  index,
  src,
  slotId,
  style
}) {
  const fill = PATTERNS[pattern] || PATTERNS.grid;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height,
      width,
      border: "1px solid var(--line)",
      borderRadius: "var(--radius)",
      overflow: "hidden",
      ...(src ? {
        backgroundColor: "var(--paper-tile)"
      } : fill),
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: label || "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : null, slotId && !src ? React.createElement("image-slot", {
    id: slotId,
    shape: "rect",
    fit: "cover",
    placeholder: typeof label === "string" && label ? "Drop screenshot — " + label : "Drop screenshot",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    }
  }) : null, index ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 8,
      left: 10,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: "var(--w-meta)",
      color: "var(--ink-meta)"
    }
  }, index) : null, label && !src && !slotId ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: "var(--w-meta)",
      letterSpacing: "3px",
      textTransform: "uppercase",
      color: "var(--ink-meta)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Specimen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Specimen.jsx", error: String((e && e.message) || e) }); }

// components/content/LedgerRow.jsx
try { (() => {
function LedgerRow({
  index = "01",
  title,
  meta,
  year,
  pattern = "grid",
  src,
  slotId,
  href,
  onClick,
  last = false
}) {
  const [hover, setHover] = React.useState(false);
  const flip = hover ? "var(--text-accent)" : "var(--ink)";
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gridTemplateColumns: "52px 136px 1fr 70px 36px",
      alignItems: "center",
      gap: 20,
      padding: "var(--row-pad) 4px",
      borderBottom: last ? "1px solid var(--line-strong)" : "1px solid var(--line)",
      background: hover ? "var(--bg-hover)" : "transparent",
      textDecoration: "none",
      cursor: "pointer",
      transition: "background var(--speed) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      fontWeight: "var(--w-meta)",
      color: "var(--text-accent)"
    }
  }, index), /*#__PURE__*/React.createElement(__ds_scope.Specimen, {
    pattern: pattern,
    src: src,
    slotId: slotId,
    height: "var(--thumb-h)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-h2)",
      fontWeight: 700,
      letterSpacing: "var(--ls-title)",
      color: flip,
      transition: "color var(--speed) var(--ease-out)"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: "var(--w-meta)",
      letterSpacing: "1px",
      textTransform: "uppercase",
      color: "var(--ink-meta)"
    }
  }, meta)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--ink-meta)"
    }
  }, year), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      textAlign: "right",
      fontFamily: "var(--font-sans)",
      color: flip,
      transition: "color var(--speed) var(--ease-out)"
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { LedgerRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/LedgerRow.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  active = false,
  onClick,
  href
}) {
  const [hover, setHover] = React.useState(false);
  const hot = active || hover;
  const style = {
    display: "inline-block",
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    fontWeight: "var(--w-meta)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    lineHeight: 1.2,
    padding: "5px 10px",
    textDecoration: "none",
    cursor: onClick || href ? "pointer" : "default",
    background: "transparent",
    border: hot ? "1px solid var(--blue)" : "1px solid var(--line)",
    color: hot ? "var(--blue)" : "var(--ink-meta)",
    borderRadius: "var(--radius)",
    transition: "border-color var(--speed-fast) var(--ease-out), color var(--speed-fast) var(--ease-out)"
  };
  const El = href ? "a" : "span";
  return /*#__PURE__*/React.createElement(El, {
    href: href,
    onClick: onClick,
    style: style,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function SiteFooter({
  left = "© 2026 GRAY FORRESTER",
  right = "DROP ME A LINE",
  onRight
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--line-strong)",
      padding: "10px 0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 24,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: "var(--w-meta)",
      letterSpacing: "1px",
      textTransform: "uppercase",
      color: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("span", null, left), onRight ? /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onRight();
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      color: hover ? "var(--text-accent)" : "var(--ink)",
      textDecoration: hover ? "underline" : "none",
      textUnderlineOffset: 3,
      transition: "color var(--speed-fast) var(--ease-out)"
    }
  }, right) : /*#__PURE__*/React.createElement("span", null, right));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
const LINKS = [{
  key: "index",
  label: "Index."
}, {
  key: "about",
  label: "About."
}, {
  key: "cv",
  label: "CV."
}, {
  key: "blog",
  label: "Blog."
}, {
  key: "contact",
  label: "Contact."
}];
function NavLink({
  label,
  active,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      if (onClick) onClick();
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-nav)",
      color: active || hover ? "var(--text-accent)" : "var(--ink)",
      textDecoration: active ? "underline" : "none",
      textUnderlineOffset: 3,
      transition: "color var(--speed-fast) var(--ease-out)"
    }
  }, label);
}
function SiteHeader({
  active = "index",
  onNav,
  name = "Gray Forrester",
  links
}) {
  const items = links || LINKS;
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 24,
      padding: "22px 0",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      if (onNav) onNav("index");
    },
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 800,
      fontSize: 18,
      letterSpacing: ".5px",
      textTransform: "uppercase",
      color: "var(--ink)",
      textDecoration: "none"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28
    }
  }, items.map(l => /*#__PURE__*/React.createElement(NavLink, {
    key: l.key,
    label: l.label,
    active: active === l.key,
    onClick: () => onNav && onNav(l.key)
  }))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Ticker.jsx
try { (() => {
function Ticker({
  text = "GRAY FORRESTER — PORTFOLIO OF IDEAS, PROJECTS & OTHER EVIDENCE — EST. 2026",
  tone = "ink",
  duration
}) {
  const color = tone === "blue" ? "var(--blue)" : "var(--ink)";
  const border = tone === "blue" ? "1px solid var(--blue)" : "1px solid var(--line-strong)";
  const phrase = (text + " — ").repeat(2);
  const anim = duration ? `gf-marquee ${duration}s linear infinite` : "gf-marquee var(--ticker-duration) linear infinite";
  const span = {
    paddingRight: 48,
    whiteSpace: "nowrap"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: border,
      borderBottom: border,
      overflow: "hidden",
      padding: "8px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      width: "max-content",
      animation: anim,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: "var(--w-meta)",
      letterSpacing: "1.5px",
      textTransform: "uppercase",
      color
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: span
  }, phrase), /*#__PURE__*/React.createElement("span", {
    style: span
  }, phrase)));
}
Object.assign(__ds_scope, { Ticker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Ticker.jsx", error: String((e && e.message) || e) }); }

// ds-loader.js
try { (() => {
/* ds-loader.js — resolves the component namespace for cards & UI kits.
   1. If a compiled _ds_bundle.js namespace is already on window, use it.
   2. Else try fetching _ds_bundle.js (quietly — no 404 script tag).
   3. Else fetch + Babel-transform the .jsx sources directly (dev fallback).
   Usage (after React, ReactDOM and Babel standalone are loaded):
     __gfLoadDS("../../").then(NS => { ... }) */
(function () {
  var FILES = ["components/core/Specimen.jsx", "components/core/Button.jsx", "components/core/Tag.jsx", "components/core/SectionStrip.jsx", "components/content/PageHero.jsx", "components/content/LedgerRow.jsx", "components/content/PostRow.jsx", "components/navigation/SiteHeader.jsx", "components/navigation/Ticker.jsx", "components/navigation/SiteFooter.jsx", "ui_kits/portfolio-site/data.js", "ui_kits/portfolio-site/Home.jsx", "ui_kits/portfolio-site/CaseStudy.jsx", "ui_kits/portfolio-site/About.jsx", "ui_kits/portfolio-site/Resume.jsx", "ui_kits/portfolio-site/Blog.jsx", "ui_kits/portfolio-site/Contact.jsx"];
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
      if (s === "." || s === "") continue;else if (s === "..") parts.pop();else parts.push(s);
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
        presets: [["env", {
          modules: "commonjs"
        }], ["react", {
          runtime: "classic"
        }]],
        filename: f
      }).code;
      var module = {
        exports: {}
      };
      var req = function (from) {
        return function (path) {
          if (path === "react") return window.React;
          if (path === "react-dom") return window.ReactDOM;
          if (path === "react/jsx-runtime" || path === "react/jsx-dev-runtime") {
            return {
              Fragment: window.React.Fragment,
              jsx: jsxAdapter,
              jsxs: jsxAdapter,
              jsxDEV: jsxAdapter
            };
          }
          var key = resolvePath(from, path);
          if (cache[key]) return cache[key];
          throw new Error("Unresolved import " + path + " from " + from);
        };
      }(f);
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
        return {
          Fragment: window.React.Fragment,
          jsx: jsxAdapter,
          jsxs: jsxAdapter,
          jsxDEV: jsxAdapter
        };
      }
      throw new Error("Unknown module: " + p);
    };
  }
  /* Register a classic-runtime react preset for inline text/babel scripts:
     use <script type="text/babel" data-presets="gf-classic">. */
  if (window.Babel && window.Babel.registerPreset) {
    window.Babel.registerPreset("gf-classic", {
      presets: [[window.Babel.availablePresets["react"], {
        runtime: "classic"
      }]]
    });
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ds-loader.js", error: String((e && e.message) || e) }); }

// image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/About.jsx
try { (() => {
function About({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.PageHero, {
    title: "Hello \u2014 I\u2019m",
    accent: "Gray.",
    lede: "Product owner / forward-deployed engineer by day, CS student by night. I like problems with feedback loops: agents, controllers, catalogs, and the occasional rabbit hole.",
    notes: ["NOW — PO / FDE @ DELOITTE", "ALSO — CS STUDENT", "INTO — RL · ROBOTICS · MUSIC"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      paddingBottom: 44
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 560,
      fontFamily: "var(--font-text)",
      fontSize: 15,
      lineHeight: 1.7,
      color: "var(--ink)"
    }
  }, "By day I\u2019m a product owner and forward-deployed engineer at Deloitte \u2014 ConvergeHealth\u2019s software development arm \u2014 building an agentic platform for healthcare revenue cycle. By night, this site: coursework that got out of hand, and personal tools made with Claude Code that solved a real problem in my apartment (usually the CD shelf)."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 560,
      fontFamily: "var(--font-text)",
      fontSize: 15,
      lineHeight: 1.7,
      color: "var(--ink)"
    }
  }, "I care about work that can be inspected: plots over adjectives, demos over decks. School projects respect the honor code \u2014 source available upon request, happily walked through.")), /*#__PURE__*/React.createElement(__ds_scope.SectionStrip, {
    left: "CONTACT",
    right: "ONE INBOX, CHECKED OFTEN"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 40,
      padding: "24px 0 44px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      fontFamily: "var(--font-mono)",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "var(--text-accent)"
    }
  }, "hello@grayforrester.com"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "var(--text-accent)"
    }
  }, "GitHub \u2197"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "var(--text-accent)"
    }
  }, "LinkedIn \u2197")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: 13.5,
      color: "var(--ink-meta)"
    }
  }, "Recruiters: the CV is one tab over.")));
}
Object.assign(__ds_scope, { About });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/Blog.jsx
try { (() => {
function Blog({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.PageHero, {
    title: "Writing,",
    accent: "eventually.",
    lede: "The blog opens when there\u2019s something worth reading. Until then, the projects will have to speak \u2014 they\u2019ve been coached."
  }), /*#__PURE__*/React.createElement(__ds_scope.SectionStrip, {
    left: "POSTS",
    right: "00 \u2014 RESERVED"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "24px 0 16px",
      border: "2px dashed var(--line)",
      minHeight: 180,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: "var(--w-meta)",
      letterSpacing: "2px",
      color: "var(--ink-meta)",
      textAlign: "center",
      lineHeight: 2
    }
  }, "SPACE RESERVED", /*#__PURE__*/React.createElement("br", null), "\u2014", /*#__PURE__*/React.createElement("br", null), "FIRST POST")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      fontWeight: "var(--w-meta)",
      letterSpacing: "2px",
      color: "var(--ink-meta)",
      paddingBottom: 44
    }
  }, "RSS WILL EXIST. PROMISE."));
}
Object.assign(__ds_scope, { Blog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/Blog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/Contact.jsx
try { (() => {
function BigLink({
  children
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 26,
      color: "var(--text-accent)",
      textDecoration: hover ? "underline" : "none",
      textUnderlineOffset: 5
    }
  }, children);
}
function Contact({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.PageHero, {
    title: "Say",
    accent: "hello.",
    lede: "One inbox, checked often. Recruiters, collaborators, and people with strong opinions about CD shelving all welcome."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: "8px 0 56px"
    }
  }, /*#__PURE__*/React.createElement(BigLink, null, "hello@grayforrester.com"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      fontFamily: "var(--font-mono)",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "var(--ink)"
    }
  }, "GitHub \u2197"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "var(--ink)"
    }
  }, "LinkedIn \u2197")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      fontWeight: "var(--w-meta)",
      letterSpacing: "2px",
      color: "var(--ink-meta)"
    }
  }, "ADDRESS IS A PLACEHOLDER \u2014 POINT IT AT THE REAL INBOX.")));
}
Object.assign(__ds_scope, { Contact });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/Resume.jsx
try { (() => {
function CVRow({
  span,
  title,
  sub,
  right,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "150px 1fr 90px",
      gap: 20,
      alignItems: "baseline",
      padding: "16px 4px",
      borderBottom: last ? "1px solid var(--line-strong)" : "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: "var(--w-meta)",
      letterSpacing: "1px",
      color: "var(--ink-meta)"
    }
  }, span), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 18,
      fontWeight: 600,
      color: "var(--ink)"
    }
  }, title), sub ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: "var(--w-meta)",
      letterSpacing: "1px",
      textTransform: "uppercase",
      color: "var(--ink-meta)"
    }
  }, sub) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: "var(--w-meta)",
      color: "var(--ink-meta)",
      textAlign: "right"
    }
  }, right));
}
function Resume({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PageHero, {
    title: "Curriculum",
    accent: "vitae.",
    lede: "The formal version. Real dates, schools and employers go here \u2014 this page is the template."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 0 44px",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline"
  }, "Download PDF"))), /*#__PURE__*/React.createElement(__ds_scope.SectionStrip, {
    left: "EDUCATION"
  }), /*#__PURE__*/React.createElement(CVRow, {
    span: "2024 \u2192 NOW",
    title: "M.S. Computer Science \u2014 [University]",
    sub: "COURSEWORK: RL \xB7 ROBOTICS \xB7 MOBILE DEV",
    right: "[GPA]"
  }), /*#__PURE__*/React.createElement(CVRow, {
    span: "20XX \u2192 2024",
    title: "B.S. \u2014 [University]",
    sub: "[MAJOR \xB7 HONORS]",
    right: "",
    last: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 28
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.SectionStrip, {
    left: "EXPERIENCE"
  }), /*#__PURE__*/React.createElement(CVRow, {
    span: "NOW",
    title: "Product Owner / FDE \u2014 Deloitte, ConvergeHealth",
    sub: "AGENTIC PLATFORM \xB7 HEALTHCARE REVENUE CYCLE",
    right: "[CITY]"
  }), /*#__PURE__*/React.createElement(CVRow, {
    span: "[DATES]",
    title: "[Role] \u2014 [Company]",
    sub: "REPLACE WITH TWO REAL BULLETS, MAX",
    right: "[CITY]",
    last: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 28
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.SectionStrip, {
    left: "SKILLS",
    right: "TOOLS I ACTUALLY USE"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      padding: "18px 0 40px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, null, "Python"), /*#__PURE__*/React.createElement(__ds_scope.Tag, null, "NumPy"), /*#__PURE__*/React.createElement(__ds_scope.Tag, null, "Kotlin"), /*#__PURE__*/React.createElement(__ds_scope.Tag, null, "Android"), /*#__PURE__*/React.createElement(__ds_scope.Tag, null, "C++"), /*#__PURE__*/React.createElement(__ds_scope.Tag, null, "SQL"), /*#__PURE__*/React.createElement(__ds_scope.Tag, null, "Git"), /*#__PURE__*/React.createElement(__ds_scope.Tag, null, "Claude Code")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      fontWeight: "var(--w-meta)",
      letterSpacing: "2px",
      color: "var(--ink-meta)",
      paddingBottom: 44
    }
  }, "TEMPLATE \u2014 BRACKETED FIELDS AWAIT REAL FACTS."));
}
Object.assign(__ds_scope, { Resume });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/Resume.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/data.js
try { (() => {
// Seed project data for grayforrester.com mocks.
// Years, stacks and links are PLACEHOLDERS — confirm with Gray before shipping.

const CATS = [{
  key: "all",
  label: "All"
}, {
  key: "rl",
  label: "RL"
}, {
  key: "robotics",
  label: "Robotics"
}, {
  key: "mobile",
  label: "Mobile"
}, {
  key: "music",
  label: "Music"
}, {
  key: "web",
  label: "Web"
}];
const PROJECTS = [{
  id: "q-learner",
  index: "01",
  title: "Q-Learner",
  meta: "REINFORCEMENT LEARNING · PYTHON",
  year: "2025",
  pattern: "grid",
  cat: "rl",
  origin: "SCHOOL",
  facts: ["PYTHON + NUMPY", "ε-GREEDY POLICY", "REWARD SHAPING", "VALUE HEATMAP"],
  body: ["A tabular Q-learning agent dropped into a 2D gridworld with nothing but a reward signal and an ε-greedy disposition. It wanders, it bumps into walls, and — after enough episodes — it stops embarrassing itself.", "The interesting part was reward shaping: small tweaks to the signal changed the personality of the policy more than any hyperparameter. Convergence plots and a value heatmap document the journey from random walk to competence."]
}, {
  id: "pid-control",
  index: "02",
  title: "PID Control",
  meta: "SIMULATED ROBOTICS · CONTROL LOOPS",
  year: "2025",
  pattern: "lines",
  cat: "robotics",
  origin: "SCHOOL",
  facts: ["SIMULATED ROBOTICS", "KP · KI · KD", "STEP RESPONSE", "TELEMETRY PLOTS"],
  body: ["A simulated robotics control loop chasing one stubborn setpoint. Proportional gets you close, integral remembers the error you'd rather forget, and derivative keeps the whole thing from oscillating into the wall.", "Tuning Kp, Ki and Kd by hand builds a respect for controls engineers that no lecture can. Telemetry shows overshoot before and after — the 'after' is the whole point."]
}, {
  id: "hiring-app",
  index: "03",
  title: "Hiring App",
  meta: "ANDROID · KOTLIN",
  year: "2024",
  pattern: "solid",
  cat: "mobile",
  origin: "SCHOOL",
  facts: ["ANDROID STUDIO", "KOTLIN", "LISTS + STATE", "REAL UX DECISIONS"],
  body: ["An Android app for browsing roles and tracking applications, built in Kotlin with Android Studio. Listings, saved positions, application state — interviews as data.", "Most of the work was unglamorous and therefore educational: navigation state, list performance, and making a form feel like less of a form."]
}, {
  id: "cd-cataloger",
  index: "04",
  title: "CD Cataloger",
  meta: "MUSIC EXPLORER · METADATA",
  year: "2026",
  pattern: "rings",
  cat: "music",
  origin: "PERSONAL",
  facts: ["METADATA + SEARCH", "SQLITE", "SHELF LOGIC", "CLAUDE CODE"],
  body: ["A cataloger and explorer for a physical CD collection. Rip the metadata, index the shelf, then wander the collection by year, label, or mood instead of alphabetical guilt.", "Built after hours with Claude Code. The schema outlived three redesigns; the search bar is the real MVP."]
}, {
  id: "rabbit-hole",
  index: "05",
  title: "Rabbit Hole",
  meta: "WIKIPEDIA API · TRIVIA",
  year: "2026",
  pattern: "dots",
  cat: "web",
  origin: "PERSONAL",
  facts: ["WIKIPEDIA API", "GRAPH HOPS", "TRIVIA MODE", "ONE MORE CLICK"],
  body: ["A Wikipedia toy that turns aimless clicking into a game — follow links hop by hop, then answer trivia generated from the path you took.", "The graph is the fun part: watching how fast any topic collapses toward philosophy, wars, or 19th-century chemists. Built with the Wikipedia API and restraint."]
}];
Object.assign(__ds_scope, { CATS, PROJECTS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/data.js", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/CaseStudy.jsx
try { (() => {
function Crumb({
  onBack
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onBack && onBack();
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: hover ? "var(--text-accent)" : "var(--ink)",
      textDecoration: hover ? "underline" : "none",
      textUnderlineOffset: 3,
      transition: "color var(--speed-fast) var(--ease-out)"
    }
  }, "\u2190 Index");
}
function CaseStudy({
  id = "q-learner",
  onOpen,
  onBack
}) {
  const i = Math.max(0, __ds_scope.PROJECTS.findIndex(p => p.id === id));
  const p = __ds_scope.PROJECTS[i];
  const next = __ds_scope.PROJECTS[(i + 1) % __ds_scope.PROJECTS.length];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      padding: "26px 0 0"
    }
  }, /*#__PURE__*/React.createElement(Crumb, {
    onBack: onBack
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: "var(--w-meta)",
      letterSpacing: "1px",
      color: "var(--ink-meta)"
    }
  }, "GF-", p.index, " \xB7 ", p.origin, " \u2014 ", p.year)), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "20px 0 10px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-hero)",
      fontWeight: 800,
      lineHeight: "var(--lh-display)",
      letterSpacing: "var(--ls-display)",
      color: "var(--ink)"
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: "var(--w-meta)",
      letterSpacing: "1px",
      color: "var(--ink-meta)"
    }
  }, p.meta), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Specimen, {
    pattern: p.pattern,
    height: 380,
    label: p.title,
    index: p.index,
    slotId: "shot-" + p.id
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      fontWeight: "var(--w-meta)",
      letterSpacing: "2px",
      color: "var(--ink-meta)"
    }
  }, "FIG. ", p.index, " \u2014 DROP A REAL SCREENSHOT ON THE TILE. THE PATTERN STANDS IN.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 300px",
      gap: 60,
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, p.body.map((para, k) => /*#__PURE__*/React.createElement("p", {
    key: k,
    style: {
      margin: 0,
      maxWidth: 560,
      fontFamily: "var(--font-text)",
      fontSize: 15,
      lineHeight: 1.7,
      color: "var(--ink)"
    }
  }, para))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      fontWeight: "var(--w-meta)",
      letterSpacing: "2px",
      color: "var(--ink-meta)",
      marginBottom: 10
    }
  }, "INCLUDING"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      lineHeight: 2,
      color: "var(--ink)"
    }
  }, p.facts.map((f, k) => /*#__PURE__*/React.createElement("li", {
    key: k
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, p.origin === "SCHOOL" ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: "var(--w-meta)",
      letterSpacing: "1px",
      color: "var(--ink-meta)",
      lineHeight: 1.9,
      borderTop: "1px solid var(--line)",
      paddingTop: 14
    }
  }, "SOURCE \u2014 AVAILABLE UPON REQUEST.", /*#__PURE__*/React.createElement("br", null), "COURSEWORK FALLS UNDER THE HONOR CODE.") : /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline"
  }, "View source \u2197")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionStrip, {
    left: "NEXT",
    right: `GF-${next.index}`
  }), /*#__PURE__*/React.createElement(__ds_scope.LedgerRow, {
    index: next.index,
    title: next.title,
    meta: next.meta,
    year: next.year,
    pattern: next.pattern,
    last: true,
    onClick: () => onOpen && onOpen(next.id)
  })));
}
Object.assign(__ds_scope, { CaseStudy });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio-site/Home.jsx
try { (() => {
function Home({
  onOpen,
  onNav
}) {
  const [filter, setFilter] = React.useState("all");
  const rows = __ds_scope.PROJECTS.filter(p => filter === "all" || p.cat === filter);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.PageHero, {
    title: "Projects, concepts &",
    accent: "other evidence.",
    lede: "Agents that learn, controllers that settle, small tools for large rabbit holes. Built at school and after hours with Claude Code.",
    notes: ["PORTFOLIO, V1", "LIGHT ONLY", "BLOG: SOON-ISH"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      padding: "0 0 14px"
    }
  }, __ds_scope.CATS.map(c => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: c.key,
    active: filter === c.key,
    onClick: () => setFilter(c.key)
  }, c.label))), /*#__PURE__*/React.createElement(__ds_scope.SectionStrip, {
    left: "SELECTED WORK",
    right: `${String(rows.length).padStart(2, "0")} ENTRIES — 2024 → NOW`
  }), /*#__PURE__*/React.createElement("div", null, rows.map((p, i) => /*#__PURE__*/React.createElement(__ds_scope.LedgerRow, {
    key: p.id,
    index: p.index,
    title: p.title,
    meta: p.meta,
    year: p.year,
    pattern: p.pattern,
    slotId: "shot-" + p.id,
    last: i === rows.length - 1,
    onClick: () => onOpen && onOpen(p.id)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 60,
      padding: "36px 0 44px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: "var(--w-meta)",
      lineHeight: 2,
      color: "var(--ink)"
    }
  }, "ELSEWHERE:", " ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "var(--text-accent)"
    }
  }, "GitHub \u2197"), " ", "\xB7", " ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "var(--text-accent)"
    }
  }, "LinkedIn \u2197"), " ", "\xB7", " ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav("contact");
    },
    style: {
      color: "var(--text-accent)"
    }
  }, "hello@grayforrester.com")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 400,
      fontFamily: "var(--font-text)",
      fontSize: 13.5,
      lineHeight: 1.6,
      color: "var(--ink-meta)",
      textAlign: "right"
    }
  }, "The blog opens when there\u2019s something worth reading. Soon-ish.")));
}
Object.assign(__ds_scope, { Home });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio-site/Home.jsx", error: String((e && e.message) || e) }); }

__ds_ns.LedgerRow = __ds_scope.LedgerRow;

__ds_ns.PageHero = __ds_scope.PageHero;

__ds_ns.PostRow = __ds_scope.PostRow;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.SectionStrip = __ds_scope.SectionStrip;

__ds_ns.Specimen = __ds_scope.Specimen;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Ticker = __ds_scope.Ticker;

__ds_ns.About = __ds_scope.About;

__ds_ns.Blog = __ds_scope.Blog;

__ds_ns.CaseStudy = __ds_scope.CaseStudy;

__ds_ns.Contact = __ds_scope.Contact;

__ds_ns.Home = __ds_scope.Home;

__ds_ns.Resume = __ds_scope.Resume;

__ds_ns.CATS = __ds_scope.CATS;

__ds_ns.PROJECTS = __ds_scope.PROJECTS;

})();
