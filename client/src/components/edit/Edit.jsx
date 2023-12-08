import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import * as reviewService from '../../services/reviewService';

import Paths from '../../utils/paths';
import notificationConstants from '../../utils/notificationConstants';
import { ReviewValidationConstants } from '../../utils/validationConstants';

const EditFormKeys = {
    title: 'title',
    isbn: 'isbn',
    review: 'review',
    imgURL: 'imgURL',
}

export default function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
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

    const validateValues = (values) => {
        let errors = {};
        if (values[EditFormKeys.title].length < ReviewValidationConstants.TitleMinLength ||
            values[EditFormKeys.title].length > ReviewValidationConstants.TitleMaxLength) {
            errors[EditFormKeys.title] = `The title must be between ${ReviewValidationConstants.TitleMinLength} and ${ReviewValidationConstants.TitleMaxLength} characters.`;
        }
        if (!ReviewValidationConstants.IsbnRegex.test(values[EditFormKeys.isbn])) {
            errors[EditFormKeys.isbn] = "The ISBN is not valid.";
        }
        if (values[EditFormKeys.review].length < ReviewValidationConstants.ReviewMinLength ||
            values[EditFormKeys.review].length > ReviewValidationConstants.ReviewMaxLength) {
            errors[EditFormKeys.review] = `The review must be between ${ReviewValidationConstants.ReviewMinLength} and ${ReviewValidationConstants.ReviewMaxLength} characters.`;
        }
        if (!ReviewValidationConstants.UrlRegex.test(values[EditFormKeys.imgURL])) {
            errors[EditFormKeys.imgURL] = "The URL is not valid.";
        }
        return errors;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setErrors(validateValues(review))
        setSubmitting(true);
    };

    const editReviewSubmitHandler = async () => {
        reviewService.edit(id, review).then(() => {
            toast.success(notificationConstants.SuccessfullyEditedReview);
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

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            editReviewSubmitHandler(review);
        }
    }, [errors]);


    return (
        <div className="row container mx-auto">
            <h2 className="text-center">Edit Review</h2>
            <hr />
            <div className="col-sm-12 offset-lg-2 col-lg-8 offset-xl-3 col-xl-6">
                <form id='add-form' onSubmit={onSubmit} >
                    <div className="mb-3">
                        <label className="form-label" htmlFor="title">Title</label>
                        <input
                            onChange={onChange}
                            name={EditFormKeys.title}
                            value={review[EditFormKeys.title]}
                            className="form-control"
                            id="title" />
                        <span className="error">{errors[EditFormKeys.title]}</span>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="isbn">ISBN</label>
                        <input
                            onChange={onChange}
                            name={EditFormKeys.isbn}
                            value={review[EditFormKeys.isbn]}
                            className="form-control"
                            id="isbn" />
                        <span className="error">{errors[EditFormKeys.isbn]}</span>
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
                        <span className="error">{errors[EditFormKeys.review]}</span>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="url">Image Url</label>
                        <input
                            onChange={onChange}
                            name={EditFormKeys.imgURL}
                            value={review[EditFormKeys.imgURL]}
                            className="form-control"
                            id="url" />
                        <span className="error">{errors[EditFormKeys.imgURL]}</span>
                    </div>
                    <div className="mb-3">
                        <input className="btn color-orange mb-2 w-100 p-3 fw-bold" type="submit" value="Edit" />
                    </div>
                </form>
            </div>
        </div>
    )
}