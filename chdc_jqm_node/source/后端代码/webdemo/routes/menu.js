var express = require('express');
var Menu = new (require('../model/MenuModel'))();
var router = express.Router();

router.get('/getByName',function(req,res){
	Menu.getByName(req.query.name,function(menu){
		if(!menu)
			res.send("{}");
		else
			res.send(JSON.stringify(menu));
	});
});

router.get('/addData',function(req,res){
	Menu.addData(req.body.data,function(){});
});

router.get('/getAllData',function(req,res){
	Menu.getAllData(function(menu){
		res.send(JSON.stringify(menu));
	});
});

module.exports = router;