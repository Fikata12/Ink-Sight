import { useContext, useEffect, useState } from 'react';

import ReviewCard from './review-card/ReviewCard';

import AuthContext from "../../contexts/authContext";

import * as bookService from '../../services/reviewService';

import "./Reviews.css"

export default function Reviews(values) {
    const [books, setBooks] = useState([]);
    const { userId } = useContext(AuthContext);

    useEffect(() => {
        bookService.getAll()
            .then(result => setBooks(result))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="container">
            <div id="search" className="mx-auto search-bar">
                <div className="input-group">
                    <input className="form-control rounded-left" placeholder="Search" />
                    <button type="submit" className="btn color-orange rounded-left">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>
            <div className="reviews">
                {values.onlyPrivate ? books.filter(b => b._ownerId === userId).map(book => (
                    <ReviewCard key={book._id} {...book} userId={userId} />
                )) : books.map(book => (
                    <ReviewCard key={book._id} {...book} userId={userId} />
                ))}
            </div>
        </div>
    )
}