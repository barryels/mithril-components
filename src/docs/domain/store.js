'use strict';


var state = require('./state');


function routes() {
	return state.routes;
};


function isMainNavigationShowing() {
	return state.isMainNavigationShowing;
};


function AppHeader() {
	return state.AppHeader;
};


module.exports = {
	routes: routes,
	isMainNavigationShowing: isMainNavigationShowing,
	AppHeader: AppHeader
};
