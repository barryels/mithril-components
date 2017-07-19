'use strict';


var m = require('mithril');


var TextInput = require('./../../../components/TextInput');


var errors_sample1 = [
	{ content: 'Has one error' },
];
var state = {
	value: 'asdf1234',
	errorsA: errors_sample1,
	errorsB: errors_sample1,
};


function updateValue(v) {
	state.value = v;

	state.errorsA = [];
}


function view() {
	return m('div', [
		m('h1', 'TextInput'),

		m(TextInput),

		m(TextInput, { value: state.value }),

		m(TextInput, { id: 'the-id', value: state.value }),

		m(TextInput, { value: state.value, oninput: updateValue.bind(null) }),

		m(TextInput, {
			value: state.value,
			oninput: updateValue.bind(null),
			errors: state.errorsA,
		}),

		m(TextInput, { type: TextInput.types.multiline, value: state.value, oninput: updateValue.bind(null) }),

		m(TextInput, {
			value: state.value,
			type: TextInput.types.multiline,
			errors: state.errorsB,
		}),
		m('pre', JSON.stringify(state.value, '', 2)),
	]);
}


module.exports = {
	view: view,
};
