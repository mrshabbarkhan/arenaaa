import React from "react";
import { Link } from "react-router-dom";

const BackButton = ({ url }) => {
  return (
    <Link to={url} className="btn btn-outline-dark btn-sm my-2 rounded-0">
      Back
    </Link>
  );
};

export default BackButton;
