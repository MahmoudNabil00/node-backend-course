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
