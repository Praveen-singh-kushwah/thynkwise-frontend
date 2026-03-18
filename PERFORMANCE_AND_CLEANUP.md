# Performance & Cleanup Analysis – Thynkwise Next.js Frontend

## 1. Why navigation was slow (root cause)

### **Internal links used full URLs → full page reloads**

All internal navigation used `process.env.SITE_URL + "/about-us"` (e.g. `http://127.0.0.1:3010/about-us`) in `<Link href={...}>`. In Next.js, **a full absolute URL is treated as external**, so the router does a **full page load** instead of client-side navigation. That means on every click:

- The whole document reloads
- All layout JS/CSS run again
- All third‑party scripts (Analytics, Apollo, LinkedIn, ChatNode, etc.) run again
- No shared layout/state; no prefetch

**Fix applied:** Internal links were changed to path-only hrefs (e.g. `"/about-us"`, `"/"`) in:

- `components/Main/Layout/Header/Header.js`
- `components/Main/Layout/MobileNav/MobileNav.js`
- `components/Main/Layout/Footer/Footer.js`
- `components/Common/Pagebanner.js`
- `components/Common/NotFound.js`
- `components/Main/Home/Section9/Section9.js`
- `components/Main/Service/Section3/Section3.js`
- `components/Main/Blog/BlogSidebar.js`
- `components/Main/Assessment/TestFormDetail.js`

After this change, in-app navigation should use client-side transitions and feel much faster.

---

## 2. Other factors that affect load and navigation

### 2.1 jQuery + Bootstrap JS on every page

- **File:** `components/Bootstrap.js`  
- **Behavior:** In `useEffect` it does `require("jquery")` and `require("bootstrap/dist/js/bootstrap.bundle.min")`, so **jQuery (~90KB) and Bootstrap JS** load on the client for every page.
- **Impact:** Slower first load and hydration; more JS to parse on navigation when combined with full reloads (now partly mitigated by fixing links).
- **Recommendation:**  
  - Use Bootstrap only for CSS (you already use `bootstrap/dist/css/bootstrap.min.css`).  
  - Replace any Bootstrap JS usage (dropdowns, modals, etc.) with small React components or native HTML (e.g. `<details>`) so you can **remove the Bootstrap.js component and the jQuery/Bootstrap JS imports** from the layout.

### 2.2 Many third‑party scripts in root layout

- **File:** `app/layout.js`  
- **Scripts:** Google Analytics (x2), LinkedIn Insight, Apollo tracking, Apollo meetings, Apollo inbound, ChatNode embed, thynkbot embed. Several use `strategy="afterInteractive"`, so they run soon after load.
- **Impact:** More network and main-thread work on every (full) load; with client-side nav this is less severe but still adds cost.
- **Recommendation:**  
  - Prefer `strategy="lazyOnload"` for non‑critical scripts (e.g. some analytics).  
  - Load chat/meeting widgets only on routes that need them (e.g. contact or pricing) via dynamic import or a small wrapper component that mounts only on those paths.

### 2.3 Framer Motion in critical path

- **Usage:** `MobileNav` uses `framer-motion` (AnimatePresence + motion). Several animation components (Bounce1, SlideUp, Rotate, etc.) also use it and are used on multiple pages.
- **Impact:** Framer Motion adds to the JS bundle; MobileNav is in the main layout, so it affects every page.
- **Recommendation:**  
  - Keep it if the UX is important; otherwise consider replacing mobile menu animation with CSS (e.g. `transform` + `transition` or a small utility) to trim bundle size.  
  - For below-the-fold or non-critical animations, consider dynamic import:  
    `const MotionComponent = dynamic(() => import('@/components/Common/Animations/Bounce1'), { ssr: false });`

### 2.4 Font optimization disabled

- **File:** `next.config.mjs` – `optimizeFonts: false`
- **Impact:** Next.js does not optimize font loading (subsetting, preload, etc.). You still use `next/font/google` (Poppins) in `utilities/fonts.js`, which helps, but the global flag can affect other font usage.
- **Recommendation:** Set `optimizeFonts: true` (or remove the option so it defaults to true) unless you have a specific reason it was turned off.

### 2.5 CMS / API fetches on each page

