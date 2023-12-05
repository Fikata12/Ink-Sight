import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import * as reviewService from '../../services/reviewService';

import "./Details.css";

export default function Details() {
    const { id } = useParams();
    const [review, setReview] = useState({
        title: '',
        imgURL: '',
        isbn: '',
        owner: {
            username: ''
        }
    });

    useEffect(() => {
        reviewService.getOne(id)
            .then((result) => {
                setReview(result);
            }).catch((e) => {
                console.log(e);
            });
    }, [id]);

    return (
        <div className="container details-container color-light-orange">
            <div className="details">
                <div className="details-image-container">
                    <img src={review.imgURL} alt={review.title} />
                </div>
                <div className="details-body">
                    <h1>{review.title}</h1>
                    <h3>ISBN: {review.isbn}</h3>
                    <p className="color-darker-orange text-white"><span>{review.owner.username}: </span> {review.review}</p>
                </div>
            </div>
            {/* <div class="mt-5 comments-container">
                <div class="my-2">
                    <div>
                        <p class="h6 fw-bold d-inline-flex">@Model.Name</p>
                        <span class="text-muted">@Model.SubmissionTime.ToString("f")</span>
                    </div>
                    <p>@Model.Text</p>
                    <hr />
                </div>
                <form id="commentForm" method="post">
                    <span class="text-danger"></span>
                    <textarea id="comment" asp-for="Comment" class="form-control bg-white rounded-top" rows="4" placeholder="Comment..."></textarea>
                    <button id="sendButton" type="submit" class="btn btn-success w-100">Add Comment</button>
                </form>
            </div> */}
        </div>
    )
}