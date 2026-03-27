/* colorfyi-embed v1.0.0 | MIT | https://widget.colorfyi.com */

// src/styles/modern.ts
function getModernCSS() {
  return `
/* Modern: gradient accent header */
.creativefyi-header {
  background: linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 70%, #000));
  border-radius: 12px 12px 0 0;
  padding: 16px 20px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.creativefyi-header-title {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 4px 0;
  line-height: 1.3;
}

.creativefyi-header-subtitle {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

/* Image/preview area \u2014 for color swatches, emoji, font previews */
.creativefyi-img {
  width: 56px;
  height: 56px;
  border-radius: 8px;
  object-fit: cover;
  background: rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.creativefyi-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

/* Body area */
.creativefyi-body {
  padding: 16px 20px;
}

/* Key-value rows \u2014 spacious */
.creativefyi-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
}

.creativefyi-row:last-child {
  border-bottom: none;
}

.creativefyi-label {
  font-size: 12px;
  font-weight: 500;
  color: var(--muted);
  white-space: nowrap;
  flex-shrink: 0;
  min-width: 30%;
}

.creativefyi-value {
  font-size: 13px;
  color: var(--text);
  text-align: right;
  word-break: break-word;
}

/* Section title */
.creativefyi-section-title {
  font-size: 11px;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 10px 0;
}

/* Tags \u2014 colored rounded badges */
.creativefyi-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 12px;
  background: color-mix(in srgb, var(--accent) 12%, transparent);
  color: var(--accent);
  margin: 2px 3px 2px 0;
  letter-spacing: 0.02em;
}

/* Link */
.creativefyi-link {
  font-size: 13px;
  font-weight: 500;
  color: var(--link);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.creativefyi-link:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.creativefyi-link svg {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

/* Footer link row */
.creativefyi-footer-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  border-top: 1px solid var(--border);
  gap: 8px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Card shared: stats row (horizontal flex)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.creativefyi-stats-row { display:flex; gap:12px; padding:10px 18px; border-bottom:1px solid var(--border); }
.creativefyi-stat { text-align:center; flex:1; }
.creativefyi-stat-value { font-size:18px; font-weight:700; color:var(--accent); }
.creativefyi-stat-label { font-size:9px; color:var(--muted); text-transform:uppercase; letter-spacing:0.03em; }

/* Card shared: stats grid (2x2 boxes) */
.creativefyi-stats-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; padding:10px 18px; border-bottom:1px solid var(--border); }
.creativefyi-stat-box { padding:6px 8px; background:color-mix(in srgb, var(--accent) 8%, var(--bg)); border-radius:8px; }
.creativefyi-stat-box-label { font-size:9px; color:color-mix(in srgb, var(--accent) 80%, var(--text)); text-transform:uppercase; }
.creativefyi-stat-box-value { font-size:13px; font-weight:700; color:var(--text); margin-top:1px; }

/* Card shared: key-value dotted rows */
.creativefyi-kv-rows { padding:10px 18px; border-bottom:1px solid var(--border); }
.creativefyi-kv-row { display:flex; justify-content:space-between; align-items:baseline; padding:4px 0; border-bottom:1px dotted var(--border); }
.creativefyi-kv-row:last-child { border-bottom:none; }
.creativefyi-kv-label { font-size:11px; color:var(--muted); }
.creativefyi-kv-value { font-size:11px; font-weight:600; color:var(--text); }

/* Card shared: pill tags */
.creativefyi-pills { display:flex; flex-wrap:wrap; gap:4px; padding:10px 18px; border-bottom:1px solid var(--border); }
.creativefyi-pill { padding:2px 8px; border-radius:10px; font-size:11px; font-weight:500; background:color-mix(in srgb, var(--accent) 10%, var(--bg)); color:var(--accent); }

/* Card shared: section label */
.creativefyi-section-label { font-size:10px; text-transform:uppercase; letter-spacing:0.05em; color:var(--accent); font-weight:600; margin-bottom:3px; }

/* Card shared: description */
.creativefyi-desc { padding:10px 18px; font-size:11px; color:var(--muted); line-height:1.5; border-bottom:1px solid var(--border); }

/* Card shared: view link */
.creativefyi-view-link { display:block; text-align:center; padding:10px 18px; border-bottom:1px solid var(--border); }
.creativefyi-view-link a { color:var(--link); text-decoration:none; font-size:12px; font-weight:500; display:inline-flex; align-items:center; gap:4px; }
.creativefyi-view-link a:hover { text-decoration:underline; }
.creativefyi-view-link svg { width:12px; height:12px; }

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Card domain: color swatch (colorfyi)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.creativefyi-swatch { width:100%; height:80px; border-radius:0; display:block; }
.creativefyi-swatch-row { display:flex; align-items:center; gap:12px; padding:10px 18px; border-bottom:1px solid var(--border); }
.creativefyi-swatch-circle { width:36px; height:36px; border-radius:50%; border:2px solid var(--border); flex-shrink:0; }
.creativefyi-swatch-info { font-size:11px; }
.creativefyi-swatch-hex { font-weight:700; font-size:14px; color:var(--text); }
.creativefyi-swatch-name { color:var(--muted); font-size:10px; margin-top:1px; }

/* Card domain: contrast checker (colorfyi) */
.creativefyi-contrast { padding:10px 18px; border-bottom:1px solid var(--border); }
.creativefyi-contrast-ratio { font-size:22px; font-weight:800; color:var(--accent); line-height:1; }
.creativefyi-contrast-label { font-size:9px; color:var(--muted); text-transform:uppercase; letter-spacing:0.04em; margin-top:2px; }
.creativefyi-wcag-badges { display:flex; gap:6px; margin-top:8px; flex-wrap:wrap; }
.creativefyi-wcag-badge { font-size:10px; font-weight:700; padding:2px 8px; border-radius:4px; }
.creativefyi-wcag-pass { background:#dcfce7; color:#166534; }
.creativefyi-wcag-fail { background:#fee2e2; color:#991b1b; }
[data-theme="dark"] .creativefyi-wcag-pass { background:#14532d; color:#86efac; }
[data-theme="dark"] .creativefyi-wcag-fail { background:#7f1d1d; color:#fca5a5; }

/* Card domain: font preview (fontfyi) */
.creativefyi-font-preview { padding:14px 18px; border-bottom:1px solid var(--border); text-align:center; }
.creativefyi-font-sample { font-size:28px; line-height:1.2; color:var(--text); margin-bottom:4px; }
.creativefyi-font-sample-sm { font-size:14px; line-height:1.4; color:var(--muted); }

/* Card domain: emoji display (emojifyi) */
.creativefyi-emoji-display { font-size:56px; line-height:1; text-align:center; padding:16px 18px 8px; }
.creativefyi-codepoints { display:flex; flex-wrap:wrap; gap:4px; padding:6px 18px 10px; border-bottom:1px solid var(--border); }
.creativefyi-codepoint { font-family:monospace; font-size:11px; padding:1px 6px; background:var(--surface); border-radius:4px; color:var(--muted); border:1px solid var(--border); }

/* Card domain: symbol display (symbolfyi) */
.creativefyi-symbol-display { font-size:48px; line-height:1; text-align:center; padding:14px 18px 6px; color:var(--text); }
.creativefyi-encoding-row { display:flex; justify-content:space-between; align-items:center; padding:4px 18px; border-bottom:1px dotted var(--border); }
.creativefyi-encoding-row:last-child { border-bottom:none; }
.creativefyi-encoding-name { font-size:10px; color:var(--muted); text-transform:uppercase; letter-spacing:0.04em; flex-shrink:0; width:70px; }
.creativefyi-encoding-val { font-family:monospace; font-size:11px; color:var(--text); font-weight:600; }

/* Card domain: spectrum bar (for color lightness, saturation) */
.creativefyi-spectrum { padding:12px 18px; border-bottom:1px solid var(--border); }
.creativefyi-spectrum-label { font-size:10px; text-transform:uppercase; letter-spacing:0.05em; color:var(--muted); font-weight:600; margin-bottom:6px; }
.creativefyi-spectrum-bar { height:14px; border-radius:7px; position:relative; }
.creativefyi-spectrum-pointer { position:absolute; top:-3px; width:3px; height:20px; background:var(--text); border-radius:2px; }
.creativefyi-spectrum-labels { display:flex; justify-content:space-between; font-size:8px; color:var(--muted); margin-top:3px; }

/* Inline widget host \u2014 for badge-style inline rendering */
:host([data-inline]) {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
  `;
}

// src/styles/minimal.ts
function getMinimalCSS() {
  return `
/* Minimal: thin accent border, no gradient */
.creativefyi-widget {
  font-family: 'Fira Code', 'Cascadia Code', 'JetBrains Mono', ui-monospace, 'SFMono-Regular', Consolas, monospace;
  font-size: 12px;
}

/* Header \u2014 surface bg with thin accent top border */
.creativefyi-header {
  background: var(--surface);
  border-top: 2px solid var(--accent);
  padding: 8px 10px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.creativefyi-header-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 2px 0;
  line-height: 1.3;
  font-family: inherit;
}

.creativefyi-header-subtitle {
  font-size: 11px;
  color: var(--muted);
  margin: 0;
}

/* Image/preview area \u2014 compact */
.creativefyi-img {
  width: 36px;
  height: 36px;
  border-radius: 4px;
  background: var(--badge-bg);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid var(--border);
}

.creativefyi-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 3px;
}

/* Body area */
.creativefyi-body {
  padding: 8px 10px;
}

/* Key-value rows \u2014 compact, no extra spacing */
.creativefyi-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
  padding: 4px 0;
  border-bottom: 1px solid var(--border);
}

.creativefyi-row:last-child {
  border-bottom: none;
}

.creativefyi-label {
  font-size: 10px;
  font-weight: 500;
  color: var(--muted);
  white-space: nowrap;
  flex-shrink: 0;
  min-width: 30%;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.creativefyi-value {
  font-size: 11px;
  color: var(--text);
  text-align: right;
  word-break: break-word;
  font-family: inherit;
}

/* Section title */
.creativefyi-section-title {
  font-size: 9px;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 6px 0;
}

/* Tags \u2014 muted, minimal */
.creativefyi-tag {
  display: inline-block;
  font-size: 10px;
  font-weight: 500;
  padding: 1px 6px;
  border-radius: 3px;
  background: var(--badge-bg);
  color: var(--badge-text);
  border: 1px solid var(--border);
  margin: 1px 2px 1px 0;
}

/* Link */
.creativefyi-link {
  font-size: 11px;
  font-weight: 500;
  color: var(--link);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 3px;
}

.creativefyi-link:hover {
  text-decoration: underline;
}

.creativefyi-link svg {
  width: 10px;
  height: 10px;
  flex-shrink: 0;
}

/* Footer link row */
.creativefyi-footer-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px;
  border-top: 1px solid var(--border);
  gap: 6px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Minimal overrides for card shared components
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Stats row: smaller, monospace values */
.creativefyi-stats-row { display:flex; gap:8px; padding:6px 10px; border-bottom:1px solid var(--border); }
.creativefyi-stat { text-align:center; flex:1; }
.creativefyi-stat-value { font-size:14px; font-weight:700; color:var(--accent); font-family:inherit; }
.creativefyi-stat-label { font-size:8px; color:var(--muted); text-transform:uppercase; letter-spacing:0.04em; }

/* Stats grid: outlined boxes instead of filled */
.creativefyi-stats-grid { display:grid; grid-template-columns:1fr 1fr; gap:6px; padding:6px 10px; border-bottom:1px solid var(--border); }
.creativefyi-stat-box { padding:4px 6px; background:transparent; border:1px solid var(--border); border-radius:3px; }
.creativefyi-stat-box-label { font-size:8px; color:var(--muted); text-transform:uppercase; letter-spacing:0.05em; }
.creativefyi-stat-box-value { font-size:11px; font-weight:700; color:var(--text); margin-top:1px; font-family:inherit; }

/* KV rows: all monospace */
.creativefyi-kv-rows { padding:6px 10px; border-bottom:1px solid var(--border); }
.creativefyi-kv-row { display:flex; justify-content:space-between; align-items:baseline; padding:3px 0; border-bottom:1px dotted var(--border); }
.creativefyi-kv-row:last-child { border-bottom:none; }
.creativefyi-kv-label { font-size:9px; color:var(--muted); text-transform:uppercase; letter-spacing:0.04em; }
.creativefyi-kv-value { font-size:10px; font-weight:600; color:var(--text); font-family:inherit; }

/* Pills: border outline only */
.creativefyi-pills { display:flex; flex-wrap:wrap; gap:3px; padding:6px 10px; border-bottom:1px solid var(--border); }
.creativefyi-pill { padding:1px 6px; border-radius:3px; font-size:10px; font-weight:500; background:transparent; border:1px solid var(--border); color:var(--muted); }

/* Section label: plain uppercase monospace */
.creativefyi-section-label { font-size:9px; text-transform:uppercase; letter-spacing:0.06em; color:var(--muted); font-weight:600; margin-bottom:3px; }

/* Description: compact */
.creativefyi-desc { padding:6px 10px; font-size:10px; color:var(--muted); line-height:1.4; border-bottom:1px solid var(--border); }

/* View link */
.creativefyi-view-link { display:block; text-align:left; padding:6px 10px; border-bottom:1px solid var(--border); }
.creativefyi-view-link a { color:var(--link); text-decoration:none; font-size:11px; font-weight:500; display:inline-flex; align-items:center; gap:3px; }
.creativefyi-view-link a:hover { text-decoration:underline; }
.creativefyi-view-link svg { width:10px; height:10px; }

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Minimal: copy button \u2014 inline symbol style
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.creativefyi-copy-btn {
  background: transparent;
  color: var(--muted);
  border: 1px solid var(--border);
  border-radius: 3px;
  padding: 2px 6px;
  font-size: 10px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  transition: color 0.1s, border-color 0.1s;
  font-family: inherit;
}

.creativefyi-copy-btn:hover {
  color: var(--text);
  border-color: var(--accent);
}

.creativefyi-copy-btn svg {
  width: 10px;
  height: 10px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Minimal: color swatch (colorfyi) \u2014 compact
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.creativefyi-swatch { width:100%; height:48px; border-radius:0; display:block; }
.creativefyi-swatch-row { display:flex; align-items:center; gap:8px; padding:6px 10px; border-bottom:1px solid var(--border); }
.creativefyi-swatch-circle { width:24px; height:24px; border-radius:4px; border:1px solid var(--border); flex-shrink:0; }
.creativefyi-swatch-info { font-size:10px; }
.creativefyi-swatch-hex { font-weight:700; font-size:12px; color:var(--text); font-family:inherit; }
.creativefyi-swatch-name { color:var(--muted); font-size:9px; margin-top:1px; }

/* Minimal: contrast (colorfyi) */
.creativefyi-contrast { padding:6px 10px; border-bottom:1px solid var(--border); }
.creativefyi-contrast-ratio { font-size:16px; font-weight:800; color:var(--accent); line-height:1; font-family:inherit; }
.creativefyi-contrast-label { font-size:8px; color:var(--muted); text-transform:uppercase; letter-spacing:0.04em; margin-top:1px; }
.creativefyi-wcag-badges { display:flex; gap:4px; margin-top:6px; flex-wrap:wrap; }
.creativefyi-wcag-badge { font-size:9px; font-weight:700; padding:1px 6px; border-radius:2px; font-family:inherit; }
.creativefyi-wcag-pass { background:#dcfce7; color:#166534; }
.creativefyi-wcag-fail { background:#fee2e2; color:#991b1b; }
[data-theme="dark"] .creativefyi-wcag-pass { background:#14532d; color:#86efac; }
[data-theme="dark"] .creativefyi-wcag-fail { background:#7f1d1d; color:#fca5a5; }

/* Minimal: font preview (fontfyi) */
.creativefyi-font-preview { padding:10px; border-bottom:1px solid var(--border); text-align:left; }
.creativefyi-font-sample { font-size:20px; line-height:1.2; color:var(--text); margin-bottom:3px; }
.creativefyi-font-sample-sm { font-size:12px; line-height:1.4; color:var(--muted); font-family:inherit; }

/* Minimal: emoji (emojifyi) */
.creativefyi-emoji-display { font-size:36px; line-height:1; text-align:center; padding:10px; }
.creativefyi-codepoints { display:flex; flex-wrap:wrap; gap:3px; padding:4px 10px 8px; border-bottom:1px solid var(--border); }
.creativefyi-codepoint { font-family:inherit; font-size:10px; padding:1px 5px; background:var(--surface); border-radius:3px; color:var(--muted); border:1px solid var(--border); }

/* Minimal: symbol (symbolfyi) */
.creativefyi-symbol-display { font-size:32px; line-height:1; text-align:center; padding:10px 10px 4px; color:var(--text); }
.creativefyi-encoding-row { display:flex; justify-content:space-between; align-items:center; padding:3px 10px; border-bottom:1px dotted var(--border); }
.creativefyi-encoding-row:last-child { border-bottom:none; }
.creativefyi-encoding-name { font-size:9px; color:var(--muted); text-transform:uppercase; letter-spacing:0.04em; flex-shrink:0; width:60px; }
.creativefyi-encoding-val { font-family:inherit; font-size:10px; color:var(--text); font-weight:600; }

/* Minimal: spectrum bar */
.creativefyi-spectrum { padding:8px 10px; border-bottom:1px solid var(--border); }
.creativefyi-spectrum-label { font-size:9px; text-transform:uppercase; letter-spacing:0.05em; color:var(--muted); font-weight:600; margin-bottom:4px; }
.creativefyi-spectrum-bar { height:10px; border-radius:5px; position:relative; }
.creativefyi-spectrum-pointer { position:absolute; top:-2px; width:2px; height:14px; background:var(--text); border-radius:1px; }
.creativefyi-spectrum-labels { display:flex; justify-content:space-between; font-size:7px; color:var(--muted); margin-top:2px; }

/* Inline widget host */
:host([data-inline]) {
  display: inline-flex;
  align-items: center;
  gap: 3px;
}
  `;
}

