'use strict';


var mobx = require('mobx');
var state = require('./state');


// ACTIONS
function toggleMainNavigationDisplay() {
	if (state.isMainNavigationShowing) {
		hideMainNavigation();
	} else {
		showMainNavigation();
	}
};


function showMainNavigation() {
	state.isMainNavigationShowing = true;
};


function hideMainNavigation() {
	state.isMainNavigationShowing = false;
};


module.exports = {
	toggleMainNavigationDisplay: toggleMainNavigationDisplay,
	showMainNavigation: showMainNavigation,
	hideMainNavigation: hideMainNavigation
};
