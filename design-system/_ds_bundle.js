/* @ds-bundle: {"format":3,"namespace":"NestiaDesignSystem_9e0aed","components":[{"name":"MenuCard","sourcePath":"components/content/MenuCard.jsx"},{"name":"PriceTag","sourcePath":"components/content/PriceTag.jsx"},{"name":"SectionHeader","sourcePath":"components/content/SectionHeader.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/content/MenuCard.jsx":"9fb4f2db558e","components/content/PriceTag.jsx":"eb41c1fd9975","components/content/SectionHeader.jsx":"148380370d16","components/core/Badge.jsx":"a1ed42aa48ec","components/core/Button.jsx":"7cdf99a6377b","components/core/Eyebrow.jsx":"f13ab8479ab8","components/core/Logo.jsx":"fa185f1c41d6","components/forms/Input.jsx":"c794b76d0249","components/forms/Textarea.jsx":"12520789251f","ui_kits/booking/components.jsx":"b70962b63aa3","ui_kits/website/components.jsx":"82c95180aad0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NestiaDesignSystem_9e0aed = window.NestiaDesignSystem_9e0aed || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/PriceTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Price display in the flyer style: struck regular price → discounted price,
 * with a (税込) note. The "now" price can be emphasised in petal rouge.
 */
function PriceTag({
  duration = null,
  regular = null,
  now,
  note = '税込',
  emphasis = 'plum',
  size = 'md',
  ...rest
}) {
  const sizes = {
    sm: {
      now: '18px',
      reg: '13px',
      meta: '12px'
    },
    md: {
      now: '24px',
      reg: '15px',
      meta: '13px'
    },
    lg: {
      now: '32px',
      reg: '17px',
      meta: '14px'
    }
  };
  const s = sizes[size];
  const nowColor = emphasis === 'accent' ? 'var(--petal-accessible)' : 'var(--plum)';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "n-price",
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '10px',
      flexWrap: 'wrap',
      fontFamily: 'var(--font-serif-jp)',
      ...rest.style
    }
  }, rest), duration && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: s.meta,
      color: 'var(--text-muted)',
      letterSpacing: '0.04em',
      whiteSpace: 'nowrap'
    }
  }, duration), regular && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: s.reg,
      color: 'var(--price-strike)',
      textDecoration: 'line-through',
      fontWeight: 'var(--fw-regular)',
      whiteSpace: 'nowrap'
    }
  }, regular), regular && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: s.reg
    }
  }, "\u2192"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: s.now,
      color: nowColor,
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }
  }, now), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: s.meta,
      color: 'var(--text-muted)'
    }
  }, "\uFF08", note, "\uFF09"));
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small status / category label. Soft almond by default,
 * plum for the menu-name pills seen on the flyer, accent (accessible pink) for urgency.
 */