// src/themes.ts
function getStyleCSS(style) {
  switch (style) {
    case "minimal":
      return getMinimalCSS();
    case "modern":
    default:
      return getModernCSS();
  }
}
function getThemeCSS(accent, style = "modern") {
  return `
:host {
  display: block;
  --site-accent: ${accent};
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Size variants
   compact=280px, default=420px, large=720px
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.creativefyi-widget {
  box-sizing: border-box;
  min-width: 240px;
  max-width: 420px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  font-size: 14px;
  line-height: 1.6;
  transition: border-color 0.2s;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
}

.creativefyi-widget[data-size="compact"] {
  max-width: 280px;
  font-size: 13px;
}

.creativefyi-widget[data-size="default"] {
  max-width: 420px;
}

.creativefyi-widget[data-size="large"] {
  max-width: 720px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Light theme (default)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.creativefyi-widget[data-theme="light"] {
  --bg: #fff;
  --text: #1e293b;
  --border: #e2e8f0;
  --accent: var(--site-accent);
  --muted: #64748b;
  --surface: #f8fafc;
  --badge-bg: #f1f5f9;
  --badge-text: #374151;
  --link: var(--site-accent);
  --copy-bg: #f3f4f6;
  --copy-hover: #e5e7eb;
  --input-bg: #ffffff;
  --input-border: #d1d5db;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Dark theme
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.creativefyi-widget[data-theme="dark"] {
  --bg: #1a1a1a;
  --text: #f3f4f6;
  --border: #374151;
  --accent: var(--site-accent);
  --muted: #9ca3af;
  --surface: #111827;
  --badge-bg: #374151;
  --badge-text: #d1d5db;
  --link: color-mix(in srgb, var(--site-accent) 80%, #fff);
  --copy-bg: #374151;
  --copy-hover: #4b5563;
  --input-bg: #111111;
  --input-border: #4b5563;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Sepia theme
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.creativefyi-widget[data-theme="sepia"] {
  --bg: #f5f0e8;
  --text: #3d3529;
  --border: #d4c5a9;
  --accent: var(--site-accent);
  --muted: #8b7d6b;
  --surface: #ede8df;
  --badge-bg: #e8e0d0;
  --badge-text: #5c4f3d;
  --link: color-mix(in srgb, var(--site-accent) 70%, #3d3529);
  --copy-bg: #e8e0d0;
  --copy-hover: #ddd4c0;
  --input-bg: #f5f0e8;
  --input-border: #c4b49a;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(61, 53, 41, 0.12);
}

.creativefyi-widget *, .creativefyi-widget *::before, .creativefyi-widget *::after {
  box-sizing: border-box;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Loading state
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.creativefyi-loading {
  padding: 20px 16px;
  text-align: center;
  color: var(--muted);
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.creativefyi-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid var(--border);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: creativefyi-spin 0.7s linear infinite;
  display: inline-block;
  flex-shrink: 0;
}

@keyframes creativefyi-spin {
  to { transform: rotate(360deg); }
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Error state
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.creativefyi-error {
  padding: 16px;
  color: var(--muted);
  font-size: 13px;
  text-align: center;
}

.creativefyi-error p {
  margin: 0 0 8px 0;
}

.creativefyi-error a {
  color: var(--link);
  text-decoration: none;
}

.creativefyi-error a:hover {
  text-decoration: underline;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Badge (generic)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.creativefyi-badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 4px;
  background: var(--badge-bg);
  color: var(--badge-text);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Search inputs
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.creativefyi-search-wrap {
  padding: 12px 16px;
}

.creativefyi-search-form {
  display: flex;
  gap: 8px;
}

.creativefyi-search-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--input-border);
  border-radius: 6px;
  background: var(--input-bg);
  color: var(--text);
  font-size: 13px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s;
}

.creativefyi-search-input:focus {
  border-color: var(--input-focus);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
}

.creativefyi-search-input::placeholder {
  color: var(--muted);
}

.creativefyi-search-btn {
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  transition: opacity 0.15s;
  white-space: nowrap;
}

.creativefyi-search-btn:hover {
  opacity: 0.9;
}

/* Search results list */
.creativefyi-search-results {
  padding: 0 16px 12px;
}

.creativefyi-result-item {
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
}

.creativefyi-result-item:last-child {
  border-bottom: none;
}

.creativefyi-result-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 3px 0;
}

.creativefyi-result-meta {
  font-size: 11px;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Powered by footer
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.creativefyi-powered {
  display: block;
  text-align: center;
  padding: 8px 16px;
  font-size: 11px;
  color: var(--muted);
  border-top: 1px solid var(--border);
}

.creativefyi-powered a {
  color: var(--link);
  text-decoration: none;
  font-weight: 500;
}

.creativefyi-powered a:hover {
  text-decoration: underline;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Copy button (base \u2014 overridden in minimal)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.creativefyi-copy-btn {
  background: var(--copy-bg);
  color: var(--text);
  border: none;
  border-radius: 5px;
  padding: 4px 9px;
  font-size: 11px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: background 0.15s;
  font-family: inherit;
}

.creativefyi-copy-btn:hover {
  background: var(--copy-hover);
}

.creativefyi-copy-btn svg {
  width: 11px;
  height: 11px;
}

${getStyleCSS(style)}
  `;
}

// src/shadow.ts
function createShadow(el, config) {
  const widgetStyle = el.dataset.style || "modern";
  const shadow = el.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = getThemeCSS(config.accent, widgetStyle);
  shadow.appendChild(style);
  return shadow;
}
function resolveTheme(el) {
  const raw = el.dataset.theme || "light";
  if (raw === "auto") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return raw;
}
function createWidgetRoot(shadow, el, extraClass) {
  const theme = resolveTheme(el);
  const size = el.dataset.size || "default";
  const div = document.createElement("div");
  div.className = ["creativefyi-widget", extraClass].filter(Boolean).join(" ");
  div.setAttribute("data-theme", theme);
  div.setAttribute("data-size", size);
  shadow.appendChild(div);
  if (el.dataset.theme === "auto") {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      div.setAttribute("data-theme", e.matches ? "dark" : "light");
    });
  }
  return div;
}
function renderLoading(container) {
  container.innerHTML = `
    <div class="creativefyi-loading">
      <span class="creativefyi-spinner"></span>
      Loading\u2026
    </div>
  `;
}
function renderError(container, message, config) {
  container.innerHTML = `
    <div class="creativefyi-error">
      <p>${message}</p>
      <a href="https://${config.domain}" target="_blank" rel="noopener">
        Visit ${config.name}
      </a>
    </div>
  `;
}
var externalLinkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
var copyIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
var checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
function poweredByHTML(config) {
  return `<span class="creativefyi-powered">Powered by <a href="https://${config.domain}" target="_blank" rel="noopener">${config.name}</a></span>`;
}
function bindCopyButton(btn, text) {
  btn.addEventListener("click", () => {
    var _a;
    (_a = navigator.clipboard) == null ? void 0 : _a.writeText(text).then(() => {
      btn.innerHTML = `${checkIcon} Copied!`;
      setTimeout(() => {
        btn.innerHTML = `${copyIcon} Copy`;
      }, 2e3);
    }).catch(() => {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      btn.innerHTML = `${checkIcon} Copied!`;
      setTimeout(() => {
        btn.innerHTML = `${copyIcon} Copy`;
      }, 2e3);
    });
  });
}

// src/api.ts
var CACHE_TTL_MS = 5 * 60 * 1e3;
function cacheKey(url) {
  return `creativefyi_embed_${url}`;
}
function getFromCache(url) {
  try {
    const raw = sessionStorage.getItem(cacheKey(url));
    if (!raw) return null;
    const entry = JSON.parse(raw);
    if (Date.now() - entry.ts > CACHE_TTL_MS) {
      sessionStorage.removeItem(cacheKey(url));
      return null;
    }
    return entry.data;
  } catch (e) {
    return null;
  }
}
function setInCache(url, data) {
  try {
    const entry = { data, ts: Date.now() };
    sessionStorage.setItem(cacheKey(url), JSON.stringify(entry));
  } catch (e) {
  }
}
async function fetchAPI(baseUrl, path, params) {
  const base = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
  const relativePath = path.startsWith("/") ? path.slice(1) : path;
  const url = new URL(relativePath, base);
  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  }
  const urlStr = url.toString();
  const cached = getFromCache(urlStr);
  if (cached !== null) return cached;
  const response = await fetch(urlStr, {
    headers: { Accept: "application/json" }
  });
  if (!response.ok) {
    throw new Error(`API error ${response.status}: ${urlStr}`);
  }
  const data = await response.json();
  setInCache(urlStr, data);
  return data;
}

