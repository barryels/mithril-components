'use strict';


var m = require('mithril');


var Button = require('./../../../components/Button');


var state = {
	customStyling1: {},
};

state.customStyling1[Button.components.disabled] = {
	background: '#f00',
};


function view() {
	return m('div', [
		m('h1', 'Button'),

		m(Button),

		m(Button, 'With Label as child'),

		m(Button, { label: 'With Label as attribute' }),

		m(Button, { disabled: true }, 'Disabled'),

		m(Button, { onclick: window.alert.bind(null, 'Button clicked!') }, 'onClick'),

		m(Button, { type: Button.types.submit }, 'type=submit'),

		m(Button, { type: Button.types.reset }, 'type=reset'),

		m(Button, {
			style: {
				background: '#0f0',
				border: '10px solid #00f',
				boxShadow: 'none',
				fontSize: '24px',
				fontStyle: 'italic',
				textAlign: 'right',
				textTransform: 'uppercase',
			},
		}, 'Custom styling 1'),

		m(Button, {
			style: state.customStyling1,
			disabled: true,
		}, 'Custom styling 2 (Disabled)'),
	]);
}


module.exports = {
	view: view,
};