function Badge({
  children,
  variant = 'soft',
  size = 'md',
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '3px 10px',
      fontSize: '11px'
    },
    md: {
      padding: '5px 14px',
      fontSize: '12px'
    },
    lg: {
      padding: '7px 18px',
      fontSize: '13px'
    }
  };
  const variants = {
    soft: {
      background: 'var(--almond-200)',
      color: 'var(--plum-700)'
    },
    plum: {
      background: 'var(--plum)',
      color: 'var(--cream)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--plum)',
      boxShadow: 'inset 0 0 0 1px var(--rose)'
    },
    accent: {
      background: 'var(--petal-soft)',
      color: 'var(--petal-accessible-700)',
      boxShadow: 'inset 0 0 0 1px var(--petal-accessible)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `n-badge n-badge--${variant}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: '0.08em',
      borderRadius: 'var(--r-pill)',
      lineHeight: 1.3,
      whiteSpace: 'nowrap',
      ...sizes[size],
      ...variants[variant]
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/MenuCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The signature nestia. menu item card — a rounded photo on the left, a plum
 * name pill, the discounted price, and a description. Mirrors the flyer layout.
 * `image` is any node (an <img>, an image-slot, or left blank for a placeholder).
 */
function MenuCard({
  name,
  duration = null,
  regular = null,
  now,
  description,
  image = null,
  rank = null,
  emphasis = 'plum',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    className: "n-menu-card",
    style: {
      display: 'grid',
      gridTemplateColumns: '136px 1fr',
      gap: '22px',
      alignItems: 'start',
      background: 'var(--surface-card)',
      border: '1px solid var(--line-soft)',
      borderRadius: 'var(--r-lg)',
      padding: '20px',
      boxShadow: 'var(--shadow-sm)',
      ...rest.style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 136,
      height: 136,
      borderRadius: 'var(--r-md)',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, var(--almond-200), var(--dust))',
      flex: '0 0 auto'
    }
  }, image, rank && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10,
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '13px',
      letterSpacing: '0.04em',
      color: 'var(--cream)',
      background: 'rgba(119,82,78,0.78)',
      padding: '2px 10px',
      borderRadius: 'var(--r-pill)',
      backdropFilter: 'blur(2px)'
    }
  }, rank)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "plum",
    size: "md"
  }, name)), /*#__PURE__*/React.createElement(__ds_scope.PriceTag, {
    duration: duration,
    regular: regular,
    now: now,
    emphasis: emphasis,
    size: "md"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-body)',
      margin: 0
    }
  }, description)));
}
Object.assign(__ds_scope, { MenuCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/MenuCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * nestia. primary action button.
 * Primary = Petal Rouge fill + white text. Accent = petal knockout (white fill,
 * petal text + border) for emphasis. Outline/ghost = plum for secondary.
 * Pill-shaped, generous padding, calm hover.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  as = 'button',
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '9px 18px',
      fontSize: '13px'
    },
    md: {
      padding: '13px 28px',
      fontSize: '14px'
    },
    lg: {
      padding: '17px 38px',
      fontSize: '15px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--cta-bg)',
      color: 'var(--cta-text)',
      border: '1px solid transparent'
    },
    accent: {
      background: 'var(--white)',
      color: 'var(--accent-text)',
      border: '1px solid var(--accent-text)'
    },
    outline: {
      background: 'var(--white)',
      color: 'var(--plum)',
      border: '1px solid var(--plum)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--plum)',
      border: '1px solid transparent'
    }
  };

  // Disabled / 満席 — low-saturation taupe, kept legible (no opacity wash)
  const disabledStyle = {
    background: 'var(--dust)',
    color: 'var(--ink-soft)',
    border: '1px solid transparent'
  };
  const style = {
    display: block ? 'flex' : 'inline-flex',
    width: block ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-medium)',
    letterSpacing: '0.04em',
    borderRadius: 'var(--r-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: 1,
    transition: 'background var(--dur) var(--ease), color var(--dur) var(--ease), transform var(--dur-fast) var(--ease), box-shadow var(--dur) var(--ease)',
    lineHeight: 1.2,
    textDecoration: 'none',
    ...sizes[size],
    ...(disabled ? disabledStyle : variants[variant])
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `n-btn n-btn--${variant}`,
    style: style,
    disabled: as === 'button' ? disabled : undefined
  }, rest), iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Wide-tracked, uppercase micro-label — the signature nestia. Latin device.
 * Optionally prefixed with a small petal dot.
 */
