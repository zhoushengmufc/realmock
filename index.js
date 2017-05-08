var express = require('express');
var randomjson = require('randomjson');
var bodyParser = require('body-parser');
var multer = require('multer');
var app = express();
app.use(bodyParser.json());
// 端口号
app.listen(3001);
console.log('server start');

// api config

// 常规mock get
var detailJson = require('./mock/detail.json');
app.get('/api/detail', function (req, res) {
    res.send(detailJson);
});

// 数据返回延迟
var addJson = require('./mock/add.json');
app.get('/api/add', function (req, res) {
    setTimeout(function () {
		res.send(addJson);
	}, 3000);
});

// 根据条件返回不同json get方法
var json1 = require('./mock/json1.json');
var json2 = require('./mock/json2.json');
app.get('/api/get', function (req, res) {
	if (req.query.type === '1') {
		res.send(json1);
	}
	else {
		res.send(json2);
	}
});
// 根据条件返回不同json post方法
app.post('/api/get', function (req, res) {
	if (req.body.type === '1') {
		res.send(json1);
	}
	else {
		res.send(json2);
	}
});

// 使用randomjson返回随机json 随机mock
var listJson = require('./mock/list.json');
app.get('/api/list', function (req, res) {
	var resJson = randomjson(listJson);
    res.send(resJson);
});