'use strict';


var m = require('mithril');


var Tabs = require('./../../../components/Tabs');


function view() {
	return m('div', [
		m('h1', 'Tabs'),
		m(Tabs),
		m(Tabs, {
			items: [
				{ label: 'Hello There!' },
			],
		}),
		m(Tabs, {
			items: [
				{ label: 'Tab Label 1', active: true },
				{ label: 'Tab Label 2' },
				{ label: 'Tab Label 3' },
				{ label: 'Tab Label 4' },
				{ label: 'Tab Label 5' },
				{ label: 'Tab Label 6' },
			],
		}),
	]);
}


module.exports = {
	view: view,
};