function Eyebrow({
  children,
  dot = false,
  tone = 'muted',
  ...rest
}) {
  const colors = {
    muted: 'var(--text-muted)',
    plum: 'var(--plum)',
    cream: 'var(--text-on-dark-muted)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "n-eyebrow",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: colors[tone] || colors.muted,
      ...rest.style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--accent)',
      flex: '0 0 auto'
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Centered section header: optional eyebrow, a display/JP title, optional
 * lead line, and a tiny petal divider. The brand's standard section opener.
 */
function SectionHeader({
  eyebrow = null,
  title,
  lead = null,
  align = 'center',
  titleFont = 'serif-jp',
  divider = true,
  tone = 'light',
  ...rest
}) {
  const titleFamily = titleFont === 'display' ? 'var(--font-display)' : 'var(--font-serif-jp)';
  const isDark = tone === 'dark';
  return /*#__PURE__*/React.createElement("header", _extends({
    className: "n-section-header",
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      gap: '14px',
      ...rest.style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    dot: true,
    tone: isDark ? 'cream' : 'muted'
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: titleFamily,
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-h2)',
      lineHeight: 'var(--lh-snug)',
      letterSpacing: titleFont === 'display' ? 'var(--ls-display)' : 'var(--ls-jp)',
      color: isDark ? 'var(--cream)' : 'var(--text-strong)',
      margin: 0
    }
  }, title), divider && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: isDark ? 'var(--taupe)' : 'var(--border-strong)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: isDark ? 'var(--taupe)' : 'var(--border-strong)'
    }
  })), lead && /*#__PURE__*/React.createElement("p", {
    className: "n-jp-serif",
    style: {
      fontFamily: 'var(--font-serif-jp)',
      fontSize: 'var(--fs-lead)',
      lineHeight: 'var(--lh-relaxed)',
      color: isDark ? 'var(--text-on-dark-muted)' : 'var(--text-body)',
      maxWidth: '46ch',
      margin: 0
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The nestia. wordmark lockup. Cormorant Garamond with the petal period.
 * `tone` controls light/dark; `showTagline` toggles "relaxation salon".
 */
function Logo({
  tone = 'plum',
  size = 40,
  showTagline = true,
  ...rest
}) {
  const colors = {
    plum: {
      mark: 'var(--plum)',
      tag: 'var(--rose)'
    },
    cream: {
      mark: 'var(--cream)',
      tag: 'var(--almond)'
    },
    ink: {
      mark: 'var(--ink)',
      tag: 'var(--text-muted)'
    }
  };
  const c = colors[tone] || colors.plum;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "n-logo",
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      lineHeight: 1,
      ...rest.style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-medium)',
      fontSize: `${size}px`,
      letterSpacing: 'var(--ls-wordmark)',
      color: c.mark
    }
  }, "nestia", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, ".")), showTagline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 'var(--fw-regular)',
      fontSize: `${Math.round(size * 0.33)}px`,
      letterSpacing: '0.08em',
      color: c.tag,
      marginTop: `${Math.round(size * 0.06)}px`,
      whiteSpace: 'nowrap'
    }
  }, "relaxation salon"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with floating-feel label. Soft cream field, almond border,
 * petal focus ring. Use for booking / contact forms.
 */
function Input({
  label = null,
  hint = null,
  error = null,
  id,
  type = 'text',
  ...rest
}) {
  const inputId = id || (label ? `n-input-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = error ? 'var(--petal-deep)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    className: "n-field",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-strong)',
      letterSpacing: '0.04em'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    className: "n-input",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--ink)',
      background: 'var(--surface-soft)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--r-md)',
      padding: '13px 16px',
      outline: 'none',
      width: '100%',
      transition: 'border-color var(--dur) var(--ease), box-shadow var(--dur) var(--ease), background var(--dur) var(--ease)'
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--accent)';
      e.target.style.boxShadow = 'var(--shadow-focus)';
      e.target.style.background = 'var(--white)';
    },
    onBlur: e => {
      e.target.style.borderColor = borderColor;
      e.target.style.boxShadow = 'none';
      e.target.style.background = 'var(--surface-soft)';
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: error ? 'var(--petal-deep)' : 'var(--text-muted)',
      letterSpacing: '0.03em'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Multiline text area — same field styling as Input. For requests / notes.
 */
function Textarea({
  label = null,
  hint = null,
  error = null,
  id,
  rows = 4,
  ...rest
}) {
  const inputId = id || (label ? `n-textarea-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = error ? 'var(--petal-deep)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    className: "n-field",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-strong)',
      letterSpacing: '0.04em'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    className: "n-textarea",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--ink)',
      background: 'var(--surface-soft)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--r-md)',
      padding: '13px 16px',
      outline: 'none',
      width: '100%',
      resize: 'vertical',
      transition: 'border-color var(--dur) var(--ease), box-shadow var(--dur) var(--ease), background var(--dur) var(--ease)'
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--accent)';
      e.target.style.boxShadow = 'var(--shadow-focus)';
      e.target.style.background = 'var(--white)';
    },
    onBlur: e => {
      e.target.style.borderColor = borderColor;
      e.target.style.boxShadow = 'none';
      e.target.style.background = 'var(--surface-soft)';
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: error ? 'var(--petal-deep)' : 'var(--text-muted)',
      letterSpacing: '0.03em'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/booking/components.jsx
try { (() => {
/* nestia. — Mobile booking UI kit
   A phone-framed flow: menu list → detail → reservation → confirmed.
   Reads primitives from window.NestiaDesignSystem_9e0aed. */

const {
  useState
} = React;
const DSb = window.NestiaDesignSystem_9e0aed;
const {
  Logo,
  Button,
  Badge,
  Eyebrow,
  PriceTag,
  Input,
  Textarea
} = DSb;
const MENUS = [{
  id: 'order',
  rank: 'No.1',
  name: 'オーダーメイドケア',
  duration: '90分',
  regular: '12,800円',
  now: '10,800円',
  description: 'アロマ・ボディ・ヘッド・リフレを自由に組み合わせ。その日の状態に合わせて施術内容を調整します。'
}, {
  id: 'facial',
  name: '毛穴洗浄 × 水光フェイシャル',
  duration: '60分',
  regular: '9,400円',
  now: '7,800円',
  emphasis: 'accent',
  description: 'スチームと泥パックで毛穴を洗浄。デコルテマッサージで顔のこりをほぐし、透明感のある肌へ。'
}, {
  id: 'head',
  name: 'ドライヘッドスパ × ボディケア',
  duration: '90分',
  regular: '9,600円',
  now: '8,500円',
  description: '眼精疲労・首肩こりに。自律神経を整え、慢性的な疲れをやわらげます。男性にもおすすめ。'
}];
function MiniPhoto({
  h = 150,
  label = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: h,
      background: 'linear-gradient(135deg, var(--almond-200), var(--dust) 60%, var(--taupe))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 9,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'rgba(119,82,78,0.5)'
    }
  }, label));
}
function AppBar({
  title,
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 18px',
      borderBottom: '1px solid var(--line-soft)',
      background: 'color-mix(in oklch, var(--cream) 90%, transparent)',
      backdropFilter: 'blur(8px)',
      position: 'sticky',
      top: 0,
      zIndex: 5
    }
  }, onBack ? /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    "aria-label": "back",
    style: {
      border: 'none',
      background: 'transparent',
      fontSize: 22,
      color: 'var(--plum)',
      cursor: 'pointer',
      lineHeight: 1,
      padding: 0,
      width: 28
    }
  }, "\u2039") : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28
    }
  }), title ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-jp)',
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--plum)'
    }
  }, title) : /*#__PURE__*/React.createElement(Logo, {
    size: 20,
    showTagline: false
  }));
}

