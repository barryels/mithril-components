'use strict';


var m = require('mithril');
var domain = require('./../../domain');
var CSSManager = require('./../../../components/utils').CSSManager;


var name = 'docs_AppSection';
var className = '.' + name;
var css = {
	paddingTop: domain.store.AppHeader().height + 'px'
};


CSSManager.addComponentHeadStyle(className, css);


function view(vnode) {
	return m(className, vnode.children);
}

module.exports = {
	view: view
};
