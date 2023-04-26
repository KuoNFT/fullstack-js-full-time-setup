import { useState } from 'react';

function Form({ theme, handleSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchText);
    setSearchText('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-2/5 flex justify-center align-center">
      <div className={`w-4/5 rounded-lg ${theme === 'dark' ? 'bg-neutral-500' : 'bg-neutral-200'}`}>
        <input
          className={`-translate-y-[6px] caret-neutral-200 w-full font-bold border-neutral-800 rounded-lg p-3 outline-none ${theme === 'dark' ? 'text-neutral-200 bg-neutral-800' : 'text-neutral-800 bg-neutral-100'}`}
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          autoFocus
        />
      </div>

      <div className={`w-1/5 rounded-lg ml-2 ${theme === 'dark' ? 'bg-neutral-500' : 'bg-neutral-200'}`}>
        <button
          type="submit"
          className={`w-full -translate-y-[6px] active:-translate-y-[2px] font-bold rounded-lg p-3 border-solid border-l ${theme === 'dark' ? 'border-neutral-800 text-neutral-200 bg-neutral-800 border-neutral-200' : 'border-neutral-100 text-neutral-800 bg-neutral-100 border-neutral-800'}`}
        >
          SEARCH
        </button>
      </div>
    </form>
  );
}

export default Form;
