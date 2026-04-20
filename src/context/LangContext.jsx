import { createContext, useContext, useState } from 'react';

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState(
    () => localStorage.getItem('blog_lang') || 'ja'
  );

  const switchLang = (l) => {
    setLang(l);
    localStorage.setItem('blog_lang', l);
  };

  return (
    <LangContext.Provider value={{ lang, switchLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
