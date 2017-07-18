'use strict';


var m = require('mithril');


var List = require('./../../../components/List');


var state = {
	items1: [
		{ label: 'Home' },
		{ label: 'About Us' },
		{ label: 'Contact Us' },
	],
	items2: [
		{ label: 'Home (href)', href: '/' },
		{ label: 'About Us (disabled)', hash: '#!/Button', disabled: true },
		{ label: 'Contact Us (hash)', hash: '/components/Button' },
	],
};


function view() {
	return m('div', [
		m('h1', 'List'),

		m('h2', 'List (default)'),
		m(List),

		m('h2', 'List (items1)'),
		m(List, {
			items: state.items1,
		}),

		m('h2', 'List (items2)'),
		m(List, {
			items: state.items2,
		}),

	]);
}


module.exports = {
	view: view,
};
