var express = require('express');
var router = express.Router();

var user = require('../controller/usercontroller')

router.post('/insert',user.getcategory)

router.post('/insertsub',user.getsubcategory)

router.get('/getcategory',user.get_category)

router.get('/getsubcategory',user.get_sub_category)

/* GET home page. */
module.exports = router;
