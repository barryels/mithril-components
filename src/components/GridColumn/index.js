'use strict';


var m = require('mithril');
var CSSManager = require('./../utils').CSSManager;


var name = 'GridColumn';
var className = '.' + name;
var css = {
	border: '1px solid #00f'
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
