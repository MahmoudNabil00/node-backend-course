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

- [OPEN] `readFileSync` is synchronous and does not accept callbacks.
- [OPEN] Static assets need explicit serving logic (or static middleware in frameworks).
- [OPEN] Request routing by URL path is missing.
- [OPEN] HTTP status codes and content types must be explicitly set.
- [OPEN] Error handling strategy is still basic and should be hardened.

### Gap Closing Actions

1. [OPEN] Implement path-based routing and `404` fallback.
2. [OPEN] Return proper `Content-Type` for HTML/CSS/JS.
3. [OPEN] Add `500` flow for read failures.
4. [OPEN] Start using `fs/promises` with `async/await`.
