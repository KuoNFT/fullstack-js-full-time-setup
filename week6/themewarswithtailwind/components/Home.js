import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSith } from '@fortawesome/free-brands-svg-icons';
import { faJedi } from '@fortawesome/free-solid-svg-icons';
import { searchAPI } from '../functions/searchAPI';
import Card from './Card';
import Form from './Form';

function Home() {
  const [theme, setTheme] = useState('light');
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async (searchText) => {
    const result = await searchAPI(searchText);
    setSearchResult(result);
  };

  const cards = searchResult.map((data, i) => {
    return <Card key={i} infos={data} />;
  });

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const themeStyles = theme === 'light' ? {
    backgroundColor: '#ffffff',
    color: '#333333'
  } : {
    backgroundColor: '#1a1a1a',
    color: '#e5e5e5'
  };

  return (
    <div id="main" className="py-0 px-5 bg-left-top bg-right-top bg-no-repeat bg-cover w-screen min-h-screen relative flex flex-col justify-center items-center transition-all" style={themeStyles}>
      {/* TOGGLE THEME BUTTON */}
      <div className="rounded-full cursor-pointer border-none absolute top-6 right-6 w-[50px] h-[50px] bg-neutral-500">
        <button className="flex justify-center items-center w-full h-full rounded-full -translate-y-[6px] active:-translate-y-[2px] bg-neutral-800" onClick={toggleTheme}>
          {theme === 'light'
            ? <FontAwesomeIcon icon={faSith} className="text-2xl text-neutral-200" />
            : <FontAwesomeIcon icon={faJedi} className="text-2xl text-neutral-200" />}
        </button>
      </div>

      {/* TITLE */}
      <h1 className="text-6xl m-10 text-neutral-800" style={{ fontFamily: 'Starjedi', color: theme === 'light' ? '#333333' : '#e5e5e5' }}>THEME WARS</h1>

      {/* SEARCH */}
      <Form handleSearch={handleSearch} />

      {/* CARDS */}
      <div className="w-2/5 flex flex-col items-center">
        {cards}
      </div>
    </div>
  );
}

export default Home;
