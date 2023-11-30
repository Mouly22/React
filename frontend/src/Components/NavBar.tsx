import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar: React.FC<{}> = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userid');
  const user_type = localStorage.getItem('user_type');

  const handleLogout = () => {
    localStorage.removeItem('userid');
    localStorage.removeItem('user_type');
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
              <Link to="/blogview" className="nav-link px-2 text-white">
                Blog
              </Link>
            </li>
            {(user_type === 'businessman' || user_type === 'farmer') && (
              <li>
                <Link to="/auction" className="nav-link px-2 text-white">
                  Auction
                </Link>
              </li>
            )}
           
            {userId && (
              <li>
                <Link to={`/${user_type}`} className="nav-link px-2 text-white">
                  {user_type}
                </Link>
              </li>
            )}
            {userId && (
            <li>
              <Link to="/profile" className="nav-link px-2 text-white">
                Profile
              </Link>
            </li>)}
            {userId && (
            <li>
              <Link to="/form" className="nav-link px-2 text-white">
                Form
              </Link>
            </li>)}
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
                <Link to="/signup" type="button" className="btn btn-outline-light me-2">
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
