const rankingGroups = [
  {
    title: "Hot Platforms",
    platforms: ["NovaPlay", "CrownGate", "ArenaHub"],
    className: "platform-ranking-hotspot--ranking-hot",
  },
  {
    title: "Editor Picks",
    platforms: ["SafeBet", "LivePrime", "SportAxis"],
    className: "platform-ranking-hotspot--ranking-editor",
  },
  {
    title: "Beginner Picks",
    platforms: ["SafeBet", "NovaPlay", "LivePrime"],
    className: "platform-ranking-hotspot--ranking-beginner",
  },
];

const comparisonPlatforms = [
  { label: "NovaPlay", className: "platform-ranking-hotspot--compare-1" },
  { label: "CrownGate", className: "platform-ranking-hotspot--compare-2" },
  { label: "ArenaHub", className: "platform-ranking-hotspot--compare-3" },
  { label: "LivePrime", className: "platform-ranking-hotspot--compare-4" },
];

const comparisonDimensions = [
  "Game Count",
  "Live Games",
  "Sports Events",
  "Esports",
  "Payment Methods",
  "User Experience",
  "Safety",
];

const conclusions = [
  { label: "Best for Beginners: SafeBet", className: "platform-ranking-hotspot--conclusion-1" },
  { label: "Best Live Experience: LivePrime", className: "platform-ranking-hotspot--conclusion-2" },
  { label: "Best Sports & Esports: CrownGate", className: "platform-ranking-hotspot--conclusion-3" },
];

type PlatformComparisonRankingPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function PlatformComparisonRankingPage({ searchParams }: PlatformComparisonRankingPageProps) {
  const params = searchParams ? await searchParams : {};
  const forcedMobile = params.viewport === "mobile";

  return (
    <main className={`platform-ranking-page${forcedMobile ? " is-mobile-render" : ""}`} aria-labelledby="platform-ranking-title">
      <picture className="platform-ranking-page__approved-art" aria-hidden="true">
        {forcedMobile ? null : <source media="(max-width: 760px)" srcSet="/approved-assets/platform-comparison-ranking-mobile.png" />}
        <img
          src={forcedMobile ? "/approved-assets/platform-comparison-ranking-mobile.png" : "/approved-assets/platform-comparison-ranking-desktop.png"}
          alt=""
          draggable={false}
        />
      </picture>

      <div className="sr-only">
        <p>Fathom &amp; Frame</p>
        <h1 id="platform-ranking-title">Platform Comparison &amp; Ranking</h1>
        <p>Compare trusted platforms and choose with clarity.</p>
        <section aria-label="Platform ranking">
          <h2>Platform Ranking</h2>
          {rankingGroups.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              <ol>
                {group.platforms.map((platform) => (
                  <li key={platform}>{platform}</li>
                ))}
              </ol>
            </div>
          ))}
        </section>
        <section aria-label="Platform comparison">
          <h2>Compare Platforms</h2>
          <ul>
            {comparisonPlatforms.map((platform) => (
              <li key={platform.label}>{platform.label}</li>
            ))}
          </ul>
        </section>
        <section aria-label="Comparison dimensions">
          <h2>Comparison Dimensions</h2>
          <ul>
            {comparisonDimensions.map((dimension) => (
              <li key={dimension}>{dimension}</li>
            ))}
          </ul>
        </section>
        <section aria-label="Recommendation conclusion">
          <h2>Recommendation Conclusion</h2>
          <ul>
            {conclusions.map((conclusion) => (
              <li key={conclusion.label}>{conclusion.label}</li>
            ))}
          </ul>
        </section>
      </div>

      <nav className="platform-ranking-page__hotspots" aria-label="Platform Comparison & Ranking navigation">
        <a className="platform-ranking-hotspot platform-ranking-hotspot--logo" href="/home">
          <span className="sr-only">Homepage</span>
        </a>
        {rankingGroups.map((group) => (
          <a className={`platform-ranking-hotspot ${group.className}`} href={`#${group.title.toLowerCase().replaceAll(" ", "-")}`} key={group.title}>
            <span className="sr-only">{group.title}</span>
          </a>
        ))}
        {comparisonPlatforms.map((platform) => (
          <button className={`platform-ranking-hotspot ${platform.className}`} key={platform.label} type="button">
            <span className="sr-only">{platform.label}</span>
          </button>
        ))}
        <a className="platform-ranking-hotspot platform-ranking-hotspot--dimensions" href="#comparison-dimensions">
          <span className="sr-only">Comparison Dimensions</span>
        </a>
        {conclusions.map((conclusion) => (
          <a className={`platform-ranking-hotspot ${conclusion.className}`} href={`#${conclusion.label.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`} key={conclusion.label}>
            <span className="sr-only">{conclusion.label}</span>
          </a>
        ))}
      </nav>
    </main>
  );
}
