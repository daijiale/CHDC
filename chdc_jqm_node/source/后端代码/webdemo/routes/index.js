var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  	if(req.session.user)
  	{
  		res.send("您已成功登陆,欢迎:"+req.session.user.username+"</br><a href='/users/loginout'>退出</a>");
  	}
	else
  		res.render('index', { title: '登陆'});
});

module.exports = router;
