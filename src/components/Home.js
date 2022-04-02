import React from 'react';
import { useSurah } from '../hooks/hooks';
import SingleSurah from './SingleSurah';

const Home = () => {
    const [surah] = useSurah()
    
    return (
        <div className='grid grid-cols-1 justify-items-center w-full gap-y-12 px-6 md:px-20'>
            {surah.map(singleSurah => <SingleSurah key={singleSurah.number} singleSurah={singleSurah} />)}
        </div>
    );
};

export default Home;