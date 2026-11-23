# Abstract of Canvass Generator (HTML, CSS, JavaScript + .vscode)

Official Abstract of Canvass generator for the **Municipality of Maragondon, Cavite — Committee on Awards**.

## Paano I-run sa Visual Studio Code

1. I-unzip ang folder (kung naka-`.zip`) at buksan ang buong folder sa **Visual Studio Code** (`File -> Open Folder...`).
2. Kung wala ka pang **Live Server** extension, i-install ito mula sa VS Code Extensions (`ritwickdey.LiveServer`). May prompt din sa VS Code dahil naka-configure ang `.vscode/extensions.json`.
3. I-click ang **Go Live** sa ibabang kanang bahagi ng VS Code (o i-right click ang `index.html` -> **Open with Live Server**).
4. Magbubukas ito sa `http://127.0.0.1:5500/index.html`.

## Paano Maglagay ng Official Logo ng Maragondon

May **dalawang madaling paraan**:

- **Paraan 1 (Sa loob mismo ng website):**
  I-click ang **"Upload Logo"** button sa itaas na banner at piliin ang official Maragondon PNG/JPG logo file mo. Awtomatiko itong mase-save sa browser at lalabas sa header, print preview, at exported Word document.
- **Paraan 2 (Direkta sa folder):**
  Ilagay ang iyong official logo image file sa loob ng `assets/` folder at pangalanan itong **`maragondon-logo.png`** (`assets/maragondon-logo.png`). Kung wala pang PNG file, gagamitin nito ang default na `assets/maragondon-logo.svg`.

## Files sa Loob ng Folder

- `.vscode/settings.json` — Live Server port (`5500`) at formatting settings
- `.vscode/extensions.json` — Live Server extension recommendation
- `.vscode/launch.json` — Chrome/Edge debug launcher
- `assets/maragondon-logo.svg` — Default seal ng Maragondon (puwedeng dagdagan ng `maragondon-logo.png`)
- `index.html` — Main HTML structure at Document Preview modal
- `style.css` — Dark teal/navy glass UI at `@media print` bond-paper layout
- `script.js` — History persistence (`localStorage`), auto-trim, currency validation, Word export, at logo upload
