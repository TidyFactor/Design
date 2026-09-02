<!-- last-verified: 2026-09-02 -->
# Brain MCP & Sovereign BaaS Integration Contract

Authoritative operational specification governing how `tidyfactor-design` integrates with self-hosted `tidyfactor-brain` MCP instances and sovereign BaaS nodes without creating hard dependencies or blocking offline workflows.

---

## 🏛️ 1. Sovereign Architecture Model (Self-Hosted Primacy)

TidyFactor operates on a **Sovereign, Self-Hosted Architecture**:
- **Zero Centralized SaaS Dependency**: `tidyfactor-brain` and its MCP server run locally on the developer's machine or on an agency's self-hosted server instance (Apache G5 / PHP Flight / SQLite WAL).
- **Tenant Definition**: In this sovereign architecture, a `tenant` represents an isolated client project / domain workspace (e.g. `tenant_dr_sh`, `tenant_alwkala`) mapped to a dedicated SQLite file (`data/tenants/{tenant_id}_brain.sqlite`) or scoped directory (`~/.gemini/knowledge/projects/{project_id}/`).
- **No Global Auth Overhead**: Local stdio connections run authentication-free. Self-hosted remote SSE nodes authenticate via static bearer tokens configured in the agency's `mcp_config.json`.

---

## ⚡ 2. The Deterministic Fail-Open Contract

Brain MCP is an **optional acceleration layer**, NEVER a required runtime dependency.

### Strict Resolution Algorithm:

```
Step 1: Check Local Disk Workspace
        ├── IF `BRAND-GUIDELINES.md` or `.tidyfactor/design-brief.md` exists:
        │   └── LOAD directly from disk. Done.
        └── ELSE: Proceed to Step 2.

Step 2: Check Active MCP Toolset Availability
        ├── IF tool `search_knowledge_base` is present in agent's active tool list:
        │   ├── Execute: `search_knowledge_base(query="design tokens", scope="project", project_id=CURRENT_PROJECT)`
        │   ├── IF valid design KI returned:
        │   │   └── POPULATE context baseline. Done.
        │   └── ELSE (Empty/Error):
        │       └── Silent fallback (0ms delay) to Step 3.
        └── ELSE (Tool not registered / Standalone environment / Offline):
            └── Silent fallback (0ms delay) to Step 3.

Step 3: Interactive Micro-Discovery (CDL 3-Question Dialogue)
        └── Present concise, structured A/B/C/D choices to the user. Done.
```

### Invariants:
1. **Zero Connection Attempts**: Skills must NEVER attempt raw HTTP connections or socket calls to non-existent servers. They only query native MCP tools if registered in the active agent session.
2. **Zero Delay & Zero Noise**: Missing MCP server must NEVER yield warning messages, stack traces, or connection timeouts. The bypass must be instant and silent.

---

## 📦 3. Design System Knowledge Item (KI) Contract

When exporting design baselines via explicit `--sync-brain` flag on `handoff`, the skill formats the deliverable as a structured Atomic KI conforming to the following JSON payload:

```json
{
  "schema_version": "1.0.0",
  "ki_type": "design_system_baseline",
  "project_id": "current-project-slug",
  "timestamp": "2026-09-02T05:00:00Z",
  "tokens": {
    "css_foundation": "native|tailwind|daisyui|pico|hybrid",
    "design_school": "neobrutalism|editorial-luxury|swiss-modern|minimal-mono|heritage-egyptian",
    "palette": {
      "primary": "#HEX",
      "secondary": "#HEX",
      "accent": "#HEX",
      "surface": "#HEX",
      "text": "#HEX"
    },
    "typography": {
      "display_heading": "El Messiri",
      "body_copy": "Tajawal",
      "font_family_latin": "Inter"
    },
    "layout_archetype": "hero-split-canvas|editorial-asymmetric|command-center-grid"
  },
  "artifacts": [
    "design-system/tokens.css",
    "design-system/base.css",
    "brand.json"
  ]
}
```

---

## 🛠️ 4. Tooling Execution Bridge (`run_skill_tool`)

When `tidyfactor-brain` executes `tidyfactor-design` scripts via `manifest.json`:

| Tool Name | Script Entrypoint | Latency Class | Execution Mode |
|---|---|---|---|
| `audit_design` | `scripts/audit_design.py` | Sub-second (<100ms) | Direct CLI / In-memory AST |
| `extract_palette` | `scripts/extract_palette.py` | Sub-second (<150ms) | WCAG Color Math Engine |
| `optimize_media` | `scripts/optimize_assets.py` | Async Batch (2–8s) | `isolation_recommended: true` (rembg/onnx) |

---
