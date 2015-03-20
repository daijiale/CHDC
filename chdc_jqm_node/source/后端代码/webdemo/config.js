var mongoose = require('mongoose');

function setup(uri, callback) {
	mongoose.connect(uri);
	mongoose.connection.on('err', function() {
		callback(new Error('connection error'));
	});

}

function reset(callback) {
	for(var name in mongoose.connection.collections) {
		mongoose.connection.collections[name].drop();
	}
}

module.exports.setup = setup;
module.exports.reset = reset; 