const categories = [
  { label: "Slots", className: "find-games-hotspot--category-1" },
  { label: "Live Games", className: "find-games-hotspot--category-2" },
  { label: "Baccarat", className: "find-games-hotspot--category-3" },
  { label: "Sports Events", className: "find-games-hotspot--category-4" },
  { label: "Esports", className: "find-games-hotspot--category-5" },
  { label: "Fishing", className: "find-games-hotspot--category-6" },
  { label: "Card & Board", className: "find-games-hotspot--category-7" },
  { label: "Lottery", className: "find-games-hotspot--category-8" },
];

const recommendedGames = [
  { label: "Emerald Reels", className: "find-games-hotspot--recommended-1" },
  { label: "Baccarat Prime", className: "find-games-hotspot--recommended-2" },
  { label: "Crown Live Table", className: "find-games-hotspot--recommended-3" },
  { label: "Matchday Pro", className: "find-games-hotspot--recommended-4" },
  { label: "Arena Clash", className: "find-games-hotspot--recommended-5" },
  { label: "Ocean Fortune", className: "find-games-hotspot--recommended-6" },
];

const rankingTabs = [
  { label: "Today Hot", className: "find-games-hotspot--ranking-1" },
  { label: "This Week", className: "find-games-hotspot--ranking-2" },
  { label: "Editor Picks", className: "find-games-hotspot--ranking-3" },
];

export default function FindGamesPage() {
  return (
    <main className="find-games-page" aria-labelledby="find-games-title">
      <picture className="find-games-page__approved-art" aria-hidden="true">
        <source media="(max-width: 760px)" srcSet="/approved-assets/find-games-mobile.png" />
        <img src="/approved-assets/find-games-desktop.png" alt="" draggable={false} />
      </picture>

      <div className="sr-only">
        <p>Fathom &amp; Frame</p>
        <h1 id="find-games-title">Find Games</h1>
        <p>Choose a category, discover matching games, follow clear rankings.</p>
        <section aria-label="Game categories">
          <h2>Game Categories</h2>
          <ul>
            {categories.map((category) => (
              <li key={category.label}>{category.label}</li>
            ))}
          </ul>
        </section>
        <section aria-label="Recommended games">
          <h2>Recommended Games</h2>
          <ul>
            {recommendedGames.map((game) => (
              <li key={game.label}>{game.label}</li>
            ))}
          </ul>
        </section>
        <section aria-label="Game rankings">
          <h2>Game Rankings</h2>
          <ul>
            {rankingTabs.map((ranking) => (
              <li key={ranking.label}>{ranking.label}</li>
            ))}
          </ul>
        </section>
      </div>

      <nav className="find-games-page__hotspots" aria-label="Find Games navigation">
        <a className="find-games-hotspot find-games-hotspot--logo" href="/home">
          <span className="sr-only">Homepage</span>
        </a>
        {categories.map((category) => (
          <a className={`find-games-hotspot ${category.className}`} href={`#${category.label.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`} key={category.label}>
            <span className="sr-only">{category.label}</span>
          </a>
        ))}
        {recommendedGames.map((game) => (
          <a className={`find-games-hotspot ${game.className}`} href={`#${game.label.toLowerCase().replaceAll(" ", "-")}`} key={game.label}>
            <span className="sr-only">{game.label}</span>
          </a>
        ))}
        {rankingTabs.map((ranking) => (
          <button className={`find-games-hotspot ${ranking.className}`} key={ranking.label} type="button">
            <span className="sr-only">{ranking.label}</span>
          </button>
        ))}
      </nav>
    </main>
  );
}
