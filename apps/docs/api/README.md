# 📘 Memory-X API Reference Docs

This repository contains the **auto-generated API reference documentation** for the **Memory-X** package.

---

## 🌐 Online Version

* **Coming soon**

---

## 🛠️ Local Development

### 1. Generate the API Docs

Run the following command:

```bash
pnpm -w install
```
```bash
pnpm -w run api-docs
```

* This uses [TypeDoc](https://typedoc.org/) to generate the documentation directly into the `/public` directory.
* The output includes `index.html`, which becomes the root page of your site when served.

### 2. Serve with Next.js

Run the Next.js development server:

```bash
pnpm run dev
```

* When you visit [http://localhost:3001](http://localhost:3001), you’ll be served the `index.html` from `/public`.
* This effectively displays the API documentation as your root page (`/ → /index.html`).

---

## 📁 Notes

* The `/public` folder is **auto-generated** and is intentionally **.gitignored** to avoid committing build artifacts.
* In production, the static HTML docs will be served as the main page by default.
