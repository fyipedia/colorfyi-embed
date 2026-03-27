# colorfyi-embed

[![npm](https://img.shields.io/npm/v/colorfyi-embed)](https://www.npmjs.com/package/colorfyi-embed)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/colorfyi-embed)
[![Size](https://img.shields.io/badge/size-~11--21KB_gzipped-green)](https://bundlephobia.com/package/colorfyi-embed)

Embed **ColorFYI** widgets — colors, glossary terms, interactive tools, and inline elements — on any website. **12 widget types**, zero dependencies, Shadow DOM style isolation, 4 built-in themes (light, dark, sepia, auto), 2 styles (modern, minimal), and live data from the [ColorFYI](https://colorfyi.com) database.

Every widget includes a "Powered by ColorFYI" backlink directing readers to the full reference.

> **Try the interactive widget builder at [widget.colorfyi.com](https://widget.colorfyi.com)**

## Quick Start

```html
<!-- Place widget div where you want it to appear -->
<div data-colorfyi="entity" data-slug="colors" data-theme="light"></div>

<!-- Load the embed script once, anywhere on the page -->
<script src="https://cdn.jsdelivr.net/npm/colorfyi-embed@1/dist/embed.min.js"></script>
```

That's it. The widget fetches data from the ColorFYI API and renders with full style isolation.

## Widget Types

| Type | Usage | Description |
|------|-------|-------------|
| `entity` | `<div data-colorfyi="entity" data-slug="..."></div>` | Entity detail card — color, font, emoji, symbol, or character |
| `glossary` | `<div data-colorfyi="glossary" data-slug="..."></div>` | Glossary term definition with cross-references |
| `guide` | `<div data-colorfyi="guide" data-slug="..."></div>` | Guide summary card with key takeaways |
| `compare` | `<div data-colorfyi="compare" data-slug="..."></div>` | Side-by-side entity comparison |
| `search` | `<div data-colorfyi="search" data-slug="..."></div>` | Search box linking to the full database |
| `converter` | `<div data-colorfyi="converter" data-slug="..."></div>` | Color converter — hex to RGB, HSL, CMYK, OKLCH, Lab |
| `contrast` | `<div data-colorfyi="contrast" data-slug="..."></div>` | WCAG contrast checker — AA/AAA compliance |
| `harmony` | `<div data-colorfyi="harmony" data-slug="..."></div>` | Color harmony generator — complementary, analogous, triadic |
| `colorblind` | `<div data-colorfyi="colorblind" data-slug="..."></div>` | Color blindness simulator — protanopia, deuteranopia, tritanopia |
| `shades` | `<div data-colorfyi="shades" data-slug="..."></div>` | Tailwind shade generator — 11-step lightness scale |
| `swatch` | `<div data-colorfyi="swatch" data-slug="..."></div>` | Inline color swatch — fits within text |
| `tooltip` | `<div data-colorfyi="tooltip" data-slug="..."></div>` | Glossary tooltip — hover/click shows term definition inline |

## Widget Options

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| `data-colorfyi` | entity, compare, glossary, guide, search, tooltip, [tools] | required | Widget type |
| `data-slug` | e.g. "colors" | — | Entity slug from the ColorFYI database |
| `data-theme` | light, dark, sepia, auto | light | Visual theme (`auto` follows OS preference) |
| `data-style` | modern, minimal | modern | Widget design style |
| `data-size` | default, compact, large | default | Widget size |
| `data-placeholder` | any string | "Search Colors..." | Search box placeholder |

## Themes

```html
<!-- Light (default) -->
<div data-colorfyi="entity" data-slug="colors" data-theme="light"></div>

<!-- Dark -->
<div data-colorfyi="entity" data-slug="colors" data-theme="dark"></div>

<!-- Sepia -->
<div data-colorfyi="entity" data-slug="colors" data-theme="sepia"></div>

<!-- Auto — follows OS dark/light preference -->
<div data-colorfyi="entity" data-slug="colors" data-theme="auto"></div>
```

## Styles

```html
<!-- Modern (default) — clean lines, rounded corners, accent gradients -->
<div data-colorfyi="entity" data-slug="colors" data-style="modern"></div>

<!-- Minimal — subtle borders, flat design, no gradients -->
<div data-colorfyi="entity" data-slug="colors" data-style="minimal"></div>
```

## Web Components (Custom Elements)

As an alternative to `data-*` attributes, you can use native HTML custom elements:

```html
<!-- Custom element form -->
<colorfyi-entity slug="colors" theme="light"></colorfyi-entity>
<colorfyi-compare slugs="colors,other-slug"></colorfyi-compare>
<colorfyi-search placeholder="Search Colors..."></colorfyi-search>

<script src="https://cdn.jsdelivr.net/npm/colorfyi-embed@1/dist/embed.min.js"></script>
```

Use `style-variant` (not `style`) to avoid conflicts with the HTML reserved `style` attribute.

## Examples

### Entity Card

```html
<div data-colorfyi="entity" data-slug="colors" data-theme="light"></div>
<script src="https://cdn.jsdelivr.net/npm/colorfyi-embed@1/dist/embed.min.js"></script>
```

### Side-by-Side Comparison

```html
<div data-colorfyi="compare" data-slugs="colors,other-slug"></div>
<script src="https://cdn.jsdelivr.net/npm/colorfyi-embed@1/dist/embed.min.js"></script>
```

### Search Box

```html
<div data-colorfyi="search" data-placeholder="Search Colors..."></div>
<script src="https://cdn.jsdelivr.net/npm/colorfyi-embed@1/dist/embed.min.js"></script>
```

### Glossary Term

```html
<div data-colorfyi="glossary" data-slug="example-term" data-theme="light"></div>
<script src="https://cdn.jsdelivr.net/npm/colorfyi-embed@1/dist/embed.min.js"></script>
```

## CDN Options

### jsDelivr (recommended — global CDN, auto-updates with npm)

```html
<script src="https://cdn.jsdelivr.net/npm/colorfyi-embed@1/dist/embed.min.js"></script>
```

### Specific version (production stability)

```html
<script src="https://cdn.jsdelivr.net/npm/colorfyi-embed@1.0.0/dist/embed.min.js"></script>
```

### npm (for bundlers)

```bash
npm install colorfyi-embed
```

```javascript
import 'colorfyi-embed';
```

## Technical Details

- **Shadow DOM**: Complete style isolation — no CSS conflicts with your site
- **Zero dependencies**: No jQuery, React, or any external library
- **2 styles**: Modern (accent gradients) and Minimal (flat design)
- **4 themes**: Light, Dark, Sepia, Auto (OS preference detection)
- **CORS**: ColorFYI API has CORS enabled for all origins
- **MutationObserver**: Works with dynamically added elements (SPAs)
- **IntersectionObserver**: Lazy loading — widgets only fetch when entering viewport (200px margin)
- **Rich Snippets**: DefinedTerm JSON-LD injected for glossary widgets
- **Bundle size**: ~11-21KB gzipped (per-site build — only includes tools available on ColorFYI)

## Learn More About Colors

Visit [colorfyi.com](https://colorfyi.com) — ColorFYI is a comprehensive colors reference with interactive tools, guides, and developer resources.

- **API docs**: [colorfyi.com/developers/](https://colorfyi.com/developers/)
- **Widget builder**: [widget.colorfyi.com](https://widget.colorfyi.com)
- **npm package**: [npmjs.com/package/colorfyi-embed](https://www.npmjs.com/package/colorfyi-embed)
- **GitHub**: [github.com/fyipedia/colorfyi-embed](https://github.com/fyipedia/colorfyi-embed)

## Creative FYI Family

Part of [FYIPedia](https://fyipedia.com) — open-source developer tools ecosystem. Creative FYI covers design, typography, characters, and visual encoding.

| Site | Domain | Focus | Package |
|------|--------|-------|---------|
| **ColorFYI** | [colorfyi.com](https://colorfyi.com) | Color conversion, WCAG contrast, harmonies — 16.7M hex colors | **[npm](https://www.npmjs.com/package/colorfyi-embed)** |
| FontFYI | [fontfyi.com](https://fontfyi.com) | Google Fonts metadata, CSS generation, font pairings | [npm](https://www.npmjs.com/package/fontfyi-embed) |
| EmojiFYI | [emojifyi.com](https://emojifyi.com) | 3,781 emojis, Unicode Emoji 16.0, 8 encodings | [npm](https://www.npmjs.com/package/emojifyi-embed) |
| SymbolFYI | [symbolfyi.com](https://symbolfyi.com) | Symbol encoding in 11 formats, Unicode properties | [npm](https://www.npmjs.com/package/symbolfyi-embed) |
| UnicodeFYI | [unicodefyi.com](https://unicodefyi.com) | Unicode characters, 17 encodings, text analysis | [npm](https://www.npmjs.com/package/unicodefyi-embed) |

## License

MIT — see [LICENSE](./LICENSE).

Built with care by [FYIPedia](https://fyipedia.com).
