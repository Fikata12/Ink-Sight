import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import ReviewCard from './review-card/ReviewCard';

import AuthContext from "../../contexts/authContext";

import * as reviewService from '../../services/reviewService';

import "./Reviews.css"

export default function Reviews(values) {
    const [books, setBooks] = useState([]);
    const { userId } = useContext(AuthContext);

    useEffect(() => {
        reviewService.getAll()
            .then(result => {
                setBooks(result);
            }).catch((e) => {
                toast.error(`Error: ${e.code} ${e.message}`);
            })
    }, []);
    
    const filterReviews = (searchForm) => {
        reviewService.getAll().then(result => {
            const filtered = result.filter(b => b.title.toLowerCase().includes(searchForm.searchString.toLowerCase()));
            setBooks(filtered);
        }).catch((e) => {
            toast.error(`Error: ${e.code} ${e.message}`);
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
                    <ReviewCard key={book._id} {...book} userId={userId} />
                )) : books.map(book => (
                    <ReviewCard key={book._id} {...book} userId={userId} />
                ))}
                {values.onlyPrivate && books.filter(b => b._ownerId === userId).length < 1 && <h4 className=' text-center text-muted p-4'>No content.</h4>}
                {books.length < 0 && <h4 className=' text-center text-muted p-4'>No content.</h4>}
            </div>
        </div>
    )
}