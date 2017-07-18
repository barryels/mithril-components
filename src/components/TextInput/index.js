'use strict';


var m = require('mithril');
var CSSManager = require('./../utils').CSSManager;


var name = 'TextInput';
var className = '.' + CSSManager.uniqueClassName(name);


var css = {

	' input': {
		border: '0',
		'*font-size': '100%', // to enable resizing for IE
		fontFamily: 'inherit',
		fontSize: 'inherit',
		fontWeight: 'inherit',
		margin: 0,
		padding: 0,
	},
};


function init() {
	CSSManager.addComponentHeadStyle(className, css);
}


function oninput(vnode, v) {
	vnode.state.value = v;

	if (vnode.attrs.oninput) {
		vnode.attrs.oninput(vnode.state.value);
	}
}


function oninit(vnode) {
	vnode.state = {
		value: typeof vnode.attrs.value !== 'undefined' ? vnode.attrs.value : '',
	};
}


function view(vnode) {

	return m(className, [
		m('input', {
			oninput: m.withAttr('value', oninput.bind(null, vnode)),
			value: vnode.state.value,
		}),
	]);
}


init();


module.exports = {
	oninit: oninit,
	view: view,
};
