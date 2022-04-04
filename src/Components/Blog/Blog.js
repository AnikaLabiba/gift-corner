import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h3 className='text-center mt-5'>Context API</h3>
            <p className='mt-3 fs-5'>Context API is the structure of React that allows us to pass data with multiple components without prop-drilling. Which means no need to pass data from parent to child components manually. We can pass any kind of data like an array, an object, any function or any single value. We just need to import a context provider from React with a relatable name and to export that context and an consumer to receive the data and use.</p>

            <h3 className='text-center mt-5'>Inline Block Element</h3>
            <p className='mt-3 fs-5'>Inline elements in HTML are those which doesn't start in new line. And doesn't take the full width of the line. It takes the width as much as necessary for the size of the content. Some of the inline elements are a  , span  , img  , code , cite , button , input  etc. </p>

            <h3 className='text-center mt-5'>Symantic tags in HTML</h3>
            <p className='mt-3 fs-5 mb-5'>Symantic tags are essential for browser or search engine to understand the structure of the website. It can be said these tags hold the title of different sections and layout of a HTML page. By symantic tag it can be understood that what's the role of that HTML part. For example header: it defines a header for a web page,
                nav: It defines a container for navigation links,
                section: This defines a section in a web page.
                article: This element contains the main part, containing information about the web page,
                aside: The aside content is often placed as a sidebar in a document,
                footer: It defines a footer for a document or a section.</p>

        </div>
    );
};

export default Blog;