# Lesson Learned and Gaps

Status legend: `[OPEN]` = pending, `[DONE - YYYY-MM-DD]` = covered in a later lesson.

## 2026-04-16 - Lesson 1

### What You Learned

- Node.js executes JavaScript outside the browser.
- Synchronous code blocks execution; asynchronous code supports non-blocking flows.
- Basic file operations in Node:
  - `writeFileSync`
  - `readFile`
  - `writeFile`
- Basic callback usage in async file handling.
- Creating a basic HTTP server using `http.createServer`.
- Intro-level network understanding: DNS, IP, ports, TCP.

### What You Understood Correctly

- Correct core idea of blocking vs non-blocking behavior.
- Good first backend step by combining file I/O practice with HTTP server creation.

### Gaps to Cover Next

- [DONE - 2026-04-16] `readFileSync` is synchronous and does not accept callbacks.
- [OPEN] Static assets need explicit serving logic (or static middleware in frameworks).
- [DONE - 2026-04-16] Request routing by URL path is missing.
- [OPEN] HTTP status codes and content types must be explicitly set (partially improved).
- [OPEN] Error handling strategy is still basic and should be hardened.

### Gap Closing Actions

1. [DONE - 2026-04-16] Implement path-based routing and `404` fallback.
2. [OPEN] Return proper `Content-Type` for HTML/CSS/JS.
3. [OPEN] Add `500` flow for read failures.
4. [OPEN] Start using `fs/promises` with `async/await`.

## 2026-04-16 - Lesson 2

### What You Learned

- URL parsing and route handling with Node `url.parse(request.url, true)`.
- Query string usage (`/products?id=...`) for dynamic detail pages.
- Template-style content injection using placeholders.
- Reading structured JSON data and rendering server-side HTML output.
- Basic modularization by creating a custom helper module (`modules/bindHtml.js`).

### What You Understood Correctly

- Correctly implemented route-based behavior (`/home`, `/about`, `/products`, fallback `404`).
- Correctly connected data (`products.json`) to template rendering flow.
- Correctly recognized that custom modules can encapsulate reusable logic.

### Gaps to Cover Next

- [DONE - 2026-04-16] CSS and JS assets are still not served by route handlers.
- [DONE - 2026-04-16] `about` response does not set explicit `Content-Type`.
- [OPEN] `bindHtml` module exists but is not yet fully integrated in main rendering flow.
- [DONE - 2026-04-16] No guarded `try/catch` or fallback `500` handling for JSON/template file failures.
- [DONE - 2026-04-16] Route matching uses `toLocaleLowerCase`; prefer `toLowerCase` for URL normalization.

### Gap Closing Actions

1. [DONE - 2026-04-16] Add `/styles/style.css` and `/scripts/index.js` route handlers with correct `Content-Type`.
2. [DONE - 2026-04-16] Ensure all HTML responses include `Content-Type: text/html`.
3. [OPEN] Replace repeated `replace(...)` chains with reusable helper functions.
4. [DONE - 2026-04-16] Add guarded server startup and runtime response error paths.

## 2026-04-16 - Lesson 2 Follow-up

### What You Learned

- Serving static files manually from the Node router.
- Mapping `/` to `/home` for default page behavior.
- Creating defensive helpers (`safeRead`, `safeParseJson`) and returning `500` safely.
- Practical use of `bindHtml` for base page content injection.

### What You Understood Correctly

- Each asset (`CSS`, `JS`) is a separate HTTP request and needs its own route in this manual server setup.
- Basic reliability improves when file read/parse failures are handled consistently.
- Better UX can start with a small routing decision (`/` -> `/home`).

### Remaining Gaps

- [OPEN] Full template rendering abstraction is still pending (product placeholders still use repeated `replace` chains).
- [OPEN] Relative asset paths are used in HTML (`styles/...`, `scripts/...`); absolute paths (`/styles/...`) are safer and more predictable.
