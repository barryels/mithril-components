'use strict';


var m = require('mithril');
var CSSManager = require('./../utils').CSSManager;


var name = 'TextInput';
var className = '.' + name;


var css = {

};


function init() {
	CSSManager.addComponentHeadStyle(className, css);
}


function setValue(vnode, v) {
	console.log(vnode, v);
	vnode.state.value = v;
	vnode.attrs.value = v;
}


function oninput(vnode) {

}


function oninit(vnode) {
	vnode.state = {
		value: typeof vnode.attrs.value !== 'undefined' ? vnode.attrs.value : '',
	};
}


function view(vnode) {

	return m(className, [
		m('input', {
			oninput: m.withAttr('value', setValue.bind(null, vnode)),
			value: vnode.state.value,
		}),
	]);
}


init();


module.exports = {
	oninit: oninit,
	view: view,
};
