'use strict';


var m = require('mithril');
var CSSManager = require('./../utils').CSSManager;


var name = 'GridContainer';
var className = '.' + name;
var css = {
	border: '1px solid #f00'
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
