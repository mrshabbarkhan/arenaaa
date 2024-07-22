const expressAsyncHandler = require("express-async-handler");
const Project = require("../models/projectModel");
const User = require("../models/userModel");

const getProjects = expressAsyncHandler(async (req, res) => {
  // GET USER USING ID IN REQ.USER
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(401);
    throw new Error("User Not Found");
  }

  const projects = await Project.find({ user: req.user._id });

  if (!projects) {
    res.status(404);
    throw new Error("Projects Not Found");
  }

  res.status(200).json(projects);
});

const getProject = expressAsyncHandler(async (req, res) => {
  // GET USER USING ID IN REQ.USER
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(401);
    throw new Error("User Not Found");
  }

  const project = await Project.findById(req.params.id);

  if (!project) {
    res.status(404);
    throw new Error("Project Not Found");
  }

  res.status(200).json(project);
});

const addProject = expressAsyncHandler(async (req, res) => {
  // GET USER USING ID IN REQ.USER
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(401);
    throw new Error("User Not Found");
  }

  const { title, description, githubURL, liveLinkURL } = req.body;

  if (!title || !description || !githubURL || !liveLinkURL) {
    res.status(401);
    throw new Error("Please Fill All Details");
  }

  const newProject = await Project.create({
    user: req.user._id,
    title,
    description,
    githubURL,
    liveLinkURL,
  });
  if (!newProject) {
    res.status(400);
    throw new Error("Error in Creating Project");
  }

  res.status(201).json(newProject);
});

const updateProject = expressAsyncHandler(async (req, res) => {
  // GET USER USING ID IN REQ.USER
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(401);
    throw new Error("User Not Found");
  }

  const updatedProject = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!updatedProject) {
    res.status(400);
    throw new Error("Error in Creating Ticket");
  }

  res.status(201).json(updatedProject);
});

const removeProject = expressAsyncHandler(async (req, res) => {
  // GET USER USING ID IN REQ.USER
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(401);
    throw new Error("User Not Found");
  }

  await Project.findByIdAndDelete(req.params.id);

  res.json({
    success: true,
  });
});

module.exports = {
  getProjects,
  addProject,
  getProject,
  updateProject,
  removeProject,
};
