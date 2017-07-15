'use strict';


var m = require('mithril');
var domainActions = require('./../../domain/actions');
var domainStore = require('./../../domain/store');
var CSSManager = require('./../../../components/utils').CSSManager;


var name = 'docs_MainNavigationCover';
var className = '.' + name;
var css = {
	background: 'rgba(0,0,0,0.5)',
	height: '100%',
	left: 0,
	position: 'fixed',
	top: 0,
	width: '100%',
	zIndex: 2
};


CSSManager.addComponentHeadStyle(className, css);


function view() {
	var style = {};

	if (!domainStore.isMainNavigationShowing()) {
		style.display = 'none';
	}

	return m(className, { style: style, onclick: domainActions.toggleMainNavigationDisplay.bind(null) });
}

module.exports = {
	view: view
};
