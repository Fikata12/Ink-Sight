import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import * as reviewService from '../../services/reviewService';

import Paths from '../../utils/paths';
import notificationConstants from '../../utils/notificationConstants';

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
        reviewService.getOne(id)
            .then(result => {
                setReview(result)
            }).catch((e) => {
                toast.error(`Error: ${e.code} ${e.message}`);
                navigate(Paths.Details(id));
            });
    }, [id]);


    const editReviewSubmitHandler = async (e) => {
        e.preventDefault();

        const review = Object.fromEntries(new FormData(e.currentTarget));

        reviewService.edit(id, review).then(() => {
            toast.success(notificationConstants.SuccessfullyUpdatedReview);
            navigate(Paths.Details(id));
        }).catch((e) => {
            toast.error(`Error: ${e.code} ${e.message}`);
            navigate(Paths.Reviews);
        });
    }

    const onChange = (e) => {
        setReview(state => ({
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