import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import picture from '../../Images/box.png'
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews()
    const selectedReviews = reviews.slice(0, 3)

    return (
        <div className='container'>
            <div className="home-container mb-5">
                <div className='heading'>
                    <h2 className='mt-5 fs-2 text'>Welcome to Gift Corner</h2>
                    <p className='mt-4 fs-4 text w-100'>
                        We specialise in artisanal custom gift design and bespoke hampers, gift baskets and gift boxes.  Our luxury gift collections are  expertly put together for all special occasions, corporate events, product launches, client and employee appreciation.</p>
                </div>
                <div lg={4} sm={12} className='picture'>
                    <img src={picture} alt="" />
                </div>
            </div>

            <div className="customers-review">
                <h3 className='text-center mt-5'>Customers Reviews</h3>
                <div className="grid-box">
                    {selectedReviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)}
                </div>
                <Link to='/reviews'><button>See all</button></Link>
            </div>
        </div>
    );
};

export default Home;