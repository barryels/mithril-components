'use strict';


var m = require('mithril');
var CSSManager = require('./../utils').CSSManager;


var name = 'GridContainer';
var className = '.' + name;
var types = {
	DEFAULT: 'default',
	FLUID: 'fluid',
};
var css = {
	boxSizing: 'border-box',

	'&:before, &:after': {
		content: '" "',
		display: 'table',
	},

	'&:after': {
		clear: 'both',
	},

	'&--default': {
		marginRight: 'auto',
		marginLeft: 'auto',
		paddingLeft: '15px',
		paddingRight: '15px',

		'@media (min-width: 768px)': {
			width: '750px',
		},
		'@media (min-width: 992px)': {
			width: '970px',
		},
		'@media (min-width: 1200px)': {
			width: '1170px',
		},
	},

	'&--fluid': {
		marginRight: 'auto',
		marginLeft: 'auto',
		paddingLeft: '0px',
		paddingRight: '0px',
	},
};


CSSManager.addComponentHeadStyle(className, css);


function view(vnode) {
	var type = vnode.attrs.type ? vnode.attrs.type : types.DEFAULT;
	var classNameModifier = className + '--' + type;

	return m(className + classNameModifier, {
	}, vnode.children);
}


module.exports = {
	className: className,
	types: types,
	view: view,
};
