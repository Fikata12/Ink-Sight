import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import * as reviewService from '../../services/reviewService';
import * as commentService from '../../services/commentService';

import AuthContext from "../../contexts/authContext";
import Comment from "./comment/Comment";
import useForm from "../../hooks/useForm";

import "./Details.css";

export default function Details() {
    const { id } = useParams();

    const { username } = useContext(AuthContext);

    const [review, setReview] = useState({
        title: '',
        imgURL: '',
        isbn: '',
        owner: {
            username: ''
        }
    });

    const [comments, setComments] = useState([]);
    const [commentsCount, setCommentsCount] = useState(0);

    useEffect(() => {
        reviewService.getOne(id)
            .then((result) => {
                setReview(result);
            }).catch((e) => {
                console.log(e);
            });
    }, [id]);

    useEffect(() => {
        commentService.getAll(id)
            .then((result) => {
                setComments(result)
                setCommentsCount(result.length)
            });
    }, [commentsCount]);


    const addCommentHandler = async (values) => {
        const newComment = await commentService.create(
            id,
            values.comment
        );
        values.comment = '';

        newComment.owner = { username };

        setCommentsCount(comments.length + 1);
    }

    const { values, onChange, onSubmit } = useForm(addCommentHandler, {
        comment: '',
    });

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
            <div className="mt-5 comments-container">
                <h2 className="text-center">Comments</h2>
                <hr />
                <div className="comments">
                    {comments.map(comment => (
                        <Comment key={comment._id} {...comment} />
                    ))}
                    {comments.length < 1 && <h4 className=' text-center text-muted p-4'>No content.</h4>}
                </div>
                <form onSubmit={onSubmit}>
                    <span className="text-danger"></span>
                    <textarea onChange={onChange} name="comment" value={values.comment} className="form-control bg-white rounded-top mb-4" rows="4" placeholder="Comment..."></textarea>
                    <button type="submit" className="btn color-darker-orange mb-2 w-100 p-3 fw-bold text-white">Add Comment</button>
                </form>
            </div>
        </div>
    )
}