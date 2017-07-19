'use strict';


var mobx = require('mobx');
var state;


console.log(mobx);

function toggleMainNavigationDisplay() {
	console.log('toggleMainNavigationDisplay()');
	if (state.isMainNavigationShowing) {
		hideMainNavigation();
	} else {
		showMainNavigation();
	}
};


function showMainNavigation() {
	console.log('showMainNavigation()');
	state.isMainNavigationShowing = true;
};


function hideMainNavigation() {
	console.log('hideMainNavigation()');
	state.isMainNavigationShowing = false;
};


module.exports = function (_state) {
	state = _state;

	return {
		toggleMainNavigationDisplay: toggleMainNavigationDisplay,
		showMainNavigation: showMainNavigation,
		hideMainNavigation: hideMainNavigation,
	};
};
