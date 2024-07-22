const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  getProjects,
  getProject,
  addProject,
  updateProject,
  removeProject,
} = require("../controllers/projectController");

const router = express.Router();

// Get All Projects
router.get("/", protect, getProjects);
// Get Single Projects
router.get("/:id", protect, getProject);
// Create Project
router.post("/", addProject);
// Update Project
router.put("/:id", protect, updateProject);
// Remove Project
router.delete("/:id", protect, removeProject);

module.exports = router;
