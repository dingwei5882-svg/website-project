type HomePageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

const entries = [
  { label: "游戏选择", className: "home-hotspot--find-games", href: "/find-games" },
  { label: "新手教程", className: "home-hotspot--beginner-guide", href: "/beginner-guide" },
  { label: "游戏站对比与排行", className: "home-hotspot--comparison", href: "/platform-comparison-ranking" },
  { label: "最新资讯", className: "home-hotspot--latest-news", href: "/latest-news" },
  { label: "商务合作入口", className: "home-hotspot--business", href: "/business-cooperation" },
];

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = searchParams ? await searchParams : {};
  const forcedMobile = params.viewport === "mobile";

  return (
    <main className={`homepage${forcedMobile ? " is-mobile-render" : ""}`} aria-labelledby="homepage-title">
      <picture className="homepage__approved-art" aria-hidden="true">
        {forcedMobile ? null : <source media="(max-width: 760px)" srcSet="/approved-assets/homepage-mobile.png" />}
        <img
          src={forcedMobile ? "/approved-assets/homepage-mobile.png" : "/approved-assets/homepage-desktop.png"}
          alt=""
          draggable={false}
          style={forcedMobile ? { width: "390px", height: "auto", maxWidth: "none" } : undefined}
        />
      </picture>

      <div className="sr-only">
        <p>Fathom &amp; Frame</p>
        <h1 id="homepage-title">Choose your path</h1>
        <p>A neutral gaming platform guide for finding games, learning basics, comparing platforms, and following key updates.</p>
      </div>

      <nav className="homepage__hotspots" aria-label="Homepage core navigation">
        {entries.map((entry) => (
          <a className={`home-hotspot ${entry.className}`} href={entry.href} key={entry.href}>
            <span className="sr-only">{entry.label}</span>
          </a>
        ))}
      </nav>
    </main>
  );
}
