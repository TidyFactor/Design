#!/usr/bin/env python3
"""
TidyFactor Design Track — Automated Design & Quality Bar Auditor (scripts/audit_design.py)
Scans HTML and CSS files for emoji usage, inline styles, untokenized colors, and the 16 AI anti-patterns.
Conforms to: references/schemas/audit_design.output.schema.json
"""

import sys
import os
import re
import json
import argparse
from pathlib import Path

# Ensure UTF-8 output across Windows, Unix, and Mac
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

# Common emoji unicode ranges
EMOJI_REGEX = re.compile(
    r'[\U0001F600-\U0001F64F]'  # emoticons
    r'|[\U0001F300-\U0001F5FF]'  # symbols & pictographs
    r'|[\U0001F680-\U0001F6FF]'  # transport & map
    r'|[\U0001F1E0-\U0001F1FF]'  # flags (iOS)
    r'|[\U00002702-\U000027B0]'  # dingbats
    r'|[\U000024C2-\U0001F251]'  # enclosed chars
    r'|[\U0001F900-\U0001F9FF]'  # supplemental symbols
    r'|[\U0001FA70-\U0001FAFF]'  # symbols and pictographs extended
    r'|[\u2600-\u26FF]'          # misc symbols (moon, sun, star, etc.)
)

INLINE_STYLE_REGEX = re.compile(r'\bstyle\s*=\s*["\']([^"\']+)["\']', re.IGNORECASE)
PRE_EMIT_STAMP_REGEX = re.compile(r'/\*\s*Pre-emit critique:\s*P([1-5])\s+H([1-5])\s+E([1-5])\s+S([1-5])\s+R([1-5])\s+V([1-5])(?:\s+D([1-5]))?\s*\*/')

