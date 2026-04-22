# Lab 08 – Next.js Frontend App

**Course:** Full Stack Programming  
**Lab:** Lab_08 – Next.js Frontend  
**Class:** BSSE-VI-B & A  
**Instructor:** Mr. Sharif Hussain  

---

## 🚀 Getting Started

### Prerequisites
- Node.js (LTS version) — [Download here](https://nodejs.org/en/download)
- npm (included with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>

# 2. Navigate into the project folder
cd Lab_08_NEXTjsApp

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero banner, features, featured products |
| About | `/about` | Project info, technologies, lab details |
| Contact | `/contact` | Contact form with validation |
| Products | `/products` | Full product listing (Task 2 – ProductList) |
| Product Detail | `/products/[id]` | Dynamic routing for each product |

---

## ✅ Lab Tasks Completed

### Task 1: Multi-Page Next.js App
- ✅ 3 pages: **Home**, **About**, **Contact**
- ✅ **Header** component with navigation links to all pages (active link highlighted)
- ✅ **Footer** added globally via `layout.tsx`
- ✅ Styling applied using **Tailwind CSS**

### Task 2: Dynamic Component
- ✅ **ProductList** component on `/products` — shows 6 products (title, description, price)
- ✅ **Dynamic routing** `/products/[id]` — individual product detail page
- ✅ **Footer** appears on all pages (global layout)
- ✅ Navigation links between Home, ProductList, and individual Product pages

---

## 🗂️ Project Structure

```
Lab_08_NEXTjsApp/
├── app/
│   ├── layout.tsx          ← Global layout (Header + Footer)
│   ├── globals.css
│   ├── page.tsx            ← Home page
│   ├── about/
│   │   └── page.tsx        ← About page
│   ├── contact/
│   │   └── page.tsx        ← Contact page
│   └── products/
│       ├── page.tsx        ← ProductList page
│       └── [id]/
│           └── page.tsx    ← Dynamic Product Detail page
├── components/
│   ├── Header.tsx          ← Navigation header
│   ├── Footer.tsx          ← Global footer
│   └── ProductCard.tsx     ← Reusable product card
├── lib/
│   └── products.ts         ← Product data
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## 🛠️ Tech Stack
- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