// src/widgets/entity.ts
function escapeHTML(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function renderColor(container, data, config) {
  const hex = data.hex_value.replace(/^#/, "");
  const hexFull = `#${hex.toUpperCase()}`;
  const colorUrl = data.url ? `https://${config.domain}${data.url}` : `https://${config.domain}/colors/${escapeHTML(data.hex_value.replace(/^#/, "").toLowerCase())}/`;
  container.innerHTML = `
    <div class="creativefyi-header">
      <div class="creativefyi-img creativefyi-color-swatch"
           style="background-color:${escapeHTML(hexFull)};width:56px;height:56px;border-radius:8px;flex-shrink:0;"
           aria-label="Color preview: ${escapeHTML(hexFull)}"></div>
      <div class="creativefyi-header-text">
        <p class="creativefyi-header-title">${escapeHTML(data.name)}</p>
        <p class="creativefyi-header-subtitle">${escapeHTML(hexFull)}${data.source ? ` \xB7 ${escapeHTML(data.source)}` : ""}</p>
      </div>
    </div>
    <div class="creativefyi-body">
      <div class="creativefyi-kv-row">
        <span class="creativefyi-kv-key">Hex</span>
        <span class="creativefyi-kv-val">
          <code>${escapeHTML(hexFull)}</code>
          <button class="creativefyi-copy-btn" aria-label="Copy hex value">${copyIcon} Copy</button>
        </span>
      </div>
      ${data.source ? `<div class="creativefyi-kv-row"><span class="creativefyi-kv-key">Source</span><span class="creativefyi-kv-val"><span class="creativefyi-badge">${escapeHTML(data.source)}</span></span></div>` : ""}
    </div>
    <div class="creativefyi-actions">
      <a class="creativefyi-link" href="${colorUrl}" target="_blank" rel="noopener">
        View on ${escapeHTML(config.name)} ${externalLinkIcon}
      </a>
    </div>
    ${poweredByHTML(config)}
  `;
  const copyBtn = container.querySelector(".creativefyi-copy-btn");
  if (copyBtn) bindCopyButton(copyBtn, hexFull);
}
function renderFont(container, data, config) {
  var _a, _b;
  const fontUrl = data.url ? `https://${config.domain}${data.url}` : `https://${config.domain}/fonts/${escapeHTML(data.slug)}/`;
  const desc = (_b = (_a = data.description) != null ? _a : data.meta_description) != null ? _b : "";
  container.innerHTML = `
    <div class="creativefyi-header">
      <div class="creativefyi-header-text">
        <p class="creativefyi-header-title" style="font-family:'${escapeHTML(data.family)}',sans-serif;font-size:18px;">${escapeHTML(data.family)}</p>
        <p class="creativefyi-header-subtitle">
          ${data.category ? escapeHTML(data.category) : ""}${data.subcategory ? ` \xB7 ${escapeHTML(data.subcategory)}` : ""}
        </p>
      </div>
    </div>
    <div class="creativefyi-body">
      ${data.source ? `<div class="creativefyi-kv-row"><span class="creativefyi-kv-key">Source</span><span class="creativefyi-kv-val">${escapeHTML(data.source)}</span></div>` : ""}
      ${data.is_variable !== void 0 ? `<div class="creativefyi-kv-row"><span class="creativefyi-kv-key">Variable</span><span class="creativefyi-kv-val">${data.is_variable ? '<span class="creativefyi-badge">Variable font</span>' : "\u2014"}</span></div>` : ""}
      ${data.popularity_rank != null ? `<div class="creativefyi-kv-row"><span class="creativefyi-kv-key">Popularity</span><span class="creativefyi-kv-val">#${escapeHTML(String(data.popularity_rank))}</span></div>` : ""}
      ${desc ? `<p class="creativefyi-summary">${escapeHTML(desc)}</p>` : ""}
    </div>
    <div class="creativefyi-actions">
      <a class="creativefyi-link" href="${fontUrl}" target="_blank" rel="noopener">
        View on ${escapeHTML(config.name)} ${externalLinkIcon}
      </a>
    </div>
    ${poweredByHTML(config)}
  `;
}
function renderEmoji(container, data, config) {
  const emojiUrl = data.url ? `https://${config.domain}${data.url}` : `https://${config.domain}/emojis/${escapeHTML(data.slug)}/`;
  container.innerHTML = `
    <div class="creativefyi-header">
      <div class="creativefyi-img" style="font-size:48px;line-height:1;background:transparent;border:none;"
           aria-label="${escapeHTML(data.cldr_name)}">${data.character}</div>
      <div class="creativefyi-header-text">
        <p class="creativefyi-header-title">${escapeHTML(data.cldr_name)}</p>
        <p class="creativefyi-header-subtitle">
          <code>${escapeHTML(data.codepoint)}</code>${data.category ? ` \xB7 ${escapeHTML(data.category)}` : ""}
        </p>
      </div>
    </div>
    <div class="creativefyi-body">
      <div class="creativefyi-kv-row">
        <span class="creativefyi-kv-key">Codepoint</span>
        <span class="creativefyi-kv-val">
          <code>${escapeHTML(data.codepoint)}</code>
          <button class="creativefyi-copy-btn" aria-label="Copy codepoint">${copyIcon} Copy</button>
        </span>
      </div>
      <div class="creativefyi-kv-row">
        <span class="creativefyi-kv-key">Character</span>
        <span class="creativefyi-kv-val">
          <span style="font-size:20px;">${data.character}</span>
          <button class="creativefyi-copy-char-btn" aria-label="Copy emoji character">${copyIcon} Copy</button>
        </span>
      </div>
      ${data.category ? `<div class="creativefyi-kv-row"><span class="creativefyi-kv-key">Category</span><span class="creativefyi-kv-val"><span class="creativefyi-badge">${escapeHTML(data.category)}</span></span></div>` : ""}
    </div>
    <div class="creativefyi-actions">
      <a class="creativefyi-link" href="${emojiUrl}" target="_blank" rel="noopener">
        View on ${escapeHTML(config.name)} ${externalLinkIcon}
      </a>
    </div>
    ${poweredByHTML(config)}
  `;
  const copyBtn = container.querySelector(".creativefyi-copy-btn");
  if (copyBtn) bindCopyButton(copyBtn, data.codepoint);
  const copyCharBtn = container.querySelector(".creativefyi-copy-char-btn");
  if (copyCharBtn) bindCopyButton(copyCharBtn, data.character);
}
function renderSymbol(container, data, config) {
  const symbolUrl = data.url ? `https://${config.domain}${data.url}` : `https://${config.domain}/symbols/${escapeHTML(data.slug)}/`;
  const keywordPills = data.keywords && data.keywords.length > 0 ? data.keywords.slice(0, 6).map((k) => `<span class="creativefyi-badge">${escapeHTML(k)}</span>`).join("") : "";
  container.innerHTML = `
    <div class="creativefyi-header">
      <div class="creativefyi-img" style="font-size:48px;line-height:1;background:transparent;border:none;"
           aria-label="${escapeHTML(data.name)}">${data.character}</div>
      <div class="creativefyi-header-text">
        <p class="creativefyi-header-title">${escapeHTML(data.name)}</p>
        <p class="creativefyi-header-subtitle">
          <code>${escapeHTML(data.codepoint)}</code>${data.category_name ? ` \xB7 ${escapeHTML(data.category_name)}` : ""}
        </p>
      </div>
    </div>
    <div class="creativefyi-body">
      <div class="creativefyi-kv-row">
        <span class="creativefyi-kv-key">Character</span>
        <span class="creativefyi-kv-val">
          <span style="font-size:20px;">${data.character}</span>
          <button class="creativefyi-copy-char-btn" aria-label="Copy symbol character">${copyIcon} Copy</button>
        </span>
      </div>
      ${data.html_entity ? `
      <div class="creativefyi-kv-row">
        <span class="creativefyi-kv-key">HTML Entity</span>
        <span class="creativefyi-kv-val">
          <code>${escapeHTML(data.html_entity)}</code>
          <button class="creativefyi-copy-entity-btn" aria-label="Copy HTML entity">${copyIcon} Copy</button>
        </span>
      </div>` : ""}
      ${data.block ? `<div class="creativefyi-kv-row"><span class="creativefyi-kv-key">Block</span><span class="creativefyi-kv-val">${escapeHTML(data.block)}</span></div>` : ""}
      ${data.general_category ? `<div class="creativefyi-kv-row"><span class="creativefyi-kv-key">Category</span><span class="creativefyi-kv-val">${escapeHTML(data.general_category)}</span></div>` : ""}
      ${keywordPills ? `<div class="creativefyi-pills-row">${keywordPills}</div>` : ""}
    </div>
    <div class="creativefyi-actions">
      <a class="creativefyi-link" href="${symbolUrl}" target="_blank" rel="noopener">
        View on ${escapeHTML(config.name)} ${externalLinkIcon}
      </a>
    </div>
    ${poweredByHTML(config)}
  `;
  const copyCharBtn = container.querySelector(".creativefyi-copy-char-btn");
  if (copyCharBtn) bindCopyButton(copyCharBtn, data.character);
  const copyEntityBtn = container.querySelector(".creativefyi-copy-entity-btn");
  if (copyEntityBtn && data.html_entity) bindCopyButton(copyEntityBtn, data.html_entity);
}
function renderUnicode(container, data, config) {
  const unicodeUrl = data.url ? `https://${config.domain}${data.url}` : `https://${config.domain}/characters/${escapeHTML(data.codepoint_hex)}/`;
  container.innerHTML = `
    <div class="creativefyi-header">
      <div class="creativefyi-img" style="font-size:48px;line-height:1;background:transparent;border:none;"
           aria-label="${escapeHTML(data.name)}">${data.character}</div>
      <div class="creativefyi-header-text">
        <p class="creativefyi-header-title">${escapeHTML(data.name)}</p>
        <p class="creativefyi-header-subtitle">
          <code>${escapeHTML(data.codepoint_hex)}</code>
        </p>
      </div>
    </div>
    <div class="creativefyi-body">
      <div class="creativefyi-kv-row">
        <span class="creativefyi-kv-key">Character</span>
        <span class="creativefyi-kv-val">
          <span style="font-size:20px;">${data.character}</span>
          <button class="creativefyi-copy-char-btn" aria-label="Copy character">${copyIcon} Copy</button>
        </span>
      </div>
      <div class="creativefyi-kv-row">
        <span class="creativefyi-kv-key">Codepoint</span>
        <span class="creativefyi-kv-val">
          <code>${escapeHTML(data.codepoint_hex)}</code>
          <button class="creativefyi-copy-btn" aria-label="Copy codepoint">${copyIcon} Copy</button>
        </span>
      </div>
      ${data.block_slug ? `<div class="creativefyi-kv-row"><span class="creativefyi-kv-key">Block</span><span class="creativefyi-kv-val">${escapeHTML(data.block_slug.replace(/-/g, " "))}</span></div>` : ""}
      ${data.script_slug ? `<div class="creativefyi-kv-row"><span class="creativefyi-kv-key">Script</span><span class="creativefyi-kv-val">${escapeHTML(data.script_slug.replace(/-/g, " "))}</span></div>` : ""}
      ${data.general_category ? `<div class="creativefyi-kv-row"><span class="creativefyi-kv-key">Category</span><span class="creativefyi-kv-val"><span class="creativefyi-badge">${escapeHTML(data.general_category)}</span></span></div>` : ""}
    </div>
    <div class="creativefyi-actions">
      <a class="creativefyi-link" href="${unicodeUrl}" target="_blank" rel="noopener">
        View on ${escapeHTML(config.name)} ${externalLinkIcon}
      </a>
    </div>
    ${poweredByHTML(config)}
  `;
  const copyCharBtn = container.querySelector(".creativefyi-copy-char-btn");
  if (copyCharBtn) bindCopyButton(copyCharBtn, data.character);
  const copyBtn = container.querySelector(".creativefyi-copy-btn");
  if (copyBtn) bindCopyButton(copyBtn, data.codepoint_hex);
}
function initEntityWidget(el, config) {
  var _a, _b, _c, _d, _e, _f;
  const dataset = el.dataset;
  const lang = (_a = dataset.lang) != null ? _a : "";
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "creativefyi-entity-widget");
  renderLoading(container);
  const params = {};
  if (lang) params.lang = lang;
  switch (config.site) {
    case "colorfyi": {
      const hex = dataset.hex ? dataset.hex.replace(/^#/, "").toLowerCase() : "";
      const slug = hex || dataset.slug || "";
      if (!slug) {
        renderError(container, "Missing data-slug or data-hex attribute.", config);
        return;
      }
      fetchAPI(config.apiBase, `colors/${slug}/`, params).then((data) => renderColor(container, data, config)).catch(() => renderError(container, `Color "${escapeHTML(slug)}" not found.`, config));
      break;
    }
    case "fontfyi": {
      const slug = (_b = dataset.slug) != null ? _b : "";
      if (!slug) {
        renderError(container, "Missing data-slug attribute.", config);
        return;
      }
      fetchAPI(config.apiBase, `fonts/${slug}/`, params).then((data) => renderFont(container, data, config)).catch(() => renderError(container, `Font "${escapeHTML(slug)}" not found.`, config));
      break;
    }
    case "emojifyi": {
      const slug = (_c = dataset.slug) != null ? _c : "";
      if (!slug) {
        renderError(container, "Missing data-slug attribute.", config);
        return;
      }
      fetchAPI(config.apiBase, `emojis/${slug}/`, params).then((data) => renderEmoji(container, data, config)).catch(() => renderError(container, `Emoji "${escapeHTML(slug)}" not found.`, config));
      break;
    }
    case "symbolfyi": {
      const slug = (_d = dataset.slug) != null ? _d : "";
      if (!slug) {
        renderError(container, "Missing data-slug attribute.", config);
        return;
      }
      fetchAPI(config.apiBase, `symbols/${slug}/`, params).then((data) => renderSymbol(container, data, config)).catch(() => renderError(container, `Symbol "${escapeHTML(slug)}" not found.`, config));
      break;
    }
    case "unicodefyi": {
      const codepoint = (_e = dataset.codepoint) != null ? _e : "";
      if (!codepoint) {
        renderError(container, 'Missing data-codepoint attribute (e.g., data-codepoint="U+0041").', config);
        return;
      }
      const encodedCp = codepoint.replace("+", "%2B");
      fetchAPI(config.apiBase, `characters/${encodedCp}/`, params).then((data) => renderUnicode(container, data, config)).catch(() => renderError(container, `Character "${escapeHTML(codepoint)}" not found.`, config));
      break;
    }
    default: {
      const slug = (_f = dataset.slug) != null ? _f : "";
      if (!slug) {
        renderError(container, "Missing data-slug attribute.", config);
        return;
      }
      fetchAPI(
        config.apiBase,
        `${config.entitySlug}/${slug}/`,
        params
      ).then((data) => {
        const entityUrl = data.url ? `https://${config.domain}${data.url}` : `https://${config.domain}/${config.entitySlug}/${escapeHTML(data.slug)}/`;
        container.innerHTML = `
            <div class="creativefyi-header">
              <div class="creativefyi-header-text">
                <p class="creativefyi-header-title">${escapeHTML(String(data.name))}</p>
              </div>
            </div>
            <div class="creativefyi-actions">
              <a class="creativefyi-link" href="${entityUrl}" target="_blank" rel="noopener">
                View on ${escapeHTML(config.name)} ${externalLinkIcon}
              </a>
            </div>
            ${poweredByHTML(config)}
          `;
      }).catch(() => renderError(container, `Entity "${escapeHTML(slug)}" not found.`, config));
    }
  }
}

// src/widgets/compare.ts
function escapeHTML2(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var COMPARE_FIELDS = {
  colorfyi: [
    ["Hex", "hex_value"],
    ["Source", "source"],
    ["R", "red"],
    ["G", "green"],
    ["B", "blue"]
  ],
  fontfyi: [
    ["Category", "category"],
    ["Subcategory", "subcategory"],
    ["Source", "source"],
    ["Variable", "is_variable"],
    ["Popularity Rank", "popularity_rank"]
  ],
  emojifyi: [
    ["Codepoint", "codepoint"],
    ["Category", "category"],
    ["CLDR Name", "cldr_name"]
  ],
  symbolfyi: [
    ["Codepoint", "codepoint"],
    ["Category", "category_name"],
    ["Block", "block"],
    ["General Category", "general_category"],
    ["HTML Entity", "html_entity"]
  ],
  unicodefyi: [
    ["Codepoint", "codepoint_hex"],
    ["Block", "block_slug"],
    ["Script", "script_slug"],
    ["General Category", "general_category"]
  ]
};
var DEFAULT_COMPARE_FIELDS = [
  ["Category", "category"],
  ["Slug", "slug"]
];
function formatValue(val) {
  if (val === null || val === void 0 || val === "") return "\u2014";
  if (typeof val === "boolean") return val ? "\u2713" : "\u2717";
  if (Array.isArray(val)) return val.join(", ");
  return String(val);
}
function buildEntityUrl(config, entity) {
  const url = entity.url;
  if (url) return `https://${config.domain}${url}`;
  return `https://${config.domain}/${config.entitySlug}/${escapeHTML2(entity.slug)}/`;
}
function initCompareWidget(el, config) {
  var _a, _b;
  const dataset = el.dataset;
  const slugsRaw = (_a = dataset.slugs) != null ? _a : "";
  const slugs = slugsRaw.split(",").map((s) => s.trim()).filter(Boolean);
  if (slugs.length < 2) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "creativefyi-compare-widget");
    renderError(container2, 'Provide at least 2 slugs in data-slugs="a,b"', config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "creativefyi-compare-widget");
  renderLoading(container);
  const params = {};
  const lang = (_b = dataset.lang) != null ? _b : "";
  if (lang) params.lang = lang;
  Promise.all(
    slugs.map(
      (slug) => fetchAPI(config.apiBase, `${config.entitySlug}/${slug}/`, params)
    )
  ).then((entities) => {
    var _a2;
    const fields = (_a2 = COMPARE_FIELDS[config.site]) != null ? _a2 : DEFAULT_COMPARE_FIELDS;
    const presentFields = fields.filter(
      ([, key]) => entities.some(
        (e) => e[key] !== null && e[key] !== void 0 && e[key] !== ""
      )
    );
    const colWidth = Math.floor(100 / (entities.length + 1));
    container.innerHTML = `
        <div class="creativefyi-header">
          <div class="creativefyi-header-text">
            <p class="creativefyi-header-title">Comparison</p>
            <p class="creativefyi-header-subtitle">${entities.length} items \xB7 ${escapeHTML2(config.name)}</p>
          </div>
        </div>
        <div class="creativefyi-compare-scroll">
          <table class="creativefyi-compare-table">
            <thead>
              <tr>
                <th class="creativefyi-compare-th creativefyi-compare-th--label" style="width:${colWidth}%">Field</th>
                ${entities.map(
      (e) => `
                  <th class="creativefyi-compare-th" style="width:${colWidth}%">
                    <a href="${buildEntityUrl(config, e)}" target="_blank" rel="noopener" class="creativefyi-compare-entity-link">
                      ${escapeHTML2(String(e.name))}
                      ${externalLinkIcon}
                    </a>
                  </th>`
    ).join("")}
              </tr>
            </thead>
            <tbody>
              ${presentFields.map(
      ([label, key]) => `
                <tr class="creativefyi-compare-row">
                  <td class="creativefyi-kv-key">${escapeHTML2(label)}</td>
                  ${entities.map((e) => {
        const val = escapeHTML2(formatValue(e[key]));
        return `<td class="creativefyi-compare-td">${val}</td>`;
      }).join("")}
                </tr>`
    ).join("")}
            </tbody>
          </table>
        </div>
        ${poweredByHTML(config)}
      `;
  }).catch(() => {
    renderError(container, "Failed to load comparison data.", config);
  });
}

// src/rich-snippets.ts
function injectDefinedTerm(data, domain, siteName) {
  if (document.querySelector('script[data-creativefyi-snippet="term"]')) return;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: data.name,
    description: data.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: `${siteName} Glossary`,
      url: `https://${domain}/glossary/`
    }
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-creativefyi-snippet", "term");
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}

// src/widgets/glossary.ts
function escapeHTML3(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function initGlossaryWidget(el, config) {
  var _a, _b;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "creativefyi-glossary-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "creativefyi-glossary-widget");
  renderLoading(container);
  const params = {};
  const lang = (_b = dataset.lang) != null ? _b : "";
  if (lang) params.lang = lang;
  fetchAPI(config.apiBase, `glossary/${slug}/`, params).then((data) => {
    renderGlossary(container, data, config);
    if (el.dataset.noSnippet !== "true") {
      injectDefinedTerm(
        { name: data.name, definition: data.definition },
        config.domain,
        config.name
      );
    }
  }).catch(() => {
    renderError(
      container,
      `Unable to load glossary term "${escapeHTML3(slug)}". Please try again later.`,
      config
    );
  });
}
function renderGlossary(container, data, config) {
  const termUrl = `https://${config.domain}/glossary/${escapeHTML3(data.slug)}/`;
  const glossaryUrl = `https://${config.domain}/glossary/`;
  const category = data.category ? escapeHTML3(data.category) : "";
  const relatedPills = data.related_terms && data.related_terms.length > 0 ? data.related_terms.map(
    (rt) => `<a class="creativefyi-pill" href="https://${config.domain}/glossary/${escapeHTML3(rt.slug)}/" target="_blank" rel="noopener">${escapeHTML3(rt.name)}</a>`
  ).join("") : "";
  container.innerHTML = `
    <div class="creativefyi-header">
      <div class="creativefyi-header-text">
        <p class="creativefyi-header-title">${escapeHTML3(data.name)}</p>
        <p class="creativefyi-header-subtitle">Glossary term${category ? ` \xB7 ${category}` : ""}</p>
      </div>
      ${category ? `<span class="creativefyi-badge">${category}</span>` : ""}
    </div>

    <div class="creativefyi-summary">
      ${escapeHTML3(data.definition)}
    </div>

    ${relatedPills ? `<div class="creativefyi-pills-row">${relatedPills}</div>` : ""}

    <div class="creativefyi-actions">
      <a class="creativefyi-link" href="${termUrl}" target="_blank" rel="noopener">
        ${escapeHTML3(data.name)} ${externalLinkIcon}
      </a>
      <a class="creativefyi-link" href="${glossaryUrl}" target="_blank" rel="noopener">
        Full glossary on ${escapeHTML3(config.name)} ${externalLinkIcon}
      </a>
    </div>

    ${poweredByHTML(config)}
  `;
}

// src/widgets/guide.ts
function escapeHTML4(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var SITES_WITH_GUIDES = /* @__PURE__ */ new Set(["symbolfyi", "unicodefyi"]);
function initGuideWidget(el, config) {
  var _a, _b;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "creativefyi-guide-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "creativefyi-guide-widget");
  if (!SITES_WITH_GUIDES.has(config.site)) {
    container.innerHTML = `
      <div class="creativefyi-header">
        <div class="creativefyi-header-text">
          <p class="creativefyi-header-title">Guides</p>
          <p class="creativefyi-header-subtitle">Creative FYI</p>
        </div>
      </div>
      <div class="creativefyi-summary">
        Guides are available on
        <a href="https://symbolfyi.com/guides/" target="_blank" rel="noopener">SymbolFYI</a>
        and
        <a href="https://unicodefyi.com/guides/" target="_blank" rel="noopener">UnicodeFYI</a>.
      </div>
      ${poweredByHTML(config)}
    `;
    return;
  }
  renderLoading(container);
  const params = {};
  const lang = (_b = dataset.lang) != null ? _b : "";
  if (lang) params.lang = lang;
  fetchAPI(config.apiBase, `guides/${slug}/`, params).then((guide) => {
    var _a2, _b2, _c, _d, _e, _f;
    const guideUrl = guide.url ? `https://${config.domain}${guide.url}` : `https://${config.domain}/guides/${escapeHTML4(guide.slug)}/`;
    const excerpt = (_b2 = (_a2 = guide.excerpt) != null ? _a2 : guide.description) != null ? _b2 : "";
    const readingTime = (_d = (_c = guide.reading_time_minutes) != null ? _c : guide.reading_time) != null ? _d : null;
    const category = (_f = (_e = guide.category_name) != null ? _e : guide.category) != null ? _f : null;
    container.innerHTML = `
        <div class="creativefyi-header">
          <div class="creativefyi-header-text">
            <div class="creativefyi-badges-row">
              ${category ? `<span class="creativefyi-badge">${escapeHTML4(category)}</span>` : ""}
              ${readingTime != null ? `<span class="creativefyi-badge creativefyi-badge--time">${escapeHTML4(String(readingTime))} min read</span>` : ""}
            </div>
            <p class="creativefyi-header-title">${escapeHTML4(String(guide.title))}</p>
          </div>
        </div>
        ${excerpt ? `<p class="creativefyi-summary">${escapeHTML4(excerpt)}</p>` : ""}
        <div class="creativefyi-actions">
          <a href="${guideUrl}" target="_blank" rel="noopener" class="creativefyi-link">
            Read guide on ${escapeHTML4(config.name)}
            ${externalLinkIcon}
          </a>
        </div>
        ${poweredByHTML(config)}
      `;
  }).catch(() => {
    renderError(container, `Guide "${escapeHTML4(slug)}" not found.`, config);
  });
}

// src/widgets/search.ts
function escapeHTML5(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var TYPE_LABELS = {
  color: "Color",
  font: "Font",
  emoji: "Emoji",
  symbol: "Symbol",
  character: "Character",
  glossary: "Glossary",
  guide: "Guide",
  faq: "FAQ"
};
var SEARCH_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
function initSearchWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const placeholder = (_a = dataset.placeholder) != null ? _a : `Search ${config.entityName}\u2026`;
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "creativefyi-search-widget");
  let isOpen = false;
  let query = "";
  let results = [];
  let selectedIndex = -1;
  let debounceTimer = null;
  container.innerHTML = `
    <div class="creativefyi-search-wrap">
      <div class="creativefyi-search-form">
        <span class="creativefyi-search-icon" aria-hidden="true">${SEARCH_ICON}</span>
        <input
          class="creativefyi-search-input"
          type="search"
          autocomplete="off"
          spellcheck="false"
          placeholder="${escapeHTML5(placeholder)}"
          aria-label="Search ${escapeHTML5(config.name)}"
          aria-autocomplete="list"
          aria-expanded="false"
          role="combobox"
        >
      </div>
      <div class="creativefyi-search-dropdown" role="listbox" hidden></div>
    </div>
    ${poweredByHTML(config)}
  `;
  const input = container.querySelector(".creativefyi-search-input");
  const dropdown = container.querySelector(".creativefyi-search-dropdown");
  function getAllItems() {
    return Array.from(dropdown.querySelectorAll(".creativefyi-search-result-item"));
  }
  function setSelectedIndex(idx) {
    const items = getAllItems();
    items.forEach((item, i) => {
      if (i === idx) {
        item.classList.add("creativefyi-search-result-item--active");
      } else {
        item.classList.remove("creativefyi-search-result-item--active");
      }
    });
    selectedIndex = idx;
  }
  function openDropdown() {
    isOpen = true;
    dropdown.hidden = false;
    input.setAttribute("aria-expanded", "true");
  }
  function closeDropdown() {
    isOpen = false;
    dropdown.hidden = true;
    input.setAttribute("aria-expanded", "false");
    selectedIndex = -1;
  }
  function renderDropdown() {
    var _a2, _b, _c;
    if (results.length === 0) {
      dropdown.innerHTML = `
        <div class="creativefyi-search-empty">
          No results for <strong>${escapeHTML5(query)}</strong>
        </div>
      `;
      return;
    }
    let html = "";
    for (const item of results) {
      const typeLabel = item.type ? (_a2 = TYPE_LABELS[item.type]) != null ? _a2 : item.type : null;
      const desc = (_c = (_b = item.description) != null ? _b : item.excerpt) != null ? _c : "";
      const href = item.url ? `https://${config.domain}${item.url}` : `https://${config.domain}/${config.entitySlug}/${escapeHTML5(item.slug)}/`;
      html += `
        <a
          class="creativefyi-search-result-item"
          href="${href}"
          target="_blank"
          rel="noopener"
          role="option"
          tabindex="-1"
        >
          <div class="creativefyi-search-result-row">
            <span class="creativefyi-result-title">${escapeHTML5(item.name)}</span>
            ${typeLabel ? `<span class="creativefyi-badge">${escapeHTML5(typeLabel)}</span>` : ""}
          </div>
          ${desc ? `<div class="creativefyi-result-meta">${escapeHTML5(desc)}</div>` : ""}
        </a>
      `;
    }
    dropdown.innerHTML = html;
  }
  async function doSearch(q) {
    var _a2;
    if (!q.trim()) {
      closeDropdown();
      return;
    }
    const searchUrl = `https://${config.domain}/api/v1/search/?q=${encodeURIComponent(q)}`;
    try {
      const response = await fetch(searchUrl, {
        headers: { Accept: "application/json" }
      });
      if (!response.ok) throw new Error(`Search failed: ${response.status}`);
      const data = await response.json();
      results = (_a2 = data.results) != null ? _a2 : [];
    } catch (e) {
      results = [];
    }
    renderDropdown();
    openDropdown();
    setSelectedIndex(-1);
  }
  input.addEventListener("input", () => {
    query = input.value;
    if (debounceTimer !== null) {
      clearTimeout(debounceTimer);
    }
    if (!query.trim()) {
      closeDropdown();
      return;
    }
    debounceTimer = setTimeout(() => {
      void doSearch(query);
    }, 300);
  });
  input.addEventListener("keydown", (e) => {
    if (!isOpen) return;
    const items = getAllItems();
    const total = items.length;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(selectedIndex < total - 1 ? selectedIndex + 1 : 0);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : total - 1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && items[selectedIndex]) {
        items[selectedIndex].click();
      } else {
        const siteSearchUrl = `https://${config.domain}${config.searchPath}?q=${encodeURIComponent(query)}`;
        window.open(siteSearchUrl, "_blank", "noopener");
      }
    } else if (e.key === "Escape") {
      closeDropdown();
      input.blur();
    }
  });
  document.addEventListener("click", (e) => {
    if (!isOpen) return;
    if (!el.contains(e.target)) {
      closeDropdown();
    }
  });
}

