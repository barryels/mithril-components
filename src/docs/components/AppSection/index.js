'use strict';


var m = require('mithril');
var domainQuery = require('./../../domain').query;
var CSSManager = require('./../../../components/utils').CSSManager;


var name = 'docs_AppSection';
var className = '.' + name;
var css = {
	paddingTop: domainQuery.AppHeader().height + 'px',
};


CSSManager.addComponentHeadStyle(className, css);


function view(vnode) {
	return m(className, vnode.children);
}

module.exports = {
	view: view
};
