import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../features/project/projectSlice";
import BackButton from "../components/BackButton";
import avatar from "../assets/avatar.jpg";
import Loading from "../components/Loading";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const { projects, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.project
  );
  console.log(projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <h1 className="text-center mt-5 text-secondary">{message}</h1>;
  }

  return (
    <div className="container p-3">
      <h1 className="text-center mt-3">My Profile</h1>
      <BackButton url={"/"} />
      <div className="card p-2 rounded-0 my-3">
        <div className="row g-3">
          <div className="col-md-4 col-sm-12">
            <div className="card p-3 rounded-0">
              <img
                className="card-img-top my-2"
                style={{ height: "150px", objectFit: "contain" }}
                src={user?.profilePic ? user.profilePic : avatar}
                alt=""
              />
              <h3 className="text-center mt-3">{user?.name}</h3>
              <h4 className="text-secondary text-center">
                Total Projects : {projects?.length}
              </h4>
              <h2 className="text-center">Rank : {user?.rank}</h2>
            </div>
          </div>
          <div className="col-md-8 col-sm-12">
            <ul className="list-group rounded-0">
              {projects?.map((project) => {
                return (
                  <li key={project?._id} className="list-group-item">
                    <h3>{project?.title}</h3>
                    <p>{project?.description}</p>
                    <button className="btn btn-dark rounded-0 btn-sm float-end mx-2">
                      View Project
                    </button>
                    <button className="btn btn-dark rounded-0 btn-sm float-end">
                      View Github
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
