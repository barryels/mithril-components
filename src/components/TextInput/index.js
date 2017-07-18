'use strict';


var m = require('mithril');
var CSSManager = require('./../utils').CSSManager;


var name = 'TextInput';
var className = '.' + CSSManager.uniqueDOMClassAttribute(name);


var css = {
	' label': {
		boxSizing: 'border-box',
		margin: 0,
		padding: 0,
	},

	' input': {
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
};

var theme = {
	base: function (style) {
		CSSManager.updateComponentHeadStyle(className, style);
	},
	label: function (style) {
		CSSManager.updateComponentHeadStyle(className, {
			' label': style,
		});
	},
	input: function (style) {
		CSSManager.updateComponentHeadStyle(className, {
			' input': style,
		});
	},
	hasErrorsInput: function (style) {
		CSSManager.updateComponentHeadStyle(className, {
			'&--has-errors': {
				' input': style,
			},
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
	var id = vnode.attrs.id || CSSManager.uniqueDOMidAttribute(name);
	var errors = vnode.attrs.errors || [];
	var _className = className;

	if (errors.length > 0) {
		_className += className + '--has-errors';
	}


	return m(_className, [
		m('label', {
			for: id,
		}, 'Label'),
		m('input', {
			id: id,
			oninput: m.withAttr('value', oninput.bind(null, vnode)),
			value: vnode.state.value,
		}),
	]);
}


init();


module.exports = {
	theme: theme,
	oninit: oninit,
	view: view,
};
