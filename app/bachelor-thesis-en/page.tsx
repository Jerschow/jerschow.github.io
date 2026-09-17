import type { Metadata } from "next";
import { PageHeader, SiteFrame } from "../site";

export const metadata: Metadata = {
  title: "Bachelor's Thesis",
  description:
    "English and German editions of Alexander Jerschow's bachelor's thesis on Sanov's theorem and information theory.",
};

export default function ThesisPage() {
  return (
    <SiteFrame active="/bachelor-thesis-en/">
      <PageHeader
        index="04 / Thesis"
        title="Bachelor’s thesis"
        lede="Sanov’s Inequality from an Information-Theoretic Perspective, completed at the University of Vienna in 2024."
      />
      <section className="content-section" aria-labelledby="editions-heading">
        <p className="section-label" id="editions-heading">
          Language editions
        </p>
        <div className="language-grid">
          <article className="language-card">
            <div>
              <h2>English</h2>
              <p>English edition of the thesis.</p>
            </div>
            <a
              className="button-link"
              href="https://github.com/Jerschow/Resume/blob/main/bachelorthesisenglish.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Open PDF <span aria-hidden="true">↗</span>
            </a>
          </article>
          <article className="language-card">
            <div>
              <h2>Deutsch</h2>
              <p>German edition of the thesis.</p>
            </div>
            <a
              className="button-link"
              href="https://github.com/Jerschow/Resume/blob/main/bachelorthesisgerman.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Open PDF <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
      </section>
    </SiteFrame>
  );
}
