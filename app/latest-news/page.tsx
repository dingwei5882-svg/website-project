const newsCategories = [
  { label: "Platform Updates", className: "latest-news-hotspot--category-1" },
  { label: "Game Updates", className: "latest-news-hotspot--category-2" },
  { label: "Esports News", className: "latest-news-hotspot--category-3" },
  { label: "Industry News", className: "latest-news-hotspot--category-4" },
];

const newsItems = [
  { title: "Major Platforms Upgrade Live Game Stability", category: "Platform Updates", className: "latest-news-hotspot--item-1" },
  { title: "New Payment Options Expand Across Asia", category: "Platform Updates", className: "latest-news-hotspot--item-2" },
  { title: "Esports Markets Add Weekend Coverage", category: "Esports News", className: "latest-news-hotspot--item-3" },
  { title: "Popular Live Tables Receive Interface Refresh", category: "Platform Updates", className: "latest-news-hotspot--item-4" },
  { title: "Industry Safety Standards Tighten", category: "Industry News", className: "latest-news-hotspot--item-5" },
  { title: "Game Providers Announce Slot Refresh", category: "Game Updates", className: "latest-news-hotspot--item-6" },
  { title: "Mobile Experience Updates Roll Out", category: "Platform Updates", className: "latest-news-hotspot--item-7" },
  { title: "Regional Platform Licensing Watch", category: "Industry News", className: "latest-news-hotspot--item-8" },
  { title: "Tournament Calendar Opens New Season", category: "Esports News", className: "latest-news-hotspot--item-9" },
];

type LatestNewsPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function LatestNewsPage({ searchParams }: LatestNewsPageProps) {
  const params = searchParams ? await searchParams : {};
  const forcedMobile = params.viewport === "mobile";

  return (
    <main className={`latest-news-page${forcedMobile ? " is-mobile-render" : ""}`} aria-labelledby="latest-news-title">
      <picture className="latest-news-page__approved-art" aria-hidden="true">
        {forcedMobile ? null : <source media="(max-width: 760px)" srcSet="/approved-assets/latest-news-mobile.png" />}
        <img src={forcedMobile ? "/approved-assets/latest-news-mobile.png" : "/approved-assets/latest-news-desktop.png"} alt="" draggable={false} />
      </picture>

      <div className="sr-only">
        <p>Fathom &amp; Frame</p>
        <h1 id="latest-news-title">Latest News</h1>
        <p>Platform updates, game releases, esports notes, and industry moves.</p>
        <section aria-label="News categories">
          <h2>News Categories</h2>
          <ul>
            {newsCategories.map((category) => (
              <li key={category.label}>{category.label}</li>
            ))}
          </ul>
        </section>
        <section aria-label="Latest news list">
          <h2>Latest News List</h2>
          <ul>
            {newsItems.map((item) => (
              <li key={item.title}>
                {item.category}: {item.title}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <nav className="latest-news-page__hotspots" aria-label="Latest News navigation">
        <a className="latest-news-hotspot latest-news-hotspot--logo" href="/home">
          <span className="sr-only">Homepage</span>
        </a>
        {newsCategories.map((category) => (
          <button className={`latest-news-hotspot ${category.className}`} key={category.label} type="button">
            <span className="sr-only">{category.label}</span>
          </button>
        ))}
        {newsItems.map((item) => (
          <a className={`latest-news-hotspot ${item.className}`} href={`#${item.title.toLowerCase().replaceAll(" ", "-")}`} key={item.title}>
            <span className="sr-only">Read update: {item.title}</span>
          </a>
        ))}
      </nav>
    </main>
  );
}
