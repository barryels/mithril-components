'use strict';


var m = require('mithril');
var domainActions = require('./../../domain/actions');
var domainStore = require('./../../domain/store');
var CSSManager = require('./../../../components/utils').CSSManager;


var name = 'docs_MainNavigationCover';
var className = '.' + name;
var css = {
	background: 'rgba(0,0,0,0.5)',
	display: 'none',
	height: '100%',
	left: 0,
	position: 'fixed',
	top: 0,
	opacity: 0,
	transition: '.6s ease opacity',
	width: '100%',
	zIndex: 2,

	'&--showing': {
		opacity: 1,
	},
};


CSSManager.addComponentHeadStyle(className, css);


function view() {
	var classNameModifier = className,
		style = {};

	if (domainStore.isMainNavigationShowing()) {
		style = {
			display: 'block',
		};
		classNameModifier += '--showing';
	}

	return m(className + classNameModifier, { style: style, onclick: domainActions.toggleMainNavigationDisplay.bind(null) });
}

module.exports = {
	view: view,
};
