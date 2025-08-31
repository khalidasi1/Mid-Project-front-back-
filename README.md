# TS Mid Project 🚀

A simple **TypeScript + HTML + CSS** project developed as part of my web development training.  
It includes a **Stopwatch application** and basic static pages (`Home`, `About`, `Contact`) styled with custom CSS.

---

## 📂 Project Structure

TS-MID-PRJ/
│
├── src/
│ ├── index.html # Main page (Stopwatch)
│ ├── about.html # About page
│ ├── contact.html # Contact page
│ ├── prj.css # Main stylesheet
│ └── proj.ts # TypeScript source (Stopwatch logic)
│
├── tsconfig.json # TypeScript configuration
└── .gitignore # Git ignore rules


---

## ⚡ Features

- ⏱️ **Stopwatch app** implemented in TypeScript:
  - Start, Stop, Reset, Peek time.
  - Auto-update while running.
- 🎨 **Custom CSS styling** with modern UI (cards, header, navigation).
- 🌐 **Static Pages**:
  - Home
  - About
  - Contact
- 📐 Structured project with TypeScript build output ignored (`dist/`).

---

## 🛠️ Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/<USERNAME>/<REPO>.git
cd TS-MID-PRJ
```

2. Install dependencies

Make sure you have Node.js and npm installed, then run:
```bash
npm install -D typescript
```
3. Build TypeScript

Compile .ts files to .js continuously:
```bash
npx tsc -w
```
The output will be generated in the dist/ folder.

4. Run the project

Open src/index.html in your browser.
💡 Tip: Use VS Code extension Live Server for auto reload.

📝 Scripts (optional)

Add these scripts to your package.json for convenience:
```bash

"scripts": {
  "build": "tsc",
  "dev": "tsc -w"
}
```

Then you can run:
```bash

npm run dev
```

