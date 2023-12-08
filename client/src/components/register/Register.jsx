import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import AuthContext from "../../contexts/authContext";

import useForm from "../../hooks/useForm";

import Paths from "../../utils/paths";
import { AuthValidationConstants } from "../../utils/validationConstants";

import "./Register.css"

const RegisterFormKeys = {
    username: 'username',
    email: 'email',
    password: 'password',
    confirmPassword: 'confirmPassword',
}

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const validateValues = (values) => {
        let errors = {};
        console.log(values)
        if (values[RegisterFormKeys.username].length < AuthValidationConstants.UsernameMinLength ||
            values[RegisterFormKeys.username].length > AuthValidationConstants.UsernameMaxLength) {
            errors[RegisterFormKeys.username] = `The username must be between ${AuthValidationConstants.UsernameMinLength} and ${AuthValidationConstants.UsernameMaxLength} characters.`;
        }
        if (!AuthValidationConstants.EmailRegex.test(values[RegisterFormKeys.email])) {
            errors[RegisterFormKeys.email] = "The email is not valid.";
        }
        if (values[RegisterFormKeys.password].length < AuthValidationConstants.PasswordMinLength ||
            values[RegisterFormKeys.password].length > AuthValidationConstants.PasswordMaxLength) {
            errors[RegisterFormKeys.password] = `The password must be between ${AuthValidationConstants.PasswordMinLength} and ${AuthValidationConstants.PasswordMaxLength} characters.`;
        }
        if (values[RegisterFormKeys.password] !== values[RegisterFormKeys.confirmPassword]) {
            errors[RegisterFormKeys.confirmPassword] = `Password doesn't match.`;
        }
        return errors;
    };

    const validateAndSubmit = (values) => {
        setErrors(validateValues(values))
        setSubmitting(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            registerSubmitHandler(values);
        }
    }, [errors]);

    const { values, onChange, onSubmit } = useForm(validateAndSubmit, {
        [RegisterFormKeys.email]: '',
        [RegisterFormKeys.username]: '',
        [RegisterFormKeys.password]: ''
    });

    return (
        <form onSubmit={onSubmit} className="register-form mx-auto color-light-orange p-4 rounded border">

            <div className="container register-image-container my-2">
                <img src="/small-logo.png" alt="Logo" />
            </div>

            <h1 className="text-center mb-2">Register</h1>

            <div className="form-outline mb-2">
                <label className="form-label" htmlFor="username">Username</label>
                <input
                    onChange={onChange}
                    name={RegisterFormKeys.username}
                    value={values[RegisterFormKeys.username]}
                    id="username"
                    className="form-control" />
                <span className="error">{errors[RegisterFormKeys.username]}</span>
            </div>

            <div className="form-outline mb-2">
                <label className="form-label" htmlFor="emailAddress">Email Address</label>
                <input
                    onChange={onChange}
                    name={RegisterFormKeys.email}
                    value={values[RegisterFormKeys.email]}
                    id="emailAddress"
                    className="form-control" />
                <span className="error">{errors[RegisterFormKeys.email]}</span>
            </div>

            <div className="form-outline mb-3">
                <label className="form-label" htmlFor="password">Password</label>
                <input
                    onChange={onChange}
                    name={RegisterFormKeys.password}
                    value={values[RegisterFormKeys.password]}
                    type="password"
                    id="password"
                    className="form-control" />
                <span className="error">{errors[RegisterFormKeys.password]}</span>
            </div>

            <div className="form-outline mb-3">
                <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                <input
                    onChange={onChange}
                    name={RegisterFormKeys.confirmPassword}
                    value={values[RegisterFormKeys.confirmPassword]}
                    type="password"
                    id="confirmPassword"
                    className="form-control" />
                <span className="error">{errors[RegisterFormKeys.confirmPassword]}</span>
            </div>

            <button type="submit" className="btn color-orange mb-2 d-block mx-auto w-50">Register</button>

            <div className="text-center">
                <p>Already a member? <Link to={Paths.Login} className="text-orange text-dark-orange">Login</Link></p>
            </div>
        </form>
    )
}