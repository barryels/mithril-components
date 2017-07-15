'use strict';


var m = require('mithril');
var CSSManager = require('./../utils').CSSManager;


var name = 'Checkbox';
var className = '.' + name;
var css = {
	// _webkitAppearance: 'none',
	background: '#fff',
	border: '1px solid #ccc',
	boxSizing: 'border-box',
	_webkitBoxSizing: 'border-box',
	_mozBoxSizing: 'border-box',
	padding: 0,
};


CSSManager.addComponentHeadStyle(className, css);


function view(vnode) {
	var style = vnode.attrs.style || {},
		label = 'Button',
		onclick = vnode.attrs.onclick ? vnode.attrs.onclick : null,
		role = vnode.attrs.role ? vnode.attrs.role : 'checkbox'; // TODO check what this shoudd be

	label = vnode.children.length > 0 ? vnode.children : label;
	label = vnode.attrs.label ? vnode.attrs.label : label;

	return m('input' + className, {
		style: style,
		type: 'checkbox',
		onclick: onclick,
		role: role,
		value: vnode.attrs.value,
		checked: vnode.attrs.checked,
		disabled: vnode.attrs.disabled,
	}, label);
}


module.exports = {
	className: className,
	view: view
};
