'use strict';


var m = require('mithril');
var domainActions = require('./../../domain/actions');
var domainStore = require('./../../domain/store');
var CSSManager = require('./../../../components/utils').CSSManager;


var name = 'docs_MainNavigation';
var className = '.' + name;


function construct() {
	var css = {
		background: '#f5f5f5',
		height: '100%',
		left: 0,
		position: 'fixed',
		top: 0,
		width: '300px',
		zIndex: 3,
		transform: 'perspective(0) translate3d(-300px, 0, 0)',
		transition: '.3s ease all',

		'&--showing': {
			transform: 'perspective(0) translate3d(0, 0, 0)',
		},
	};

	CSSManager.addComponentHeadStyle(className, css);
}


function onWindowHashChange() {
	domainActions.hideMainNavigation();
}


function oninit() {
	window.addEventListener('hashchange', onWindowHashChange);
	onWindowHashChange();
}


function onbeforeremove() {
	window.removeEventListener('hashchange', onWindowHashChange);
}


function view() {
	var style = {},
		routesObject = domainStore.routes(),
		routePropName = '',
		routesList = [],
		classNameModifier = className;

	if (domainStore.isMainNavigationShowing()) {
		classNameModifier += '--showing';
	}

	for (routePropName in routesObject) {
		routesList.push({ route: routePropName, title: routesObject[routePropName].name });
	}

	return m(className + classNameModifier, { style: style }, [
		m('button', { onclick: domainActions.toggleMainNavigationDisplay.bind(null) }, 'X'),
		m('ul',
			routesList.map(function (routeListItem) {
				return m('li', m('a', { href: '#!' + routeListItem.route }, routeListItem.title));
			})
		),
	]);
}


construct();


module.exports = {
	oninit: oninit,
	onbeforeremove: onbeforeremove,
	view: view,
};