/* ----------------------------------------------------------- List screen */
function ListScreen({
  onSelect
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AppBar, null), /*#__PURE__*/React.createElement(MiniPhoto, {
    h: 170,
    label: "hero"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 18px 96px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    dot: true
  }, "Menu"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif-jp)',
      fontSize: 22,
      fontWeight: 600,
      color: 'var(--plum)',
      margin: '10px 0 20px',
      lineHeight: 1.4
    }
  }, "\u4ECA\u65E5\u306E\u3042\u306A\u305F\u306B", /*#__PURE__*/React.createElement("br", null), "\u5408\u308F\u305B\u3066\u9078\u3076"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, MENUS.map(m => /*#__PURE__*/React.createElement("button", {
    key: m.id,
    onClick: () => onSelect(m),
    style: {
      textAlign: 'left',
      border: '1px solid var(--line-soft)',
      background: 'var(--white)',
      borderRadius: 'var(--r-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)',
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '92px 1fr',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(MiniPhoto, {
    h: 92
  }), m.rank && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      left: 8,
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 11,
      color: 'var(--cream)',
      background: 'rgba(119,82,78,0.78)',
      padding: '1px 8px',
      borderRadius: 'var(--r-pill)'
    }
  }, m.rank)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px 10px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-jp)',
      fontSize: 14.5,
      fontWeight: 600,
      color: 'var(--plum)',
      lineHeight: 1.4
    }
  }, m.name), /*#__PURE__*/React.createElement(PriceTag, {
    duration: m.duration,
    now: m.now,
    note: null,
    emphasis: m.emphasis || 'plum',
    size: "sm"
  }))))))));
}

