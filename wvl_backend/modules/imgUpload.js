var express = require("express");
var router = express.Router();
const upload = require("../modules/awsUpload");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/images", upload.array("imgs", 10), (req, res) => {
  // 최대 10개
  // 4는 4개 까지 파일 올릴수 있다는 뜻
  const file = req.file;
  console.log(file);
  res.json({
    message: "이미지 업로드 완료",
  });
});

module.exports = router;
