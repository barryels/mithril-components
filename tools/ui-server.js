'use strict';


var express = require('express');
var compression = require('compression');
var app;


var port = 3000;


function init() {
	app = express();
	app.use(compression());
	app.use(express.static('dist'));
	app.listen(port, function () {
		console.log('UI server listening @ http://localhost:' + port);
	});
}


init();
