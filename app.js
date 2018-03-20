

const express = require('express');
const config = require('./config/config');
const glob = require('glob');
const mongoose = require('mongoose');

mongoose.connect(config.db);
const db = mongoose.connection;

db.on('error', () => {
	throw new Error('unable to connect to database at ' + config.db);
});

// 同步获取指定文件夹（config.root/app/models/*.js）下的文件（全部.js文件）,并且循环导入
const models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
	require(model);
});
const app = express();

// 导入config下的express.js配置文件
module.exports = require('./config/express')(app, config);

app.listen(config.port, () => {
	console.log('Express server listening on port ' + config.port);
});

