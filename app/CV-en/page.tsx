import type { Metadata } from "next";
import { PageHeader, SiteFrame } from "../site";

export const metadata: Metadata = {
  title: "CV",
  description: "Curriculum vitae of Alexander Jerschow.",
};

export default function CvPage() {
  return (
    <SiteFrame active="/CV-en/">
      <PageHeader
        index="05 / CV"
        title="Curriculum vitae"
      />
      <section className="content-section" aria-labelledby="cv-editions-heading">
        <p className="section-label" id="cv-editions-heading">
          Current edition
        </p>
        <div className="language-grid">
          <article className="language-card">
            <div>
              <h2>English</h2>
              <p>PDF · last updated November 2025</p>
            </div>
            <a className="button-link" href="/documents/cv-en.pdf">
              Open CV <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
      </section>
    </SiteFrame>
  );
}
