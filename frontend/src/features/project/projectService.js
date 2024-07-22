import axios from "axios";

const API_URL = "https://arenabackend.onrender.com/api/projects";

const addProjects = async (formData) => {
  // const options = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };
  const response = await axios.post(API_URL, formData);
  console.log(response);
};

const fetchProjects = async (token) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, options);
  // console.log(response.data);
  return response.data;
};
const projectService = {
  fetchProjects,
  addProjects,
};

export default projectService;
