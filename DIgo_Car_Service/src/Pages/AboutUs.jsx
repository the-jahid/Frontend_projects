import React from 'react';
import { Helmet } from 'react-helmet-async';
import ColorSecton from '../Components/AboutUs/ColorSecton';
import Feature_Section from '../Components/AboutUs/Feature_Section';
import Steps from '../Components/AboutUs/Steps';
import Teammember from '../Components/AboutUs/Teammember';
import AllHeader from '../SharedPages/ALLHeader';
import Cta from '../SharedPages/Cta';
import Stats from '../SharedPages/Stats';

const AboutUs = () => {
    return (
        <>
      <Helmet>
        <title>About Us</title>
        
      </Helmet>
          <AllHeader text={'ABout Us'} image='https://i.ibb.co/2ZhMH2N/About-Us-Header.png' btntxt={'About Us'} />
          <Steps />
          <ColorSecton />
          <Feature_Section />
          <Stats />
          <Teammember />
          <Cta />
        </>
    );
};

export default AboutUs;