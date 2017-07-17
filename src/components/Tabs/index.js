'use strict';


var m = require('mithril');
var CSSManager = require('./../utils').CSSManager;


var name = 'Tabs';
var className = '.' + name;


var css = {
	background: 'transparent',
	position: 'relative',

	'&__Item': {
		background: '#fff',
		boxSizing: 'border-box',
		color: '#555',
		display: 'inline-block',
		padding: '16px',
		position: 'relative',
		textAlign: 'center',
		textDecoration: 'none',

		'&:hover': {
			background: '#555',
			color: '#fff',
		},

		'&--active': {
			background: '#555',
			color: '#fff',
		},
	},
};


function init() {
	CSSManager.addComponentHeadStyle(className, css);
}


function view(vnode) {
	var items = vnode.attrs.items || [],
		itemWidth = (100 / items.length) + '%';

	if (items.length === 0) {
		return null;
	}

	return m(className, items.map(function (item) {
		var href = item.href || 'javascript: void(0)',
			itemBaseClassName = className + '__Item',
			itemClassName = itemBaseClassName;

		if (item.active) {
			itemClassName += itemBaseClassName + '--active';
		}

		return m('a' + itemClassName, { href: href, style: { width: itemWidth } }, item.label);
	}));
}


init();


module.exports = {
	view: view,
};
