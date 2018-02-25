var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res) {
	burger.all(function(burgerData) {
		console.log(burgerData);
		res.render('index', {burgerData});
	});
});

router.put('/update', function(req, respond) {
	burger.update(req.body.burger_id, function(res) {
		console.log(res);
		respond.redirect('/');
	});
});

router.post('/create', function(req, respond) {
	burger.create(req.body.burger_name, function(res) {
		respond.redirect('/');
	})
})

module.exports = router;
