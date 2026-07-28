# TidyFactor Design — Workflow Discipline

Applies underneath every command in `commands/`.

## 1. Audit
- Check for `design-system/tokens.css` and `components.css` first — their
  presence/absence and content decide what every later command can safely
  assume.
- Check `design-system/brand.json` for a declared `cssFoundation` field
  (`native` / `tailwind` / `daisyui` / `hybrid`) — if the project has pages
  already, this MUST already be set; never re-ask, never silently switch it.
- Scan `pages/*.html` for violations of the locked architecture: inline
  `<style>`, inline `<script>` logic, or a per-page `.css`/`.js` file. Any
  hit is the primary finding, ahead of anything else.
- Report findings and the proposed changes before acting.

## 2. Execute in batches
- One page, one component addition, or one concern at a time.
- New component need discovered while building a page → stop, route it
  through the `components` command, resume the page after.
- Never touch `tokens.css` and add a new page in the same batch — token
  changes affect every existing page; verify the token change alone first.

## 3. Verify
- Serve locally (`python -m http.server 8123` or `npx serve`) and check in a
  **visible** browser tab.
- Run the `audit` command's structural check (no page-level CSS/JS) plus the
  quality-bar checklist (`memory/06-quality-bar.md`) before calling any page
  "done".
- Confirm the new/changed page still reads identically in whichever
  `cssFoundation` the project locked in — no accidental foundation mixing.

## Mode-specific notes

**Init** — Step 0/0b answers replace the audit step. Foundation and school
choices happen here, once, and are never re-litigated per page.

**Convert (`clone`)** — audit the *reference* (existing site, screenshots)
for its actual token values (colors, type scale, spacing rhythm) before
proposing a `tokens.css`. The output is never a scrape or a copy of the
reference's markup — it's our own token/component system that produces the
same *impression*, built from `references/commands/clone.md`'s extraction
method.

**Improve (`retrofit`)** — `audit` is the primary deliverable if the user
just wants a report. Only unify pages once the user confirms which findings
to act on. A page with heavy inline styling is not deleted and rebuilt
blind — its content and layout intent are preserved, only its styling
mechanism is migrated onto `components.css`.
