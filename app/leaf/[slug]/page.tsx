import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { findBySlug, loadBranches } from "@/lib/content";
import { branchColors } from "@/lib/branchColors";
import { renderMarkdown } from "@/lib/markdown";

export const dynamic = "force-static";

const stripHeading = (md: string) => md.replace(/^#\s[^\n]*\n?/, "");

export default async function LeafPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const leaf = findBySlug("info", slug);
  if (!leaf || leaf.type !== "leaf") return notFound();

  const branches = loadBranches("info");
  const parent = leaf.parent ? branches.find((b) => b.canonical_slug === leaf.parent) : undefined;
  const accent = parent ? branchColors[parent.canonical_slug] ?? "var(--accent)" : "var(--accent)";
  const leafHtml = await renderMarkdown(stripHeading(leaf.body));

  return (
    <div className="container leaf-page">
      <div className="layout">
        <aside className="sidenav">
          <div className="title">Branches</div>
          <ul>
            {branches.map((b) => (
              <li key={b.canonical_slug}>
                <a
                  className={b.canonical_slug === parent?.canonical_slug ? "active" : undefined}
                  href={`/${b.canonical_slug}`}
                  style={{ "--rcolor": branchColors[b.canonical_slug] ?? "var(--accent)" } as CSSProperties}
                >
                  {b.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>
        <main>
          <h1>{leaf.title}</h1>
          <div className="panel">
            <article className="prose" dangerouslySetInnerHTML={{ __html: leafHtml }} />
          </div>
        </main>
      </div>
    </div>
  );
}

