'use strict';


var m = require('mithril');
var CSSManager = require('./../utils').CSSManager;


var name = 'GridRow';
var className = '.' + name;
var css = {
	border: '1px solid #0f0'
};


CSSManager.addComponentHeadStyle(className, css);


function view(vnode) {
	return m(className, {
	}, vnode.children);
}


module.exports = {
	className: className,
	view: view
};
