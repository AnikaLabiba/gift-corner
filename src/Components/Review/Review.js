import React from 'react';
import './Review.css';
import { BsFillStarFill } from 'react-icons/bs';

const Review = (props) => {
    const { img, name, description, rating } = props.review
    return (
        <div className='review-card p-4 my-2'>
            <div className='d-flex align-items-center'>
                <img src={img} alt="" />
                <h5 className='ms-3'>{name}</h5>
            </div>
            <p>{description}</p>
            <div className='d-flex align-items-center'>
                <p>{rating}</p>
                <p className='ms-5'>
                    {
                        [...Array(5)].map(star => {
                            return <BsFillStarFill className='star' />
                        })
                    }
                </p>
            </div>
        </div>
    );
};

export default Review;