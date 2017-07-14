'use strict';


var m = require('mithril');


var Button = require('./../../../components/Button');


function view() {
	return m('div', [
		m('h1', 'Button'),
		m(Button),
		m(Button, 'With Label as child'),
		m(Button, { label: 'With Label as attribute' }),
		m(Button, { disabled: true }, 'Disabled'),
		m(Button, { onclick: window.alert.bind(null, 'Button clicked!') }, 'onClick')
	]);
}


module.exports = {
	view: view
};
