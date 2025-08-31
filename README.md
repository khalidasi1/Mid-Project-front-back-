# TS Mid Project 🚀

A simple **TypeScript + HTML + CSS** project developed as part of my web development training.  
It includes a **Stopwatch application** and basic static pages (`Home`, `About`, `Contact`) with a modern, responsive UI.

---

## 📂 Project Structure


  TS-MID-PRJ/
│
├─ src/
│ ├─ index.html # Main page (Stopwatch)
│ ├─ about.html # About page
│ ├─ contact.html # Contact page
│ ├─ prj.css # Main stylesheet (layout, theme, responsive rules)
│ ├─ proj.ts # Stopwatch logic + page wiring
│ ├─ footer.ts # Injects a fixed footer on all pages
│ └─ assets/
│ └─ khalid.jpg # Avatar used on About page (replace with your photo)
│
├─ tsconfig.json # TypeScript configuration
└─ .gitignore # Ignores build output (dist/) and other junk

---

## ⚡ Features

- ⏱️ **Stopwatch (TypeScript)**
  - Start, Stop, Reset, live time updates, and `peek()` for current elapsed seconds.
- 🎨 **Design upgrade**
  - Clean cards, sticky header, subtle shadows, gradients, and refined spacing.
- 📱 **Responsive layout**
  - Works nicely on mobile, tablet, and desktop (media queries + `clamp()`).
- 📌 **Fixed footer via TS**
  - Footer is injected once from `footer.ts` and reserved with `padding-bottom` so it never overlaps content.
- 🧑‍🦰 **About page avatar**
  - Circular avatar next to the title (replace `src/assets/khalid.jpg`).
- ✅ **Contact email validation**
  - Client-side validation with a friendly inline error message.
- 🧱 **TypeScript first**
  - Source lives in `src/*.ts`; build output goes to `dist/` (ignored by git).

---

## 🛠️ Getting Started

### 1) Clone the repository
```bash
git clone https://github.com/<USERNAME>/<REPO>.git
cd TS-MID-PRJ
```

### 2) Install dependencies
Make sure you have Node.js and npm installed, then:
```bash
npm install -D typescript
```

### 3) Build TypeScript
Compile .ts files to .js continuously:
```bash
npx tsc -w
```
The output will be generated in the dist/ folder.

### 4) Run the project
Open src/index.html in your browser.
💡 Tip: Use VS Code extension Live Server for auto-reload.


🔧 Customization

Footer text: update it in src/footer.ts.

Avatar image: replace src/assets/khalid.jpg and keep the same path (or update the src in about.html).

Colors & theme: tweak CSS variables in :root inside src/prj.css.

Ignore build output: dist/ is ignored by default via .gitignore.



👤 Author

Khalid Asiri
Trainee & Web Learner — practicing full-stack web development with TypeScript.
