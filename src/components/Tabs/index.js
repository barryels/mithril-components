'use strict';


var m = require('mithril');
var CSSManager = require('./../utils').CSSManager;


var name = 'Tabs';
var className = '.' + name;


var css = {
	background: 'transparent',

	'&__Item': {
		background: '#fff',
		boxSizing: 'border-box',
		color: '#000',
		display: 'inline-block',
		padding: 0,
		textAlign: 'center',
		textDecoration: 'none',

		'&:hover': {
			background: '#000',
			color: '#fff',
		},

		'&--active': {
			background: '#000',
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
