import { Link } from "react-router-dom";

import "./Register.css"
import "/index.css"

export default function Register() {
    return (
        <form className="register-form mx-auto color-light-orange p-4 rounded border">

            <div className="container image-container my-2">
                <img src="./public/small-logo.png" alt="Logo" />
            </div>
            <h1 className="text-center mb-2">Register</h1>

            <div className="form-outline mb-2">
                <label className="form-label" htmlFor="FirstName">First Name</label>
                <input id="FirstName" className="form-control" />
            </div>

            <div className="form-outline mb-2">
                <label className="form-label" htmlFor="LastName">Last Name</label>
                <input id="LastName" className="form-control" />
            </div>

            <div className="form-outline mb-2">
                <label className="form-label" htmlFor="EmailAddress">Email Address</label>
                <input type="email" id="EmailAddress" className="form-control" />
            </div>

            <div className="form-outline mb-3">
                <label className="form-label" htmlFor="Password">Password</label>
                <input type="password" id="Password" className="form-control" />
            </div>

            <button type="button" className="btn color-dark-orange mb-2 d-block mx-auto w-50">Register</button>

            <div className="text-center">
                <p>Already a member? <Link to={"/login"} className="text-orange text-dark-orange">Login</Link></p>
            </div>
        </form>
    )
}