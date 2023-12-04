import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import useForm from '../../hooks/useForm';

import * as bookService from '../../services/bookService';

const EditFormKeys = {
    title: 'title',
    isbn: 'isbn',
    review: 'review',
    imgURL: 'imgURL',
}

export default function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [review, setReview] = useState({
        [EditFormKeys.title]: '',
        [EditFormKeys.isbn]: '',
        [EditFormKeys.review]: '',
        [EditFormKeys.imgURL]: '',
    });

    useEffect(() => {
        bookService.getOne(id)
            .then(result => {
                setReview(result)
            });
    }, [id]);


    const editReviewSubmitHandler = async (e) => {
        e.preventDefault();

        const review = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await gameService.edit(gameId, review);

            navigate('/games');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    const onChange = (e) => {
        setGame(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="row container mx-auto">
            <h2 className="text-center">Edit Review</h2>
            <hr />
            <div className="col-sm-12 offset-lg-2 col-lg-8 offset-xl-3 col-xl-6">
                <form onSubmit={editReviewSubmitHandler} >
                    <div className="mb-3">
                        <label className="form-label" htmlFor="title">Title</label>
                        <input
                            onChange={onChange}
                            name={EditFormKeys.title}
                            value={review[EditFormKeys.title]}
                            className="form-control"
                            id="title" />
                        <span className="text-danger"></span>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="isbn">ISBN</label>
                        <input
                            onChange={onChange}
                            name={EditFormKeys.isbn}
                            value={review[EditFormKeys.isbn]}
                            className="form-control"
                            id="isbn" />
                        <span className="text-danger"></span>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="review">Review</label>
                        <textarea
                            onChange={onChange}
                            name={EditFormKeys.review}
                            value={review[EditFormKeys.review]}
                            className="form-control"
                            id="review"
                            rows="5"></textarea>
                        <span className="text-danger"></span>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="url">Image Url</label>
                        <input
                            onChange={onChange}
                            name={EditFormKeys.imgURL}
                            value={review[EditFormKeys.imgURL]}
                            type="url"
                            className="form-control"
                            id="url" />
                        <span className="text-danger"></span>
                    </div>
                    <div className="mb-3">
                        <input className="btn color-orange mb-2 w-100 p-3 fw-bold" type="submit" value="Edit" />
                    </div>
                </form>
            </div>
        </div>
    )
}