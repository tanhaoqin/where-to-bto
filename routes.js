var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
	console.log("Routes.js");
	res.render('index.html')
});

module.exports = router;