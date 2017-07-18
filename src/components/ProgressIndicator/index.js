'use strict';


var m = require('mithril');
var CSSManager = require('./../utils').CSSManager;


var name = 'ProgressIndicator';
var className = '.' + CSSManager.uniqueDOMClassAttribute(name);
var types = {
	linear: {
		type: 'linear',
	},
	circular: {
		type: 'circular',
	},
	text: {
		type: 'text',
	},
};
var css = {
	background: '#ccc',
	boxSizing: 'border-box',
	_webkitBoxSizing: 'border-box',
	_mozBoxSizing: 'border-box',
	height: '1px',
	padding: 0,
	position: 'relative',

	'&__Foreground': {
		background: '#000',
		height: '1px',
		left: 0,
		position: 'absolute',
		top: 0,
	},
};


CSSManager.addComponentHeadStyle(className, css);


function view(vnode) {
	var style = vnode.attrs.style || {},
		foregroundStyle = {},
		role = vnode.attrs.role ? vnode.attrs.role : '',
		value = vnode.attrs.value ? vnode.attrs.value : 0,
		max = vnode.attrs.max ? vnode.attrs.max : value;

	foregroundStyle.width = (value / max) * 100 + '%';

	return m(className, {
		style: style,
		role: role,
		value: vnode.attrs.value,
	}, m(className + '__Foreground', { style: foregroundStyle }));
}


module.exports = {
	types: types,
	className: className,
	view: view,
};
