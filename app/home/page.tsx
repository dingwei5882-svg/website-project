"use client";

import { useEffect, useMemo, useState } from "react";

const labels = {
  en: {
    title: "Choose your path",
    description: "A neutral gaming platform guide for finding games, learning basics, comparing platforms, and following key updates.",
    findGames: "Find Games",
    beginnerGuide: "Beginner Guide",
    comparison: "Platform Comparison & Ranking",
    latestNews: "Latest News",
    business: "Business Cooperation",
  },
  zh: {
    title: "选择你的路径",
    description: "中立游戏平台指南，帮助你选择游戏、学习基础、对比平台并关注关键更新。",
    findGames: "游戏选择",
    beginnerGuide: "新手教程",
    comparison: "游戏站对比与排行",
    latestNews: "最新资讯",
    business: "商务合作入口",
  },
};

export default function HomePage() {
  const [language, setLanguage] = useState<keyof typeof labels>("en");
  const [forcedMobile, setForcedMobile] = useState(false);
  const copy = labels[language];
  const entries = useMemo(
    () => [
      { label: copy.findGames, className: "home-hotspot--find-games", href: "/find-games" },
      { label: copy.beginnerGuide, className: "home-hotspot--beginner-guide", href: "/beginner-guide" },
      { label: copy.comparison, className: "home-hotspot--comparison", href: "/platform-comparison-ranking" },
      { label: copy.latestNews, className: "home-hotspot--latest-news", href: "/latest-news" },
      { label: copy.business, className: "home-hotspot--business", href: "/business-cooperation" },
    ],
    [copy],
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get("lang");
    const nextLanguage = langParam === "zh" ? "zh" : langParam === "en" ? "en" : window.localStorage.getItem("fathom-frame-language") === "zh" ? "zh" : "en";
    setLanguage(nextLanguage);
    window.localStorage.setItem("fathom-frame-language", nextLanguage);
    setForcedMobile(params.get("viewport") === "mobile");
  }, []);

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
        <h1 id="homepage-title">{copy.title}</h1>
        <p>{copy.description}</p>
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