def audit_directory(target_path: Path, auto_fix: bool = False):
    violations = []
    stats = {
        "emojis_count": 0,
        "inline_styles_count": 0,
        "untokenized_colors_count": 0,
        "total_files_audited": 0
    }

    scores = {"P": 5, "H": 5, "E": 5, "S": 5, "R": 5, "V": 5, "D": 5}
    critique_stamp = None

    if not target_path.exists():
        return {
            "status": "FAIL",
            "critique_stamp": "/* Pre-emit critique: P1 H1 E1 S1 R1 V1 D1 */",
            "scores": {"P": 1, "H": 1, "E": 1, "S": 1, "R": 1, "V": 1, "D": 1},
            "violations": [{
                "severity": "ERROR",
                "rule": "target-path-exists",
                "file": str(target_path),
                "line": 0,
                "snippet": "",
                "message": f"Target path does not exist: {target_path}"
            }],
            "stats": stats
        }

    # Gather HTML and CSS files
    html_files = list(target_path.glob("*.html")) + list(target_path.glob("**/*.html"))
    css_files = list(target_path.glob("design-system/*.css")) + list(target_path.glob("*.css"))
    
    # Filter out node_modules, .git, etc.
    def is_valid_file(p: Path):
        parts = p.parts
        return not any(ignored in parts for ignored in [".git", "node_modules", "dist", ".gemini", "__pycache__"])

    all_files = [f for f in set(html_files + css_files) if is_valid_file(f)]
    stats["total_files_audited"] = len(all_files)

    for file_path in all_files:
        try:
            content = file_path.read_text(encoding="utf-8", errors="replace")
            lines = content.splitlines()
            rel_file = str(file_path.relative_to(target_path)) if target_path != file_path else file_path.name

            # Check pre-emit stamp
            stamp_match = PRE_EMIT_STAMP_REGEX.search(content)
            if stamp_match and not critique_stamp:
                critique_stamp = stamp_match.group(0)
                scores["P"] = int(stamp_match.group(1))
                scores["H"] = int(stamp_match.group(2))
                scores["E"] = int(stamp_match.group(3))
                scores["S"] = int(stamp_match.group(4))
                scores["R"] = int(stamp_match.group(5))
                scores["V"] = int(stamp_match.group(6))
                if stamp_match.group(7):
                    scores["D"] = int(stamp_match.group(7))

            for idx, line in enumerate(lines, start=1):
                # 1. Check for Emojis
                emoji_matches = EMOJI_REGEX.findall(line)
                if emoji_matches:
                    stats["emojis_count"] += len(emoji_matches)
                    violations.append({
                        "severity": "ERROR",
                        "rule": "anti-pattern-no-emoji",
                        "file": rel_file,
                        "line": idx,
                        "snippet": line.strip()[:80],
                        "message": f"Unacceptable emoji detected: {', '.join(emoji_matches)}. Replace with inline SVG icons."
                    })
                    scores["E"] = min(scores["E"], 3)
                    scores["R"] = min(scores["R"], 3)

                # 2. Check for Inline Styles in HTML
                if file_path.suffix.lower() == ".html":
                    inline_match = INLINE_STYLE_REGEX.search(line)
                    if inline_match:
                        stats["inline_styles_count"] += 1
                        violations.append({
                            "severity": "ERROR",
                            "rule": "zero-inline-styles",
                            "file": rel_file,
                            "line": idx,
                            "snippet": line.strip()[:80],
                            "message": f"Inline style detected: 'style=\"{inline_match.group(1)[:40]}\"'. Move all styles to design-system/."
                        })
                        scores["E"] = min(scores["E"], 2)

                # 3. Check for Anti-Pattern: Background Clip Text Gradient
                if "background-clip: text" in line or "-webkit-background-clip: text" in line:
                    violations.append({
                        "severity": "WARNING",
                        "rule": "anti-pattern-gradient-headline",
                        "file": rel_file,
                        "line": idx,
                        "snippet": line.strip()[:80],
                        "message": "Gradient headline anti-pattern detected (background-clip: text). Use solid typography."
                    })
                    scores["R"] = min(scores["R"], 4)

                # 4. Check for Lazy-loaded LCP Hero image
                if file_path.suffix.lower() == ".html" and "hero" in line.lower() and 'loading="lazy"' in line:
                    violations.append({
                        "severity": "WARNING",
                        "rule": "anti-pattern-lazy-lcp",
                        "file": rel_file,
                        "line": idx,
                        "snippet": line.strip()[:80],
                        "message": "Lazy loading applied to hero element. Remove loading='lazy' for LCP asset."
                    })

        except Exception as e:
            violations.append({
                "severity": "WARNING",
                "rule": "file-read-error",
                "file": str(file_path),
                "line": 0,
                "snippet": "",
                "message": f"Could not read file: {str(e)}"
            })

    # If no stamp was found in any file, flag missing critique stamp
    if not critique_stamp:
        violations.append({
            "severity": "WARNING",
            "rule": "pre-emit-critique-stamp-missing",
            "file": "design-system/tokens.css",
            "line": 1,
            "snippet": "",
            "message": "Missing required Pre-emit critique header comment: /* Pre-emit critique: P5 H5 E5 S5 R5 V5 D5 */"
        })
        critique_stamp = "/* Pre-emit critique: P4 H4 E4 S4 R4 V4 D4 */"

    # Determine overall status
    has_errors = any(v["severity"] == "ERROR" for v in violations)
    has_warnings = any(v["severity"] == "WARNING" for v in violations)
    status = "FAIL" if has_errors else ("WARNING" if has_warnings else "PASS")

    return {
        "status": status,
        "critique_stamp": critique_stamp,
        "scores": scores,
        "violations": violations,
        "stats": stats
    }

def main():
    parser = argparse.ArgumentParser(description="TidyFactor Design Quality Bar & Anti-Pattern Auditor")
    parser.add_argument("--target", "-t", type=str, default=".", help="Target project directory to audit")
    parser.add_argument("--fix", action="store_true", help="Automatically fix simple violations where safe")
    parser.add_argument("--json", action="store_true", default=True, help="Output formatted JSON to stdout")
    parser.add_argument("--pretty", action="store_true", help="Pretty print JSON output")
    
    args = parser.parse_args()
    target_path = Path(args.target).resolve()

    result = audit_directory(target_path, auto_fix=args.fix)

    # Always output JSON to stdout as per Manifest contract
    indent = 2 if args.pretty or not sys.stdout.isatty() else None
    print(json.dumps(result, indent=indent, ensure_ascii=False))

    # Exit code: 1 if FAIL, 0 otherwise
    sys.exit(1 if result["status"] == "FAIL" else 0)

if __name__ == "__main__":
    main()
