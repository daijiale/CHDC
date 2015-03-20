var mongoose = require('mongoose');

var menuSchema = new mongoose.Schema({
			name:String,
			category:String,
			price:Number,
			desc:String
		});

var MenuModel = mongoose.model('Menu',menuSchema); 

var Menu = function()
{
	this.model = MenuModel;

	this.getByName = function(name,callback)
	{
		MenuModel.findOne({name:name},function(err,menu){
			callback(menu);
		});
	}

	this.getAllData = function(callback)
	{
		MenuModel.find({},function(err,menu){
			callback(menu);
		});
	}

	this.addData = function(data,callback)
	{
		if(!data)
		{
			data = [
				{name:"香辣鸡腿堡",category:"主食",price:12.5,desc:"无"},
				{name:"香辣鸡腿堡",category:"主食",price:12.5,desc:"无"},
				{name:"劲脆鸡腿堡",category:"主食",price:13.5,desc:"无"},
				{name:"新奥尔良烤鸡腿餐",category:"主食",price:8,desc:"无"},
				{name:"田园脆鸡堡",category:"配餐",price:5,desc:"无"},
			];
			for(var i in data)
				MenuModel.create(data[i],callback);
		}
		else
		{
			MenuModel.create(data,function(err){
				if(err)
					callback(false);
				else
					callback(true);
			})
		}
	}
}

module.exports = Menu;