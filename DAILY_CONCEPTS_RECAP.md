# Daily Concepts Recap (Sequential)

Purpose: This file is your fast-review reference. Concepts are appended day by day in learning order.
Status tags used across tracking files: `[OPEN]` and `[DONE - YYYY-MM-DD]`.

## 2026-04-16 - Day 1

### Concepts Covered

1. Node.js runtime basics
2. Blocking vs non-blocking I/O model
3. Sync and async file operations with `fs`
4. Callback-based async flow
5. Basic HTTP server lifecycle (`request` -> `response`)
6. Intro networking context (DNS, IP, port, TCP)

### Evidence Used

- Code implementation in `app.js` (`fs` + `http` usage)
- Learning comments written in `app.js`
- Supporting files: `templates/index.html`, `styles/style.css`, `templates/scripts/index.js`

### Review Reminder for This Day

- Be precise: callback style does not always equal async behavior.
- Implement route handling and response metadata next.

## 2026-04-16 - Day 1 (Later Session)

### Concepts Covered

7. Route-based request handling using `pathname`
8. Query parameter handling for dynamic details pages
9. Server-side HTML template replacement pattern
10. JSON data-driven rendering for product lists/details
11. Custom module creation and export/import basics

### Concepts Closed from Previous Gaps

- [DONE - 2026-04-16] Request routing by URL path
- [DONE - 2026-04-16] 404 fallback routing
- [DONE - 2026-04-16] Correct understanding that `readFileSync` should not use callback

### Still Open

- [OPEN] Static assets serving via routes
- [OPEN] Full content-type coverage and `500` handling
- [OPEN] Move toward `fs/promises` + `async/await`

## 2026-04-16 - Day 1 (Follow-up Session)

### Concepts Covered

12. Static route handling for CSS/JS assets
13. Default route mapping (`/` -> `/home`)
14. Basic fail-safe file read helper (`safeRead`)
15. Defensive JSON parsing helper (`safeParseJson`)
16. Centralized internal error response (`500`)

### Concepts Closed from Previous Gaps

- [DONE - 2026-04-16] Static assets serving via routes
- [DONE - 2026-04-16] Full content-type coverage and `500` handling (current lesson scope)

### Still Open

- [OPEN] Full placeholder abstraction for product templates
- [OPEN] Transition from sync reads to async reads (`fs/promises`)
