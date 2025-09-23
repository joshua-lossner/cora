import type { CSSProperties } from "react";
import { marked } from "marked";
import { notFound } from "next/navigation";
import { findBySlug, loadBranches, loadSeedsFor } from "@/lib/content";
import { branchColors } from "@/lib/branchColors";

export const dynamic = "force-static";

const stripHeading = (md: string) => md.replace(/^#\s[^\n]*\n?/, "");

export default async function BranchPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const branch = findBySlug("info", slug);
  if (!branch || branch.type !== "branch") return notFound();

  const branches = loadBranches("info");
  const seeds = loadSeedsFor("info", branch.canonical_slug);
  const branchHtml = await marked.parse(stripHeading(branch.body));
  const accent = branchColors[branch.canonical_slug] ?? "var(--accent)";

  return (
    <div className="container branch-page">
      <div className="layout">
        <aside className="sidenav">
          <div className="title">Branches</div>
          <ul>
            {branches.map((b) => (
              <li key={b.canonical_slug}>
                <a
                  className={b.canonical_slug === branch.canonical_slug ? "active" : undefined}
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
          <h1>{branch.title}</h1>
          <div className="panel">
            <article className="prose" dangerouslySetInnerHTML={{ __html: branchHtml }} />
          </div>
          {seeds.length > 0 && (
            <section className="seed-section">
              <h2>Seeds</h2>
              <div className="card-list">
                {seeds.map((seed) => (
                  <div className="card" key={seed.canonical_slug} style={{ "--card-color": accent } as CSSProperties}>
                    <h3><a href={`/seed/${seed.canonical_slug}`}>{seed.title}</a></h3>
                    {seed.summary && <div className="muted">{seed.summary}</div>}
                    <div className="card-actions">
                      <a className="read-more" href={`/seed/${seed.canonical_slug}`} style={{ "--btn-color": accent } as CSSProperties}>
                        Read ▸
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
