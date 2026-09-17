import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader, SiteFrame } from "../site";

const legacySlugs = [
  "old-home",
  "home-de",
  "home-ru",
  "home-ja",
  "bachelor-thesis-de",
  "bachelor-thesis-ru",
  "CV-de",
  "CV-ru",
  "CV-ja",
] as const;

type LegacySlug = (typeof legacySlugs)[number];

const profiles: Record<
  "home-de" | "home-ru" | "home-ja",
  {
    lang: string;
    title: string;
    about: string;
    background: string;
    leisureLabel: string;
    leisure: string[];
  }
> = {
  "home-de": {
    lang: "de",
    title: "Alexander (Sasha) Jerschow",
    about: "Über mich",
    background:
      "Ich wurde in New York geboren und habe dort die Grund-, Mittel- und Oberschule sowie das erste Jahr meines Informatik- und Mathematikbachelors an der New York University abgeschlossen. Für das zweite Jahr wechselte ich in das Mathematikprogramm der Universität Wien. Meine Forschungsinteressen liegen in der Wahrscheinlichkeitstheorie; meine Bachelorarbeit behandelt Informationstheorie als Zugang zum Satz der großen Abweichungen von Ivan Sanov.",
    leisureLabel: "Muße",
    leisure: [
      "Sprachen: Englisch, Russisch, Deutsch, Japanisch und Chinesisch. Besonders gern lese ich mathematische Literatur in verschiedenen Sprachen.",
      "Klavierspielen",
      "Bouldern und Wasserball",
      "Biwakieren",
    ],
  },
  "home-ru": {
    lang: "ru",
    title: "Александр Алексеевич Ершов",
    about: "Обо мне",
    background:
      "Я родился в Нью-Йорке, где окончил начальную, среднюю и старшую школу, а также первый курс бакалавриата Нью-Йоркского университета по информатике и математике. На втором курсе я перешёл на математическую программу Венского университета. Мои исследовательские интересы лежат в теории вероятностей; бакалаврская работа рассматривает теорию информации как путь к теореме больших отклонений Ивана Санова.",
    leisureLabel: "Досуг",
    leisure: [
      "Языки: английский, русский, немецкий, японский и китайский. Мне нравится читать математические учебники и статьи на разных языках.",
      "Пианино",
      "Водное поло и боулдеринг",
      "Пешие походы и кемпинг",
    ],
  },
  "home-ja": {
    lang: "ja",
    title: "イェルショフ・サーシャ・アレクサンドル",
    about: "私について",
    background:
      "ニューヨークで生まれ、同地で小中高を修了した後、ニューヨーク大学で数学と情報科学を学びました。学士課程の二年次にウィーン大学の数学専攻へ編入しました。研究関心は確率論にあり、学士論文ではサノフの大偏差定理への導入として情報理論を論じました。",
    leisureLabel: "余暇",
    leisure: [
      "語学：英語、ロシア語、ドイツ語、日本語、中国語。特に英語以外の言語で数学文献や教科書を読むことを楽しんでいます。",
      "ピアノ",
      "水球とボルダリング",
      "山歩きや野宿",
    ],
  },
};

const localizedTitles: Record<string, { thesis: string; cv: string }> = {
  de: { thesis: "Bachelorarbeit", cv: "Lebenslauf" },
  ru: { thesis: "Бакалаврская работа", cv: "Резюме" },
  ja: { thesis: "卒論", cv: "履歴書" },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return legacySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "old-home") return { title: "Languages" };
  if (slug in profiles) return { title: profiles[slug as keyof typeof profiles].title };
  const language = slug.endsWith("-de")
    ? "de"
    : slug.endsWith("-ru")
      ? "ru"
      : "ja";
  const type = slug.startsWith("CV-") ? "cv" : "thesis";
  return { title: localizedTitles[language][type] };
}

export default async function LegacyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!legacySlugs.includes(slug as LegacySlug)) notFound();

  if (slug === "old-home") {
    return (
      <SiteFrame>
        <PageHeader
          index="Archive / Languages"
          title="Choose a language"
          lede="These paths are retained so links shared from the former site continue to work."
        />
        <section className="content-section">
          <div className="language-grid">
            {[
              ["English", "/"],
              ["Deutsch", "/home-de/"],
              ["Русский", "/home-ru/"],
              ["日本語", "/home-ja/"],
            ].map(([label, href]) => (
              <article className="language-card" key={label}>
                <h2>{label}</h2>
                <a className="button-link" href={href}>
                  Open <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </section>
      </SiteFrame>
    );
  }

  if (slug in profiles) {
    const profile = profiles[slug as keyof typeof profiles];
    return (
      <SiteFrame>
        <article lang={profile.lang}>
          <PageHeader index="Archive / Profile" title={profile.title} />
          <section className="about-grid">
            <div className="copy-column">
              <p className="section-label">{profile.about}</p>
              <p>{profile.background}</p>
              <h2>{profile.leisureLabel}</h2>
              {profile.leisure.map((item) => (
                <p key={item}>{item}</p>
              ))}
              <p className="archive-note">
                This archived translation reflects an earlier version of the
                profile. The English homepage contains the current biography.
              </p>
            </div>
            <figure className="profile-figure">
              <img
                className="profile-image"
                src="/images/alexander-mountain.png"
                alt="Alexander Jerschow on a snowy mountain ridge"
                width="764"
                height="674"
              />
            </figure>
          </section>
        </article>
      </SiteFrame>
    );
  }

  const language = slug.endsWith("-de")
    ? "de"
    : slug.endsWith("-ru")
      ? "ru"
      : "ja";
  const isCv = slug.startsWith("CV-");

  return (
    <SiteFrame>
      <article lang={language}>
        <PageHeader
          index="Archive / Documents"
          title={localizedTitles[language][isCv ? "cv" : "thesis"]}
        />
        <section className="content-section">
          <div className="language-grid">
            {isCv ? (
              <article className="language-card">
                <div>
                  <h2>English</h2>
                  <p>Current available edition</p>
                </div>
                <a className="button-link" href="/documents/cv-en.pdf">
                  Open PDF <span aria-hidden="true">↗</span>
                </a>
              </article>
            ) : (
              <>
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
                  <h2>Deutsch</h2>
                  <a
                    className="button-link"
                    href="https://github.com/Jerschow/Resume/blob/main/bachelorthesisgerman.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open PDF <span aria-hidden="true">↗</span>
                  </a>
                </article>
              </>
            )}
          </div>
        </section>
      </article>
    </SiteFrame>
  );
}
