# Node.js Learning Journey (Mentored)

## Student Profile

- Background: Senior Angular frontend developer
- Backend level: Beginner
- Goal: Reach intermediate Node.js level in 2 months
- Track: Real-world backend path (Node.js + PostgreSQL + Angular integration)

## Tracking Files (Always Synced)

- `LEARNING_PROGRESS_STATUS.md` -> Date-based daily status and pace tracking
- `LESSON_LEARNED_AND_GAPS.md` -> What you learned vs gaps to close
- `DAILY_CONCEPTS_RECAP.md` -> Sequential concept recap for fast revision
- `NODEJS_LEARNING_JOURNEY.md` (this file) -> Mentor notes, production guidance, and exercises

## Sync Rules

- Every review must include the date in `YYYY-MM-DD`.
- All four files are updated together in the same review cycle.
- Your code comments are treated as learning evidence for that lesson.
- Concepts are appended sequentially by day to support end-of-course revision.

## Completion Tags (Mandatory)

- Use `[OPEN]` beside any gap, risk, or priority that is still pending.
- Use `[DONE]` beside the same item once it is covered in a later lesson.
- Keep closed items in history; do not delete them (for revision tracking).
- When an item becomes done, mention when it was closed (example: `[DONE - 2026-04-20]`).

---

## 2026-04-16 - Lesson 1 Mentor Notes

### Lesson Scope

- Node runtime basics
- File system practice (`fs`)
- First HTTP server with `http.createServer`

### Production Guidance

- Avoid sync file operations in request handling paths.
- Add route-based responses and HTTP status codes (`200`, `404`, `500`).
- Set correct `Content-Type` when serving HTML/CSS/JS.
- Avoid logging full request/response objects in normal flow.
- Use env configuration early (`PORT`, `NODE_ENV`).

### Clean Code Focus

- Keep server setup, routing, and file reads separated.
- Use async/await (`fs/promises`) over nested callbacks where possible.
- Keep examples clean; avoid large commented blocks in active app files.

### Next Exercises

1. Implement manual routing:
   - `/` -> HTML
   - `/styles/style.css` -> CSS
   - `/scripts/index.js` -> JS
   - unknown routes -> `404`
2. Add basic file read error handler returning `500`.
3. Refactor selected file operations to promise-based APIs.

### Readiness

- You are ready for the next step: request routing + headers + status codes.

---

## 2026-04-16 - Lesson 2 Mentor Notes

### Lesson Scope

- Manual route handling with `url.parse`
- Query-based product details page
- Data rendering from `products.json`
- Custom module creation (`modules/bindHtml.js`)

### Production Guidance

- Good progress: route branching and query parsing are now implemented.
- Add route handlers for static assets (`/styles/style.css`, `/scripts/index.js`) to avoid broken UI resources.
- Return consistent headers on all HTML responses (`Content-Type: text/html`).
- Add minimal defensive error handling for data/template read failures (`500` response path).
- Replace repeated string replacements with reusable helper logic to reduce duplication.

### Clean Code Focus

- Remove unused imports (currently `bindHtml` is imported but not used).
- Prefer `===` over `==` when matching product IDs after explicit type conversion.
- Keep inline CSS out of HTML templates; move style to stylesheet progressively.
- Keep template binding centralized to avoid brittle placeholder naming mismatches.

### Next Exercises

1. Serve static files manually:
   - `/styles/style.css` -> `text/css`
   - `/scripts/index.js` -> `text/javascript`
2. Integrate `bindHtml` for:
   - `{{%CONTENT%}}` replacement
   - product list/details field replacement
3. Add simple `safeRead` wrapper:
   - on error, respond `500` with stable message
4. Add `/` redirect or map to `/home` for better default UX.

### Readiness

- Status: **On track**
- Ready to move to next step: reusable rendering helpers + basic error-safe server structure.

---

## 2026-04-16 - Lesson 2 Follow-up Mentor Notes

### Validation of Completed Exercises

- [DONE - 2026-04-16] Served static files manually:
  - `/styles/style.css` -> `text/css`
  - `/scripts/index.js` -> `text/javascript`
- [DONE - 2026-04-16] Added `safeRead` wrapper and stable `500` response path.
- [DONE - 2026-04-16] Added `/` mapping to `/home`.
- [PARTIAL] Integrated `bindHtml`:
  - Done for page content replacement
  - Product placeholder replacement still uses repeated direct `replace(...)`

### Production Notes

- Good implementation progression: behavior is now much closer to a real server flow.
- Keep `Content-Type` key casing consistent as `Content-Type` in all responses.
- Prefer absolute asset paths in templates (`/styles/style.css`, `/scripts/index.js`) for predictable resolution.

### Next Exercises

1. Create a product-level render helper (single function that binds all placeholders).
2. Replace chain-based replacements in product list/details with that helper.
3. Move startup file reads to async style in a next lesson (`fs/promises`) while keeping behavior unchanged.

### Readiness

- Status: **On track**
- Ready for next step: modular rendering utilities + async startup loading.
