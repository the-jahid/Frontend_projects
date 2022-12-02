import React from 'react';
import { Helmet } from 'react-helmet-async';
import ConactHeader from '../Components/Contactus/ConactHeader';
import MapSection from '../Components/Contactus/MapSection';

const Contact = () => {
    return (
        <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
            <ConactHeader />
            <MapSection />
        </>
    );
};

export default Contact;