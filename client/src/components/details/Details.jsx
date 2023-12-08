import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';

import Comment from "./comment/Comment";

import AuthContext from "../../contexts/authContext";

import useForm from "../../hooks/useForm";

import * as reviewService from '../../services/reviewService';
import * as commentService from '../../services/commentService';

import Paths from "../../utils/paths";
import { CommentValidationConstants } from "../../utils/validationConstants";
import notificationConstants from "../../utils/notificationConstants";

import "./Details.css";

const CommentFormKeys = {
    comment: 'comment'
};

export default function Details() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [comments, setComments] = useState([]);
    const [commentsCount, setCommentsCount] = useState(0);
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const { username, userId } = useContext(AuthContext);
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
                toast.error(`Error: ${e.code} ${e.message}`);
                navigate(Paths.Reviews);
            });
    }, [id]);

    useEffect(() => {
        commentService.getAll(id)
            .then((result) => {
                setComments(result)
                setCommentsCount(result.length)
            }).catch((e) => {
                toast.error(`Error: ${e.code} ${e.message}`);
                navigate(Paths.Reviews);
            });
    }, [commentsCount]);

    const validateValues = (values) => {
        let errors = {};
        if (values[CommentFormKeys.comment].length < CommentValidationConstants.CommentMinLength ||
            values[CommentFormKeys.comment].length > CommentValidationConstants.CommentMaxLength) {
            errors[CommentFormKeys.comment] = `The comment must be between ${CommentValidationConstants.CommentMinLength} and ${CommentValidationConstants.CommentMaxLength} characters.`;
        }
        return errors;
    };

    const validateAndSubmit = (values) => {
        setErrors(validateValues(values))
        setSubmitting(true);
    };

    const addCommentHandler = (values) => {
        const newComment = commentService.create(id, values.comment).then(() => {
            newComment.owner = { username };
            setCommentsCount(comments.length + 1);
        }).catch((e) => {
            toast.error(`Error: ${e.code} ${e.message}`);
        });
        values.comment = '';
    }

    const { values, onChange, onSubmit } = useForm(validateAndSubmit, {
        [CommentFormKeys.comment]: '',
    });

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            addCommentHandler(values);
        }
    }, [errors]);

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete your review about "${review.title}"?`);

        if (hasConfirmed) {
            reviewService.remove(review._id).then(() => {
                toast.success(notificationConstants.SuccessfullyDeletedReview);
                navigate(Paths.Mine);
            }).catch((e) => {
                toast.error(`Error: ${e.code} ${e.message}`);
                navigate(Paths.Reviews);
            });
        }
    }

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
                    {review._ownerId === userId &&
                        <div className="details-buttons">
                            <Link to={Paths.Edit(review._id)} className="btn color-orange mb-2 p-2 fw-bold">Edit</Link>
                            <button className="btn color-orange mb-2 p-2 fw-bold" onClick={deleteButtonClickHandler}>Delete</button>
                        </div>
                    }
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
                    <span className="error">{errors.comment}</span>
                    <textarea onChange={onChange} name="comment" value={values[CommentFormKeys.comment]} className="form-control bg-white rounded-top mb-4" rows="4" placeholder="Comment..."></textarea>
                    <button type="submit" className="btn color-darker-orange mb-2 w-100 p-3 fw-bold text-white">Add Comment</button>
                </form>
            </div>
        </div>
    )
}