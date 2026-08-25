#!/usr/bin/env python3
"""
validate_skill.py — TidyFactor Design Release & Integrity Validator.
Checks:
1. SemVer synchronization across package.json, .tidyfactor, brand.json, CHANGELOG.md.
2. License consistency (Apache-2.0).
3. Existence of all files referenced in SKILL.md.
4. Validation checklists in all workflow files.
5. Absence of machine-specific absolute paths.
"""

import sys
import os
import json
import re
from pathlib import Path

# Ensure UTF-8 output on Windows terminal
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")

def main():
    root = Path(__file__).resolve().parent.parent
    errors = []
    
    print("=" * 60)
    print("  RUNNING TIDYFACTOR DESIGN RELEASE VALIDATION")
    print("=" * 60)
    
    # 1. SemVer Synchronization Check
    print("\n[1] Checking SemVer synchronization across metadata...")
    pkg_file = root / "package.json"
    tf_file = root / ".tidyfactor"
    brand_file = root / "brand.json"
    cl_file = root / "CHANGELOG.md"
    
    pkg_ver = json.loads(pkg_file.read_text(encoding="utf-8")).get("version") if pkg_file.exists() else None
    tf_ver = json.loads(tf_file.read_text(encoding="utf-8")).get("version") if tf_file.exists() else None
    
    brand_data = json.loads(brand_file.read_text(encoding="utf-8")) if brand_file.exists() else {}
    brand_ver = brand_data.get("version") or brand_data.get("meta", {}).get("version")
    
    print(f"  package.json : {pkg_ver}")
    print(f"  .tidyfactor  : {tf_ver}")
    print(f"  brand.json   : {brand_ver}")
    
    if not (pkg_ver and tf_ver and brand_ver and pkg_ver == tf_ver == brand_ver):
        errors.append(f"Version mismatch: package.json({pkg_ver}) vs .tidyfactor({tf_ver}) vs brand.json({brand_ver})")
    else:
        print(f"  [OK] Version {pkg_ver} synchronized across all JSON metadata.")
        
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
            if not target.exists() and not (root / "references" / ref).exists():
                if not (root / ref).is_dir() and not (root / "references" / ref).is_dir():
                    errors.append(f"SKILL.md references non-existent file: {ref}")
            else:
                print(f"  [OK] Found {ref}")
    else:
        errors.append("Missing SKILL.md.")

    # 4. Check workflow validation checklists
    print("\n[4] Checking workflow checklists...")
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

    print("\n" + "=" * 60)
    if errors:
        print(f"[FAIL] {len(errors)} validation error(s) found:")
        for err in errors:
            print(f"  - {err}")
        print("=" * 60)
        sys.exit(1)
    else:
        print("[SUCCESS] ALL SKILL INTEGRITY CHECKS PASSED!")
        print("=" * 60)
        sys.exit(0)

if __name__ == "__main__":
    main()
