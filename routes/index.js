var express = require('express');
var router = express.Router();

var user = require('../controller/usercontroller');

/* GET home page. */
router.get('/', user.select);
router.post('/insert', user.insert);


module.exports = router;
