import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutUser } from "../features/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  return (
    <nav className="navbar">
      <div className="container-fluid text-black">
        <Link to={"/"} className="navbar-brand mb-0 h1 text-light">
          Eskills Arena
        </Link>
        <span>
          {!user ? (
            <>
              <Link
                to={"/register"}
                className="btn btn-sm btn-primary mx-1 rounded-0"
              >
                Register
              </Link>
              <Link
                to={"/login"}
                className="btn btn-sm btn-primary mx-1 rounded-0"
              >
                Login
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="btn btn-sm btn-danger mx-1 rounded-0"
            >
              Log Out
            </button>
          )}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
