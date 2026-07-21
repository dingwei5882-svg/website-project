const onboardingSteps = [
  { label: "Create Account", className: "beginner-guide-hotspot--step-1" },
  { label: "Verify Safety", className: "beginner-guide-hotspot--step-2" },
  { label: "Choose First Game", className: "beginner-guide-hotspot--step-3" },
  { label: "Start Small", className: "beginner-guide-hotspot--step-4" },
];

const basics = [
  { label: "Chance Games", className: "beginner-guide-hotspot--basic-1" },
  { label: "Live Table Games", className: "beginner-guide-hotspot--basic-2" },
  { label: "Sports Events", className: "beginner-guide-hotspot--basic-3" },
  { label: "Esports Matches", className: "beginner-guide-hotspot--basic-4" },
];

const recommendations = [
  { label: "Starter Slots", className: "beginner-guide-hotspot--recommendation-1" },
  { label: "Simple Baccarat", className: "beginner-guide-hotspot--recommendation-2" },
  { label: "Live Demo Table", className: "beginner-guide-hotspot--recommendation-3" },
  { label: "Matchday Pick", className: "beginner-guide-hotspot--recommendation-4" },
];

const terms = [
  "Wager",
  "Odds",
  "Bonus",
  "RTP",
  "Live Dealer",
  "Match Market",
  "Bankroll",
  "Verification",
];

type BeginnerGuidePageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function BeginnerGuidePage({ searchParams }: BeginnerGuidePageProps) {
  const params = searchParams ? await searchParams : {};
  const forcedMobile = params.viewport === "mobile";

  return (
    <main className={`beginner-guide-page${forcedMobile ? " is-mobile-render" : ""}`} aria-labelledby="beginner-guide-title">
      <picture className="beginner-guide-page__approved-art" aria-hidden="true">
        {forcedMobile ? null : <source media="(max-width: 760px)" srcSet="/approved-assets/beginner-guide-mobile.png" />}
        <img src={forcedMobile ? "/approved-assets/beginner-guide-mobile.png" : "/approved-assets/beginner-guide-desktop.png"} alt="" draggable={false} />
      </picture>

      <div className="sr-only">
        <p>Fathom &amp; Frame</p>
        <h1 id="beginner-guide-title">Beginner Guide</h1>
        <p>Understand the basics and start with confidence.</p>
        <section aria-label="Beginner onboarding flow">
          <h2>Start in 4 steps</h2>
          <ol>
            {onboardingSteps.map((step) => (
              <li key={step.label}>{step.label}</li>
            ))}
          </ol>
        </section>
        <section aria-label="Game basics">
          <h2>Game Basics</h2>
          <ul>
            {basics.map((basic) => (
              <li key={basic.label}>{basic.label}</li>
            ))}
          </ul>
        </section>
        <section aria-label="Beginner recommendations">
          <h2>Beginner Recommendations</h2>
          <ul>
            {recommendations.map((item) => (
              <li key={item.label}>{item.label}</li>
            ))}
          </ul>
        </section>
        <section aria-label="Common terms">
          <h2>Common Terms</h2>
          <ul>
            {terms.map((term) => (
              <li key={term}>{term}</li>
            ))}
          </ul>
        </section>
      </div>

      <nav className="beginner-guide-page__hotspots" aria-label="Beginner Guide navigation">
        <a className="beginner-guide-hotspot beginner-guide-hotspot--logo" href="/home">
          <span className="sr-only">Homepage</span>
        </a>
        {onboardingSteps.map((step) => (
          <a className={`beginner-guide-hotspot ${step.className}`} href={`#${step.label.toLowerCase().replaceAll(" ", "-")}`} key={step.label}>
            <span className="sr-only">{step.label}</span>
          </a>
        ))}
        {basics.map((basic) => (
          <a className={`beginner-guide-hotspot ${basic.className}`} href={`#${basic.label.toLowerCase().replaceAll(" ", "-")}`} key={basic.label}>
            <span className="sr-only">{basic.label}</span>
          </a>
        ))}
        {recommendations.map((item) => (
          <a className={`beginner-guide-hotspot ${item.className}`} href={`#${item.label.toLowerCase().replaceAll(" ", "-")}`} key={item.label}>
            <span className="sr-only">{item.label}</span>
          </a>
        ))}
      </nav>
    </main>
  );
}
