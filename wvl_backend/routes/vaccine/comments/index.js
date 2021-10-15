var express = require("express");
var router = express.Router();

const commentController = require("../../../controllers/vaccine/commentController");
const authModule = require("../../../modules/authModule");

router.post("/:id", authModule.loggedIn, commentController.createComment);
router.put(
  "/:id/:commentid",
  authModule.loggedIn,
  commentController.updateComment
);
router.delete(
  "/:id/:commentid",
  authModule.loggedIn,
  commentController.deleteComment
);
module.exports = router;
