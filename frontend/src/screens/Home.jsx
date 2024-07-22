import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutUser } from "../features/auth/authSlice";
import avatar from "../assets/avatar.jpg";
import Loading from "../components/Loading";
const Home = () => {
  const { isLoading, isError, isSuccess, message, user } = useSelector(
    (state) => state.auth
  );
  const isAdmin =
    user?.email === "shabbarkhan.js@gmail.com" && user?.name === "shabbar";

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  if (isLoading) {
    return <Loading />;
  }
  const handleLogout = () => {
    dispatch(logOutUser());
  };

  return (
    <div className="container p-5">
      <button
        onClick={handleLogout}
        className="btn btn-sm btn-danger mx-1 rounded-0"
      >
        Log Out
      </button>
      <div className="card p-3 rounded-0 my-2">
        {isAdmin ? (
          <Link
            to={"/user/admin/all-users"}
            className="rounded-0 btn btn-outline-dark w-100 my-2"
          >
            Views All Users
          </Link>
        ) : (
          <>
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <div className="card p-3 rounded-0">
                  <img
                    className="card-img-top my-2 rounded-2"
                    style={{ height: "150px", objectFit: "contain" }}
                    src={user?.profilePic ? user.profilePic : avatar}
                    alt=""
                  />
                  <h4 className="text-center mt-3">{user?.name}</h4>
                  <h1 className="text-center mt-3">Rank : {user?.rank}</h1>
                </div>
              </div>
              <div className="col-md-8 col-sm-12">
                <div className="card p-3 rounded-0">
                  <Link
                    to={"/user/create"}
                    className="rounded-0 btn btn-outline-dark w-100 my-2"
                  >
                    Add Project
                  </Link>
                  <Link
                    to={"/user/profile"}
                    className="rounded-0 btn btn-outline-dark w-100 my-2"
                  >
                    View Profile
                  </Link>
                  <button
                    className="rounded-0 btn btn-outline-dark w-100 my-2"
                    disabled
                  >
                    View Lectures (Coming Soon)
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
