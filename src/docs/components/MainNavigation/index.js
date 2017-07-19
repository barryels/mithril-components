'use strict';


var m = require('mithril');
var domainCommands = require('./../../domain').command;
var domainQuery = require('./../../domain').query;
var CSSManager = require('./../../../components/utils').CSSManager;
var List = require('./../../../components/List');
var TextInput = require('./../../../components/TextInput');


var name = 'docs_MainNavigation';
var className = '.' + name;
var routesList = [];
var routesListFiltered = [];


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

		'&__header': {
			padding: '20px',
		},

		'&__section': {
			height: '100%',
			overflow: 'scroll',
		},

		'&__footer': {
			padding: '20px',
		},

		'&--showing': {
			transform: 'perspective(0) translate3d(0, 0, 0)',
		},
	};

	CSSManager.addComponentHeadStyle(className, css);
}


function onWindowHashChange() {
	console.warn('onWindowHashChange()', window.location);
}


function onSearchFieldInput(value) {
	filterItems(value);
}

function filterItems(searchText) {
	if (!searchText) {
		routesListFiltered = routesList;
		return;
	}

	routesListFiltered = routesList.filter(function (routeListItem) {
		if (routeListItem.label.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
			return routeListItem;
		}
	});
}


function onItemClick() {
	domainCommands.hideMainNavigation();
}


function buildItemList() {
	var routesObject = domainQuery.routes(),
		routePropName = '',
		route = null;

	for (routePropName in routesObject) {
		route = routesObject[routePropName];

		if (typeof route.showInNav === 'undefined') {
			routesList.push({ route: routePropName, title: route.name });
		}
	}

	routesList = routesList.map(function (routeListItem) {
		return { label: routeListItem.title, hash: routeListItem.route };
	});

	routesListFiltered = routesList;
}


function oninit(vnode) {
	vnode.state = {
		isShowing: domainQuery.isMainNavigationShowing(),
	};

	buildItemList();

	window.addEventListener('hashchange', onWindowHashChange);
	onWindowHashChange();
}


function onbeforeremove() {
	window.removeEventListener('hashchange', onWindowHashChange);
}


function view(vnode) {
	var style = {},
		classNameModifier = className;

	if (domainQuery.isMainNavigationShowing()) {
		classNameModifier += '--showing';
	}

	vnode.state.isShowing = domainQuery.isMainNavigationShowing();

	return m(className + classNameModifier, { style: style }, [
		m(className + '__header', [
			m('button', { onclick: domainCommands.toggleMainNavigationDisplay.bind(null) }, 'X'),
			m(TextInput, { oninput: onSearchFieldInput.bind(null), placeholder: 'Search...', shouldFocus: true }),
		]),
		m(className + '__section', [
			m(List, {
				items: routesListFiltered,
				onclick: onItemClick.bind(null),
			}),
		]),
		m(className + '__footer', [
			m('span', 'Footer'),
		]),
	]);
}


construct();


module.exports = {
	oninit: oninit,
	onbeforeremove: onbeforeremove,
	view: view,
};
