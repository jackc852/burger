var orm = require('../config/orm.js');

var burger = {
	all: function(callback) {
		orm.all('burgers', function(res) {
			callback(res);
		})
	},

	update: function(id, callback) {
		orm.update('burgers', id, callback);
	},

	create: function(newBurger, callback) {
		orm.create('burgers', newBurger, callback);
	}
}

module.exports = burger;
