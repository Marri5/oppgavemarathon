const express = require("express");
const router = express.Router();
const helloController = require("../controllers/helloController");
const indexController = require('../controllers/indexController');

router.get('/index', indexController.renderIndex);

router.get("/helloworld", helloController.proxyToNginx);

module.exports = router;
