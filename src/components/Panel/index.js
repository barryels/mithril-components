'use strict';


var m = require('mithril');
var CSSManager = require('./../utils').CSSManager;


var name = '';
var className = '.' + name;


var css = {

};


function init() {
	CSSManager.addComponentHeadStyle(className, css);
}


function view(vnode) {
	return m(className);
}


init();


module.exports = {
	view: view,
};
