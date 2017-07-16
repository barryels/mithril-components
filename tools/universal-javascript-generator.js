'use strict';


var basePath = 'http://localhost:3000/docs/#!';
var routes = require('./../src/docs/domain/store').routes();


function init() {
	var propName;

	for (propName in routes) {
		routes[propName] = basePath + propName;
	}

	console.log(routes);
}


init();
