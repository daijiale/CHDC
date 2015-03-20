
var routes = require('./routes/index');
var users = require('./routes/users');
var menu = require('./routes/menu');

var Routes = function(app)
{
	this.setup = function()
	{
		app.use('/', routes);
		app.use('/users', users);
		app.use('/menu',menu);
	}
} 

module.exports = Routes;