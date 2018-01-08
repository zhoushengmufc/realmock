# realmock 前后端分离方案

express + randomjson 模拟后端服务，前端服务器(比如webpack, nigix等)将请求代理到该服务器地址即可

## realmock优势

1，利用了express强大的服务器功能，轻松模拟按条件返回json,延时返回json,返回不同http状态等web开发中的常见情况 

2，配合nodemon的监测文件变化并自启动功能，文件变更时无需手动重启服务器

3，结合randomjson的随机json生成功能，比如生成指定大小的图片，生成超大json等，mock数据更轻松 

randomjson地址：https://github.com/zhoushengmufc/randomjson


## 使用 下载项目到本地，进入文件夹

## 默认将json存放在在mock文件夹中

## 配置 index.js

```javascript

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

```

## 开启服务

在项目根目录中，打开命令行工具，运行以下命令：

npm install

npm start

## 访问url

可以访问默认示例：

http://localhost:3001/api/get?type=1

http://localhost:3001/api/get

## webpack fis3 gulp 代理

使用工程构建工具的代理功能，代理到realmock的服务器地址即可





