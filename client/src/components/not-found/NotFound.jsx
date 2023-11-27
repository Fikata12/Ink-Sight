import { Link } from "react-router-dom";

import "./NotFound.css";

export default function NotFound() {
    return (
        <div className="text-center not-found">
            <h1 className="display-1 fw-bold">404</h1>
            <p className="fs-3"> <span className="text-orange">Opps!</span> Page not found.</p>
            <p className="lead">
                The page you're looking for doesn't exist.
            </p>
            <Link className="btn color-orange" to="/">Go Home</Link>
        </div>
    )
}