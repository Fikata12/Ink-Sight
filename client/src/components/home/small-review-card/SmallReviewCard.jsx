import { Link } from "react-router-dom";

import Paths from "../../../utils/paths";

import "./SmallReviewCard.css";

export default function SmallReviewCard(values) {
    return (
        <Link className="small-review-card card p-3 color-light-orange" to={Paths.Details(values._id)}>
            <div className="small-card-image-container pb-3">
                <img src={values.imgURL} alt={values.title} />
            </div>
            <h4 className="p-2">{values.title}</h4>
            <p>Review by: {values.owner.username}</p>
        </Link>
    )
}