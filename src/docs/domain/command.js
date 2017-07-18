'use strict';


var mobx = require('mobx');
var state;


console.log(mobx);

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


module.exports = function (_state) {
	state = _state;

	return {
		toggleMainNavigationDisplay: toggleMainNavigationDisplay,
		showMainNavigation: showMainNavigation,
		hideMainNavigation: hideMainNavigation,
	};
};