// src/tools/glossary-tooltip.ts
var CACHE_PREFIX = "creativefyi_tooltip_";
var termCache = {};
async function fetchTerm(apiBase, slug) {
  const cached = termCache[slug];
  if (cached && cached !== "loading" && cached !== "error") return cached;
  if (cached === "error") return null;
  try {
    const stored = sessionStorage.getItem(`${CACHE_PREFIX}${slug}`);
    if (stored) {
      const data = JSON.parse(stored);
      termCache[slug] = data;
      return data;
    }
  } catch (e) {
  }
  termCache[slug] = "loading";
  try {
    const res = await fetch(`${apiBase}glossary/${encodeURIComponent(slug)}/`, {
      headers: { Accept: "application/json" }
    });
    if (!res.ok) {
      termCache[slug] = "error";
      return null;
    }
    const data = await res.json();
    termCache[slug] = data;
    try {
      sessionStorage.setItem(`${CACHE_PREFIX}${slug}`, JSON.stringify(data));
    } catch (e) {
    }
    return data;
  } catch (e) {
    termCache[slug] = "error";
    return null;
  }
}
function createTooltipEl(config) {
  const div = document.createElement("div");
  div.style.cssText = `
    position: fixed;
    z-index: 999999;
    max-width: 320px;
    padding: 10px 13px;
    background: #1e293b;
    color: #f1f5f9;
    border-radius: 7px;
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    font-size: 13px;
    line-height: 1.55;
    box-shadow: 0 4px 16px rgba(0,0,0,0.25);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s;
    border: 1px solid rgba(255,255,255,0.1);
  `;
  div.setAttribute("role", "tooltip");
  div.setAttribute("aria-live", "polite");
  div.dataset.owner = config.site;
  document.body.appendChild(div);
  return div;
}
var sharedTooltip = null;
var currentAnchor = null;
var hideTimer = null;
function getTooltip(config) {
  if (!sharedTooltip) {
    sharedTooltip = createTooltipEl(config);
  }
  return sharedTooltip;
}
function positionTooltip(tip, anchor) {
  const rect = anchor.getBoundingClientRect();
  const tipW = 320;
  const tipH = tip.offsetHeight || 80;
  const gap = 8;
  let top = rect.top - tipH - gap;
  let left = rect.left;
  if (top < 8) top = rect.bottom + gap;
  if (left + tipW > window.innerWidth - 8) left = window.innerWidth - tipW - 8;
  if (left < 8) left = 8;
  tip.style.top = `${top}px`;
  tip.style.left = `${left}px`;
}
function showTooltip(tip, term, anchor, config) {
  const readMoreUrl = `https://${config.domain}/glossary/${encodeURIComponent(term.slug)}/`;
  tip.innerHTML = `
    <strong style="display:block;margin-bottom:4px;font-size:13px;color:#f8fafc">${escapeHTML6(term.name)}</strong>
    <span style="color:#cbd5e1">${escapeHTML6(term.definition.length > 140 ? term.definition.slice(0, 140) + "\u2026" : term.definition)}</span>
    <a href="${readMoreUrl}" target="_blank" rel="noopener" style="
      display:inline-block; margin-top:6px; font-size:11px; color:#93c5fd;
      text-decoration:none; pointer-events:auto;
    ">Read more \u2192</a>
  `;
  positionTooltip(tip, anchor);
  tip.style.opacity = "1";
  tip.style.pointerEvents = "auto";
}
function hideTooltip(tip) {
  tip.style.opacity = "0";
  tip.style.pointerEvents = "none";
  currentAnchor = null;
}
function escapeHTML6(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function applyTermStyle(span) {
  span.style.cssText += `
    cursor: help;
    border-bottom: 1px dotted currentColor;
    text-decoration: none;
  `;
  span.setAttribute("tabindex", "0");
  span.setAttribute("role", "button");
}
function initGlossaryTooltipTool(el, config) {
  var _a;
  const span = el;
  const slug = (_a = span.dataset.slug) != null ? _a : "";
  if (!slug) return;
  applyTermStyle(span);
  const tip = getTooltip(config);
  async function onShow() {
    if (currentAnchor === span) return;
    currentAnchor = span;
    if (hideTimer !== null) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
    tip.textContent = "Loading\u2026";
    positionTooltip(tip, span);
    tip.style.opacity = "1";
    tip.style.pointerEvents = "none";
    const term = await fetchTerm(config.apiBase, slug);
    if (currentAnchor !== span) return;
    if (term) {
      showTooltip(tip, term, span, config);
    } else {
      hideTooltip(tip);
    }
  }
  function onHide() {
    hideTimer = setTimeout(() => {
      if (currentAnchor === span) hideTooltip(tip);
    }, 200);
  }
  span.addEventListener("mouseenter", () => {
    void onShow();
  });
  span.addEventListener("mouseleave", onHide);
  span.addEventListener("focus", () => {
    void onShow();
  });
  span.addEventListener("blur", onHide);
  span.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hideTooltip(tip);
  });
}

