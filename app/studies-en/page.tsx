import type { Metadata } from "next";
import { DocumentRow, PageHeader, SiteFrame } from "../site";

export const metadata: Metadata = {
  title: "Works",
  description: "Mathematical writing and research reports by Alexander Jerschow.",
};

export default function WorksPage() {
  return (
    <SiteFrame active="/studies-en/">
      <PageHeader
        index="01 / Works"
        title="Mathematical works"
      />
      <section className="content-section" aria-labelledby="works-list-heading">
        <p className="section-label" id="works-list-heading">
          Selected writing
        </p>
        <ul className="document-list">
          <DocumentRow
            date="Oct 2025"
            detail="English"
            title="Another Proof for the Existence of the Free Convolution Semigroup for Compactly Supported Measures"
            href="/documents/another-proof-free-convolution.pdf"
          />
          <DocumentRow
            date="Oct 2025"
            detail="English"
            title="Combinatorial Definition of the R-transform and Voiculescu’s Characterization: A Reference"
            href="/documents/r-transform-reference.pdf"
          />
          <DocumentRow
            date="Feb 2024"
            detail="Thesis"
            title="Sanov’s Inequality from an Information-Theoretic Perspective"
            note="Bachelor's thesis · English and German editions"
            href="/bachelor-thesis-en/"
            action="View"
          />
          <DocumentRow
            date="Oct 2025"
            detail="Japanese"
            title="Master’s Biannual Research Report 1（中間研究報告書）"
            href="/documents/research-report-1-ja.pdf"
          />
        </ul>
      </section>
    </SiteFrame>
  );
}