/* --------------------------------------------------------- Detail screen */
function DetailScreen({
  menu,
  onBack,
  onBook
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AppBar, {
    title: "\u30E1\u30CB\u30E5\u30FC\u8A73\u7D30",
    onBack: onBack
  }), /*#__PURE__*/React.createElement(MiniPhoto, {
    h: 200,
    label: "treatment"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 18px 110px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "plum"
  }, menu.name), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '18px 0'
    }
  }, /*#__PURE__*/React.createElement(PriceTag, {
    duration: menu.duration,
    regular: menu.regular,
    now: menu.now,
    emphasis: menu.emphasis || 'plum',
    size: "lg"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.85,
      color: 'var(--text-body)'
    }
  }, menu.description), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--line)',
      margin: '22px 0'
    }
  }), /*#__PURE__*/React.createElement(Eyebrow, null, "Flow"), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: '12px 0 0',
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, ['カウンセリング', '施術（オーダーメイド）', '仕上げ・アフターケア'].map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 18,
      color: 'var(--accent)',
      width: 22
    }
  }, `0${i + 1}`), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--ink-soft)'
    }
  }, s))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '14px 18px',
      background: 'color-mix(in oklch, var(--cream) 92%, transparent)',
      backdropFilter: 'blur(8px)',
      borderTop: '1px solid var(--line-soft)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "lg",
    onClick: onBook
  }, "\u3053\u306E\u30E1\u30CB\u30E5\u30FC\u3067\u4E88\u7D04")));
}

/* ----------------------------------------------------------- Form screen */
function FormScreen({
  menu,
  onBack,
  onSubmit
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AppBar, {
    title: "\u3054\u4E88\u7D04",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 18px 110px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-soft)',
      borderRadius: 'var(--r-md)',
      padding: '14px 16px',
      marginBottom: 22,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-jp)',
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--plum)'
    }
  }, menu.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, menu.duration)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u304A\u540D\u524D",
    placeholder: "\u5C71\u7530 \u82B1\u5B50"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u96FB\u8A71\u756A\u53F7",
    type: "tel",
    placeholder: "080-0000-0000"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u3054\u5E0C\u671B\u65E5\u6642",
    placeholder: "6/20 14:00\u9803"
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "\u3054\u8981\u671B\uFF08\u4EFB\u610F\uFF09",
    rows: 3,
    placeholder: "\u6C17\u306B\u306A\u308B\u7B87\u6240\u3092\u304A\u805E\u304B\u305B\u304F\u3060\u3055\u3044"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '14px 18px',
      background: 'color-mix(in oklch, var(--cream) 92%, transparent)',
      backdropFilter: 'blur(8px)',
      borderTop: '1px solid var(--line-soft)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "lg",
    onClick: onSubmit
  }, "\u3053\u306E\u5185\u5BB9\u3067\u4E88\u7D04\u3059\u308B")));
}

/* -------------------------------------------------------- Confirm screen */
function ConfirmScreen({
  onDone
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      padding: '40px 28px',
      textAlign: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif-jp)',
      fontSize: 22,
      fontWeight: 600,
      color: 'var(--plum)',
      lineHeight: 1.5
    }
  }, "\u3054\u4E88\u7D04", /*#__PURE__*/React.createElement("br", null), "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      lineHeight: 1.85,
      color: 'var(--text-body)'
    }
  }, "\u78BA\u8A8D\u306E\u3054\u9023\u7D61\u3092\u5DEE\u3057\u4E0A\u3052\u307E\u3059\u3002", /*#__PURE__*/React.createElement("br", null), "\u5F53\u65E5\u304A\u4F1A\u3044\u3067\u304D\u308B\u306E\u3092", /*#__PURE__*/React.createElement("br", null), "\u697D\u3057\u307F\u306B\u3057\u3066\u304A\u308A\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: onDone
  }, "\u30E1\u30CB\u30E5\u30FC\u306B\u623B\u308B")));
}

