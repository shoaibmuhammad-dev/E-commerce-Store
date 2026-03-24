const express = require("express");
const router = express.Router();
const { getProfile, getUsers } = require("../controllers/user.controller");
const { protect } = require("../middlewares/auth.middleware");
const { authorize } = require("../middlewares/role.middleware");

/* Protected Get Profile*/
router.get("/profile", protect, getProfile);
router.get("/", protect, getUsers);

module.exports = router;
