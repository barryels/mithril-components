'use strict';


var m = require('mithril');
var CSSManager = require('./../utils').CSSManager;


var name = 'List';
var className = '.' + CSSManager.uniqueDOMClassAttribute(name);
var types = {
	default: {},
};
var components = {
	item: className + '__item',
	itemDisabled: className + '__item:disabled',
};


var css = {
	boxSizing: 'border-box',
	margin: 0,
	overflow: 'hidden',
	padding: 0,
	width: '100%',

	'&__item': {
		boxSizing: 'border-box',
		margin: 0,
		overflow: 'hidden',
		padding: 0,

		'&:disabled': {
			cursor: 'not-allowed',
		},
	},
};


CSSManager.addComponentHeadStyle(className, css);


var theme = {
	base: function (style) {
		CSSManager.updateComponentHeadStyle(className, style);
	},
	item: function (style) {
		CSSManager.updateComponentHeadStyle(className, {
			'&__item': style,
		});
	},
	itemFirst: function (style) {
		CSSManager.updateComponentHeadStyle(className, {
			'&__item:first-child': style,
		});
	},
	itemLast: function (style) {
		CSSManager.updateComponentHeadStyle(className, {
			'&__item:last-child': style,
		});
	},
	itemDisabled: function (style) {
		CSSManager.updateComponentHeadStyle(className, {
			'&:disabled': style,
		});
	},
};


function onclick(vnode, item, e) {
	if (vnode.attrs.onclick) {
		vnode.attrs.onclick(item, e);
	}

	if (item.disabled) {
		return;
	}

	if (item.href) {
		window.location.href = item.href;
		return;
	}

	if (item.hash) {
		m.route.set(item.hash);
		return;
	}

	return;
}


function view(vnode) {
	var type = vnode.attrs.type || types.default,
		style = vnode.attrs.style || {},
		items = vnode.attrs.items || [];

	return m('ul' + className, {
		type: type.type,
		style: style,
		role: type.role,
	}, items.map(function (item) {
		var disabled = item.disabled || false;

		return m('li' + className + '__item',
			{
				onclick: onclick.bind(null, vnode, item),
				disabled: disabled,
			},
			item.label);
	}));
}


module.exports = {
	components: components,
	theme: theme,
	types: types,
	view: view,
};
