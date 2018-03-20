const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = mongoose.model('Post');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
	Post.find().populate('author').populate('category').exec(function (err, Posts) {
		return res.jsonp(Posts);
		if (err) return next(err);
		res.render('blog/index', {
			title: 'Generator-Express MVC',
			Posts: Posts
		});
	});
});
router.get('/about', (req, res, next) => {
	res.render('blog/index', {
		title: 'about',
		pretty:true
	});
});
router.get('/contact', (req, res, next) => {
	res.render('blog/index', {
		title: 'contact',
		pretty:true
	});
});