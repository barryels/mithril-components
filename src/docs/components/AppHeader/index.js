'use strict';


var m = require('mithril');
var domain = require('./../../domain');
var CSSManager = require('./../../../components/utils').CSSManager;


var name = 'docs_AppHeader';
var className = '.' + name;
var css = {
	background: '#999',
	color: '#555',
	height: domain.store.AppHeader().height + 'px',
	left: 0,
	position: 'fixed',
	top: 0,
	width: '100%',
	zIndex: 1,

	' .title': {
		height: domain.store.AppHeader().height + 'px',
		left: 0,
		lineHeight: domain.store.AppHeader().height + 'px',
		margin: '0 auto',
		position: 'absolute',
		textAlign: 'center',
		right: 0,
		top: 0,
		width: '100%'
	}
};


CSSManager.addComponentHeadStyle(className, css);


function view() {
	return m(className, [
		m('button', { onclick: domain.actions.toggleMainNavigationDisplay.bind(null) }, '='),
		m('.title', 'Mithril Components')
	]);
}

module.exports = {
	view: view
};