// src/compute/color.ts
function hexToRgb(hex) {
  const h = hex.replace(/^#/, "").toUpperCase();
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}
function rgbToHex(r, g, b) {
  const toHex = (v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0").toUpperCase();
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
function rgbToHsl(r, g, b) {
  const r1 = r / 255;
  const g1 = g / 255;
  const b1 = b / 255;
  const cmax = Math.max(r1, g1, b1);
  const cmin = Math.min(r1, g1, b1);
  const delta = cmax - cmin;
  const ll = (cmax + cmin) / 2;
  let h = 0;
  let s = 0;
  if (delta !== 0) {
    s = delta / (1 - Math.abs(2 * ll - 1));
    if (cmax === r1) {
      h = 60 * ((g1 - b1) / delta % 6);
    } else if (cmax === g1) {
      h = 60 * ((b1 - r1) / delta + 2);
    } else {
      h = 60 * ((r1 - g1) / delta + 4);
    }
  }
  if (h < 0) h += 360;
  return [round1(h), round1(s * 100), round1(ll * 100)];
}
function hslToRgb(h, s, l) {
  const s1 = s / 100;
  const l1 = l / 100;
  const c = (1 - Math.abs(2 * l1 - 1)) * s1;
  const x = c * (1 - Math.abs(h / 60 % 2 - 1));
  const m = l1 - c / 2;
  let r1, g1, b1;
  if (h < 60) {
    [r1, g1, b1] = [c, x, 0];
  } else if (h < 120) {
    [r1, g1, b1] = [x, c, 0];
  } else if (h < 180) {
    [r1, g1, b1] = [0, c, x];
  } else if (h < 240) {
    [r1, g1, b1] = [0, x, c];
  } else if (h < 300) {
    [r1, g1, b1] = [x, 0, c];
  } else {
    [r1, g1, b1] = [c, 0, x];
  }
  return [Math.round((r1 + m) * 255), Math.round((g1 + m) * 255), Math.round((b1 + m) * 255)];
}
function rgbToHsv(r, g, b) {
  const r1 = r / 255;
  const g1 = g / 255;
  const b1 = b / 255;
  const cmax = Math.max(r1, g1, b1);
  const cmin = Math.min(r1, g1, b1);
  const delta = cmax - cmin;
  let h = 0;
  if (delta !== 0) {
    if (cmax === r1) {
      h = 60 * ((g1 - b1) / delta % 6);
    } else if (cmax === g1) {
      h = 60 * ((b1 - r1) / delta + 2);
    } else {
      h = 60 * ((r1 - g1) / delta + 4);
    }
  }
  if (h < 0) h += 360;
  const s = cmax === 0 ? 0 : delta / cmax;
  return [round1(h), round1(s * 100), round1(cmax * 100)];
}
function rgbToCmyk(r, g, b) {
  if (r === 0 && g === 0 && b === 0) return [0, 0, 0, 100];
  const r1 = r / 255;
  const g1 = g / 255;
  const b1 = b / 255;
  const k = 1 - Math.max(r1, g1, b1);
  const c = (1 - r1 - k) / (1 - k);
  const m = (1 - g1 - k) / (1 - k);
  const y = (1 - b1 - k) / (1 - k);
  return [round1(c * 100), round1(m * 100), round1(y * 100), round1(k * 100)];
}
function rgbToLab(r, g, b) {
  const linearize = (v) => {
    const s = v / 255;
    return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  const rl = linearize(r);
  const gl = linearize(g);
  const bl = linearize(b);
  const x = rl * 0.4124564 + gl * 0.3575761 + bl * 0.1804375;
  const y = rl * 0.2126729 + gl * 0.7151522 + bl * 0.072175;
  const z = rl * 0.0193339 + gl * 0.119192 + bl * 0.9503041;
  const xn = 0.95047;
  const yn = 1;
  const zn = 1.08883;
  const f = (t) => t > 8856e-6 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116;
  const fx = f(x / xn);
  const fy = f(y / yn);
  const fz = f(z / zn);
  return [round2(116 * fy - 16), round2(500 * (fx - fy)), round2(200 * (fy - fz))];
}
function rgbToOklch(r, g, b) {
  const linearize = (v) => {
    const s2 = v / 255;
    return s2 <= 0.04045 ? s2 / 12.92 : Math.pow((s2 + 0.055) / 1.055, 2.4);
  };
  const rl = linearize(r);
  const gl = linearize(g);
  const bl = linearize(b);
  const ll = 0.4122214708 * rl + 0.5363325363 * gl + 0.0514459929 * bl;
  const m = 0.2119034982 * rl + 0.6806995451 * gl + 0.1073969566 * bl;
  const s = 0.0883024619 * rl + 0.2817188376 * gl + 0.6299787005 * bl;
  const cbrt = (v) => v === 0 ? 0 : Math.sign(v) * Math.pow(Math.abs(v), 1 / 3);
  const l_ = cbrt(ll);
  const m_ = cbrt(m);
  const s_ = cbrt(s);
  const okL = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_;
  const okA = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_;
  const okB = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_;
  const c = Math.sqrt(okA * okA + okB * okB);
  const h = (Math.atan2(okB, okA) * 180 / Math.PI + 360) % 360;
  return [round4(okL), round4(c), round1(h)];
}
function _rotateHue(hex, degrees) {
  const [r, g, b] = hexToRgb(hex);
  const [h, s, l] = rgbToHsl(r, g, b);
  const newH = ((h + degrees) % 360 + 360) % 360;
  const [nr, ng, nb] = hslToRgb(newH, s, l);
  return rgbToHex(nr, ng, nb);
}
function complementary(hex) {
  return [normalizeHex(hex), _rotateHue(hex, 180)];
}
function analogous(hex) {
  return [_rotateHue(hex, -30), normalizeHex(hex), _rotateHue(hex, 30)];
}
function triadic(hex) {
  return [normalizeHex(hex), _rotateHue(hex, 120), _rotateHue(hex, 240)];
}
function splitComplementary(hex) {
  return [normalizeHex(hex), _rotateHue(hex, 150), _rotateHue(hex, 210)];
}
function tetradic(hex) {
  return [normalizeHex(hex), _rotateHue(hex, 90), _rotateHue(hex, 180), _rotateHue(hex, 270)];
}
function relativeLuminance(r, g, b) {
  const linearize = (v) => {
    const s = v / 255;
    return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b);
}
function contrastRatio(hex1, hex2) {
  const lum1 = relativeLuminance(...hexToRgb(hex1));
  const lum2 = relativeLuminance(...hexToRgb(hex2));
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return round2((lighter + 0.05) / (darker + 0.05));
}
function wcagCompliance(ratio) {
  return {
    aa: ratio >= 4.5,
    aaLarge: ratio >= 3,
    aaa: ratio >= 7,
    aaaLarge: ratio >= 4.5
  };
}
var PROTANOPIA_MATRIX = [
  [0.56667, 0.43333, 0],
  [0.55833, 0.44167, 0],
  [0, 0.24167, 0.75833]
];
var DEUTERANOPIA_MATRIX = [
  [0.625, 0.375, 0],
  [0.7, 0.3, 0],
  [0, 0.3, 0.7]
];
var TRITANOPIA_MATRIX = [
  [0.95, 0.05, 0],
  [0, 0.43333, 0.56667],
  [0, 0.475, 0.525]
];
function _applyMatrix(r, g, b, matrix) {
  const nr = matrix[0][0] * r + matrix[0][1] * g + matrix[0][2] * b;
  const ng = matrix[1][0] * r + matrix[1][1] * g + matrix[1][2] * b;
  const nb = matrix[2][0] * r + matrix[2][1] * g + matrix[2][2] * b;
  return [clamp255(nr), clamp255(ng), clamp255(nb)];
}
function simulateColorBlindness(hex) {
  const [r, g, b] = hexToRgb(hex);
  return {
    protanopia: rgbToHex(..._applyMatrix(r, g, b, PROTANOPIA_MATRIX)),
    deuteranopia: rgbToHex(..._applyMatrix(r, g, b, DEUTERANOPIA_MATRIX)),
    tritanopia: rgbToHex(..._applyMatrix(r, g, b, TRITANOPIA_MATRIX))
  };
}
var SHADE_LEVELS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
var LIGHTNESS_MAP = {
  50: 97,
  100: 93,
  200: 86,
  300: 76,
  400: 63,
  500: 50,
  600: 40,
  700: 32,
  800: 25,
  900: 19,
  950: 12
};
function lightnessScale(hex, steps) {
  var _a;
  const [r, g, b] = hexToRgb(hex);
  const [h, s] = rgbToHsl(r, g, b);
  const levels = steps ? SHADE_LEVELS.slice(0, steps) : SHADE_LEVELS;
  const shades = [];
  for (const level of levels) {
    const targetL = (_a = LIGHTNESS_MAP[level]) != null ? _a : 50;
    let satFactor = 1;
    if (level <= 100) satFactor = 0.85;
    else if (level >= 900) satFactor = 0.9;
    const adjS = Math.min(s * satFactor, 100);
    const [nr, ng, nb] = hslToRgb(h, adjS, targetL);
    shades.push({ step: level, hex: rgbToHex(nr, ng, nb) });
  }
  return shades;
}
function round1(n) {
  return Math.round(n * 10) / 10;
}
function round2(n) {
  return Math.round(n * 100) / 100;
}
function round4(n) {
  return Math.round(n * 1e4) / 1e4;
}
function clamp255(v) {
  return Math.max(0, Math.min(255, Math.round(v)));
}
function normalizeHex(hex) {
  const [r, g, b] = hexToRgb(hex);
  return rgbToHex(r, g, b);
}

// src/tools/color-converter.ts
function isValidHex(hex) {
  const h = hex.replace(/^#/, "");
  return /^[0-9A-Fa-f]{6}$/.test(h) || /^[0-9A-Fa-f]{3}$/.test(h);
}
function expandShortHex(hex) {
  const h = hex.replace(/^#/, "");
  if (h.length === 3) {
    return h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  }
  return h.toUpperCase();
}
function buildToolCSS() {
  return `
    .creativefyi-tool-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 16px 10px;
      border-bottom: 1px solid var(--border);
    }
    .creativefyi-tool-swatch {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      border: 1px solid var(--border);
      flex-shrink: 0;
      transition: background-color 0.15s;
    }
    .creativefyi-tool-hex-input {
      flex: 1;
      padding: 8px 12px;
      border: 1px solid var(--input-border);
      border-radius: 6px;
      background: var(--input-bg);
      color: var(--text);
      font-size: 14px;
      font-family: ui-monospace, 'Cascadia Code', 'Fira Code', monospace;
      font-weight: 600;
      outline: none;
      transition: border-color 0.15s;
      text-transform: uppercase;
    }
    .creativefyi-tool-hex-input:focus {
      border-color: var(--input-focus);
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
    }
    .creativefyi-tool-hex-input.invalid {
      border-color: #ef4444;
      box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
    }
    .creativefyi-tool-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1px;
      background: var(--border);
      margin: 0;
    }
    .creativefyi-tool-cell {
      background: var(--bg);
      padding: 10px 14px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .creativefyi-tool-cell-label {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--muted);
    }
    .creativefyi-tool-cell-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
    }
    .creativefyi-tool-cell-value {
      font-size: 12px;
      font-family: ui-monospace, 'Cascadia Code', 'Fira Code', monospace;
      color: var(--text);
      word-break: break-all;
      flex: 1;
    }
    .creativefyi-tool-copy-btn {
      background: var(--copy-bg);
      color: var(--muted);
      border: none;
      border-radius: 4px;
      padding: 3px 7px;
      font-size: 10px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 3px;
      transition: background 0.15s, color 0.15s;
      font-family: inherit;
      flex-shrink: 0;
      white-space: nowrap;
    }
    .creativefyi-tool-copy-btn:hover {
      background: var(--copy-hover);
      color: var(--text);
    }
    .creativefyi-tool-copy-btn svg {
      width: 10px;
      height: 10px;
    }
    .creativefyi-tool-error {
      padding: 4px 16px 8px;
      font-size: 11px;
      color: #ef4444;
    }
  `;
}
function computeConversions(hexRaw) {
  if (!isValidHex(hexRaw)) return null;
  const full = expandShortHex(hexRaw);
  const [r, g, b] = hexToRgb(full);
  const [rh, rs, rl] = rgbToHsl(r, g, b);
  const [rc, rm, ry, rk] = rgbToCmyk(r, g, b);
  const [ll, la, lbv] = rgbToLab(r, g, b);
  const [ol, oc, oh] = rgbToOklch(r, g, b);
  const [hh, hs, hv] = rgbToHsv(r, g, b);
  return {
    hex: `#${full}`,
    rgb: `rgb(${r}, ${g}, ${b})`,
    hsl: `hsl(${rh}\xB0, ${rs}%, ${rl}%)`,
    cmyk: `cmyk(${rc}%, ${rm}%, ${ry}%, ${rk}%)`,
    oklch: `oklch(${ol}, ${oc}, ${oh}\xB0)`,
    lab: `lab(${ll}, ${la}, ${lbv})`,
    hsv: `hsv(${hh}\xB0, ${hs}%, ${hv}%)`
  };
}
function renderConversions(container, data, config) {
  const swatchEl = container.querySelector(".creativefyi-tool-swatch");
  const gridEl = container.querySelector(".creativefyi-tool-grid");
  const errorEl = container.querySelector(".creativefyi-tool-error");
  const inputEl = container.querySelector(".creativefyi-tool-hex-input");
  if (swatchEl) swatchEl.style.backgroundColor = data.hex;
  if (inputEl) inputEl.classList.remove("invalid");
  if (errorEl) errorEl.textContent = "";
  if (!gridEl) return;
  const spaces = [
    { label: "RGB", value: data.rgb },
    { label: "HSL", value: data.hsl },
    { label: "CMYK", value: data.cmyk },
    { label: "OKLCH", value: data.oklch },
    { label: "Lab", value: data.lab },
    { label: "HSV", value: data.hsv }
  ];
  gridEl.innerHTML = spaces.map(({ label, value }) => `
      <div class="creativefyi-tool-cell">
        <span class="creativefyi-tool-cell-label">${label}</span>
        <div class="creativefyi-tool-cell-row">
          <span class="creativefyi-tool-cell-value">${value}</span>
          <button class="creativefyi-tool-copy-btn" data-copy="${value}" aria-label="Copy ${label}">${copyIcon} Copy</button>
        </div>
      </div>
    `).join("");
  gridEl.querySelectorAll(".creativefyi-tool-copy-btn").forEach((btn) => {
    var _a;
    const text = (_a = btn.getAttribute("data-copy")) != null ? _a : "";
    bindCopyButton(btn, text);
  });
}
function initColorConverterTool(el, config) {
  var _a;
  const dataset = el.dataset;
  const initialHex = ((_a = dataset.hex) != null ? _a : "FF6B35").replace(/^#/, "");
  const shadow = createShadow(el, config);
  const style = document.createElement("style");
  style.textContent = buildToolCSS();
  shadow.appendChild(style);
  const container = createWidgetRoot(shadow, el, "creativefyi-converter-tool");
  container.innerHTML = `
    <div class="creativefyi-tool-header">
      <div class="creativefyi-tool-swatch" style="background-color:#${initialHex.toUpperCase()};"></div>
      <input
        class="creativefyi-tool-hex-input creativefyi-search-input"
        type="text"
        value="#${initialHex.toUpperCase()}"
        maxlength="7"
        spellcheck="false"
        aria-label="Hex color input"
        placeholder="#FF6B35"
      >
    </div>
    <div class="creativefyi-tool-error"></div>
    <div class="creativefyi-tool-grid"></div>
    ${poweredByHTML(config)}
  `;
  const inputEl = container.querySelector(".creativefyi-tool-hex-input");
  const swatchEl = container.querySelector(".creativefyi-tool-swatch");
  const errorEl = container.querySelector(".creativefyi-tool-error");
  function update(rawValue) {
    const stripped = rawValue.replace(/^#/, "");
    const data = computeConversions(stripped);
    if (data) {
      swatchEl.style.backgroundColor = data.hex;
      inputEl.classList.remove("invalid");
      errorEl.textContent = "";
      renderConversions(container, data, config);
    } else {
      inputEl.classList.add("invalid");
      errorEl.textContent = "Enter a valid hex color (e.g. #FF6B35)";
      const gridEl = container.querySelector(".creativefyi-tool-grid");
      if (gridEl) gridEl.innerHTML = "";
    }
  }
  update(initialHex);
  inputEl.addEventListener("input", () => {
    update(inputEl.value);
  });
}

// src/tools/contrast-checker.ts
function isValidHex2(hex) {
  const h = hex.replace(/^#/, "");
  return /^[0-9A-Fa-f]{6}$/.test(h) || /^[0-9A-Fa-f]{3}$/.test(h);
}
function expandShortHex2(hex) {
  const h = hex.replace(/^#/, "");
  if (h.length === 3) {
    return (h[0] + h[0] + h[1] + h[1] + h[2] + h[2]).toUpperCase();
  }
  return h.toUpperCase();
}
function buildToolCSS2() {
  return `
    .creativefyi-contrast-inputs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1px;
      background: var(--border);
      border-bottom: 1px solid var(--border);
    }
    .creativefyi-contrast-input-group {
      background: var(--bg);
      padding: 12px 14px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .creativefyi-contrast-input-label {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--muted);
    }
    .creativefyi-contrast-input-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .creativefyi-contrast-swatch {
      width: 28px;
      height: 28px;
      border-radius: 5px;
      border: 1px solid var(--border);
      flex-shrink: 0;
      transition: background-color 0.15s;
    }
    .creativefyi-contrast-hex-input {
      flex: 1;
      padding: 6px 10px;
      border: 1px solid var(--input-border);
      border-radius: 5px;
      background: var(--input-bg);
      color: var(--text);
      font-size: 12px;
      font-family: ui-monospace, 'Cascadia Code', 'Fira Code', monospace;
      font-weight: 600;
      outline: none;
      text-transform: uppercase;
      transition: border-color 0.15s;
      min-width: 0;
    }
    .creativefyi-contrast-hex-input:focus {
      border-color: var(--input-focus);
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
    }
    .creativefyi-contrast-hex-input.invalid {
      border-color: #ef4444;
    }
    .creativefyi-contrast-ratio-block {
      padding: 16px;
      text-align: center;
      border-bottom: 1px solid var(--border);
    }
    .creativefyi-contrast-ratio-value {
      font-size: 32px;
      font-weight: 800;
      color: var(--text);
      line-height: 1;
      font-variant-numeric: tabular-nums;
      letter-spacing: -0.02em;
    }
    .creativefyi-contrast-ratio-label {
      font-size: 11px;
      color: var(--muted);
      margin-top: 4px;
    }
    .creativefyi-wcag-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1px;
      background: var(--border);
      border-bottom: 1px solid var(--border);
    }
    .creativefyi-wcag-cell {
      background: var(--bg);
      padding: 10px 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }
    .creativefyi-wcag-cell-label {
      font-size: 12px;
      color: var(--text);
      font-weight: 500;
    }
    .creativefyi-wcag-cell-sub {
      display: block;
      font-size: 10px;
      color: var(--muted);
      font-weight: 400;
    }
    .creativefyi-wcag-badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 11px;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 4px;
      flex-shrink: 0;
    }
    .creativefyi-wcag-badge.pass {
      background: #dcfce7;
      color: #166534;
    }
    .creativefyi-wcag-badge.fail {
      background: #fee2e2;
      color: #991b1b;
    }
    .creativefyi-widget[data-theme="dark"] .creativefyi-wcag-badge.pass {
      background: #14532d;
      color: #86efac;
    }
    .creativefyi-widget[data-theme="dark"] .creativefyi-wcag-badge.fail {
      background: #7f1d1d;
      color: #fca5a5;
    }
    .creativefyi-contrast-preview {
      padding: 14px 16px;
      border-radius: 6px;
      margin: 12px 16px;
      text-align: center;
      transition: background-color 0.15s, color 0.15s;
    }
    .creativefyi-contrast-preview-text {
      font-size: 15px;
      font-weight: 600;
      line-height: 1.4;
    }
    .creativefyi-contrast-preview-sub {
      font-size: 11px;
      margin-top: 4px;
      opacity: 0.8;
    }
  `;
}
function passFailBadge(pass) {
  const cls = pass ? "pass" : "fail";
  const icon = pass ? "\u2713" : "\u2717";
  const label = pass ? "Pass" : "Fail";
  return `<span class="creativefyi-wcag-badge ${cls}">${icon} ${label}</span>`;
}
function updateUI(container, fg, bg) {
  const fgValid = isValidHex2(fg);
  const bgValid = isValidHex2(bg);
  const ratioBlock = container.querySelector(".creativefyi-contrast-ratio-value");
  const wcagGrid = container.querySelector(".creativefyi-wcag-grid");
  const preview = container.querySelector(".creativefyi-contrast-preview");
  const previewText = container.querySelector(".creativefyi-contrast-preview-text");
  if (!fgValid || !bgValid) {
    if (ratioBlock) ratioBlock.textContent = "\u2014";
    if (wcagGrid) wcagGrid.innerHTML = "";
    return;
  }
  const fgFull = `#${expandShortHex2(fg)}`;
  const bgFull = `#${expandShortHex2(bg)}`;
  const ratio = contrastRatio(fgFull, bgFull);
  const compliance = wcagCompliance(ratio);
  if (ratioBlock) ratioBlock.textContent = `${ratio.toFixed(2)}:1`;
  if (wcagGrid) {
    wcagGrid.innerHTML = `
      <div class="creativefyi-wcag-cell">
        <div>
          <span class="creativefyi-wcag-cell-label">AA Normal</span>
          <span class="creativefyi-wcag-cell-sub">\u2265 4.5:1 \xB7 Body text</span>
        </div>
        ${passFailBadge(compliance.aa)}
      </div>
      <div class="creativefyi-wcag-cell">
        <div>
          <span class="creativefyi-wcag-cell-label">AA Large</span>
          <span class="creativefyi-wcag-cell-sub">\u2265 3.0:1 \xB7 18pt+</span>
        </div>
        ${passFailBadge(compliance.aaLarge)}
      </div>
      <div class="creativefyi-wcag-cell">
        <div>
          <span class="creativefyi-wcag-cell-label">AAA Normal</span>
          <span class="creativefyi-wcag-cell-sub">\u2265 7.0:1 \xB7 Enhanced</span>
        </div>
        ${passFailBadge(compliance.aaa)}
      </div>
      <div class="creativefyi-wcag-cell">
        <div>
          <span class="creativefyi-wcag-cell-label">AAA Large</span>
          <span class="creativefyi-wcag-cell-sub">\u2265 4.5:1 \xB7 Enhanced</span>
        </div>
        ${passFailBadge(compliance.aaaLarge)}
      </div>
    `;
  }
  if (preview) {
    preview.style.backgroundColor = bgFull;
    preview.style.color = fgFull;
  }
  if (previewText) {
    previewText.textContent = "Sample text preview \u2014 The quick brown fox";
  }
}
function initContrastCheckerTool(el, config) {
  var _a, _b;
  const dataset = el.dataset;
  const initialFg = ((_a = dataset.fg) != null ? _a : "FFFFFF").replace(/^#/, "");
  const initialBg = ((_b = dataset.bg) != null ? _b : "8B5CF6").replace(/^#/, "");
  const shadow = createShadow(el, config);
  const style = document.createElement("style");
  style.textContent = buildToolCSS2();
  shadow.appendChild(style);
  const container = createWidgetRoot(shadow, el, "creativefyi-contrast-tool");
  container.innerHTML = `
    <div class="creativefyi-contrast-inputs">
      <div class="creativefyi-contrast-input-group">
        <span class="creativefyi-contrast-input-label">Foreground</span>
        <div class="creativefyi-contrast-input-row">
          <div class="creativefyi-contrast-swatch creativefyi-fg-swatch" style="background-color:#${initialFg.toUpperCase()};"></div>
          <input
            class="creativefyi-contrast-hex-input creativefyi-fg-input"
            type="text"
            value="#${initialFg.toUpperCase()}"
            maxlength="7"
            spellcheck="false"
            aria-label="Foreground color"
          >
        </div>
      </div>
      <div class="creativefyi-contrast-input-group">
        <span class="creativefyi-contrast-input-label">Background</span>
        <div class="creativefyi-contrast-input-row">
          <div class="creativefyi-contrast-swatch creativefyi-bg-swatch" style="background-color:#${initialBg.toUpperCase()};"></div>
          <input
            class="creativefyi-contrast-hex-input creativefyi-bg-input"
            type="text"
            value="#${initialBg.toUpperCase()}"
            maxlength="7"
            spellcheck="false"
            aria-label="Background color"
          >
        </div>
      </div>
    </div>
    <div class="creativefyi-contrast-ratio-block">
      <div class="creativefyi-contrast-ratio-value">\u2014</div>
      <div class="creativefyi-contrast-ratio-label">Contrast Ratio (WCAG 2.1)</div>
    </div>
    <div class="creativefyi-wcag-grid"></div>
    <div class="creativefyi-contrast-preview">
      <div class="creativefyi-contrast-preview-text">Sample text preview \u2014 The quick brown fox</div>
      <div class="creativefyi-contrast-preview-sub">Preview of FG on BG</div>
    </div>
    ${poweredByHTML(config)}
  `;
  const fgInput = container.querySelector(".creativefyi-fg-input");
  const bgInput = container.querySelector(".creativefyi-bg-input");
  const fgSwatch = container.querySelector(".creativefyi-fg-swatch");
  const bgSwatch = container.querySelector(".creativefyi-bg-swatch");
  let currentFg = initialFg;
  let currentBg = initialBg;
  function refresh() {
    updateUI(container, currentFg, currentBg);
  }
  fgInput.addEventListener("input", () => {
    const raw = fgInput.value.replace(/^#/, "");
    currentFg = raw;
    if (isValidHex2(raw)) {
      fgSwatch.style.backgroundColor = `#${expandShortHex2(raw)}`;
      fgInput.classList.remove("invalid");
    } else {
      fgInput.classList.add("invalid");
    }
    refresh();
  });
  bgInput.addEventListener("input", () => {
    const raw = bgInput.value.replace(/^#/, "");
    currentBg = raw;
    if (isValidHex2(raw)) {
      bgSwatch.style.backgroundColor = `#${expandShortHex2(raw)}`;
      bgInput.classList.remove("invalid");
    } else {
      bgInput.classList.add("invalid");
    }
    refresh();
  });
  if (isValidHex2(initialFg)) fgSwatch.style.backgroundColor = `#${expandShortHex2(initialFg)}`;
  if (isValidHex2(initialBg)) bgSwatch.style.backgroundColor = `#${expandShortHex2(initialBg)}`;
  const [fr, fg2, fb] = hexToRgb(`#${expandShortHex2(initialFg)}`);
  const [br, bg2, bb] = hexToRgb(`#${expandShortHex2(initialBg)}`);
  refresh();
}

// src/tools/color-harmony.ts
function isValidHex3(hex) {
  const h = hex.replace(/^#/, "");
  return /^[0-9A-Fa-f]{6}$/.test(h) || /^[0-9A-Fa-f]{3}$/.test(h);
}
function expandShortHex3(hex) {
  const h = hex.replace(/^#/, "");
  if (h.length === 3) {
    return (h[0] + h[0] + h[1] + h[1] + h[2] + h[2]).toUpperCase();
  }
  return h.toUpperCase();
}
function normalizeHex2(hex) {
  return `#${expandShortHex3(hex)}`;
}
function buildToolCSS3() {
  return `
    .creativefyi-harmony-header {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 14px 16px 12px;
      border-bottom: 1px solid var(--border);
    }
    .creativefyi-harmony-swatch {
      width: 36px;
      height: 36px;
      border-radius: 6px;
      border: 1px solid var(--border);
      flex-shrink: 0;
      transition: background-color 0.15s;
    }
    .creativefyi-harmony-hex-input {
      flex: 1;
      padding: 7px 11px;
      border: 1px solid var(--input-border);
      border-radius: 6px;
      background: var(--input-bg);
      color: var(--text);
      font-size: 13px;
      font-family: ui-monospace, 'Cascadia Code', 'Fira Code', monospace;
      font-weight: 600;
      outline: none;
      text-transform: uppercase;
      transition: border-color 0.15s;
    }
    .creativefyi-harmony-hex-input:focus {
      border-color: var(--input-focus);
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
    }
    .creativefyi-harmony-hex-input.invalid {
      border-color: #ef4444;
    }
    .creativefyi-harmony-sections {
      padding: 4px 0;
    }
    .creativefyi-harmony-section {
      padding: 10px 16px;
      border-bottom: 1px solid var(--border);
    }
    .creativefyi-harmony-section:last-child {
      border-bottom: none;
    }
    .creativefyi-harmony-section-label {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--muted);
      margin-bottom: 8px;
    }
    .creativefyi-harmony-swatches {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
    .creativefyi-harmony-swatch-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
    }
    .creativefyi-harmony-swatch-color {
      width: 40px;
      height: 40px;
      border-radius: 6px;
      border: 1px solid var(--border);
      cursor: pointer;
      transition: transform 0.1s, box-shadow 0.1s;
    }
    .creativefyi-harmony-swatch-color:hover {
      transform: scale(1.05);
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    }
    .creativefyi-harmony-swatch-hex {
      font-size: 9px;
      font-family: ui-monospace, 'Cascadia Code', 'Fira Code', monospace;
      color: var(--muted);
      text-align: center;
      letter-spacing: 0.03em;
    }
    .creativefyi-harmony-copy-btn {
      background: var(--copy-bg);
      color: var(--muted);
      border: none;
      border-radius: 3px;
      padding: 2px 5px;
      font-size: 9px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 2px;
      transition: background 0.15s, color 0.15s;
      font-family: inherit;
      white-space: nowrap;
    }
    .creativefyi-harmony-copy-btn:hover {
      background: var(--copy-hover);
      color: var(--text);
    }
    .creativefyi-harmony-copy-btn svg {
      width: 9px;
      height: 9px;
    }
  `;
}
function getHarmonies(hex) {
  const normalized = normalizeHex2(hex);
  return [
    { label: "Complementary", colors: complementary(normalized) },
    { label: "Analogous", colors: analogous(normalized) },
    { label: "Triadic", colors: triadic(normalized) },
    { label: "Split-Complementary", colors: splitComplementary(normalized) },
    { label: "Tetradic", colors: tetradic(normalized) }
  ];
}
function renderHarmonies(sectionsEl, harmonies, shadow) {
  sectionsEl.innerHTML = harmonies.map(({ label, colors }) => `
      <div class="creativefyi-harmony-section">
        <div class="creativefyi-harmony-section-label">${label}</div>
        <div class="creativefyi-harmony-swatches">
          ${colors.map((hex) => `
            <div class="creativefyi-harmony-swatch-item">
              <div class="creativefyi-harmony-swatch-color" style="background-color:${hex};" title="${hex}"></div>
              <span class="creativefyi-harmony-swatch-hex">${hex}</span>
              <button class="creativefyi-harmony-copy-btn" data-copy="${hex}" aria-label="Copy ${hex}">${copyIcon} Copy</button>
            </div>
          `).join("")}
        </div>
      </div>
    `).join("");
  shadow.querySelectorAll(".creativefyi-harmony-copy-btn").forEach((btn) => {
    var _a;
    const text = (_a = btn.getAttribute("data-copy")) != null ? _a : "";
    bindCopyButton(btn, text);
  });
}
function initColorHarmonyTool(el, config) {
  var _a;
  const dataset = el.dataset;
  const initialHex = ((_a = dataset.hex) != null ? _a : "8B5CF6").replace(/^#/, "");
  const shadow = createShadow(el, config);
  const style = document.createElement("style");
  style.textContent = buildToolCSS3();
  shadow.appendChild(style);
  const container = createWidgetRoot(shadow, el, "creativefyi-harmony-tool");
  container.innerHTML = `
    <div class="creativefyi-harmony-header">
      <div class="creativefyi-harmony-swatch" style="background-color:#${expandShortHex3(initialHex)};"></div>
      <input
        class="creativefyi-harmony-hex-input creativefyi-search-input"
        type="text"
        value="#${expandShortHex3(initialHex)}"
        maxlength="7"
        spellcheck="false"
        aria-label="Base color hex input"
        placeholder="#8B5CF6"
      >
    </div>
    <div class="creativefyi-harmony-sections"></div>
    ${poweredByHTML(config)}
  `;
  const inputEl = container.querySelector(".creativefyi-harmony-hex-input");
  const swatchEl = container.querySelector(".creativefyi-harmony-swatch");
  const sectionsEl = container.querySelector(".creativefyi-harmony-sections");
  function update(raw) {
    if (!isValidHex3(raw)) {
      inputEl.classList.add("invalid");
      sectionsEl.innerHTML = "";
      return;
    }
    inputEl.classList.remove("invalid");
    const hex = expandShortHex3(raw);
    swatchEl.style.backgroundColor = `#${hex}`;
    const harmonies = getHarmonies(hex);
    renderHarmonies(sectionsEl, harmonies, shadow);
  }
  update(initialHex);
  inputEl.addEventListener("input", () => {
    update(inputEl.value.replace(/^#/, ""));
  });
}

// src/tools/colorblind-sim.ts
function isValidHex4(hex) {
  const h = hex.replace(/^#/, "");
  return /^[0-9A-Fa-f]{6}$/.test(h) || /^[0-9A-Fa-f]{3}$/.test(h);
}
function expandShortHex4(hex) {
  const h = hex.replace(/^#/, "");
  if (h.length === 3) {
    return (h[0] + h[0] + h[1] + h[1] + h[2] + h[2]).toUpperCase();
  }
  return h.toUpperCase();
}
function buildToolCSS4() {
  return `
    .creativefyi-cb-header {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 14px 16px 12px;
      border-bottom: 1px solid var(--border);
    }
    .creativefyi-cb-swatch {
      width: 36px;
      height: 36px;
      border-radius: 6px;
      border: 1px solid var(--border);
      flex-shrink: 0;
      transition: background-color 0.15s;
    }
    .creativefyi-cb-hex-input {
      flex: 1;
      padding: 7px 11px;
      border: 1px solid var(--input-border);
      border-radius: 6px;
      background: var(--input-bg);
      color: var(--text);
      font-size: 13px;
      font-family: ui-monospace, 'Cascadia Code', 'Fira Code', monospace;
      font-weight: 600;
      outline: none;
      text-transform: uppercase;
      transition: border-color 0.15s;
    }
    .creativefyi-cb-hex-input:focus {
      border-color: var(--input-focus);
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
    }
    .creativefyi-cb-hex-input.invalid {
      border-color: #ef4444;
    }
    .creativefyi-cb-original-block {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 16px;
      border-bottom: 1px solid var(--border);
    }
    .creativefyi-cb-original-swatch {
      width: 64px;
      height: 64px;
      border-radius: 10px;
      border: 1px solid var(--border);
      flex-shrink: 0;
      transition: background-color 0.15s;
    }
    .creativefyi-cb-original-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .creativefyi-cb-original-label {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--muted);
    }
    .creativefyi-cb-original-hex {
      font-size: 16px;
      font-weight: 700;
      font-family: ui-monospace, 'Cascadia Code', 'Fira Code', monospace;
      color: var(--text);
    }
    .creativefyi-cb-sims {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1px;
      background: var(--border);
      border-bottom: 1px solid var(--border);
    }
    .creativefyi-cb-sim-item {
      background: var(--bg);
      padding: 12px 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }
    .creativefyi-cb-sim-swatch {
      width: 48px;
      height: 48px;
      border-radius: 8px;
      border: 1px solid var(--border);
      transition: background-color 0.15s;
    }
    .creativefyi-cb-sim-name {
      font-size: 10px;
      font-weight: 700;
      text-align: center;
      color: var(--text);
    }
    .creativefyi-cb-sim-desc {
      font-size: 9px;
      text-align: center;
      color: var(--muted);
      line-height: 1.4;
    }
    .creativefyi-cb-sim-hex {
      font-size: 9px;
      font-family: ui-monospace, 'Cascadia Code', 'Fira Code', monospace;
      color: var(--muted);
      text-align: center;
    }
    .creativefyi-cb-copy-btn {
      background: var(--copy-bg);
      color: var(--muted);
      border: none;
      border-radius: 3px;
      padding: 2px 5px;
      font-size: 9px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 2px;
      transition: background 0.15s, color 0.15s;
      font-family: inherit;
      white-space: nowrap;
    }
    .creativefyi-cb-copy-btn:hover {
      background: var(--copy-hover);
      color: var(--text);
    }
    .creativefyi-cb-copy-btn svg {
      width: 9px;
      height: 9px;
    }
  `;
}
var SIM_META = [
  { key: "protanopia", label: "Protanopia", desc: "No red cones ~1% males" },
  { key: "deuteranopia", label: "Deuteranopia", desc: "No green cones ~1% males" },
  { key: "tritanopia", label: "Tritanopia", desc: "No blue cones ~0.003%" }
];
function renderSims(container, hex, shadow) {
  const originalSwatch = container.querySelector(".creativefyi-cb-original-swatch");
  const originalHexEl = container.querySelector(".creativefyi-cb-original-hex");
  const simsEl = container.querySelector(".creativefyi-cb-sims");
  if (!simsEl) return;
  const full = `#${expandShortHex4(hex)}`;
  if (originalSwatch) originalSwatch.style.backgroundColor = full;
  if (originalHexEl) originalHexEl.textContent = full;
  const simResult = simulateColorBlindness(full);
  simsEl.innerHTML = SIM_META.map(({ key, label, desc }) => {
    const simHex = simResult[key];
    return `
      <div class="creativefyi-cb-sim-item">
        <div class="creativefyi-cb-sim-swatch" style="background-color:${simHex};"></div>
        <span class="creativefyi-cb-sim-name">${label}</span>
        <span class="creativefyi-cb-sim-desc">${desc}</span>
        <span class="creativefyi-cb-sim-hex">${simHex}</span>
        <button class="creativefyi-cb-copy-btn" data-copy="${simHex}" aria-label="Copy ${simHex}">${copyIcon} Copy</button>
      </div>
    `;
  }).join("");
  shadow.querySelectorAll(".creativefyi-cb-copy-btn").forEach((btn) => {
    var _a;
    const text = (_a = btn.getAttribute("data-copy")) != null ? _a : "";
    bindCopyButton(btn, text);
  });
}
function initColorblindSimTool(el, config) {
  var _a;
  const dataset = el.dataset;
  const initialHex = ((_a = dataset.hex) != null ? _a : "FF6B35").replace(/^#/, "");
  const shadow = createShadow(el, config);
  const style = document.createElement("style");
  style.textContent = buildToolCSS4();
  shadow.appendChild(style);
  const container = createWidgetRoot(shadow, el, "creativefyi-colorblind-tool");
  container.innerHTML = `
    <div class="creativefyi-cb-header">
      <div class="creativefyi-cb-swatch" style="background-color:#${expandShortHex4(initialHex)};"></div>
      <input
        class="creativefyi-cb-hex-input creativefyi-search-input"
        type="text"
        value="#${expandShortHex4(initialHex)}"
        maxlength="7"
        spellcheck="false"
        aria-label="Color hex input"
        placeholder="#FF6B35"
      >
    </div>
    <div class="creativefyi-cb-original-block">
      <div class="creativefyi-cb-original-swatch" style="background-color:#${expandShortHex4(initialHex)};"></div>
      <div class="creativefyi-cb-original-info">
        <span class="creativefyi-cb-original-label">Original Color</span>
        <span class="creativefyi-cb-original-hex">#${expandShortHex4(initialHex)}</span>
      </div>
    </div>
    <div class="creativefyi-cb-sims"></div>
    ${poweredByHTML(config)}
  `;
  const inputEl = container.querySelector(".creativefyi-cb-hex-input");
  const headerSwatchEl = container.querySelector(".creativefyi-cb-swatch");
  function update(raw) {
    if (!isValidHex4(raw)) {
      inputEl.classList.add("invalid");
      return;
    }
    inputEl.classList.remove("invalid");
    const hex = expandShortHex4(raw);
    headerSwatchEl.style.backgroundColor = `#${hex}`;
    renderSims(container, hex, shadow);
  }
  update(initialHex);
  inputEl.addEventListener("input", () => {
    update(inputEl.value.replace(/^#/, ""));
  });
}

// src/tools/shade-generator.ts
function isValidHex5(hex) {
  const h = hex.replace(/^#/, "");
  return /^[0-9A-Fa-f]{6}$/.test(h) || /^[0-9A-Fa-f]{3}$/.test(h);
}
function expandShortHex5(hex) {
  const h = hex.replace(/^#/, "");
  if (h.length === 3) {
    return (h[0] + h[0] + h[1] + h[1] + h[2] + h[2]).toUpperCase();
  }
  return h.toUpperCase();
}
function closestStepIndex(hex, shades) {
  const [r, g, b] = hexToRgb(`#${expandShortHex5(hex)}`);
  const [, , l] = rgbToHsl(r, g, b);
  const LIGHTNESS_MAP2 = {
    50: 97,
    100: 93,
    200: 86,
    300: 76,
    400: 63,
    500: 50,
    600: 40,
    700: 32,
    800: 25,
    900: 19,
    950: 12
  };
  let closestIdx = 0;
  let minDiff = Infinity;
  shades.forEach(({ step }, i) => {
    var _a;
    const targetL = (_a = LIGHTNESS_MAP2[step]) != null ? _a : 50;
    const diff = Math.abs(l - targetL);
    if (diff < minDiff) {
      minDiff = diff;
      closestIdx = i;
    }
  });
  return closestIdx;
}
function buildToolCSS5() {
  return `
    .creativefyi-shade-header {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 14px 16px 12px;
      border-bottom: 1px solid var(--border);
    }
    .creativefyi-shade-input-swatch {
      width: 32px;
      height: 32px;
      border-radius: 5px;
      border: 1px solid var(--border);
      flex-shrink: 0;
      transition: background-color 0.15s;
    }
    .creativefyi-shade-hex-input {
      flex: 1;
      padding: 7px 11px;
      border: 1px solid var(--input-border);
      border-radius: 6px;
      background: var(--input-bg);
      color: var(--text);
      font-size: 13px;
      font-family: ui-monospace, 'Cascadia Code', 'Fira Code', monospace;
      font-weight: 600;
      outline: none;
      text-transform: uppercase;
      transition: border-color 0.15s;
    }
    .creativefyi-shade-hex-input:focus {
      border-color: var(--input-focus);
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
    }
    .creativefyi-shade-hex-input.invalid {
      border-color: #ef4444;
    }
    .creativefyi-shade-row {
      display: flex;
      padding: 12px 16px;
      gap: 6px;
      overflow-x: auto;
      border-bottom: 1px solid var(--border);
    }
    .creativefyi-shade-row::-webkit-scrollbar {
      height: 4px;
    }
    .creativefyi-shade-row::-webkit-scrollbar-track {
      background: transparent;
    }
    .creativefyi-shade-row::-webkit-scrollbar-thumb {
      background: var(--border);
      border-radius: 2px;
    }
    .creativefyi-shade-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
      cursor: pointer;
    }
    .creativefyi-shade-swatch {
      width: 32px;
      height: 32px;
      border-radius: 5px;
      border: 2px solid transparent;
      transition: transform 0.1s, box-shadow 0.1s, border-color 0.15s;
    }
    .creativefyi-shade-item:hover .creativefyi-shade-swatch {
      transform: scale(1.08);
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    }
    .creativefyi-shade-swatch.active {
      border-color: var(--accent);
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent) 40%, transparent);
    }
    .creativefyi-shade-step {
      font-size: 9px;
      font-weight: 700;
      color: var(--muted);
      text-align: center;
      letter-spacing: 0.02em;
    }
    .creativefyi-shade-hex {
      font-size: 8px;
      font-family: ui-monospace, 'Cascadia Code', 'Fira Code', monospace;
      color: var(--muted);
      text-align: center;
    }
    .creativefyi-shade-detail {
      padding: 10px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      background: var(--surface);
      border-bottom: 1px solid var(--border);
      min-height: 44px;
    }
    .creativefyi-shade-detail-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .creativefyi-shade-detail-swatch {
      width: 28px;
      height: 28px;
      border-radius: 5px;
      border: 1px solid var(--border);
      flex-shrink: 0;
    }
    .creativefyi-shade-detail-info {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .creativefyi-shade-detail-step {
      font-size: 11px;
      font-weight: 700;
      color: var(--text);
    }
    .creativefyi-shade-detail-hex {
      font-size: 11px;
      font-family: ui-monospace, 'Cascadia Code', 'Fira Code', monospace;
      color: var(--muted);
    }
    .creativefyi-shade-copy-btn {
      background: var(--copy-bg);
      color: var(--muted);
      border: none;
      border-radius: 4px;
      padding: 4px 8px;
      font-size: 11px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 3px;
      transition: background 0.15s, color 0.15s;
      font-family: inherit;
      white-space: nowrap;
    }
    .creativefyi-shade-copy-btn:hover {
      background: var(--copy-hover);
      color: var(--text);
    }
    .creativefyi-shade-copy-btn svg {
      width: 10px;
      height: 10px;
    }
  `;
}
function initShadeGeneratorTool(el, config) {
  var _a;
  const dataset = el.dataset;
  const initialHex = ((_a = dataset.hex) != null ? _a : "8B5CF6").replace(/^#/, "");
  const shadow = createShadow(el, config);
  const style = document.createElement("style");
  style.textContent = buildToolCSS5();
  shadow.appendChild(style);
  const container = createWidgetRoot(shadow, el, "creativefyi-shade-tool");
  container.innerHTML = `
    <div class="creativefyi-shade-header">
      <div class="creativefyi-shade-input-swatch" style="background-color:#${expandShortHex5(initialHex)};"></div>
      <input
        class="creativefyi-shade-hex-input creativefyi-search-input"
        type="text"
        value="#${expandShortHex5(initialHex)}"
        maxlength="7"
        spellcheck="false"
        aria-label="Base color hex input"
        placeholder="#8B5CF6"
      >
    </div>
    <div class="creativefyi-shade-row"></div>
    <div class="creativefyi-shade-detail">
      <div class="creativefyi-shade-detail-left">
        <div class="creativefyi-shade-detail-swatch"></div>
        <div class="creativefyi-shade-detail-info">
          <span class="creativefyi-shade-detail-step">\u2014</span>
          <span class="creativefyi-shade-detail-hex">\u2014</span>
        </div>
      </div>
      <button class="creativefyi-shade-copy-btn" aria-label="Copy hex">${copyIcon} Copy</button>
    </div>
    ${poweredByHTML(config)}
  `;
  const inputEl = container.querySelector(".creativefyi-shade-hex-input");
  const headerSwatchEl = container.querySelector(".creativefyi-shade-input-swatch");
  const rowEl = container.querySelector(".creativefyi-shade-row");
  const detailSwatchEl = container.querySelector(".creativefyi-shade-detail-swatch");
  const detailStepEl = container.querySelector(".creativefyi-shade-detail-step");
  const detailHexEl = container.querySelector(".creativefyi-shade-detail-hex");
  const detailCopyBtn = container.querySelector(".creativefyi-shade-copy-btn");
  let currentDetailHex = "";
  function selectShade(hex, step) {
    var _a2;
    detailSwatchEl.style.backgroundColor = hex;
    detailStepEl.textContent = `Step ${step}`;
    detailHexEl.textContent = hex;
    currentDetailHex = hex;
    const newBtn = detailCopyBtn.cloneNode(true);
    (_a2 = detailCopyBtn.parentNode) == null ? void 0 : _a2.replaceChild(newBtn, detailCopyBtn);
    bindCopyButton(newBtn, hex);
    rowEl.querySelectorAll(".creativefyi-shade-swatch").forEach((swatch) => {
      swatch.classList.toggle("active", swatch.getAttribute("data-step") === String(step));
    });
  }
  function renderShades(hex) {
    const shades = lightnessScale(hex);
    const closestIdx = closestStepIndex(hex, shades);
    rowEl.innerHTML = shades.map(({ step, hex: shadeHex }) => `
      <div class="creativefyi-shade-item" data-step="${step}" title="${shadeHex}">
        <div class="creativefyi-shade-swatch" style="background-color:${shadeHex};" data-step="${step}"></div>
        <span class="creativefyi-shade-step">${step}</span>
        <span class="creativefyi-shade-hex">${shadeHex.replace("#", "")}</span>
      </div>
    `).join("");
    rowEl.querySelectorAll(".creativefyi-shade-item").forEach((item, idx) => {
      item.addEventListener("click", () => {
        var _a2, _b;
        const step = Number(item.getAttribute("data-step"));
        const shadeHex = (_b = (_a2 = shades[idx]) == null ? void 0 : _a2.hex) != null ? _b : "";
        selectShade(shadeHex, step);
      });
    });
    const closest = shades[closestIdx];
    if (closest) {
      selectShade(closest.hex, closest.step);
    }
  }
  function update(raw) {
    if (!isValidHex5(raw)) {
      inputEl.classList.add("invalid");
      return;
    }
    inputEl.classList.remove("invalid");
    const hex = expandShortHex5(raw);
    headerSwatchEl.style.backgroundColor = `#${hex}`;
    renderShades(hex);
  }
  update(initialHex);
  inputEl.addEventListener("input", () => {
    update(inputEl.value.replace(/^#/, ""));
  });
}

// src/inline/color-swatch.ts
function initColorSwatchInline(el, config) {
  const hex = el.dataset.hex || "CCCCCC";
  const cleanHex = hex.replace(/^#/, "");
  const shadow = el.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = `
    :host {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 1px 6px;
      background: #faf5ff;
      border: 1px solid #e9d5ff;
      border-radius: 4px;
      font-size: 12px;
      cursor: pointer;
      vertical-align: middle;
      text-decoration: none;
      transition: border-color 0.15s ease;
    }
    :host(:hover) {
      border-color: #c4b5fd;
    }
    :host(.copied) {
      border-color: #7c3aed;
      background: #f3e8ff;
    }
    .swatch {
      width: 14px;
      height: 14px;
      border-radius: 3px;
      flex-shrink: 0;
      border: 1px solid rgba(0,0,0,0.08);
    }
    .hex {
      font-family: monospace;
      color: #8B5CF6;
      font-size: 11px;
      line-height: 1;
      letter-spacing: 0.02em;
    }
    @media (prefers-color-scheme: dark) {
      :host {
        background: #1e1b4b;
        border-color: #3730a3;
      }
      :host(:hover) {
        border-color: #6d28d9;
      }
      .hex {
        color: #a78bfa;
      }
    }
  `;
  const swatch = document.createElement("span");
  swatch.className = "swatch";
  swatch.style.backgroundColor = `#${cleanHex}`;
  const hexLabel = document.createElement("span");
  hexLabel.className = "hex";
  hexLabel.textContent = `#${cleanHex.toUpperCase()}`;
  shadow.appendChild(style);
  shadow.appendChild(swatch);
  shadow.appendChild(hexLabel);
  el.addEventListener("click", () => {
    var _a;
    const textToCopy2 = `#${cleanHex.toUpperCase()}`;
    (_a = navigator.clipboard) == null ? void 0 : _a.writeText(textToCopy2).catch(() => {
      const ta = document.createElement("textarea");
      ta.value = textToCopy2;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    });
    el.classList.add("copied");
    setTimeout(() => el.classList.remove("copied"), 1200);
  });
  el.title = `Click to copy ${textToCopy(cleanHex)} \u2014 ${config.name}`;
}
function textToCopy(cleanHex) {
  return `#${cleanHex.toUpperCase()}`;
}

// src/_entry_colorfyi.ts
function initWidget(el, type, config) {
  const widgetStyle = el.dataset.style || "modern";
  switch (type) {
    case "entity":
      initEntityWidget(el, config);
      break;
    case "compare":
      initCompareWidget(el, config);
      break;
    case "glossary":
      initGlossaryWidget(el, config);
      break;
    case "guide":
      initGuideWidget(el, config);
      break;
    case "search":
      initSearchWidget(el, config);
      break;
    case "tooltip":
      initGlossaryTooltipTool(el, config);
      break;
    case "converter":
      initColorConverterTool(el, config);
      break;
    case "contrast":
      initContrastCheckerTool(el, config);
      break;
    case "harmony":
      initColorHarmonyTool(el, config);
      break;
    case "colorblind":
      initColorblindSimTool(el, config);
      break;
    case "shades":
      initShadeGeneratorTool(el, config);
      break;
    case "swatch":
      initColorSwatchInline(el, config);
      break;
    default:
      break;
  }
}
function lazyInit(el, callback) {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(el);
          callback();
        }
      });
    }, { rootMargin: "200px" });
    observer.observe(el);
  } else {
    callback();
  }
}
function processElement(el, config) {
  if (el.shadowRoot) return;
  const dataKey = config.attribute.replace("data-", "");
  const camelKey = dataKey.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const widgetType = el.dataset[camelKey];
  if (!widgetType) return;
  lazyInit(el, () => {
    if (!el.shadowRoot) initWidget(el, widgetType, config);
  });
}
function initAll(config) {
  document.querySelectorAll(`[${config.attribute}]`).forEach((el) => processElement(el, config));
}
(function bootstrap() {
  const config = '{"site":"colorfyi","name":"ColorFYI","domain":"colorfyi.com","accent":"#8B5CF6","attribute":"data-colorfyi","apiBase":"https://colorfyi.com/api/v1/","searchPath":"/search/","entityName":"Colors","entitySlug":"colors"}';
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initAll(config));
  } else {
    initAll(config);
  }
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        var _a;
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        const el = node;
        if (el.hasAttribute(config.attribute)) processElement(el, config);
        (_a = el.querySelectorAll) == null ? void 0 : _a.call(el, `[${config.attribute}]`).forEach((child) => processElement(child, config));
      });
    });
  });
  observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
})();
function makeWidgetElement(widgetType, initFn, domainAttrs) {
  const observed = [...domainAttrs, "theme", "style-variant", "size"];
  return class extends HTMLElement {
    static get observedAttributes() {
      return observed;
    }
    connectedCallback() {
      if (this.shadowRoot) return;
      this._syncDataAttrs();
      initFn(this, '{"site":"colorfyi","name":"ColorFYI","domain":"colorfyi.com","accent":"#8B5CF6","attribute":"data-colorfyi","apiBase":"https://colorfyi.com/api/v1/","searchPath":"/search/","entityName":"Colors","entitySlug":"colors"}');
    }
    attributeChangedCallback(_name, oldVal, newVal) {
      if (oldVal === newVal || !this.shadowRoot) return;
      const shadow = this.shadowRoot;
      while (shadow.firstChild) shadow.firstChild.remove();
      this._syncDataAttrs();
      initFn(this, '{"site":"colorfyi","name":"ColorFYI","domain":"colorfyi.com","accent":"#8B5CF6","attribute":"data-colorfyi","apiBase":"https://colorfyi.com/api/v1/","searchPath":"/search/","entityName":"Colors","entitySlug":"colors"}');
    }
    _syncDataAttrs() {
      const attrKey = '{"site":"colorfyi","name":"ColorFYI","domain":"colorfyi.com","accent":"#8B5CF6","attribute":"data-colorfyi","apiBase":"https://colorfyi.com/api/v1/","searchPath":"/search/","entityName":"Colors","entitySlug":"colors"}'.attribute.replace("data-", "");
      this.dataset[attrKey] = widgetType;
      for (const a of domainAttrs) {
        const val = this.getAttribute(a);
        if (val !== null) this.dataset[a] = val;
      }
      const theme = this.getAttribute("theme");
      if (theme !== null) this.dataset.theme = theme;
      const styleVariant = this.getAttribute("style-variant");
      if (styleVariant !== null) this.dataset.style = styleVariant;
      const size = this.getAttribute("size");
      if (size !== null) this.dataset.size = size;
    }
  };
}
(function registerElements() {
  if (typeof customElements === "undefined") return;
  const site = '{"site":"colorfyi","name":"ColorFYI","domain":"colorfyi.com","accent":"#8B5CF6","attribute":"data-colorfyi","apiBase":"https://colorfyi.com/api/v1/","searchPath":"/search/","entityName":"Colors","entitySlug":"colors"}'.site;
  const defs = [
    [`${site}-entity`, initEntityWidget, ["slug"]],
    [`${site}-compare`, initCompareWidget, ["slugs"]],
    [`${site}-glossary`, initGlossaryWidget, ["slug", "letter"]],
    [`${site}-guide`, initGuideWidget, ["slug"]],
    [`${site}-search`, initSearchWidget, ["placeholder", "query"]],
    [`${site}-tooltip`, initGlossaryTooltipTool, ["slug", "term"]],
    [`${site}-converter`, initColorConverterTool, ["slug", "value"]],
    [`${site}-contrast`, initContrastCheckerTool, ["slug", "value"]],
    [`${site}-harmony`, initColorHarmonyTool, ["slug", "value"]],
    [`${site}-colorblind`, initColorblindSimTool, ["slug", "value"]],
    [`${site}-shades`, initShadeGeneratorTool, ["slug", "value"]],
    [`${site}-swatch`, initColorSwatchInline, ["hex", "label"]]
  ];
  for (const [tagName, initFn, attrs] of defs) {
    if (!customElements.get(tagName)) {
      const widgetType = tagName.slice(site.length + 1);
      customElements.define(tagName, makeWidgetElement(widgetType, initFn, attrs));
    }
  }
})();
