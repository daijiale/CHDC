var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
			username:String,
			password:String,
		});

var UserModel = mongoose.model('User',userSchema); 

var User = function()
{
	this.model = UserModel;

	this.login = function(username,password,callback)
	{
		UserModel.findOne({username:username,password:password},function(err,user){
			callback(user);
		});
	}

	this.register = function(userdata,callback)
	{
		UserModel.create(userdata,function(err){
			if(err)
			{
				callback(false);
			}
			callback(true);
		});
	}
}

module.exports = User;