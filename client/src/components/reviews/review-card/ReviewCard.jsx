import { Link, useNavigate } from "react-router-dom";

import Paths from "../../../utils/paths";

import "./ReviewCard.css"

export default function ReviewCard(values) {
    return (
        <section className="book-card">
            <header className="book-card-header color-orange">
                <h1><span className="text-darker-orange">{values.owner.username}</span> about "{values.title}"</h1>
            </header>
            <div className="book-card-body color-light-orange">
                <main className="book-body-main order-2 order-lg-1 align-content-around">
                    <p>{values.review}</p>
                    <div className="book-buttons">
                        <Link to={Paths.Details(values._id)} className="btn color-orange mb-2 p-2 fw-bold">Details</Link>
                    </div>
                </main>
                <aside className="book-image-container order-1 order-lg-2">
                    <img src={values.imgURL} alt={values.title} />
                </aside>
            </div>
        </section>
    );
}