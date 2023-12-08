import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import useForm from '../../hooks/useForm';

import * as reviewService from '../../services/reviewService';

import notificationConstants from '../../utils/notificationConstants';
import { ReviewValidationConstants } from '../../utils/validationConstants';
import Paths from '../../utils/paths';

const AddFormKeys = {
    title: 'title',
    isbn: 'isbn',
    review: 'review',
    imgURL: 'imgURL',
}

export default function Add() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const createReviewSubmitHandler = async (values) => {
        reviewService.create(values).then((result) => {
            toast.success(notificationConstants.SuccessfullyCreatedReview);
            navigate(Paths.Details(result._id));
        }).catch((e) => {
            toast.error(`Error: ${e.code} ${e.message}`);
            navigate(Paths.Reviews);
        });
    }

    const validateValues = (values) => {
        let errors = {};
        if (values[AddFormKeys.title].length < ReviewValidationConstants.TitleMinLength ||
            values[AddFormKeys.title].length > ReviewValidationConstants.TitleMaxLength) {
            errors[AddFormKeys.title] = `The title must be between ${ReviewValidationConstants.TitleMinLength} and ${ReviewValidationConstants.TitleMaxLength} characters.`;
        }
        if (!ReviewValidationConstants.IsbnRegex.test(values[AddFormKeys.isbn])) {
            errors[AddFormKeys.isbn] = "The ISBN is not valid.";
        }
        if (values[AddFormKeys.review].length < ReviewValidationConstants.ReviewMinLength ||
            values[AddFormKeys.review].length > ReviewValidationConstants.ReviewMaxLength) {
            errors[AddFormKeys.review] = `The review must be between ${ReviewValidationConstants.ReviewMinLength} and ${ReviewValidationConstants.ReviewMaxLength} characters.`;
        }
        if (!ReviewValidationConstants.UrlRegex.test(values[AddFormKeys.imgURL])) {
            errors[AddFormKeys.imgURL] = "The URL is not valid.";
        }
        return errors;
    };

    const validateAndSubmit = (values) => {
        setErrors(validateValues(values))
        setSubmitting(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            createReviewSubmitHandler(values);
        }
    }, [errors]);


    const { values, onChange, onSubmit } = useForm(validateAndSubmit, {
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
                        <span className="error">{errors[AddFormKeys.title]}</span>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="isbn">ISBN</label>
                        <input
                            onChange={onChange}
                            name={AddFormKeys.isbn}
                            value={values[AddFormKeys.isbn]}
                            className="form-control"
                            id="isbn" />
                        <span className="error">{errors[AddFormKeys.isbn]}</span>
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
                        <span className="error">{errors[AddFormKeys.review]}</span>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="url">Image Url</label>
                        <input
                            onChange={onChange}
                            name={AddFormKeys.imgURL}
                            value={values[AddFormKeys.imgURL]}
                            className="form-control"
                            id="url" />
                        <span className="error">{errors[AddFormKeys.imgURL]}</span>
                    </div>
                    <div className="mb-3">
                        <input className="btn color-orange mb-2 w-100 p-3 fw-bold" type="submit" value="Add" />
                    </div>
                </form>
            </div>
        </div>
    )
}