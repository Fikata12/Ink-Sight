import { Link } from "react-router-dom";
import { useContext } from "react";

import AuthContext from "../../contexts/AuthContext";

import useForm from "../../hooks/useForm";

import "./Register.css"

const RegisterFormKeys = {
    username: 'username',
    email: 'email',
    password: 'password',
    confirmPassword: 'confirmPassword',
}

export default function Register() {

    const { registerSubmitHandler } = useContext(AuthContext);

    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.email]: '',
        [RegisterFormKeys.username]: '',
        [RegisterFormKeys.password]: ''
    });

    return (
        <form onSubmit={onSubmit} className="register-form mx-auto color-light-orange p-4 rounded border">

            <div className="container image-container my-2">
                <img src="./public/small-logo.png" alt="Logo" />
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
            </div>

            <div className="form-outline mb-2">
                <label className="form-label" htmlFor="emailAddress">Email Address</label>
                <input 
                onChange={onChange}
                name={RegisterFormKeys.email}
                value={values[RegisterFormKeys.email]}
                type="email" 
                id="emailAddress" 
                className="form-control" />
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
            </div>

            <button type="submit" className="btn color-orange mb-2 d-block mx-auto w-50">Register</button>

            <div className="text-center">
                <p>Already a member? <Link to={"/login"} className="text-orange text-dark-orange">Login</Link></p>
            </div>
        </form>
    )
}