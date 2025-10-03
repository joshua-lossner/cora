#!/usr/bin/env python3
"""
Minimal PDF generator (single page, Helvetica) for CORA artifacts.
Usage: python scripts/generate_pdf.py input_text.md output.pdf [title]
No external deps. Renders plain text lines; ignores Markdown formatting.
"""
import sys
import os
from typing import Optional

def escape_pdf_text(s: str) -> str:
    return s.replace('\\', r'\\').replace('(', r'\(').replace(')', r'\)')

def wrap_text(text: str, width: int = 90):
    lines = []
    for line in text.splitlines():
        # skip provenance comment blocks
        if line.strip().startswith('<!--') and 'provenance:' in line:
            # skip until closing -->
            continue
        if line.strip().startswith('-->'):
            continue
        # naive wrap
        while len(line) > width:
            cut = line.rfind(' ', 0, width)
            if cut == -1:
                cut = width
            lines.append(line[:cut])
            line = line[cut:].lstrip()
        lines.append(line)
    return lines

def build_pdf(lines, title="CORA Artifact", prov_line: Optional[str] = None) -> bytes:
    # Basic metrics
    page_w, page_h = 612, 792  # 8.5x11 in points
    left_margin, top = 72, 760
    leading = 14
    font_size = 12

    # Build content stream
    content_lines = [
        b"BT\n",
        f"/F1 {font_size} Tf\n".encode(),
        f"{leading} TL\n".encode(),
        f"{left_margin} {top} Td\n".encode(),
    ]

    # Title
    t = escape_pdf_text(title)
    content_lines.append(f"({t}) Tj\n".encode())
    content_lines.append(b"T*\n")
    if prov_line:
        p = escape_pdf_text(prov_line)
        content_lines.append(f"({p}) Tj\n".encode())
        content_lines.append(b"T*\n")
    content_lines.append(b"T*\n")

    # Body (limit to reasonable length)
    max_lines = 50
    for i, ln in enumerate(lines):
        if i >= max_lines:
            content_lines.append(b"(... see full text in final.md) Tj\n")
            break
        ln = escape_pdf_text(ln.strip())
        if not ln:
            content_lines.append(b"T*\n")
            continue
        content_lines.append(f"({ln}) Tj\n".encode())
        content_lines.append(b"T*\n")

    content_lines.append(b"ET\n")
    content_bytes = b''.join(content_lines)

    # PDF objects
    objs = []
    def add(obj_bytes: bytes):
        objs.append(obj_bytes)

    # 1: Catalog
    add(b"1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n")
    # 2: Pages
    add(f"2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n".encode())
    # 3: Page
    add(f"3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 {page_w} {page_h}] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n".encode())
    # 4: Content stream
    add(f"4 0 obj\n<< /Length {len(content_bytes)} >>\nstream\n".encode() + content_bytes + b"endstream\nendobj\n")
    # 5: Font
    add(b"5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n")

    # Build file with xref
    parts = [b"%PDF-1.4\n"]
    offsets = [0]  # obj 0 is free
    current = len(parts[0])
    for obj in objs:
        offsets.append(current)
        parts.append(obj)
        current += len(obj)

    # xref table
    xref_pos = current
    xref = [f"xref\n0 {len(offsets)}\n".encode()]
    xref.append(b"0000000000 65535 f \n")
    for off in offsets[1:]:
        xref.append(f"{off:010d} 00000 n \n".encode())
    parts.append(b''.join(xref))

    # trailer
    trailer = f"trailer\n<< /Size {len(offsets)} /Root 1 0 R >>\nstartxref\n{xref_pos}\n%%EOF\n".encode()
    parts.append(trailer)

    return b''.join(parts)

def main():
    if len(sys.argv) < 3:
        print("Usage: generate_pdf.py input_text.md output.pdf [title] [provenance]", file=sys.stderr)
        sys.exit(2)
    src = sys.argv[1]
    dst = sys.argv[2]
    title = sys.argv[3] if len(sys.argv) > 3 else "CORA Artifact"
    prov = sys.argv[4] if len(sys.argv) > 4 else None
    with open(src, 'r', encoding='utf-8') as f:
        text = f.read()
    lines = wrap_text(text)
    pdf_bytes = build_pdf(lines, title=title, prov_line=prov)
    with open(dst, 'wb') as f:
        f.write(pdf_bytes)
    print(f"Wrote {dst} ({len(pdf_bytes)} bytes)")

if __name__ == '__main__':
    main()
