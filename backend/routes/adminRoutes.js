const express = require("express");
const { adminProtect } = require("../middleware/adminMiddleware");
const {
  getUsers,
  getUser,
  updateUser,
  getProjectForAdmin,
  getProjectsForAdmin,
} = require("../controllers/adminController");

const router = express.Router();

// Get All Users
router.get("/students", adminProtect, getUsers);
// Get Specific User By ID
router.get("/students/:id", adminProtect, getUser);
// Update Rank
router.put("/students/:id", adminProtect, updateUser);
// Get All Projects
router.get("/projects", adminProtect, getProjectsForAdmin);
// Get Single Projects
router.get("/projects/:id", adminProtect, getProjectForAdmin);

module.exports = router;
