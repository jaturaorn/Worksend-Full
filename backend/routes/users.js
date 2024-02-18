var express = require("express");
var router = express.Router();
const {
  getUser,
  createUser,
  getUserByID,
  updateUser,
  deleteUser,
} = require("../controllers/userController.js");

/* GET users listing. */
router.get("/", getUser);
router.post("/create-user", createUser);
router.get("/:id", getUserByID);
router.put("/update-user/:id", updateUser);
router.delete("/delete-user/:id", deleteUser);

// router.route("/").get(getUser).post(createUser);

module.exports = router;
