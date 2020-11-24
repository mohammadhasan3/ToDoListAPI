const express = require("express");
const router = express.Router();

//controllers
const {
  viewList,
  taskCreate,
  taskDelete,
  taskUpdate,
} = require("../controllers/listController");

router.get("/", viewList);

router.post("/", taskCreate);
router.delete("/:taskId", taskDelete);
router.put("/:taskId", taskUpdate);

module.exports = router;
