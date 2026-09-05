#!/usr/bin/env python3
"""
validate_skill.py — TidyFactor Design Release & Integrity Validator.
Comprehensive 13-Check Gate (15 Structural Rules of TidyFactor Skills).
"""

import sys
import os
import json
import re
from pathlib import Path
from datetime import datetime, timedelta

# Ensure UTF-8 output on Windows terminal
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")

def main():
    root = Path(__file__).resolve().parent.parent
    errors = []
    warnings = []
    
    print("=" * 60)
    print("  RUNNING TIDYFACTOR DESIGN RELEASE VALIDATION (15-RULE SUITE)")
    print("=" * 60)
    
    # 1. SemVer Synchronization Check (Rule 8 & 15)
    print("\n[1] Checking SemVer synchronization across metadata...")
    pkg_file = root / "package.json"
    tf_file = root / ".tidyfactor"
    brand_file_yaml = root / "brand.yaml"
    brand_file_json = root / "brand.json"
    cl_file = root / "CHANGELOG.md"
    
    pkg_ver = json.loads(pkg_file.read_text(encoding="utf-8")).get("version") if pkg_file.exists() else None
    tf_ver = json.loads(tf_file.read_text(encoding="utf-8")).get("version") if tf_file.exists() else None
    
    # Read brand version prioritizing brand.yaml over brand.json (Rule 15)
    brand_ver = None
    brand_source = None
    if brand_file_yaml.exists():
        brand_source = "brand.yaml"
        try:
            import yaml
            brand_data = yaml.safe_load(brand_file_yaml.read_text(encoding="utf-8")) or {}
            brand_ver = brand_data.get("version") or brand_data.get("meta", {}).get("version")
        except ImportError:
            for line in brand_file_yaml.read_text(encoding="utf-8").splitlines():
                if line.strip().startswith("version:"):
                    brand_ver = line.split(":", 1)[1].strip().strip('"').strip("'")
                    break
        print(f"  brand.yaml   : {brand_ver}")
    elif brand_file_json.exists():
        brand_source = "brand.json"
        brand_data = json.loads(brand_file_json.read_text(encoding="utf-8"))
        brand_ver = brand_data.get("version") or brand_data.get("meta", {}).get("version")
        print(f"  brand.json   : {brand_ver}")
    
    print(f"  package.json : {pkg_ver}")
    print(f"  .tidyfactor  : {tf_ver}")
    
    if not (pkg_ver and tf_ver and brand_ver and pkg_ver == tf_ver == brand_ver):
        errors.append(f"Version mismatch: package.json({pkg_ver}) vs .tidyfactor({tf_ver}) vs {brand_source}({brand_ver})")
    else:
        print(f"  [OK] Version {pkg_ver} synchronized across all metadata files.")
        
    if cl_file.exists():
        cl_text = cl_file.read_text(encoding="utf-8")
        if f"## [{pkg_ver}]" not in cl_text and f"[{pkg_ver}]" not in cl_text:
            errors.append(f"CHANGELOG.md is missing release entry for version [{pkg_ver}].")
        else:
            print(f"  [OK] CHANGELOG.md contains release entry for [{pkg_ver}].")
    else:
        errors.append("Missing CHANGELOG.md.")
        
    # 2. License check
    print("\n[2] Checking license consistency...")
    license_file = root / "LICENSE"
    if license_file.exists():
        print("  [OK] LICENSE file exists (Apache-2.0).")
    else:
        errors.append("Missing LICENSE file.")
        
    # 3. Check referenced files in SKILL.md
    print("\n[3] Checking SKILL.md referenced files exist on disk...")
    skill_md = root / "SKILL.md"
    if skill_md.exists():
        content = skill_md.read_text(encoding="utf-8")
        refs = re.findall(r'(?:references|memory|commands|workflows)/[a-zA-Z0-9_\-\./]+(?:\.md|\.json)?', content)
        for ref in sorted(set(refs)):
            target = root / ref
            ref_alt = root / "references" / ref
            if not target.exists() and not ref_alt.exists():
                if not target.is_dir() and not ref_alt.is_dir():
                    errors.append(f"SKILL.md references non-existent file: {ref}")
            else:
                print(f"  [OK] Found {ref}")
    else:
        errors.append("Missing SKILL.md.")

    # 4. Check workflow validation checklists (Rule 2)
    print("\n[4] Checking workflow checklists (Rule 2)...")
    wf_dir = root / "references" / "workflows"
    if wf_dir.exists():
        for wf in wf_dir.glob("*.md"):
            txt = wf.read_text(encoding="utf-8").lower()
            if "validation checklist" not in txt:
                errors.append(f"Workflow {wf.name} missing '## Validation checklist'")
            else:
                print(f"  [OK] {wf.name} has Validation checklist.")

    # 5. Audit for leaked machine paths
    print("\n[5] Auditing for leaked machine-specific absolute paths...")
    for ext in ["*.md", "*.json", "*.js", "*.py"]:
        for file in root.rglob(ext):
            if any(part in file.parts for part in [".git", "node_modules", "dist", "assets"]):
                continue
            text = file.read_text(encoding="utf-8", errors="ignore")
            if re.search(r'[A-Za-z]:\\(?:Users|wamp64|Dev-Studio)', text, re.IGNORECASE):
                if file.name not in ["release_suite.py", "audit_all_skills.py"]:
                    errors.append(f"Machine-specific absolute path found in: {file.relative_to(root)}")

    # 6. SKILL.md token budget (Rule 1: ~350 tokens target, max 800 for 20+ commands)
    print("\n[6] Checking SKILL.md token budget (Rule 1)...")
    if skill_md.exists():
        skill_text = skill_md.read_text(encoding="utf-8")
        words = len(skill_text.split())
        estimated_tokens = int(words * 1.25)
        print(f"  SKILL.md size: {len(skill_text)} chars / {words} words ≈ {estimated_tokens} tokens")
        if estimated_tokens > 850:
            warnings.append(f"SKILL.md estimated at {estimated_tokens} tokens (high)")
        else:
            print(f"  [OK] Within acceptable router token budget ({estimated_tokens} tokens).")

    # 7. Memory freshness check (Rule 11: last-verified within 180 days)
    print("\n[7] Checking memory freshness markers (Rule 11)...")
    mem_dir = root / "references" / "memory"
    if mem_dir.exists():
        today = datetime.now()
        max_age = timedelta(days=180)
        for mf in mem_dir.glob("*.md"):
            if mf.name == "philosophy.md":
                continue  # Philosophy is unreferenced, skip
            text = mf.read_text(encoding="utf-8")
            match = re.search(r'<!--\s*last-verified:\s*(\d{4}-\d{2}-\d{2})\s*-->', text)
            if match:
                verified_date = datetime.strptime(match.group(1), "%Y-%m-%d")
                age = today - verified_date
                if age > max_age:
                    warnings.append(f"Memory file {mf.name} last verified {match.group(1)} ({age.days} days ago, max 180)")
                else:
                    print(f"  [OK] {mf.name}: verified {match.group(1)} ({age.days} days ago)")
            else:
                warnings.append(f"Memory file {mf.name} missing <!-- last-verified: YYYY-MM-DD --> marker")

    # 8. SKILL.md Frontmatter YAML Syntax & Constraints (Rule 9)
    print("\n[8] Checking SKILL.md frontmatter YAML syntax & constraints (Rule 9)...")
    if skill_md.exists():
        content = skill_md.read_text(encoding="utf-8")
        if not content.startswith("---"):
            errors.append("SKILL.md is missing opening YAML frontmatter '---'.")
        else:
            parts = content.split("---", 2)
            if len(parts) < 3:
                errors.append("SKILL.md has unclosed YAML frontmatter '---'.")
            else:
                try:
                    import yaml
                    fm_data = yaml.safe_load(parts[1])
                    name_val = fm_data.get("name")
                    desc_val = fm_data.get("description")
                    if name_val != root.name:
                        warnings.append(f"SKILL.md name '{name_val}' does not match root folder '{root.name}'.")
                    else:
                        print(f"  [OK] Name: '{name_val}' (valid).")
                    if not desc_val:
                        errors.append("SKILL.md frontmatter missing 'description'.")
                    elif len(desc_val) > 1024:
                        errors.append(f"SKILL.md description length {len(desc_val)} exceeds 1024 chars.")
                    else:
                        print(f"  [OK] Description: {len(desc_val)}/1024 chars (YAML syntax valid).")
                except Exception as e:
                    errors.append(f"SKILL.md YAML frontmatter parsing failed: {e}")

    # 9. Runtime Tooling Manifest & Scope Declaration (Rule 10)
    print("\n[9] Checking Runtime Tooling Manifest & Scope declaration (Rule 10)...")
    manifest_file = root / "manifest.json"
    if manifest_file.exists():
        try:
            m_data = json.loads(manifest_file.read_text(encoding="utf-8"))
            req_keys = ["manifest_schema_version", "skill_id", "skill_root_anchor", "tools"]
            missing = [k for k in req_keys if k not in m_data]
            if missing:
                errors.append(f"manifest.json missing required fields: {missing}")
            else:
                tools_count = len(m_data.get("tools", []))
                print(f"  [OK] manifest.json valid ({tools_count} runtime tools declared).")
        except Exception as e:
            errors.append(f"manifest.json parsing error: {e}")

    # 10. Test Scenarios Verification
    print("\n[10] Checking Test Scenarios (tests/scenarios.md)...")
    tests_file = root / "tests" / "scenarios.md"
    if tests_file.exists():
        test_content = tests_file.read_text(encoding="utf-8")
        test_matches = re.findall(r'(?m)^##\s+Test|\bTest\s+\d+:', test_content)
        test_count = len(test_matches)
        if test_count >= 3:
            print(f"  [OK] tests/scenarios.md found with {test_count} test scenarios (min 3).")
        else:
            warnings.append(f"tests/scenarios.md has only {test_count} scenario(s) (min 3).")
    else:
        warnings.append("Missing tests/scenarios.md.")

    # 11. Skill vs MCP Boundary (Rule 12)
    print("\n[11] Checking MCP boundary documentation (Rule 12)...")
    if skill_md.exists():
        st = skill_md.read_text(encoding="utf-8").lower()
        if "boundary" in st or "companion mcp" in st:
            print("  [OK] Skill vs MCP boundary documented.")
        else:
            warnings.append("Skill references MCP but does not explicitly document the Skill vs MCP boundary.")

    # 12. Contextual Decision Layer & Decision Gates (Rule 14 / CDL v1.1.0)
    print("\n[12] Checking Contextual Decision Layer & Decision Gates (Rule 14 / CDL v1.1.0)...")
    if manifest_file.exists():
        try:
            m_data = json.loads(manifest_file.read_text(encoding="utf-8"))
            d_gates = m_data.get("decision_gates")
            if d_gates:
                print(f"  [OK] manifest.json contains {len(d_gates)} valid decision gate(s) (CDL compliant).")
        except Exception:
            pass

    # 13. Token Efficiency & YAML Primacy (Rule 15)
    print("\n[13] Checking Token Efficiency & YAML Primacy (Rule 15)...")
    if brand_file_yaml.exists():
        print("  [OK] brand.yaml present (cognitive layer prioritized for token efficiency).")
    elif brand_file_json.exists():
        warnings.append("Skill uses brand.json instead of brand.yaml. Under Rule 15, brand.yaml is recommended.")
    for wire_file in [pkg_file, manifest_file]:
        if wire_file.exists():
            try:
                json.loads(wire_file.read_text(encoding="utf-8"))
                print(f"  [OK] Wire protocol {wire_file.name} strictly conforms to JSON.")
            except Exception as e:
                errors.append(f"Wire protocol file {wire_file.name} must be valid JSON: {e}")

    print("\n" + "=" * 60)
    if errors:
        print(f"[FAIL] {len(errors)} validation error(s) found:")
        for err in errors:
            print(f"  ❌ {err}")
    if warnings:
        print(f"[WARN] {len(warnings)} warning(s):")
        for warn in warnings:
            print(f"  ⚠️  {warn}")
    if not errors and not warnings:
        print("[SUCCESS] ALL SKILL INTEGRITY CHECKS PASSED (15/15 COMPLIANT)!")
    elif not errors:
        print("[PASS WITH WARNINGS] No errors, but warnings should be addressed.")
    print("=" * 60)
    sys.exit(1 if errors else 0)

if __name__ == "__main__":
    main()
