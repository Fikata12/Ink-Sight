import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/authContext';

import Paths from '../../utils/paths';
 
import "./Header.css";

export default function Header() {
  const { username, isAuthenticated } = useContext(AuthContext);

  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light border-bottom box-shadow mb-3 color-orange">
        <div className="container-fluid">
          <Link className="navbar-brand" to={Paths.Home}>
            <img src="/big-logo.png" className="logo" alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
            <ul className="navbar-nav flex-grow-1">
              <li className="nav-item">
                <Link className="nav-link text-dark" to={Paths.Reviews}>Reviews</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to={Paths.Add}>Add</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to={Paths.About}>About</Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              {!isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link text-dark" to={Paths.Login}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-dark" to={Paths.Register}>Register</Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item d-none d-sm-block">
                    <span className="nav-link text-dark">Hello, {username}!</span>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-dark" to={Paths.Logout}>Logout</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}