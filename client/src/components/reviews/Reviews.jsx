import { useContext, useEffect, useState } from 'react';

import ReviewCard from './review-card/ReviewCard';

import AuthContext from "../../contexts/authContext";

import * as reviewService from '../../services/reviewService';

import "./Reviews.css"

export default function Reviews(values) {
    const [books, setBooks] = useState([]);
    const [count, setCount] = useState(0);

    const { userId } = useContext(AuthContext);

    useEffect(() => {
        reviewService.getAll()
            .then(result => {
                setBooks(result);
                setCount(result.length);
            })
            .catch(err => {
                console.log(err);
            });
    }, [count]);

    const decreaseCount = () => {
        setCount(count - 1);
    }
    
    const filterReviews = (searchForm) => {
        reviewService.getAll().then(result => {
            const filtered = result.filter(b => b.title.toLowerCase().includes(searchForm.searchString.toLowerCase()));
            setBooks(filtered);
        });
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const searchForm = Object.fromEntries(new FormData(document.getElementById("search-form")));

        filterReviews(searchForm);
    }

    const onBlur = async (e) => {
        e.preventDefault();
        const searchForm = Object.fromEntries(new FormData(document.getElementById("search-form")));
        
        if (searchForm.searchString === '') {
            filterReviews(searchForm);
        }
    }

    return (
        <div className="container">
            <form id="search-form" onSubmit={onSubmit}>
                <div id="search" className="mx-auto search-bar">
                    <div className="input-group">
                        <input className="form-control rounded-left" onBlur={onBlur} name="searchString" placeholder="Search" />
                        <button type="submit" className="btn color-orange rounded-left">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </div>
            </form>
            <div className="reviews">
                {values.onlyPrivate ? books.filter(b => b._ownerId === userId).map(book => (
                    <ReviewCard key={book._id} {...book} userId={userId} decreaseCount={decreaseCount} />
                )) : books.map(book => (
                    <ReviewCard key={book._id} {...book} userId={userId} decreaseCount={decreaseCount} />
                ))}
                {books.length < 1 && <h3 className=' text-center text-muted p-4'>No content.</h3>}
            </div>
        </div>
    )
}