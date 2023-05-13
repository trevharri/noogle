import React, { useEffect, useState} from 'react';
import { useDebounce } from 'use-debounce';

import { useResultContext } from './contexts/ResultContextProvider';

const Search = () => {
  const [text, setText] = useState('');
  const { setSearchTerm, setResults } = useResultContext();
  const [debouncedValue] = useDebounce(text, 500);

  useEffect(() => {
    if(debouncedValue) setSearchTerm(debouncedValue)
  }, [debouncedValue])

  return (
    <div className="relative sm:ml-48 md:-mt-10 mt-3">
      <input
        type="text"
        value={text}
        className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg mb-2"
        placeholder='Search Noogle or type URL'
        onChange={(e) => setText(e.target.value)}
        />
        {!text && (
          <button type="button" className='absolute top-1.5 right-4 text-2xl text-gray-500' onClick={() => setResults([])} >
            x
          </button>
        )}
    </div>
  )
}

export default Search