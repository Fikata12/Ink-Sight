import { Link } from "react-router-dom";

import "./Login.css"
import "/index.css"

export default function Login() {
    return (
        <form class="login-form mx-auto color-light-orange p-4 rounded border">

            <div className="container image-container my-2">
                <img src="./public/small-logo.png" alt="Logo" />
            </div>

            <h1 className="text-center mb-2">Login</h1>

            <div class="form-outline mb-2">
                <label class="form-label" for="EmailAddress">Email Address</label>
                <input type="email" id="EmailAddress" class="form-control" />
            </div>

            <div class="form-outline mb-3">
                <label class="form-label" for="Password">Password</label>
                <input type="password" id="Password" class="form-control" />
            </div>

            <button type="button" class="btn color-dark-orange mb-2 d-block mx-auto w-50">Sign in</button>

            <div class="text-center">
                <p>Not a member? <Link to={"/register"} className="text-orange text-dark-orange">Register</Link></p>
            </div>
        </form>
    )
}