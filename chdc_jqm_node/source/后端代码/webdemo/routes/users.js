var express = require('express');
var User = new (require('../model/UserModel'))();
var router = express.Router();

/* GET users listing. */
router.post('/login',function(req,res){
	User.login(req.body.username,req.body.password,function(user)
		{
			if(!user)
			{
				res.send("用户名或密码错误</br><a href='/'>返回</a>");
			}
			else
			{
				req.session.user = user;
				req.session.save();
				var senddata = "";
				senddata += "登陆成功,欢迎:"+req.session.user.username+"</br><a href='/users/loginout'>退出</a>";
				/*senddata += "</br>下面是所有的注册用户：</br><table border=1><tr><th>用户名</th><th>密码</th></tr>";
				User.model.find(function(err,data){
					res.send(data);
					if(!err)
						for(var i in data)
							senddata += "<tr><td>"+data[i].username+"</td><td>"+data[i].password+"</td></tr>";
					else
						next(err);
				});
				senddata += "</table>";*/
				res.send(senddata);
			}
		});
});

router.get('/loginout',function(req,res){
	req.session.user = null;
	res.redirect("/");
});

router.get('/register',function(req,res){
	res.render('register', { title: '注册'});
});

router.post('/register',function(req,res){
	var userdata = {username:req.body.username,password:req.body.password};
	User.register(userdata,function(result)
		{
			if(result)
			{
				res.send("注册成功</br><a href='/'>返回</a>");
			}
			else
			{
				res.send("注册失败</br><a href='/'>返回</a>");
			}
		});
});

module.exports = router;
