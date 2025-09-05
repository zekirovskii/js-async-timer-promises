# ⏱️ JS Async: Timer & Promises

A small Vanilla JS project showcasing:
- A **Countdown Timer** built with **flatpickr** and **iziToast** (datetime picking, validation, lifecycle control).
- A **Promise Generator** that resolves/rejects promises with configurable initial delay and step.

Both tasks focus on asynchronous JavaScript fundamentals: timeouts, intervals, and the Promise API.

---
## 📸 Preview

![Movie Search App Screenshot](./public/timer.png)

---

## 🚀 Live Demo
- **Vercel:** [https://js-async-timer-promises.vercel.app](https://zekirovskii.github.io/goit-js-hw-10/)
- **Repository:** https://github.com/zekirovskii/js-async-timer-promises

---

## ✨ Features

### Task #1 — Countdown Timer
- Date picking via **flatpickr** with proper config.
- **Validation on close**: past dates are blocked; shows **iziToast** feedback.
- Start button is **enabled/disabled** correctly based on validity & running state.
- Uses `setInterval` to tick every second; **stops exactly at target**.
- Utility helpers:
  - `convertMs(ms)` to decompose milliseconds → days/hours/minutes/seconds
  - `addLeadingZero(value)` for 2-digit formatting (e.g., `04`)

### Task #2 — Promise Generator
- Handles form submit, prevents default, extracts values.
- `createPromise(position, delay)` returns a Promise that **resolves or rejects** based on selected state.
- Chains with `.then/.catch` and shows **iziToast** with unified formatting.
- Supports **initial delay** and **step** increments between promises.

---

## 🛠️ Tech Stack
- **Vanilla JavaScript (ES Modules)**
- **flatpickr** (datetime picker)
- **iziToast** (notifications)
- Optional bundler/dev server: **Vite** (recommended)

---

## 📂 Project Structure
```
js-async-timer-promises/
│
├─ public/
│ └─ screenshots/
│ ├─ timer.png
│ └─ promises.png
│
├─ src/
│ ├─ js/
│ │ ├─ timer.js # Task #1 logic (flatpickr, interval, helpers)
│ │ └─ promises.js # Task #2 logic (createPromise, toasts)
│ ├─ css/
│ │ └─ styles.css # Minimal styling
│ ├─ index.html # Two sections: Timer + Promises
│ └─ main.js # Imports modules & third-party libs
│
├─ .prettierrc # Prettier config (optional)
├─ package.json
└─ README.md
```
---

## 📦 Installation & Scripts

```bash
# Clone
git clone https://github.com/username/js-async-timer-promises.git
cd js-async-timer-promises

# Install (if using Vite / bundler)
npm install

# Dev
npm run dev

# Build
npm run build

# Preview build
npm run preview
Suggested package.json scripts (Vite):
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^5.0.0"
  },
  "dependencies": {
    "flatpickr": "^4.6.13",
    "izitoast": "^1.4.0"
  }
}
If you prefer no bundler, include flatpickr and iziToast via CDN in index.html and load src/js/*.js with <script type="module">.
🔑 Usage Notes
Timer
Validation: Past dates are rejected in onClose; shows a toast.
Lifecycle:
Button is disabled while counting down.
Interval clears automatically at target time (no drift).
DOM updates: Values are padded with addLeadingZero.
Promises
Form submit reads: delay, step, amount, and state (resolve/reject).
Sequential promises use:
delay for the first promise,
delay + i * step for next ones.
Each promise shows toast on success/error with position and delay data.
🧹 Code Quality
No console errors/warnings.
Default exports for components/modules where applicable.
Prettier for consistent formatting.
CSS Modules not required (Vanilla CSS used), but structure is ready for scaling.
