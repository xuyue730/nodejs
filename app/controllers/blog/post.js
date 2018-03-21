const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = mongoose.model('Post');

module.exports = (app) => {
    app.use('/posts', router);
};

router.get('/', function (req, res, next) {
    Post.find({published:true})
        .populate('author')
        .populate('category')
        .exec(function (err, posts) {
            if (err) return next(err);
            // req.query.page:总条数 不存在，默认为1，pageSize:每页条数,pageCount:总页数
            var pageNum = Math.abs(parseInt(req.query.page || 1,10));
            var pageSize = 10;
            var totalCount = posts.length;
            var pageCount = Math.ceil(totalCount/pageSize);
            if (pageNum>pageCount) {
                pageNum = pageCount;
            }
            console.log('pageNum:'+pageNum);
            console.log('pageSize:' + pageSize);
            console.log('pageCount:' + pageCount);
            console.log(req);
            res.render('blog/index', {
                title:'博客系统',
                posts: posts.slice((pageNum-1)*pageSize,pageNum * pageSize),
                pageNum:pageNum,
                pageCount:pageCount,
                req:req,
                pretty:true
            });
    });
});
router.get('/view', (req, res, next) => {
});
router.get('/comment', (req, res, next) => {
});
router.get('/favourite', (req, res, next) => {
});