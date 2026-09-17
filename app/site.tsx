import type { ReactNode } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/studies-en/", label: "Works" },
  { href: "/wiki-en/", label: "Wiki" },
  { href: "/teaching-en/", label: "Teaching" },
  { href: "/bachelor-thesis-en/", label: "Thesis" },
  { href: "/CV-en/", label: "CV" },
];

export function SiteFrame({
  active,
  children,
}: {
  active?: string;
  children: ReactNode;
}) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="/" aria-label="Alexander Jerschow, home">
            <span className="monogram" aria-hidden="true">
              AJ
            </span>
            <span>Alexander Jerschow</span>
          </a>
          <nav className="site-nav" aria-label="Main navigation">
            <ul className="nav-list">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    className="nav-link"
                    href={item.href}
                    aria-current={active === item.href ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main className="page" id="main-content">
        {children}
      </main>
      <footer className="site-footer">
        <div className="site-footer-inner">
          <span className="footer-mark">Alexander Jerschow</span>
          <span>Mathematics · Nagoya University</span>
        </div>
      </footer>
    </>
  );
}

export function PageHeader({
  index,
  title,
  lede,
}: {
  index: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="page-header">
      <p className="page-index">{index}</p>
      <div>
        <h1 className="page-title">{title}</h1>
        {lede ? <p className="page-lede">{lede}</p> : null}
      </div>
    </header>
  );
}

export function DocumentRow({
  date,
  detail,
  title,
  note,
  href,
  action = "PDF",
}: {
  date: string;
  detail: string;
  title: string;
  note?: string;
  href: string;
  action?: string;
}) {
  return (
    <li className="document-row">
      <div className="document-meta">
        <div>{date}</div>
        <div>{detail}</div>
      </div>
      <div>
        <h2 className="document-title">{title}</h2>
        {note ? <p className="document-note">{note}</p> : null}
      </div>
      <a className="document-action" href={href}>
        {action} <span aria-hidden="true">↗</span>
      </a>
    </li>
  );
}
