import React from 'react';

import picture from '../../Images/box.png'
import './Home.css'

const Home = () => {
    return (
        <div className='container'>
            <div className="home-container">
                <div className='heading'>
                    <h2 className='mt-5 fs-2 text'>Welcome to Gift Corner</h2>
                    <p className='mt-4 fs-4 text w-100'>
                        We specialise in artisanal custom gift design and bespoke hampers, gift baskets and gift boxes.  Our luxury gift collections are  expertly put together for all special occasions, corporate events, product launches, client and employee appreciation.</p>
                </div>
                <div lg={4} sm={12} className='picture'>
                    <img src={picture} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;