const express = require("express");
const router = express.Router();
const helloController = require("../controllers/helloController");

router.get("/helloworld", helloController.proxyToNginx);

module.exports = router;
