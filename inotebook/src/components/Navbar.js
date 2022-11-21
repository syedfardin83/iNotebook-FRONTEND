import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


const Navbar = (props) => {
  const navigate = useNavigate();
  const Logout = ()=>{
    localStorage.removeItem('token');
    navigate('/login');
    toast.success('Log out successful');
  }
  let location = useLocation();
  // location.pathname = "/"
  useEffect(() => {
    // Google Analytics
    // ga('send', 'pageview');
    console.log(location.pathname);
  }, [location]);
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              iNotebook
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="/navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/about" ? "active" : ""
                    }`}
                    to="/about"
                  >
                    About
                  </Link>
                </li>
              </ul>
              {!localStorage.getItem("token") ? (
                <form>
                  <Link to="/login">
                    <button
                      className="btn btn-outline-primary mx-2"
                      type="submit"
                    >
                      Login
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button
                      className="btn btn-outline-primary mx-2"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </Link>
                </form>
              ) : (
                <button className="btn btn-outline-primary mx-2" type="submit" onClick={Logout}>
                  Log out
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>
      <Toaster/>
    </>
  );
};

export default Navbar;
