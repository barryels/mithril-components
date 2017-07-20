'use strict';


var m = require('mithril');


var Button = require('./../../../components/Button');


var state = {
	customStyling1: {
		background: '#0f0',
		border: '10px solid #00f',
		boxShadow: 'none',
		fontSize: '24px',
		fontStyle: 'italic',
		textAlign: 'right',
		textTransform: 'uppercase',

		'&:disabled': {
			background: '#f00',
		},
	},
	customStyling2: {

	},
};


function view() {
	return m('div', [
		m('h1', 'Button'),

		m(Button),

		m(Button, 'With Label as child'),

		m(Button, { label: 'With Label as attribute' }),

		m(Button, { disabled: true }, 'Disabled'),

		m(Button, { onclick: window.alert.bind(null, 'Button clicked!') }, 'onClick'),

		m(Button, { type: Button.attributes.type.submit }, 'type=submit'),

		m(Button, { type: Button.attributes.type.reset }, 'type=reset'),

		m(Button, {
			style: state.customStyling1,
		}, 'Custom styling 1'),

		m(Button, {
			style: state.customStyling2,
			disabled: true,
		}, 'Custom styling 2 (Disabled)'),

		m('h2', 'Variations'),
		m(Button, { variation: 'variation-1' }, 'Variation 1'),
		m(Button, { variation: 'variation-1', disabled: true }, 'Variation 1 (disabled)'),
		m(Button, { variation: 'variation-2' }, 'Variation 2'),
		m(Button, { variation: 'variation-2', disabled: true }, 'Variation 2 (disabled)'),
		m(Button, { variation: 'variation-3' }, 'Variation 3'),
		m(Button, { variation: 'variation-3', disabled: true }, 'Variation 3 (disabled)'),
	]);
}


module.exports = {
	view: view,
};
