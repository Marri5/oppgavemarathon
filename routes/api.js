const express = require("express");
const router = express.Router();
const helloController = require("../controllers/helloController");

router.get("/helloworld", helloController.helloWorld);

module.exports = router;