/* ----------------------------------------------------------- Phone shell */
function Phone({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 800,
      background: 'var(--cream)',
      borderRadius: 46,
      border: '11px solid #2A2120',
      boxShadow: 'var(--shadow-lg)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 130,
      height: 26,
      background: '#2A2120',
      borderRadius: '0 0 16px 16px',
      zIndex: 30
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      overflowY: 'auto',
      borderRadius: 35
    }
  }, children));
}
function BookingApp() {
  const [stack, setStack] = useState([{
    screen: 'list'
  }]);
  const [menu, setMenu] = useState(null);
  const top = stack[stack.length - 1];
  const push = s => setStack(st => [...st, s]);
  const back = () => setStack(st => st.slice(0, -1));
  const reset = () => {
    setStack([{
      screen: 'list'
    }]);
    setMenu(null);
  };
  let view;
  if (top.screen === 'list') view = /*#__PURE__*/React.createElement(ListScreen, {
    onSelect: m => {
      setMenu(m);
      push({
        screen: 'detail'
      });
    }
  });else if (top.screen === 'detail') view = /*#__PURE__*/React.createElement(DetailScreen, {
    menu: menu,
    onBack: back,
    onBook: () => push({
      screen: 'form'
    })
  });else if (top.screen === 'form') view = /*#__PURE__*/React.createElement(FormScreen, {
    menu: menu,
    onBack: back,
    onSubmit: () => push({
      screen: 'confirm'
    })
  });else view = /*#__PURE__*/React.createElement(ConfirmScreen, {
    onDone: reset
  });
  return /*#__PURE__*/React.createElement(Phone, null, view);
}
Object.assign(window, {
  BookingApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/booking/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/components.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* nestia. — Marketing website UI kit
   All screens read primitives from window.NestiaDesignSystem_9e0aed and React from
   the global. No ES imports (in-browser Babel). Components export to window. */

const {
  useState
} = React;
const DS = window.NestiaDesignSystem_9e0aed;
const {
  Logo,
  Button,
  Badge,
  Eyebrow,
  SectionHeader,
  MenuCard,
  PriceTag,
  Input,
  Textarea
} = DS;

/* Soft photo placeholder — real salon photography drops in here. */
function Photo({
  label = '',
  radius = 'var(--r-md)',
  ratio = null,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      ...(ratio ? {
        aspectRatio: ratio
      } : {
        height: '100%'
      }),
      borderRadius: radius,
      overflow: 'hidden',
      background: 'linear-gradient(135deg, var(--almond-200) 0%, var(--dust) 55%, var(--taupe) 120%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'rgba(119,82,78,0.5)'
    }
  }, label || 'photo'));
}

/* ---------------------------------------------------------------- Header */
function Header({
  onBook
}) {
  const items = [['concept', 'コンセプト'], ['menu', 'メニュー'], ['access', 'アクセス']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 40px',
      background: 'color-mix(in oklch, var(--cream) 86%, transparent)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--line-soft)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 28,
    showTagline: false
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '34px'
    }
  }, items.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: `#${id}`,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      letterSpacing: '0.1em',
      color: 'var(--ink-soft)'
    }
  }, label)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onBook
  }, "\u3054\u4E88\u7D04")));
}

/* ------------------------------------------------------------------ Hero */
function Hero({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: '48px',
      alignItems: 'center',
      padding: '88px 40px 96px',
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    dot: true
  }, "Tachikawa \xB7 Relaxation Salon"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif-jp)',
      fontWeight: 600,
      fontSize: 'clamp(34px, 4vw, 52px)',
      lineHeight: 1.32,
      letterSpacing: '0.04em',
      color: 'var(--plum)'
    }
  }, "\u305D\u306E\u65E5\u306E\u3042\u306A\u305F\u306B", /*#__PURE__*/React.createElement("br", null), "\u5408\u308F\u305B\u305F\u3001", /*#__PURE__*/React.createElement("br", null), "\u30AA\u30FC\u30C0\u30FC\u30E1\u30A4\u30C9\u30B1\u30A2\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif-jp)',
      fontSize: 18,
      lineHeight: 1.95,
      color: 'var(--ink-soft)',
      maxWidth: '40ch'
    }
  }, "\u65E5\u3005\u304C\u3093\u3070\u308B\u3042\u306A\u305F\u3078\u3002\u4ECA\u65E5\u306E\u5FC3\u3068\u4F53\u306B\u5BC4\u308A\u6DFB\u3046\u3001\u3084\u3055\u3057\u3044\u3072\u3068\u3068\u304D\u3092\u3002\u7ACB\u5DDD\u99C5\u304B\u3089\u5F92\u6B693\u5206\u306E\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8\u30B5\u30ED\u30F3\u3067\u3059\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      marginTop: '6px',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onBook
  }, "\u3054\u4E88\u7D04\u306F\u3053\u3061\u3089"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    as: "a",
    href: "#menu"
  }, "\u30E1\u30CB\u30E5\u30FC\u3092\u898B\u308B"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    ratio: "4 / 5",
    radius: "var(--r-xl)",
    style: {
      boxShadow: 'var(--shadow-lg)'
    },
    label: "hero portrait"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -22,
      left: -22,
      background: 'var(--white)',
      borderRadius: 'var(--r-lg)',
      padding: '14px 20px',
      boxShadow: 'var(--shadow-md)',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--plum)',
      fontWeight: 500
    }
  }, "\u672C\u65E5\u7A7A\u304D\u3042\u308A \xB7 \u5F53\u65E5\u4E88\u7D04OK"))));
}

