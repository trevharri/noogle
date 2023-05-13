import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import { useResultContext } from './contexts/ResultContextProvider';
import Loading from './Loading';


const Results = () => {
    const { results, isLoading, getResults, searchTerm } = useResultContext();
    const location = useLocation();

    useEffect(() => {
        getResults(`/?query=${searchTerm}&limit=20`)
    }, [searchTerm])
    if (isLoading) return <Loading />;

    switch (location.pathname) {
        case '/search':
            return (
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
                    {results?.results?.map(({ url, title, description}, index) => (
                        <div key={index} className="md:p-4 w-full bg-gray-300 dark:bg-gray-800 rounded">
                            <a href={url} target="_blank" rel="noreferrer" className="w-full">
                                <p className='text-sm'>
                                    {url.length > 30 ? url.substring(0,30) : url}
                                </p>
                                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                                    {title}
                                </p>
                                <p className="text-sm">
                                    {description}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            );
        case '/images':
            return 'IMAGES';
        case '/news':
            return 'NEWS';
        case '/videos':
            return 'VIDEOS';

        default:
            return 'ERROR';
    }
}

export default Results