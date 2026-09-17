import type { Metadata } from "next";
import { PageHeader, SiteFrame } from "../site";

export const metadata: Metadata = {
  title: "Wikipedia Contributions",
  description:
    "Alexander Jerschow's mathematical Wikipedia contributions across six languages.",
};

type Status = "created" | "contributed" | "exists" | "missing";

type WikiCell = {
  status: Status;
  label?: string;
  href?: string;
  note?: string;
};

const languages = [
  "English",
  "German",
  "Russian",
  "Japanese",
  "Chinese (Simplified)",
  "Chinese (Traditional)",
];

const rows: { topic: string; cells: WikiCell[] }[] = [
  {
    topic: "R-Transform",
    cells: [
      {
        status: "created",
        label: "R-Transform",
        note: "Pending approval",
        href: "https://en.wikipedia.org/wiki/Draft:R-Transform",
      },
      { status: "missing" },
      { status: "missing" },
      { status: "missing" },
      { status: "missing" },
      { status: "missing" },
    ],
  },
  {
    topic: "F. and M. Riesz Theorem",
    cells: [
      { status: "exists" },
      {
        status: "created",
        label: "Satz von F. und M. Riesz",
        href: "https://de.wikipedia.org/wiki/Satz_von_F._und_M._Riesz",
      },
      { status: "missing" },
      { status: "exists" },
      {
        status: "created",
        label: "里斯兄弟定理",
        href: "https://zh.wikipedia.org/wiki/%E9%87%8C%E6%96%AF%E5%85%84%E5%BC%9F%E5%AE%9A%E7%90%86",
      },
      {
        status: "created",
        label: "里斯兄弟定理",
        href: "https://zh.wikipedia.org/zh-tw/%E9%87%8C%E6%96%AF%E5%85%84%E5%BC%9F%E5%AE%9A%E7%90%86",
      },
    ],
  },
  {
    topic: "Kaplansky Density Theorem",
    cells: [
      {
        status: "contributed",
        label: "Kaplansky Density Theorem",
        href: "https://en.wikipedia.org/wiki/Kaplansky_density_theorem",
      },
      { status: "exists" },
      {
        status: "created",
        label: "Теорема плотности Капланского",
        href: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D0%BE%D1%80%D0%B5%D0%BC%D0%B0_%D0%BF%D0%BB%D0%BE%D1%82%D0%BD%D0%BE%D1%81%D1%82%D0%B8_%D0%9A%D0%B0%D0%BF%D0%BB%D0%B0%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE",
      },
      { status: "missing" },
      { status: "missing" },
      { status: "missing" },
    ],
  },
  {
    topic: "Schatten Norm",
    cells: [
      { status: "exists" },
      {
        status: "created",
        label: "Schattennorm",
        href: "https://de.wikipedia.org/wiki/Schattennorm",
      },
      {
        status: "created",
        label: "Норма Шаттена",
        href: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D1%80%D0%BC%D0%B0_%D0%A8%D0%B0%D1%82%D1%82%D0%B5%D0%BD%D0%B0",
      },
      {
        status: "contributed",
        label: "シャッテンノルム",
        href: "https://ja.wikipedia.org/wiki/%E3%82%B7%E3%83%A3%E3%83%83%E3%83%86%E3%83%B3%E3%83%8E%E3%83%AB%E3%83%A0",
      },
      { status: "exists" },
      { status: "exists" },
    ],
  },
  {
    topic: "Hilbert–Schmidt Operator",
    cells: [
      { status: "exists" },
      {
        status: "contributed",
        label: "Hilbert-Schmidt-Operator",
        href: "https://de.wikipedia.org/w/index.php?title=Hilbert-Schmidt-Operator&stable=0&shownotice=1&fromsection=Siehe_auch",
      },
      {
        status: "contributed",
        label: "Оператор Гильберта — Шмидта",
        href: "https://ru.wikipedia.org/w/index.php?title=%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80_%D0%93%D0%B8%D0%BB%D1%8C%D0%B1%D0%B5%D1%80%D1%82%D0%B0_%E2%80%94_%D0%A8%D0%BC%D0%B8%D0%B4%D1%82%D0%B0&stable=0",
      },
      { status: "exists" },
      { status: "exists" },
      { status: "exists" },
    ],
  },
  {
    topic: "List of Theorems",
    cells: [
      { status: "exists" },
      {
        status: "contributed",
        label: "Liste mathematischer Sätze",
        href: "https://de.wikipedia.org/w/index.php?title=Liste_mathematischer_S%C3%A4tze&stable=0&shownotice=1&fromsection=F",
      },
      { status: "missing" },
      { status: "missing" },
      {
        status: "contributed",
        label: "数学定理列表",
        href: "https://zh.wikipedia.org/wiki/%E6%95%B0%E5%AD%A6%E5%AE%9A%E7%90%86%E5%88%97%E8%A1%A8",
      },
      {
        status: "contributed",
        label: "數學定理列表",
        href: "https://zh.wikipedia.org/zh-tw/%E6%95%B0%E5%AD%A6%E5%AE%9A%E7%90%86%E5%88%97%E8%A1%A8",
      },
    ],
  },
];

const statusLabels: Record<Status, string> = {
  created: "Article created",
  contributed: "Article contributed to",
  exists: "Article exists; no contribution listed",
  missing: "No article in this language",
};

export default function WikiPage() {
  return (
    <SiteFrame active="/wiki-en/">
      <PageHeader
        index="02 / Wiki"
        title="Wikipedia contributions"
        lede="Mathematical articles created or expanded across English, German, Russian, Japanese, and Chinese Wikipedia."
      />
      <section className="content-section" aria-labelledby="matrix-heading">
        <p className="section-label" id="matrix-heading">
          Contribution matrix
        </p>
        <ul className="wiki-legend" aria-label="Contribution status legend">
          {(Object.keys(statusLabels) as Status[]).map((status) => (
            <li className="legend-item" key={status}>
              <span
                className={`legend-swatch status-${status}`}
                aria-hidden="true"
              />
              {statusLabels[status]}
            </li>
          ))}
        </ul>

        <div className="wiki-scroll" tabIndex={0} aria-label="Scrollable table">
          <table className="wiki-table">
            <caption>
              Wikipedia contribution status by mathematical topic and language
            </caption>
            <thead>
              <tr>
                <th scope="col">Topic</th>
                {languages.map((language) => (
                  <th scope="col" key={language}>
                    {language}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.topic}>
                  <th className="row-heading" scope="row">
                    {row.topic}
                  </th>
                  {row.cells.map((cell, index) => (
                    <td
                      className={`status-${cell.status}`}
                      key={`${row.topic}-${languages[index]}`}
                      aria-label={`${languages[index]}: ${statusLabels[cell.status]}`}
                    >
                      {cell.href && cell.label ? (
                        <a href={cell.href} target="_blank" rel="noreferrer">
                          {cell.label}
                          {cell.note ? (
                            <span className="document-note">({cell.note})</span>
                          ) : null}
                        </a>
                      ) : (
                        <span className="empty-mark" aria-hidden="true">
                          —
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </SiteFrame>
  );
}
