import React from 'react';
import { Helmet } from 'react-helmet-async';
import How1Section from '../Components/Services/How1Section';
import How2Section from '../Components/Services/How2Section';

import ServiceSection from '../Components/Services/ServiceSection';
import AllHeader from '../SharedPages/ALLHeader';
import Cta from '../SharedPages/Cta';

const Services = () => {
    return (
        <>
     <Helmet>
        <title>Service</title>
      </Helmet>
            <AllHeader text={'Our Services'} image='https://i.ibb.co/DtT9VbG/Service-Headers.png' btntxt={'Services'} />
            <ServiceSection />
            <How1Section />
            <How2Section />
            <Cta />
        </>
    );
};

export default Services;