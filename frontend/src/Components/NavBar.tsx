import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar: React.FC<{}> = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userid');

  const handleLogout = () => {
    // Perform logout actions, such as clearing local storage
    localStorage.removeItem('userid');
    localStorage.removeItem('user_type');
    // Redirect to the home page or login page
    navigate("/");
  };

  const headerStyle = {
    background: "linear-gradient(120deg, #118a7e, #a2c11c)"
  };

  return (
    <header style={headerStyle} className="p-3 bg-success text-white navbar-hover">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="d-flex align-items-center text-white text-decoration-none"
          >
            <h4 className="ms-2">BD Smart Agricultural Solution</h4>
          </div>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center md-md-0">
            <li>
              <Link to="/" className="nav-link px-2 text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" className="nav-link px-2 text-white">
                Blog
              </Link>
            </li>
          </ul>
          <div className="text-end">
            {userId ? (
              <button onClick={handleLogout} className="btn btn-outline-light me-2">
                Logout
              </button>
            ) : (
              <>
                <Link to="/signin" type="button" className="btn btn-outline-light me-2">
                  Login
                </Link>
                <Link to="/signup" type="button" className="btn btn-warning">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
