'use strict';


var m = require('mithril');
var domainStore = require('./../../domain/store');
var CSSManager = require('./../../../components/utils').CSSManager;


var name = 'docs_AppSection';
var className = '.' + name;
var css = {
	paddingTop: domainStore.AppHeader().height + 'px'
};


CSSManager.addComponentHeadStyle(className, css);


function view(vnode) {
	return m(className, vnode.children);
}

module.exports = {
	view: view
};
