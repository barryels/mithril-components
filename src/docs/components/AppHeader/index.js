'use strict';


var m = require('mithril');
var domainActions = require('./../../domain/actions');
var domainStore = require('./../../domain/store');
var CSSManager = require('./../../../components/utils').CSSManager;


var Button = require('./../../../components/Button');


var name = 'docs_AppHeader';
var className = '.' + name;
var css = {
	background: '#999',
	color: '#555',
	height: domainStore.AppHeader().height + 'px',
	left: 0,
	position: 'fixed',
	top: 0,
	width: '100%',
	zIndex: 1,

	' .title': {
		height: domainStore.AppHeader().height + 'px',
		left: 0,
		lineHeight: domainStore.AppHeader().height + 'px',
		margin: '0 auto',
		position: 'absolute',
		textAlign: 'center',
		right: 0,
		top: 0,
		width: '100%',
		zIndex: 1,
	},

	' .MenuButton': {
		position: 'relative',
		zIndex: 2,
	}
};


CSSManager.addComponentHeadStyle(className, css);


function view() {
	return m(className, [
		m('.title', 'Mithril Components'),
		// m(Button, { onclick: domainActions.toggleMainNavigationDisplay.bind(null) }, '='),
		m('button.MenuButton', { onclick: domainActions.toggleMainNavigationDisplay.bind(null) }, '='),
	]);
}

module.exports = {
	view: view
};
