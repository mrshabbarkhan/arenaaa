import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProjects } from "../features/project/projectSlice";

const Create = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    githubURL: "",
    liveLinkURL: "",
  });

  const { title, description, githubURL, liveLinkURL } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(formData);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    console.log("hello");
    e.preventDefault();
    dispatch(addProjects(formData));
  };
  return (
    <>
      <div className=" p-3">
        <div className=" w-full h-[10vh] text-center">
          <h1 className=" text-[#4DC3A0] text-2xl font-bold">
            Upload Projects !{" "}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-[#4DC3A0] :text-white"
              >
                title
              </label>
              <input
                autoComplete="https://github.com/"
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-[#4DC3A0] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                placeholder="Enter Your title"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-[#4DC3A0] :text-white"
              >
                description
              </label>
              <input
                type="text"
                onChange={handleChange}
                id="last_name"
                name="description"
                value={description}
                className="bg-gray-50 border border-gray-300 text-[#4DC3A0] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                placeholder="Enter Your description"
                required
              />
            </div>
            {/* <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-[#4DC3A0] :text-white"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                className="bg-gray-50 border border-gray-300 text-[#4DC3A0] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                placeholder="Flowbite"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-[#4DC3A0] :text-white"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-[#4DC3A0] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div> */}
            <div>
              <label
                htmlFor="website"
                className="block mb-2 text-sm font-medium text-[#4DC3A0] :text-white"
              >
                Github Repository URL
              </label>
              <input
                type="url"
                id="website"
                name="githubURL"
                onChange={handleChange}
                value={githubURL}
                className="bg-gray-50 border border-gray-300 text-[#4DC3A0] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                placeholder="https://github.com/mrshabbarkhan"
                required
              />
            </div>
            <div>
              <label
                htmlFor="visitors"
                className="block mb-2 text-sm font-medium text-[#4DC3A0] :text-white"
              >
                Live Url
              </label>
              <input
                type="url"
                id="visitors"
                onChange={handleChange}
                name="liveLinkURL"
                value={liveLinkURL}
                className="bg-gray-50 border border-gray-300 text-[#4DC3A0] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                placeholder="https://vercel.com"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-[#4DC3A0] :text-white"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-[#4DC3A0] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
              placeholder="john.doe@company.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-[#4DC3A0] :text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-[#4DC3A0] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
              placeholder="•••••••••"
              required
            />
          </div>

          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 :bg-gray-700 :border-gray-600 :focus:ring-[#4DC3A0] :ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-black :text-gray-300"
            >
              I agree with the{" "}
              <a
                href="#"
                className="text-[#4DC3A0] hover:underline :text-blue-500"
              >
                terms and conditions
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-[#4DC3A0] hover:bg-[#378d73] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center :bg-[#4DC3A0] :hover:bg-[#4DC3A0] :focus:ring-[#4DC3A0]"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
