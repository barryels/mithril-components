'use strict';


var m = require('mithril');


var AppHeader = require('./../../components/AppHeader');
var AppSection = require('./../../components/AppSection');
var MainNavigation = require('./../../components/MainNavigation');
var MainNavigationCover = require('./../../components/MainNavigationCover');


function view(vnode) {
	return m('div',
		m(AppHeader),
		m(MainNavigation),
		m(MainNavigationCover),
		m(AppSection, vnode.children)
	);
}

module.exports = {
	view: view
};