/* --------------------------------------------------------------- Concept */
function Concept() {
  const cols = [['01', 'カウンセリング', 'その日の心と体の状態をていねいに伺います。'], ['02', 'オーダーメイド', 'アロマ・ボディ・ヘッド・リフレを自由に組み合わせ。'], ['03', '整える', '深いリラックスへ。慢性的な疲れをやわらげます。']];
  return /*#__PURE__*/React.createElement("section", {
    id: "concept",
    style: {
      background: 'var(--surface-soft)',
      padding: '88px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto 56px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Concept",
    title: "\u3042\u306A\u305F\u306E\u305F\u3081\u306E\u3001\u3072\u3068\u3068\u304D\u3092",
    lead: "\u6C7A\u307E\u3063\u305F\u30B3\u30FC\u30B9\u3067\u306F\u306A\u304F\u3001\u305D\u306E\u65E5\u306E\u3042\u306A\u305F\u306B\u5408\u308F\u305B\u3066\u3002\u5FC3\u5730\u3088\u3055\u3092\u4E00\u756A\u306B\u8003\u3048\u305F\u3001\u30AA\u30FC\u30C0\u30FC\u30E1\u30A4\u30C9\u306E\u30B1\u30A2\u3067\u3059\u3002"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '28px',
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, cols.map(([n, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 32,
      color: 'var(--accent)'
    }
  }, n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif-jp)',
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--plum)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.8,
      color: 'var(--text-body)',
      maxWidth: '24ch'
    }
  }, d)))));
}

/* ------------------------------------------------------------------ Menu */
function MenuSection({
  onBook
}) {
  const menus = [{
    rank: 'No.1',
    name: 'オーダーメイドケア',
    duration: '90分',
    regular: '12,800円',
    now: '10,800円',
    description: 'その日の状態に合わせて施術内容を調整。アロマ・ボディケア・ヘッド・リフレなど自由に組み合わせ可能。初めての方にもおすすめです。'
  }, {
    name: '毛穴洗浄 × 水光フェイシャル',
    duration: '60分',
    regular: '9,400円',
    now: '7,800円',
    emphasis: 'accent',
    description: 'クレンジング・洗顔後、スチームと泥パックで毛穴の皮脂汚れを洗浄。デコルテマッサージで顔のこりをほぐし、透明感のある肌へ。'
  }, {
    name: 'ドライヘッドスパ × ボディケア',
    duration: '90分',
    regular: '9,600円',
    now: '8,500円',
    description: '眼精疲労・首肩こりが気になる方に。ヘッドまで行うことで自律神経を整え、慢性的な疲れをやわらげます。オイルが苦手な方や男性にも。'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "menu",
    style: {
      padding: '88px 40px',
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto 48px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Menu",
    title: "\u4EBA\u6C17\u306E\u30E1\u30CB\u30E5\u30FC",
    lead: "\u30B0\u30E9\u30F3\u30C9\u30AA\u30FC\u30D7\u30F3\u8A18\u5FF5\u306E\u7279\u5225\u4FA1\u683C\u3067\u3054\u6848\u5185\u3057\u3066\u3044\u307E\u3059\u3002"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }
  }, menus.map((m, i) => /*#__PURE__*/React.createElement(MenuCard, _extends({
    key: i
  }, m, {
    image: /*#__PURE__*/React.createElement(Photo, {
      label: ""
    })
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: '40px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onBook
  }, "\u7A7A\u304D\u72B6\u6CC1\u3092\u78BA\u8A8D\u3059\u308B")));
}

/* ---------------------------------------------------------------- Access */
function AccessSection() {
  const rows = [['店舗名', 'nestia. relaxation salon'], ['住所', '東京都立川市柴崎町3-8-10 collabo 2F'], ['アクセス', '立川南駅 徒歩1分 / JR立川駅 南口 徒歩3分'], ['営業時間', '10:00 〜 22:00（最終受付21:00・完全予約制）'], ['Instagram', '@nestia_kawamoto']];
  return /*#__PURE__*/React.createElement("section", {
    id: "access",
    style: {
      background: 'var(--plum)',
      padding: '88px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '56px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    tone: "dark",
    align: "left",
    eyebrow: "Access",
    title: "\u5E97\u8217\u306E\u3054\u6848\u5185",
    titleFont: "display"
  }), /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: '32px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: '0'
    }
  }, rows.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'grid',
      gridTemplateColumns: '120px 1fr',
      gap: '16px',
      padding: '14px 0',
      borderBottom: '1px solid color-mix(in oklch, var(--cream) 18%, transparent)'
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--almond)'
    }
  }, k), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--cream)'
    }
  }, v))))), /*#__PURE__*/React.createElement(Photo, {
    ratio: "1 / 1",
    radius: "var(--r-xl)",
    label: "map / interior",
    style: {
      boxShadow: 'var(--shadow-lg)'
    }
  })));
}

