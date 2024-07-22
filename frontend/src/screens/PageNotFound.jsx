import React from "react";
import BackButton from "../components/BackButton";

const PageNotFound = () => {
  return (
    <div className="container p-5">
      <BackButton url={"/"} />
      <h1 className="my-5 text-center">404 Page Not Found!!</h1>
    </div>
  );
};

export default PageNotFound;
