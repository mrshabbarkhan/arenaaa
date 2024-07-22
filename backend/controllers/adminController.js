const expressAsyncHandler = require("express-async-handler");
const Project = require("../models/projectModel");
const User = require("../models/userModel");

const getProjectsForAdmin = expressAsyncHandler(async (req, res) => {
  const projects = await Project.find();

  if (!projects) {
    res.status(404);
    throw new Error("Projects Not Found");
  }

  res.status(200).json(projects);
});

const getProjectForAdmin = expressAsyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    res.status(404);
    throw new Error("Project Not Found");
  }

  res.status(200).json(project);
});

const getUsers = expressAsyncHandler(async (req, res) => {
  const students = await User.find();

  if (!students) {
    res.status(404);
    throw new Error("Users Not Found");
  }

  res.json(students.filter((student) => !student.isAdmin));
});

const getUser = expressAsyncHandler(async (req, res) => {
  const student = await User.findById(req.params.id);

  if (!student) {
    res.status(404);
    throw new Error("User Not Found");
  }

  res.json(student);
});

const updateUser = expressAsyncHandler(async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!updatedUser) {
    res.status(400);
    throw new Error("User Not Updated");
  }

  res.json(updatedUser);
});

module.exports = {
  getUsers,
  getUser,
  updateUser,
  getProjectsForAdmin,
  getProjectForAdmin,
};
