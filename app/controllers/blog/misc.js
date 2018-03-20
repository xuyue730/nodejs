const express = require('express'),
      router = express.Router();

module.exports = (app) => {
    app.use('/', router);
};

router.get('/', function (req, res, next) {
    res.redirect('/posts');
});
router.get('/about', (req, res, next) => {
    res.render('blog/index', {
        title: 'about',
        pretty: true
    });
});
router.get('/contact', (req, res, next) => {
    res.render('blog/index', {
        title: 'contact',
        pretty: true
    });
});