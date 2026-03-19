import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "vi", name: "Vietnamese", flag: "🇻🇳" }
  ];

  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[0];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
    setOpen(false);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* CURRENT LANGUAGE */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 cursor-pointer px-2 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <span className="text-lg">{currentLang.flag}</span>
      </div>

      {/* DROPDOWN */}
      {open && (
        <div
          className="absolute right-0 mt-3 w-44
          bg-white dark:bg-gray-800
          border dark:border-gray-700
          rounded-lg shadow-lg
          overflow-hidden
          animate-fade"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="flex items-center gap-3 w-full px-4 py-2
              hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <span className="text-lg">{lang.flag}</span>
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;