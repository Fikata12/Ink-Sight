import "./Header.css";
export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light border-bottom box-shadow mb-3 color-orange">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
              <img src="./public/big-logo.png" className="logo" alt="Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
            <ul className="navbar-nav flex-grow-1">
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Reviews</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Add</a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Register</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}