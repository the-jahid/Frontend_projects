import React from 'react';
import { Helmet } from 'react-helmet-async';


import Faq from '../Components/Home/Faq';
import Hero from '../Components/Home/Hero';
import Offer from '../Components/Home/Offer';
import Process from '../Components/Home/Process';
import Quote from '../Components/Home/Quote';
import Testimonial from '../Components/Home/Testimonial';
import Cta from '../SharedPages/Cta';
import Stats from '../SharedPages/Stats';

const Home = () => {
    return (
        <>
    <Helmet>
        <title>Home</title>
        
      </Helmet>
            <Hero />
            <Quote />
            <Process />
            <Offer />
            <Cta />
             <Stats />
            <Testimonial />
            <Faq />
        </>
    );
};

export default Home;