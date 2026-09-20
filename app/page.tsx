import { SiteFrame } from "./site";

export default function Home() {
  return (
    <SiteFrame active="/">
      <section className="home-hero">
        <div>
          <h1 className="home-title">Alexander (Sasha) Jerschow</h1>
        </div>
        <div className="hero-summary">
          <p>Interested in RMT methods in neural networks.</p>
        </div>
      </section>

      <section className="about-grid" aria-label="Biography">
        <div className="copy-column">
          <p>
            I was born and educated in New York City. I began a bachelor&apos;s
            degree in mathematics and computer science at New York University,
            then transferred to the University of Vienna to study mathematics.
            I completed the degree one semester early and spent an exchange
            semester at Kyoto University.
          </p>
          <p>
            I am now a master&apos;s student at Nagoya University under{" "}
            <a
              className="text-link"
              href="https://www.math.nagoya-u.ac.jp/~ueda/"
              target="_blank"
              rel="noreferrer"
            >
              Yoshimichi Ueda
            </a>
            . My current work concerns free probability and random matrices,
            while my interests extend to analysis more broadly.
          </p>
          <p>
            My{" "}
            <a className="text-link" href="/bachelor-thesis-en/">
              bachelor&apos;s thesis
            </a>{" "}
            approaches Ivan Sanov&apos;s large-deviation theorem through
            information theory.
          </p>
        </div>

        <figure className="profile-figure">
          <img
            className="profile-image"
            src="/images/alexander-mountain.png"
            alt="Alexander Jerschow standing on a snowy mountain ridge"
            width="764"
            height="674"
          />
        </figure>
      </section>

      <section className="leisure-block" aria-labelledby="leisure-heading">
        <h2 id="leisure-heading" className="document-title">
          Leisure
        </h2>
        <div className="leisure-grid">
          <article className="leisure-item">
            <h3>Languages</h3>
            <p>
              English, Russian, German, Japanese, and beginner Chinese. I enjoy
              reading mathematical literature outside English.
            </p>
          </article>
          <article className="leisure-item">
            <h3>Piano</h3>
            <p>
              Member of the{" "}
              <a
                className="text-link"
                href="http://fusionsection.web.fc2.com/"
                target="_blank"
                rel="noreferrer"
              >
                Nagoya University Jazz Fusion Club
              </a>
              .
            </p>
          </article>
          <article className="leisure-item">
            <h3>Sports</h3>
            <p>
              Bouldering and gymnastics, including the{" "}
              <a
                className="text-link"
                href="https://7goya-gym.1net.jp/"
                target="_blank"
                rel="noreferrer"
              >
                Nagoya University Gymnastics Club
              </a>
              .
            </p>
          </article>
          <article className="leisure-item">
            <h3>Outdoors</h3>
            <p>Hiking and camping</p>
          </article>
        </div>
      </section>
    </SiteFrame>
  );
}
