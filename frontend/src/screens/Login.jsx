import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import png from "../assets/png.png";
import Loading from "../components/Loading";
const Login = () => {
  const { isLoading, isError, isSuccess, message, user } = useSelector(
    (state) => state.auth
  );

  const [visible, setvisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(formData));
  };
  const change = () => {
    setvisible(!visible);
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }

    if (isError && message) {
      toast.error(message);
    }
  }, [user, isError, message]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=" h-screen flex justify-center items-center bg-gray-100">
      <div className="box-color  lg:h-[70vh] lg:w-[60vw] h-screen w-[100vw] flex items-center justify-center flex-col lg:flex-row rounded-lg bg-white p-3">
        <div className="w-[50%] hidden h-full lg:flex items-center justify-center bg-[#14b081c1] rounded-lg">
          <img src={png} />
        </div>
        <div className="lg:w-[50%] w-100% h-[70vh] flex flex-col justify-center items-center">
          <div className="pb-8 w-[100vw] text-center">
            <h3 className="text-center font-bold text-2xl">Login Here</h3>
            <p className=" text-gray-400 w-full text-sm">
              Welcome Back enter login details & continue
            </p>
          </div>
          <form
            className="flex flex-col justify-center items-center"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control my-2 rounded-md  w-60  text-sm"
              required
              onChange={handleChange}
              value={email}
              name="email"
            />
            <span className=" flex pl-4 mb-8">
              <input
                type={visible ? "text" : "password"}
                placeholder="Enter Password"
                className="form-control my-2 rounded-md  w-60 text-sm"
                required
                onChange={handleChange}
                value={password}
                name="password"
              />
              <i
                onClick={change}
                className={
                  visible
                    ? "fa-solid fa-eye relative right-6 top-4 text-sm text-[#4DC3A0]"
                    : "fa-solid fa-eye-slash relative right-6 top-4 text-sm text-gray-500"
                }
              ></i>
            </span>
            <button
              type="submit"
              className=" px-[5.7rem] py-2 bg-[#4DC3A0] rounded-md text-white text-sm"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
