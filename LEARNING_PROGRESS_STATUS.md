# Learning Progress Status

Status legend: `[OPEN]` = pending, `[DONE - YYYY-MM-DD]` = covered in a later lesson.

## 2026-04-16

- Lesson: 1
- Overall status: **On track**
- Pace vs 2-month goal: **On track**
- Confidence level: Beginner -> improving fundamentals
- Strength observed today:
  - Practical coding started immediately (`fs`, `http`)
  - Good conceptual curiosity around networking basics
- Risk flags:
  - [DONE - 2026-04-16] Route handling and status codes not implemented yet
  - [OPEN] Sync/async API usage needs precision
- Priority for next lesson:
  - [DONE - 2026-04-16] Route-based server behavior
  - [OPEN] Correct headers and error responses

## 2026-04-16 (Later Session)

- Lesson: 2
- Overall status: **On track**
- Pace vs 2-month goal: **On track**
- Confidence level: Beginner -> building routing confidence
- Strength observed today:
  - Implemented manual routing with URL parsing and query handling
  - Added a dynamic products list and product details rendering flow
  - Created a custom module (`modules/bindHtml.js`) and started template binding
- Risk flags:
  - [DONE - 2026-04-16] Static assets (`/styles`, `/scripts`) are not served by the Node router yet
  - [DONE - 2026-04-16] Error handling still does not return `500` for file/data failures
  - [OPEN] Sync file reads at startup are overused for learning code and should be gradually refactored
- Priority for next lesson:
  - [DONE - 2026-04-16] Serve CSS/JS routes with correct content type
  - [DONE - 2026-04-16] Add a simple error-safe response helper (`404`, `500`)
  - [OPEN] Reuse the custom bind function consistently instead of repeated `replace` chains

## 2026-04-16 (Follow-up Session)

- Lesson: 2 follow-up
- Overall status: **On track**
- Pace vs 2-month goal: **On track**
- Confidence level: Beginner -> building end-to-end routing confidence
- Strength observed today:
  - Completed static asset serving for CSS and JS routes
  - Added `safeRead`/`safeParseJson` defensive flow and `500` response helper
  - Added `/` to `/home` mapping for better default UX
- Risk flags:
  - [OPEN] `bindHtml` reuse is still partial (full product template replacement still uses direct chained `replace`)
  - [OPEN] Startup data/template loading still relies on sync reads (acceptable now for learning, not ideal for production)
- Priority for next lesson:
  - [OPEN] Refactor product template mapping to centralized reusable helpers
  - [OPEN] Move gradually to async file loading patterns (`fs/promises`)
