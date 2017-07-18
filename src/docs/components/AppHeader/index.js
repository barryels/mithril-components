'use strict';


var m = require('mithril');
var domainCommand = require('./../../domain').command;
var domainQuery = require('./../../domain').query;
var CSSManager = require('./../../../components/utils').CSSManager;


var Button = require('./../../../components/Button');


var name = 'docs_AppHeader';
var className = '.' + name;
var css = {
	background: '#999',
	color: '#555',
	height: domainQuery.AppHeader().height + 'px',
	left: 0,
	position: 'fixed',
	top: 0,
	width: '100%',
	zIndex: 1,

	' .title': {
		height: domainQuery.AppHeader().height + 'px',
		left: 0,
		lineHeight: domainQuery.AppHeader().height + 'px',
		margin: '0 auto',
		position: 'absolute',
		textAlign: 'center',
		right: 0,
		top: 0,
		width: '100%',
		zIndex: 1,
	},

	' .MenuButton': {
		background: '#f00',
		height: '100%',
		position: 'relative',
		width: '48px',
		zIndex: 2,
	},
};


CSSManager.addComponentHeadStyle(className, css);


function view() {
	return m(className, [
		m('.title', 'Mithril Components'),
		// m(Button, { onclick: domainActions.toggleMainNavigationDisplay.bind(null) }, '='),
		m('button.MenuButton', { onclick: domainCommand.toggleMainNavigationDisplay.bind(null) }, '='),
	]);
}

module.exports = {
	view: view
};
