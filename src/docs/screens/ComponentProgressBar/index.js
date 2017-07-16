'use strict';


var m = require('mithril');


var ProgressBar = require('./../../../components/ProgressBar');


function view() {
	return m('div', [
		m('h1', 'ProgressBar'),
		m(ProgressBar),
		m(ProgressBar, { value: 80, max: 160 }),
	]);
}


module.exports = {
	view: view,
};