/* ---------------------------------------------------------------- Footer */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--plum-700)',
      padding: '44px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "cream",
    size: 26
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      letterSpacing: '0.08em',
      color: 'var(--almond)'
    }
  }, "\xA9 2026 nestia. relaxation salon \u2014 Tachikawa, Tokyo"));
}

/* --------------------------------------------------------- Booking modal */
function BookingModal({
  open,
  onClose
}) {
  const [done, setDone] = useState(false);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      background: 'rgba(60,46,43,0.42)',
      backdropFilter: 'blur(3px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 'min(460px, 100%)',
      background: 'var(--cream)',
      borderRadius: 'var(--r-xl)',
      padding: '36px',
      boxShadow: 'var(--shadow-lg)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "close",
    style: {
      position: 'absolute',
      top: 18,
      right: 18,
      border: 'none',
      background: 'transparent',
      fontSize: 22,
      color: 'var(--text-muted)',
      cursor: 'pointer',
      lineHeight: 1
    }
  }, "\xD7"), done ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '20px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--accent)',
      display: 'inline-block',
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif-jp)',
      fontSize: 24,
      color: 'var(--plum)',
      marginBottom: 12
    }
  }, "\u3054\u4E88\u7D04\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-body)',
      lineHeight: 1.8
    }
  }, "\u78BA\u8A8D\u306E\u3054\u9023\u7D61\u3092\u5DEE\u3057\u4E0A\u3052\u307E\u3059\u3002", /*#__PURE__*/React.createElement("br", null), "\u5F53\u65E5\u304A\u4F1A\u3044\u3067\u304D\u308B\u306E\u3092\u697D\u3057\u307F\u306B\u3057\u3066\u304A\u308A\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: onClose
  }, "\u9589\u3058\u308B"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Eyebrow, {
    dot: true
  }, "Reservation"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif-jp)',
      fontSize: 24,
      color: 'var(--plum)',
      margin: '12px 0 22px'
    }
  }, "\u3054\u4E88\u7D04"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u304A\u540D\u524D",
    placeholder: "\u5C71\u7530 \u82B1\u5B50"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u96FB\u8A71\u756A\u53F7",
    type: "tel",
    placeholder: "080-0000-0000"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u3054\u5E0C\u671B\u65E5\u6642",
    placeholder: "6/20 14:00\u9803"
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "\u3054\u8981\u671B\uFF08\u4EFB\u610F\uFF09",
    rows: 3,
    placeholder: "\u6C17\u306B\u306A\u308B\u7B87\u6240\u3084\u3054\u5E0C\u671B\u3092\u304A\u805E\u304B\u305B\u304F\u3060\u3055\u3044"
  }), /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "lg",
    onClick: () => setDone(true)
  }, "\u3053\u306E\u5185\u5BB9\u3067\u4E88\u7D04\u3059\u308B")))));
}
function App() {
  const [booking, setBooking] = useState(false);
  const open = () => setBooking(true);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    onBook: open
  }), /*#__PURE__*/React.createElement(Hero, {
    onBook: open
  }), /*#__PURE__*/React.createElement(Concept, null), /*#__PURE__*/React.createElement(MenuSection, {
    onBook: open
  }), /*#__PURE__*/React.createElement(AccessSection, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(BookingModal, {
    open: booking,
    onClose: () => setBooking(false)
  }));
}
Object.assign(window, {
  Photo,
  Header,
  Hero,
  Concept,
  MenuSection,
  AccessSection,
  Footer,
  BookingModal,
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components.jsx", error: String((e && e.message) || e) }); }

__ds_ns.MenuCard = __ds_scope.MenuCard;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
