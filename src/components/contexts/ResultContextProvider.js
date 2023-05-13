import React, { createContext, useContext, useState} from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search74.p.rapidapi.com'

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // /videos, /search, /images

    const getResults = async (type) => {
        setIsLoading(true);
        const response = await fetch (`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '05541f1779msha7ebfa5b74982ddp1c03b0jsn6b953d3a46de',
		        'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
            }
        });

        const data = await response.json();
        console.log(data)

        setResults(data);
        setIsLoading(false);
    }

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading, setResults}} >
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);