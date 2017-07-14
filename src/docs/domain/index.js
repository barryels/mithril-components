'use strict';


var state = {
	isMainNavigationShowing: false,
	AppHeader: {
		height: 64
	}
};
var actions = {};
var store = {};


// ACTIONS
actions.toggleMainNavigationDisplay = function () {
	if (store.isMainNavigationShowing()) {
		actions.hideMainNavigation();
	} else {
		actions.showMainNavigation();
	}
};


actions.showMainNavigation = function () {
	state.isMainNavigationShowing = true;
};


actions.hideMainNavigation = function () {
	state.isMainNavigationShowing = false;
};
// /ACTIONS



// STORE
store.isMainNavigationShowing = function () {
	return state.isMainNavigationShowing;
};


store.AppHeader = function () {
	return state.AppHeader;
};
// /STORE


module.exports = {
	actions: actions,
	store: store
};
