import React from 'react';
import { Helmet } from 'react-helmet-async';
import BlogFour from '../Components/Blog/BlogFour';
import BlogFull from '../Components/Blog/BlogFull';

import AllHeader from '../SharedPages/ALLHeader';
import Cta from '../SharedPages/Cta';


const Blog = () => {
    return (
        <>
        <Helmet>
            <title>Blog</title>
        </Helmet>
           <AllHeader text={'Our Blogs'} image={'https://i.ibb.co/rfZC1MX/Blog-Headers.png'} btntxt={'Blogs'} />
           <BlogFour />
           <BlogFull />
           <Cta />
        </>
    );
};

export default Blog;