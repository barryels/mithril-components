'use strict';


var m = require('mithril');
var CSSManager = require('./../utils').CSSManager;


var name = 'Button';
var className = '.' + CSSManager.uniqueDOMClassAttribute(name);
var attributes = {
	type: {
		default: {
			role: 'button',
			type: 'button',
		},
		submit: {
			role: 'button',
			type: 'submit',
		},
		reset: {
			role: 'button',
			type: 'reset',
		},
	},
};
var components = {
	disabled: className + ':disabled',
};


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
		padding: 0,
	},

	'&:hover': {
		color: 'inherit',
	},

	'&:disabled': {
		cursor: 'not-allowed',
	},
};


CSSManager.addComponentHeadStyle(className, css);


var theme = {
	base: function (style) {
		CSSManager.updateComponentHeadStyle(className, style);
	},
	disabled: function (style) {
		CSSManager.updateComponentHeadStyle(className, {
			'&:disabled': style,
		});
	},
	createVariation: function (modifierName, style) {
		CSSManager.createComponentStyleVariation(className, CSSManager.componentStyleVariationModifierNamePrefix + modifierName, style);
	},
};


function getLabel(vnode) {
	var label = m.trust('&nbsp;'),
		label = vnode.children.length > 0 ? vnode.children : label,
		label = vnode.attrs.label ? vnode.attrs.label : label;

	return label;
}


function view(vnode) {
	var type = vnode.attrs.type || attributes.type.default,
		style = vnode.attrs.style || {},
		onclick = vnode.attrs.onclick ? vnode.attrs.onclick : null,
		label = getLabel(vnode),
		classNameModifier = vnode.attrs.variation ? className + CSSManager.componentStyleVariationModifierNamePrefix + vnode.attrs.variation : '',
		userClassName = vnode.attrs.className ? '.' + vnode.attrs.className.split(' ').join('.') : '';

	console.log(name, userClassName);

	return m('button' + className + classNameModifier + userClassName, {
		type: type.type,
		style: style,
		onclick: onclick,
		role: type.role,
		disabled: vnode.attrs.disabled,
	}, label);
}


module.exports = {
	components: components,
	theme: theme,
	attributes: attributes,
	view: view,
};
