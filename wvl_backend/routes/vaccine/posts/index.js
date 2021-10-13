var express = require("express");
var router = express.Router();

const postController = require("../../../controllers/vaccine/postController");
const authModule = require("../../../modules/authModule");

router.get("/", postController.readAllPost); // 게시물 전체 조회
router.get("/:id", postController.readPost); // 게시물 조회

router.post("/", authModule.loggedIn, postController.createPost); // 게시물 생성
router.put("/:id", authModule.loggedIn, postController.updatePost); // 게시물 수정
router.delete("/:id", authModule.loggedIn, postController.deletePost); // 게시물 삭제

module.exports = router;
