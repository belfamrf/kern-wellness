# KERN logo kit

KERN's mark is a calibrated K: a stable vertical datum, two measured diagonals, and a lime point in the open notch. The point marks assessment before training and gives the identity one small, ownable signal.

All masters are vector SVG with outlined paths. The wordmark is not a font and must never be retyped.

## Masters

| File | Use |
|---|---|
| `masters/kern-horizontal.svg` | Primary lockup: header, letterhead, signage |
| `masters/kern-stacked.svg` | Compact vertical lockup: square spaces, labels, avatars |
| `masters/kern-symbol.svg` | Standalone symbol, 24 px and up |
| `masters/kern-symbol-small.svg` | Simplified junction and heavier point, 16–24 px |
| `masters/kern-wordmark.svg` | When the symbol is not needed |

The stacked master is built on a 520 × 442 grid: the symbol and the wordmark share the same centre line, with equal margins. The previous stacked file was 20 units off centre and has been replaced.

## Exports

Variants use three suffix names. Read them as colour roles, not literal paint names:

| Suffix | Mark | Point | Background |
|---|---|---|---|
| `-black` | Ink `#1b1d19` | Lime `#d8f36b` | Bone, paper |
| `-white` | Bone `#f3f0e8` | Lime `#d8f36b` | Ink, moss |
| `-mono-4a5545` | Moss `#4a5545` | Moss, same as mark | Bone, paper |

`-white` is bone, not `#ffffff`. Use pure white only when a printer requires it and adjust the file deliberately.

Panels, symbols, wordmark, and stacked versions exist in all three roles, as SVG and as 512 px PNGs (lockups keep their aspect ratio: 512 × 160, 512 × 435, 512 × 185).

### Icons

- `favicon.svg`, `favicon.ico` (16/32/48), `favicon-16/32/48.png`
- `apple-touch-icon.png` (180), `icon-192.png`, `icon-512.png`, `maskable-512.png`
- `kern-symbol-app-icon.svg` and PNGs

Icons are an ink tile with the bone small-size symbol and a lime point. Do not use an all-lime symbol: the point disappears into the arms.

## Files in this folder

- `kern-presentation.html` — seven-slide identity presentation, uses the real exports and the brand fonts
- `kern-preview.html` — test sheet: colours, small sizes, clear space, misuse
- `fonts/` — Fraunces and Manrope latin subsets used by the HTML documents
- `build-logos.mjs` — regenerates SVG variants, PNG renders, the ICO file, and the manifest

## Rebuilding

```powershell
node logo-kit/build-logos.mjs
```

The script renders through Chrome at `C:\Program Files\Google\Chrome\Application\chrome.exe`. If Chrome moves, update the path at the top of the script.

## Palette

- Ink: `#1b1d19`
- Bone: `#f3f0e8`
- Moss: `#4a5545`
- Signal lime: `#d8f36b`

The lime point is an accent, not a replacement for the mark. Use the one-colour versions when production or contrast requires it.
