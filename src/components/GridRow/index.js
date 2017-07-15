'use strict';


var m = require('mithril');
var CSSManager = require('./../utils').CSSManager;


var name = 'GridRow';
var className = '.' + name;
var css = {
	marginLeft: '-15px',
	marginRight: '-15px',

	'&:before, &:after': {
		content: '" "',
		display: 'table'
	},

	'&:after': {
		clear: 'both'
	}
};


CSSManager.addComponentHeadStyle(className, css);


function view(vnode) {
	return m(className, vnode.children);
}


module.exports = {
	className: className,
	view: view
};
