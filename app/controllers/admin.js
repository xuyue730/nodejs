var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),

    Post = mongoose.model('Post');

module.exports = function(app){
    app.use('/admin',router);
};

router.get('/',function(req,res,next){
    Post.find(function(err,Posts){
        if(err) return next(err);
        res.render('admin/index',{
            title:'Generator-Express MVC',
            Posts:Posts
        });
    });
})
