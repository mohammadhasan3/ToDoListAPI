const express = require("express");
const router = express.Router();

//controllers
const { viewList, taskCreate } = require("../controllers/listController");

router.get("/", viewList);

router.post("/", taskCreate);

module.exports = router;
