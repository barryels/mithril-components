'use strict';


var m = require('mithril');


var ProgressIndicator = require('./../../../components/ProgressIndicator');


function view() {
	return m('div', [
		m('h1', 'ProgressIndicator'),
		m(ProgressIndicator),
		m(ProgressIndicator, { value: 80, max: 160 }),
	]);
}


module.exports = {
	view: view,
};
