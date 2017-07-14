'use strict';


var m = require('mithril');
var CSSManager = require('./../utils').CSSManager;


var name = 'Button';
var className = '.' + name;
var css = {
	_webkitAppearance: 'button', /* for input */
	_webkitUserSelect: 'none', /* for button */
	_mozUserSelect: 'none',
	_msUserSelect: 'none',
	boxSizing: 'border-box',
	_webkitBoxSizing: 'border-box',
	_mozBoxSizing: 'border-box',
	background: 'transparent',
	border: 0,
	color: 'inherit',
	cursor: 'pointer',
	display: 'block',
	font: 'inherit',
	lineHeight: 'normal',
	margin: 0,
	overflow: 'visible',
	padding: 0,
	width: '100%',

	'&::-moz-focus-inner': {
		border: 0,
		padding: 0
	},

	'&:disabled': {
		cursor: 'not-allowed'
	}
};


CSSManager.addComponentHeadStyle(className, css);


function view(vnode) {
	var style = vnode.attrs.style || {},
		label = 'Button',
		onclick = vnode.attrs.onclick ? vnode.attrs.onclick : null,
		role = vnode.attrs.role ? vnode.attrs.role : 'button';

	label = vnode.children.length > 0 ? vnode.children : label;
	label = vnode.attrs.label ? vnode.attrs.label : label;

	return m('button' + className, {
		style: style,
		onclick: onclick,
		role: role,
		disabled: vnode.attrs.disabled
	}, label);
}


module.exports = {
	className: className,
	view: view
};
