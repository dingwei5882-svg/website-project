"use client";

import { useEffect, useState, type PointerEvent } from "react";

type Language = {
  code: string;
  name: string;
};

const languages: Language[] = [
  { code: "en", name: "English" },
  { code: "zh", name: "中文" },
  { code: "ja", name: "日本語" },
  { code: "ko", name: "한국어" },
  { code: "es", name: "Español" },
  { code: "pt", name: "Português" },
];

export default function Page() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
  const [isMobileRender, setIsMobileRender] = useState(false);

  useEffect(() => {
    const syncViewport = () => {
      setIsMobileRender(window.innerWidth <= 760);
    };

    syncViewport();
    window.addEventListener("resize", syncViewport);
    return () => window.removeEventListener("resize", syncViewport);
  }, []);

  const handleContinue = () => {
    window.localStorage.setItem("fathom-frame-language", selectedLanguage.code);
    window.location.assign(`/home?lang=${selectedLanguage.code}`);
  };

  const handleDesktopLanguagePointer = (event: PointerEvent<HTMLElement>) => {
    if (window.innerWidth <= 760) {
      return;
    }

    const groupLeft = window.innerWidth * 0.3255;
    const groupTop = window.innerHeight * 0.2949;
    const groupWidth = window.innerWidth * 0.366;
    const groupHeight = window.innerHeight * 0.4375;
    const gap = window.innerHeight * 0.0078;
    const itemHeight = (groupHeight - gap * (languages.length - 1)) / languages.length;
    const x = event.clientX;
    const y = event.clientY;

    if (x < groupLeft || x > groupLeft + groupWidth || y < groupTop || y > groupTop + groupHeight) {
      return;
    }

    const offsetY = y - groupTop;
    const index = Math.floor(offsetY / (itemHeight + gap));
    const itemTop = index * (itemHeight + gap);

    if (index >= 0 && index < languages.length && offsetY >= itemTop && offsetY <= itemTop + itemHeight) {
      setSelectedLanguage(languages[index]);
    }
  };

  return (
    <main className={`language-entry${isMobileRender ? " is-mobile-render" : ""}`} aria-labelledby="language-title" onPointerDownCapture={handleDesktopLanguagePointer}>
      <picture className="language-entry__approved-art" aria-hidden="true">
        <source media="(max-width: 760px)" srcSet="/approved-assets/language-entry-mobile.png" />
        <img src="/approved-assets/language-entry-desktop.png" alt="" draggable={false} />
      </picture>

      <div className="language-entry__logo-cover" aria-hidden="true" />
      <img className="language-entry__brand-logo" src="/brand/logo.png" alt="Fathom & Frame" draggable={false} style={{ width: "330px", maxWidth: "84vw", zIndex: 10 }} />

      <div className="language-entry__bottom-cleaner" aria-hidden="true" />

      <section className="language-entry__interaction" aria-label="Language selection">
        <div className="sr-only">
          <p>Fathom &amp; Frame</p>
          <p>Gaming Platform Discovery &amp; Guide Platform</p>
          <h1 id="language-title">Choose your language</h1>
          <p>Select your preferred language to continue to the localized homepage.</p>
        </div>

        <div className="language-hotspots" role="radiogroup" aria-label="Choose your language">
          {languages.map((language) => (
            <button
              aria-checked={language.code === selectedLanguage.code}
              aria-label={language.name}
              className="language-hotspot"
              key={language.code}
              onClick={() => setSelectedLanguage(language)}
              role="radio"
              type="button"
            >
              <span className="sr-only">{language.name}</span>
            </button>
          ))}
        </div>

        <button className="language-continue-hotspot" onClick={handleContinue} type="button">
          <span className="sr-only">Continue to Homepage</span>
        </button>
      </section>
    </main>
  );
}