- **Behavior:** Pages like home, about-us, contact-us call `getHomePage()`, `getAboutPage()`, `getContactPage()`, etc. These use `next: { tags: [...] }` for cache invalidation but no explicit `revalidate`.
- **Impact:** First load per page waits on the CMS; repeat visits use cache. With client-side nav, only the first visit to each route pays this cost.
- **Recommendation:**  
  - Add `revalidate: 60` (or another value in seconds) in fetch options where appropriate so data is refreshed periodically without waiting for tag revalidation.  
  - Ensure CMS is fast and consider a short revalidate for public content.

---

## 3. Unnecessary or removable items

### 3.1 Dependencies (already fixed in package.json)

- **`install`** – Not a runtime library; removed from `dependencies`.
- **`npm`** – Same; removed from `dependencies`.

Run `npm install` after pulling the package.json change so the lockfile and `node_modules` are updated.

### 3.2 Duplicate / copy files (safe to delete if not referenced)

These look like backups or old copies; they are not part of the normal import graph. **Confirm they are not imported anywhere, then delete:**

- `components/Main/Service/Section1/Section1 copy.js`
- `components/Common/HeyGenChat/HeyGenAutoLoad copy.js`
- `components/Main/ContactUs/ContactUsForm copy.js`
- `components/Main/ContactUs/ContactUsForm copy 2.js`
- `components/Main/GemQuiz/GemQuizForm copy.js`
- `components/Main/GemQuiz/GemQuiz copy.js`
- `components/Main/GemQuiz/GemQuiz copy 2.js`
- `components/Main/Home/Section1/Section1.js copy`
- `components/Main/Home/Section1/Section1 copy.js`
- `components/Main/Pricing/PricingCard copy.js`
- `components/Main/Pricing/NewPricing copy.js`
- `components/Common/PlanPopup copy.js` (only if there is a non-copy PlanPopup and this is unused)
- `components/Main/Home/Section2/Section2.module copy.css`
- `components/Main/FoundersMessage/Section6/Section6.module copy.css`
- `components/Main/FoundersMessage/Section6/Section6 copy.js`
- `components/Main/Pricing/PricingForm copy.js`
- `components/Main/Pricing/PricingTable copy.js`

Search the codebase for imports of these file names before deleting.

### 3.3 Placeholder / test route

- **Route:** `app/(main)/new-page/page.js` – Renders a “New Page” banner and `NewPage` component.
- **Recommendation:** Remove the route (and the `NewPage` component if unused elsewhere) if this was only for testing.

### 3.4 @sendgrid/mail in frontend

- **Current state:** Not used in `app/` or `components/` (typical for a frontend repo; SendGrid is usually used in API routes or a backend).
- **Recommendation:** If you have no API route or server action that sends email via SendGrid, remove `@sendgrid/mail` from `package.json` to reduce install size and surface area.

### 3.5 Commented-out code and scripts

- **Layout:** Commented Alli AI widget, HeyGen auto-load, WATI script, etc.
- **Recommendation:** Remove commented blocks if you do not plan to use them; they add noise and can confuse future changes. Keep the repo under version control so you can recover if needed.

---

## 4. Quick checklist

| Action | Done / To do |
|--------|----------------|
| Use path-only hrefs for internal `<Link>` (e.g. `/about-us`) | Done in Header, Footer, MobileNav, Pagebanner, NotFound, Section9, Section3, BlogSidebar, TestFormDetail |
| Remove `install` and `npm` from package.json | Done |
| Consider removing Bootstrap.js and jQuery for nav/dropdowns | Optional |
| Move non-critical scripts to `lazyOnload` | Optional |
| Set `optimizeFonts: true` in next.config | Optional |
| Add `revalidate` to CMS fetches where appropriate | Optional |
| Delete duplicate/copy component and CSS files | After confirming not imported |
| Remove `new-page` route and unused `NewPage` component | Optional |
| Remove `@sendgrid/mail` if no server-side email | Optional |

---

## 5. Expected result

- **Navigation:** Should be noticeably faster after the Link href changes, as Next.js will use client-side navigation and prefetch for in-app routes.
- **Cleanup:** Removing copy files and unused deps will simplify the project and slightly improve install/build times.

If you want, we can next: (1) remove the duplicate/copy files after a quick import check, (2) switch more scripts to `lazyOnload`, or (3) add `revalidate` to specific CMS fetches.
