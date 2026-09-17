import type { Metadata } from "next";
import { PageHeader, SiteFrame } from "../site";

export const metadata: Metadata = {
  title: "Teaching",
  description: "Teaching experience of Alexander Jerschow at Nagoya University.",
};

export default function TeachingPage() {
  return (
    <SiteFrame active="/teaching-en/">
      <PageHeader
        index="03 / Teaching"
        title="Teaching"
      />
      <section className="content-section" aria-labelledby="teaching-list-heading">
        <p className="section-label" id="teaching-list-heading">
          Courses
        </p>
        <div className="teaching-list">
          <article className="teaching-item">
            <div>
              <span className="course-term">Fall 2025</span>
              <h2>Complex Analysis（現代数学基礎 CIII）</h2>
            </div>
            <div className="teaching-details">
              <p>(recitation instruction and grading)</p>
            </div>
          </article>

          <article className="teaching-item">
            <div>
              <span className="course-term">Spring 2025</span>
              <h2>Foundations in Mathematics（数学演習 III）</h2>
            </div>
            <div className="teaching-details">
              <p>(recitation instruction and grading)</p>
            </div>
          </article>
        </div>
      </section>
    </SiteFrame>
  );
}
