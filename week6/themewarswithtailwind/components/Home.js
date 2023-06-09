import { useEffect, useState } from 'react';
import {useTheme} from 'next-themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSith } from '@fortawesome/free-brands-svg-icons';
import { faJedi } from '@fortawesome/free-solid-svg-icons';
import { searchAPI } from '../functions/searchAPI';
import Card from './Card';
import Form from './Form';

function Home() {
  const {theme, setTheme}= useTheme()
  const [searchResult, setSearchResult] = useState([]);


  const handleSearch = async (searchText) => {
    const result = await searchAPI(searchText);
    setSearchResult(result);
  };

  const cards = searchResult.map((data, i) => {
    return <Card key={i} infos={data} theme={theme}/>;
  });

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

 
return (
    <div id="main" className={`py-0 px-5 bg-left-top bg-right-top bg-no-repeat bg-cover w-screen min-h-screen relative flex flex-col justify-center items-center transition-all ${theme === 'light' ? 'bg-light' : 'bg-dark'}`}>
      {/* TOGGLE THEME BUTTON */}
      <div className={`${theme=== 'light' ? 'bg-neutral-500' : 'bg-neutral-800'} rounded-full cursor-pointer border-none absolute top-6 right-6 w-[50px] h-[50px]`}>

        <button onClick={toggleTheme} className={`${theme === "light" ? "bg-neutral-800" : "bg-neutral-500"} flex justify-center items-center w-full h-full rounded-full -translate-y-[6px] active:-translate-y-[2px]`}>
        {theme === 'light'
      ? <FontAwesomeIcon icon={faSith} className={`${theme === 'light' ? 'text-neutral-200' : 'text-neutral-800'} text-2x1` } />
      : <FontAwesomeIcon icon={faJedi} className={`${theme === 'light' ? 'text-neutral-800' : 'text-neutral-200'} text-2x1`} />}
        </button>
      </div>

      
      {/* TITLE */}
      <h1 className={`text-6xl m-10 font-starjedi ${theme === 'light' ? 'text-neutral-800' : 'text-neutral-200'} text-2x1`}>THEME WARS</h1>


      {/* SEARCH */}
      <Form theme={theme}handleSearch={handleSearch} />

      {/* CARDS */}
      <div className="w-2/5 flex flex-col items-center">
        {cards}
      </div>
    </div>
  );
}

export default Home;
