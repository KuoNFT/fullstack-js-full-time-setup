import { useState } from 'react';
import { useTheme } from 'next-themes';
// Les autres importations

function Home() {
  const [searchResult, setSearchResult] = useState([]);
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Les autres fonctions et le rendu
  return (
    <div
      id="main"
      className="py-0 px-5 bg-left-top bg-right-top bg-no-repeat bg-cover w-screen min-h-screen relative bg-light dark:bg-dark flex flex-col justify-center items-center transition-all"
    >
      {/* TOGGLE THEME BUTTON */}
      <div className="rounded-full cursor-pointer border-none absolute top-6 right-6 w-[50px] h-[50px] bg-neutral-500">
        <button
          onClick={handleThemeToggle}
          className="flex justify-center items-center w-full h-full rounded-full -translate-y-[6px] active:-translate-y-[2px] bg-neutral-800"
        >
          {theme === 'light' ? (
            <FontAwesomeIcon icon={faSith} className="text-2xl text-neutral-200" />
          ) : (
            <FontAwesomeIcon icon={faJedi} className="text-2xl text-neutral-200" />
          )}
        </button>
      </div>

      {/* Les autres éléments */}
    </div>
  );
}

export default Home;
