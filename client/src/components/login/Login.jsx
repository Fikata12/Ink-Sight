import { Link } from "react-router-dom";

import "./Login.css"
import "/index.css"

export default function Login() {
    return (
        <form className="login-form mx-auto color-light-orange p-4 rounded border">

            <div className="container image-container my-2">
                <img src="./public/small-logo.png" alt="Logo" />
            </div>

            <h1 className="text-center mb-2">Login</h1>

            <div className="form-outline mb-2">
                <label className="form-label" htmlFor="EmailAddress">Email Address</label>
                <input type="email" id="EmailAddress" className="form-control" />
            </div>

            <div className="form-outline mb-3">
                <label className="form-label" htmlFor="Password">Password</label>
                <input type="password" id="Password" className="form-control" />
            </div>

            <button type="button" className="btn color-dark-orange mb-2 d-block mx-auto w-50">Sign in</button>

            <div className="text-center">
                <p>Not a member? <Link to={"/register"} className="text-orange text-dark-orange">Register</Link></p>
            </div>
        </form>
    )
}