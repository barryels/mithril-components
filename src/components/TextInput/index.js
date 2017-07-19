'use strict';


var m = require('mithril');
var CSSManager = require('./../utils').CSSManager;


var name = 'TextInput';
var className = '.' + CSSManager.uniqueDOMClassAttribute(name);
var types = {
	default: {
		tagName: 'input',
	},
	multiline: {
		tagName: 'textarea',
	},
};


var css = {
	boxSizing: 'border-box',

	'&__label': {
		boxSizing: 'border-box',
		margin: 0,
		padding: 0,
	},

	'&__input': {
		border: '0',
		boxSizing: 'border-box',
		'*font-size': '100%', // to enable resizing for IE
		fontFamily: 'inherit',
		fontSize: 'inherit',
		fontWeight: 'inherit',
		margin: 0,
		outline: 'none',
		padding: 0,
		width: '100%',
	},

	'&__errors': {
		boxSizing: 'border-box',
		margin: 0,
		padding: 0,
	},
};

var theme = {
	base: function (style) {
		CSSManager.updateComponentHeadStyle(className, style);
	},
	label: function (style) {
		CSSManager.updateComponentHeadStyle(className, {
			'&__label': style,
		});
	},
	input: function (style) {
		CSSManager.updateComponentHeadStyle(className, {
			'&__input, &__textarea': style,
		});
	},
	hasErrorsLabel: function (style) {
		var _style = {};
		_style[' ' + className + '__label'] = style;

		CSSManager.updateComponentHeadStyle(className, {
			'&--has-errors': _style,
		});
	},
	hasErrorsInput: function (style) {
		var _style = {};
		_style[' ' + className + '__input, ' + className + '__textarea'] = style;

		CSSManager.updateComponentHeadStyle(className, {
			'&--has-errors': _style,
		});
	},
	errorMessages: function (style) {
		var _style = {};
		_style[' ' + className + '__errors'] = style;

		CSSManager.updateComponentHeadStyle(className, {
			'&--has-errors': _style,
		});
	},
};


function init() {
	CSSManager.addComponentHeadStyle(className, css);
}


function theme(style) {
	CSSManager.updateComponentHeadStyle(className, style);
}


function oninput(vnode, v) {
	vnode.state.value = v;

	if (vnode.attrs.oninput) {
		vnode.attrs.oninput(vnode.state.value);
	}
}


function oninit(vnode) {
	vnode.state = {
		value: typeof vnode.attrs.value !== 'undefined' ? vnode.attrs.value : '',
	};
}


function view(vnode) {
	var type = vnode.attrs.type || types.default;
	var placeholder = vnode.attrs.placeholder || '';
	var id = vnode.attrs.id || CSSManager.uniqueDOMidAttribute(name);
	var errors = vnode.attrs.errors || [];
	var _className = className;

	if (errors.length > 0) {
		_className += className + '--has-errors';
	}


	return m(_className, [
		m('label' + className + '__label', {
			for: id,
		}, 'Label'),
		m(type.tagName + className + '__input', {
			id: id,
			placeholder: placeholder,
			oninput: m.withAttr('value', oninput.bind(null, vnode)),
			value: vnode.state.value,
		}),
		m('ul' + className + '__errors', errors.map(function (error) {
			return m('li', error.content);
		})),
	]);
}


init();


module.exports = {
	theme: theme,
	types: types,
	oninit: oninit,
	view: view,
};
