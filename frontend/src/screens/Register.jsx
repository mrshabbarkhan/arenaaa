import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../features/auth/authSlice";
import Loading from "../components/Loading";

const Register = () => {
  const { isLoading, isError, isSuccess, message, user } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }

    if (isError) {
      toast.error(message);
    }
  }, [user, isError, message]);

  if (isLoading) {
    return <Loading />;
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords Not Match!");
    } else {
      dispatch(registerUser(formData));
    }
  };

  return (
    <div className="container p-5">
      <div className="card p-3 rounded-0">
        <h3 className="text-center">Register Here</h3>

        <form className="my-2" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter Name"
            className="form-control my-2 rounded-0"
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter Email"
            className="form-control my-2 rounded-0"
            required
          />
          <input
            name="password"
            value={password}
            onChange={handleChange}
            type="password"
            placeholder="Enter Password"
            className="form-control my-2 rounded-0"
            required
          />{" "}
          <input
            name="password2"
            value={password2}
            onChange={handleChange}
            type="password"
            placeholder="Confirm Password"
            className="form-control my-2 rounded-0"
            required
          />
          <button className="btn btn-success rounded-0 w-100">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
