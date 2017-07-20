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

var THEMEABLE = {
	base: '',
	label: '&__label',
	input: '&__input',
	errors: '&__errors',
	has_errors: '&--has-errors',
	has_errors_label: '&--has-errors &__label',
	has_errors_input: '&--has-errors &__input',
	has_errors_errors: '&--has-errors &__errors',
	is_dirty: '', // TODO
	has_content: '', // TODO
	has_focus: '', // TODO
};

var theme = {
	all: function(css) {
		CSSManager.updateComponentHeadStyle(className, css);
	},
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
			'&__input': style,
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
		_style[' ' + className + '__input'] = style;

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
	createVariation: function (modifierName, style) {
		CSSManager.createComponentStyleVariation(className, CSSManager.componentStyleVariationModifierNamePrefix + modifierName, style);
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


function onfocus(vnode) {
	vnode.state.hasBeenFocussed = true;
}


function focusInput(vnode) {
	var inputField;

	if (vnode.dom && vnode.attrs.shouldFocus === true && vnode.state.hasBeenFocussed === false) {
		inputField = vnode.dom.getElementsByClassName(className.split('.').join('') + '__input')[0];

		setTimeout(function () {
			console.log('focussing', vnode.state.id);
			inputField.focus();
		}, 0);
	}
}


function oninit(vnode) {
	vnode.state = {
		id: vnode.attrs.id || CSSManager.uniqueDOMidAttribute(name),
		hasBeenFocussed: false,
		value: typeof vnode.attrs.value !== 'undefined' ? vnode.attrs.value : '',
	};
}


function oncreate(vnode) {
	focusInput(vnode);
}


function onupdate(vnode) {
	focusInput(vnode);
}


function view(vnode) {
	var type = vnode.attrs.type || types.default,
		placeholder = vnode.attrs.placeholder || '',
		tabindex = vnode.attrs.tabindex || 0,
		errors = vnode.attrs.errors || [],
		rows = vnode.attrs.rows || 1,
		_className = className,
		label = vnode.attrs.label || '',
		classNameVariationModifier = vnode.attrs.variation ? className + CSSManager.componentStyleVariationModifierNamePrefix + vnode.attrs.variation : '';

	_className += classNameVariationModifier;

	if (errors.length > 0) {
		_className += className + '--has-errors';
	}


	return m(_className, [
		m('label' + className + '__label', {
			for: vnode.state.id,
		}, label),
		m(type.tagName + className + '__input', {
			id: vnode.state.id,
			placeholder: placeholder,
			rows: rows,
			tabindex: tabindex,
			onfocus: onfocus.bind(null, vnode),
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
	THEMEABLE: THEMEABLE,
	types: types,
	oninit: oninit,
	oncreate: oncreate,
	onupdate: onupdate,
	view: view,
};
