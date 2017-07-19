'use strict';


var m = require('mithril');
var domain = require('./domain');
require('./themes/Wireframe').init();


function init() {
	m.route.mode = 'hash';
	m.route(document.getElementById('app'), '/', buildRoutes());
}


function buildRoute(screen, layout) {
	var LayoutDefault = require('./layouts/Default');
	layout = layout || LayoutDefault;

	return {
		render: function () {
			return m(layout, m(screen));
		},
	};
}


function getScreenForRoute(routePath, route) {
	var Screens = require('./screens');
	var Screen;

	if (routePath.indexOf('/component/') === 0) {
		Screen = Screens['Component' + route.name];
	} else {
		Screen = Screens[route.name];
	}

	if (!Screen) {
		Screen = Screens.FourOhFour;
	}

	return Screen;
}


function buildRoutes() {
	var routes = {};
	var propName;

	for (propName in domain.query.routes()) {
		var route = domain.query.routes()[propName];
		routes[propName] = buildRoute(getScreenForRoute(propName, route));
	}

	return routes;
}


module.exports = {
	init: init,
};
