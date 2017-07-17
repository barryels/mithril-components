'use strict';


var m = require('mithril');
require('./themes/Wireframe').init();


function init() {
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


function buildRoutes() {
	var Home = require('./screens/Home');
	var ComponentButton = require('./screens/ComponentButton');
	var ComponentGrid = require('./screens/ComponentGrid');
	var ComponentCheckbox = require('./screens/ComponentCheckbox');
	var ComponentProgressBar = require('./screens/ComponentProgressBar');
	var ComponentTabs = require('./screens/ComponentTabs');

	return {
		'/': buildRoute(Home),
		'/component/Button': buildRoute(ComponentButton),
		'/component/Grid': buildRoute(ComponentGrid),
		'/component/Checkbox': buildRoute(ComponentCheckbox),
		'/component/ProgressBar': buildRoute(ComponentProgressBar),
		'/component/Tabs': buildRoute(ComponentTabs),
	};
}


module.exports = {
	init: init,
};
