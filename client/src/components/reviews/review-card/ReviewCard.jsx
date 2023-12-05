import { Link, useNavigate } from "react-router-dom";

import * as bookService from '../../../services/reviewService';

import Paths from "../../../utils/paths";

import "./ReviewCard.css"

export default function ReviewCard(values) {
    const navigate = useNavigate();
    
    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete your review review about "${values.title}"?`);

        if (hasConfirmed) {
            await bookService.remove(values._id);

            navigate('/books/reviews');
        }
    }
    return (
        <section className="book-card">
            <header className="book-card-header color-orange">
                <h1><span className="text-darker-orange">{values.owner.username}</span> about "{values.title}"</h1>
            </header>
            <div className="book-card-body color-light-orange">
                <main className="book-body-main order-2 order-lg-1 align-content-around">
                    <p>{values.review}</p>
                    <div className="book-buttons">
                        <Link to={`${Paths.Details}/${values._id}`} className="btn color-orange mb-2 p-2 fw-bold">Details</Link>
                        {values._ownerId === values.userId &&
                            <>
                                <Link to={`${Paths.Edit}/${values._id}`} className="btn color-orange mb-2 p-2 fw-bold">Edit</Link>
                                <button className="btn color-orange mb-2 p-2 fw-bold" onClick={deleteButtonClickHandler}>Delete</button>
                            </>
                        }
                    </div>
                </main>
                <aside className="book-image-container order-1 order-lg-2">
                    <img src={values.imgURL} alt={values.title} />
                </aside>
            </div>
        </section>
    );
}