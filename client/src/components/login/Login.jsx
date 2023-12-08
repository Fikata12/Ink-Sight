import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { useContext, useEffect, useState } from "react";

import AuthContext from "../../contexts/authContext";

import Paths from "../../utils/paths";
import { AuthValidationConstants } from "../../utils/validationConstants";

import "./Login.css"

const LoginFormKeys = {
    email: 'email',
    password: 'password'
}

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const validateValues = (values) => {
        let errors = {};
        if (!AuthValidationConstants.EmailRegex.test(values[LoginFormKeys.email])) {
            errors[LoginFormKeys.email] = "The email is not valid.";
        }
        if (values[LoginFormKeys.password].length < AuthValidationConstants.PasswordMinLength || 
            values[LoginFormKeys.password].length > AuthValidationConstants.PasswordMaxLength) {
            errors[LoginFormKeys.password] = `The password must be between ${AuthValidationConstants.PasswordMinLength} and ${AuthValidationConstants.PasswordMaxLength} characters.`;
        }
        return errors;
    };

    const validateAndSubmit = (values) => {
        setErrors(validateValues(values))
        setSubmitting(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            loginSubmitHandler(values);
        }
    }, [errors]);

    const { values, onChange, onSubmit } = useForm(validateAndSubmit, {
        [LoginFormKeys.email]: '',
        [LoginFormKeys.password]: ''
    });

    return (
        <form onSubmit={onSubmit} className="login-form mx-auto color-light-orange p-4 rounded border">

            <div className="container login-image-container my-2">
                <img src="/small-logo.png" alt="Logo" />
            </div>

            <h1 className="text-center mb-2">Login</h1>

            <div className="form-outline mb-2">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input
                    id="email"
                    className="form-control"
                    onChange={onChange}
                    name={LoginFormKeys.email}
                    value={values[LoginFormKeys.email]} />
                <span className="error">{errors[LoginFormKeys.email]}</span>
            </div>

            <div className="form-outline mb-3">
                <label className="form-label" htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    className="form-control"
                    onChange={onChange}
                    name={LoginFormKeys.password}
                    value={values[LoginFormKeys.password]} />
                <span className="error">{errors[LoginFormKeys.password]}</span>
            </div>

            <button type="submit" className="btn color-orange mb-2 d-block mx-auto w-50">Login</button>

            <div className="text-center">
                <p>Not a member? <Link to={Paths.Register} className="text-orange text-dark-orange">Register</Link></p>
            </div>
        </form>
    )
}