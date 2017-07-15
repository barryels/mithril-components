'use strict';


var m = require('mithril');


var Checkbox = require('./../../../components/Checkbox');


function view() {
	return m('div', [
		m('h1', 'Checkbox'),
		m(Checkbox),
	]);
}


module.exports = {
	view: view
};
