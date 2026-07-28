# Command: `<name>` — <Short Title>

## Purpose
One or two sentences: what this command extracts/organizes, and why it's
its own command rather than folded into another one.

## When to run it
- Signal from the audit that suggests this command applies.
- User phrasing that should trigger it (besides the bare command word).

## What it does
Numbered steps — concrete actions, not vague principles.

## Output convention
```
Example file tree fragment showing where output lands.
```

## Checklist
- [ ] Concrete, checkable outcomes for this command specifically.

---
To register a new command:
1. Copy this file to `references/commands/<name>.md` and fill it in.
2. Add a row to the Command Index table in `SKILL.md`.
3. If it interacts with an existing command (consumes/produces the same
   files), cross-reference it in both files' "What it does" sections.
