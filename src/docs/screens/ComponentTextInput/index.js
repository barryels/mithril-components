'use strict';


var m = require('mithril');


var TextInput = require('./../../../components/TextInput');
var value = 'asdf';

window.test = value;


function view() {
	return m('div', [
		m('h1', 'TextInput'),
		m(TextInput),
		m(TextInput, { value: value }),
		m('pre', JSON.stringify(value, '', 2)),
	]);
}


module.exports = {
	view: view,
};
