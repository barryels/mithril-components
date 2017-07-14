'use strict';


var m = require('mithril');


var AppHeader = require('./../../components/AppHeader');


function view(vnode) {
	return m('div',
		m(AppHeader),
		m('div.AppSection',
			vnode.children
		)
	);
}

module.exports = {
	view: view
};
