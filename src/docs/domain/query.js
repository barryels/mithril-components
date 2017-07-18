'use strict';


var state;


function routes() {
	return state.routes;
};


function isMainNavigationShowing() {
	return state.isMainNavigationShowing;
};


function AppHeader() {
	return state.AppHeader;
};


module.exports = function (_state) {
	state = _state;

	return {
		routes: routes,
		isMainNavigationShowing: isMainNavigationShowing,
		AppHeader: AppHeader,
	};
};
