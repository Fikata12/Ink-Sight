import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import useForm from '../../hooks/useForm';

import * as reviewService from '../../services/reviewService';

import notificationConstants from '../../utils/notificationConstants';
import Paths from '../../utils/paths';

const AddFormKeys = {
    title: 'title',
    isbn: 'isbn',
    review: 'review',
    imgURL: 'imgURL',
}   

export default function Add() {
    const navigate = useNavigate();

    const createReviewSubmitHandler = async (values) => {
        reviewService.create(values).then((result) => {
            toast.success(notificationConstants.SuccessfullyCreatedReview);
            navigate(Paths.Details(result._id));
        }).catch((e) => {
            toast.error(`Error: ${e.code} ${e.message}`);
            navigate(Paths.Reviews);
        });
    }

    const { values, onChange, onSubmit } = useForm(createReviewSubmitHandler, {
        [AddFormKeys.title]: '',
        [AddFormKeys.isbn]: '',
        [AddFormKeys.review]: '',
        [AddFormKeys.imgURL]: '',
    });


    return (
        <div className="row container mx-auto">
            <h2 className="text-center">Add Review</h2>
            <hr />
            <div className="col-sm-12 offset-lg-2 col-lg-8 offset-xl-3 col-xl-6">
                <form onSubmit={onSubmit} >
                    <div className="mb-3">
                        <label className="form-label" htmlFor="title">Title</label>
                        <input
                            onChange={onChange}
                            name={AddFormKeys.title}
                            value={values[AddFormKeys.title]}
                            className="form-control"
                            id="title" />
                        <span className="text-danger"></span>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="isbn">ISBN</label>
                        <input
                            onChange={onChange}
                            name={AddFormKeys.isbn}
                            value={values[AddFormKeys.isbn]}
                            className="form-control"
                            id="isbn" />
                        <span className="text-danger"></span>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="review">Review</label>
                        <textarea
                            onChange={onChange}
                            name={AddFormKeys.review}
                            value={values[AddFormKeys.review]}
                            className="form-control"
                            id="review"
                            rows="5"></textarea>
                        <span className="text-danger"></span>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="url">Image Url</label>
                        <input
                            onChange={onChange}
                            name={AddFormKeys.imgURL}
                            value={values[AddFormKeys.imgURL]}
                            type="url"
                            className="form-control"
                            id="url" />
                        <span className="text-danger"></span>
                    </div>
                    <div className="mb-3">
                        <input className="btn color-orange mb-2 w-100 p-3 fw-bold" type="submit" value="Add" />
                    </div>
                </form>
            </div>
        </div>
    )
}