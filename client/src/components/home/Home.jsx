import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import SmallReviewCard from './small-review-card/SmallReviewCard';

import * as reviewService from '../../services/reviewService';

import './Home.css';

export default function Home() {

    const [latestReviews, setLatestReviews] = useState([]);

    useEffect(() => {
        reviewService.getLatest()
            .then(result => {
                setLatestReviews(result);
            }).catch((e) => {
                toast.error(`Error: ${e.code} ${e.message}`);
            });
    }, []);

    return (
        <div className='home-container container'>
            <div className='hero my-4'>
                <div className='home-image-container'>
                    <img src="./big-logo.png" alt="Ink Sight" />
                </div>
                <h2 className='text-muted text-center'>Exploring Worlds, One Page at a Time</h2>
            </div>
            <div className='latest-reviews'>
                <h2 className='text-center'>Latest Reviews</h2>
                <hr />
                <div className="latest">
                    {latestReviews.map(review => <SmallReviewCard key={review._id} {...review} />)}

                    {latestReviews.length < 1 && <h4 className=' text-center text-muted p-4'>No content.</h4>}
                </div>
            </div>
        </div>
    )
}