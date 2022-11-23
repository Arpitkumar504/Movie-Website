import React from 'react'
import Banner from '../component/Banner.js';
import Cardshow from '../component/Cardshow.js';
import Hindimovie from '../component/Hindimovie.js';
import Kidsmovie from '../component/Kidsmovie.js';
import Hollymovie from '../component/Hollymovie.js';
import Filtercard from '../component/Filtercard.js';
import Faq from '../component/Faq.js';


const Home = () => {
    return (
        <div>
            <Banner />
            <Cardshow />
            <Hindimovie />
            <Kidsmovie />
            <Hollymovie />
            <Filtercard />
            <Faq/>
        </div>
    )
}

export default Home
