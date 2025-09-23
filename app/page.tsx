import type { CSSProperties } from "react";
import { marked } from "marked";
import { loadRoot, loadBranches } from "@/lib/content";
import { branchColors } from "@/lib/branchColors";

export const dynamic = "force-static";

const stripHeading = (md: string) => md.replace(/^#\s[^\n]*\n?/, "");

export default async function RootPage() {
  const root = loadRoot("info");
  const branches = loadBranches("info");
  const rootHtml = root ? await marked.parse(stripHeading(root.body)) : "";

  return (
    <div className="container root-page">
      <div className="layout">
        <aside className="sidenav">
          <div className="title">Branches</div>
          <ul>
            {branches.map((branch) => (
              <li key={branch.canonical_slug}>
                <a
                  href={`/${branch.canonical_slug}`}
                  style={{ "--rcolor": branchColors[branch.canonical_slug] ?? "var(--accent)" } as CSSProperties}
                >
                  {branch.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>
        <main>
          <h1>Coherenceism — Root</h1>
          {root && (
            <div className="panel">
              <article className="prose" dangerouslySetInnerHTML={{ __html: rootHtml }} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
