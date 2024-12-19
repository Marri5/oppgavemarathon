const express = require("express");
const router = express.Router();
const helloController = require("../controllers/helloController");
const indexController = require('../controllers/indexController');
const mongoController = require('../controllers/mongoController');

router.get('/index', indexController.renderIndex);

router.get("/helloworld", helloController.proxyToNginx);

router.get('/mongo-world', mongoController.renderMongoWorld);

module.exports = router;
