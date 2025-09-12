# Synapse Website

یک پروژه Next.js با Tailwind CSS که به درستی پیکربندی شده است.

## ویژگی‌ها

- ✅ Next.js 15.5.3
- ✅ React 19.1.0
- ✅ Tailwind CSS 3.4.0 (نسخه پایدار)
- ✅ TypeScript
- ✅ PostCSS و Autoprefixer
- ✅ رنگ‌های سفارشی (testBlue, testRed)

## نصب و راه‌اندازی

```bash
# نصب dependencies
npm install

# اجرای پروژه در حالت development
npm run dev

# ساخت پروژه برای production
npm run build

# اجرای پروژه در حالت production
npm start
```

## پیکربندی Tailwind CSS

Tailwind CSS به درستی پیکربندی شده و شامل:

- **Content paths**: `./src/**/*.{js,ts,jsx,tsx,mdx}`
- **رنگ‌های سفارشی**: 
  - `testBlue`: #1E40AF
  - `testRed`: #DC2626
- **PostCSS**: پیکربندی شده با autoprefixer

## تست Tailwind CSS

صفحه اصلی شامل تست‌های مختلف Tailwind CSS است:
- رنگ‌های سفارشی
- کلاس‌های مختلف (background, text, spacing, etc.)
- Responsive design
- Grid layout

## ساختار پروژه

```
src/
├── app/
│   ├── globals.css      # فایل CSS اصلی با Tailwind directives
│   ├── layout.tsx       # Layout اصلی
│   └── page.tsx         # صفحه اصلی با تست‌های Tailwind
├── components/          # کامپوننت‌های React
└── ...
```

## استفاده از Tailwind CSS

```jsx
// مثال استفاده از کلاس‌های Tailwind
<div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
  <h1 className="text-2xl font-bold">عنوان</h1>
  <p className="text-sm opacity-90">توضیحات</p>
</div>

// استفاده از رنگ‌های سفارشی
<div className="bg-testBlue text-white p-4">
  رنگ آبی سفارشی
</div>
```

## مشکلات حل شده

- ✅ Tailwind CSS v4 به v3 تغییر یافت
- ✅ PostCSS configuration اصلاح شد
- ✅ Content paths در tailwind.config.js درست شد
- ✅ فایل postcss.config.mjs اضافی حذف شد

## دستورات مفید

```bash
# بررسی linting
npm run lint

# اجرای development server
npm run dev

# ساخت production build
npm run build
```

پروژه آماده استفاده است! 🚀
