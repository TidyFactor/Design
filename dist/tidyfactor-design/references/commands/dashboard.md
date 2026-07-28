# Command: `dashboard` — Add an App/Dashboard Screen

## Purpose
Dashboards are structurally different from marketing pages (persistent
navigation shell, data-density, empty/loading/error states are core to the
experience, not edge cases) — kept as its own command so those differences
get deliberate handling instead of the marketing-page template stretched to
fit.

## When to run it
- Any app-shell screen: overview/analytics, a data table view, a settings
  screen, a detail/record view, an onboarding step.
- User phrasing: "design a dashboard screen", "add the settings page to
  the app", `dashboard`.

## What it does
1. Confirm (or establish, on the first `dashboard` run) the **persistent
   shell**: sidebar or topbar navigation, defined once as a component,
   reused identically across every dashboard screen — never rebuilt per
   screen.
2. Compose the screen's content area from `components.css`/foundation
   library data surfaces: stat cards, data tables, charts-as-static-visual
   (a prototype doesn't need live data binding, but the visual should read
   as real data, not a placeholder grid), filters, forms.
3. **Build the full state set as part of this command, not as an
   afterthought**: populated, empty (with a clear next action), loading
   (skeleton, not a spinner-only blank), and error — a dashboard prototype
   that only shows the happy path isn't credible to a client review.
4. Keep density and information hierarchy deliberate — a dashboard's job is
   scanning, not persuading; resist marketing-page hero treatment here.
5. Same drift rule as `page`: any missing pattern gets routed through
   `components`, never improvised in place.

## Output convention
```
pages/dashboard-<screen-name>.html
  <nav class="app-shell__sidebar">...</nav>   ← identical markup across every dashboard screen
```

## Checklist
- [ ] Shell (nav) markup identical across all dashboard screens in the
      project
- [ ] Empty, loading, and error states built alongside the populated state
- [ ] Data surfaces read as real data, not obvious placeholder content
- [ ] No page-level CSS/JS — same rule as `page`
