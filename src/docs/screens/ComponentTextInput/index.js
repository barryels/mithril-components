'use strict';


var m = require('mithril');


var TextInput = require('./../../../components/TextInput');


var errors_sample1 = [
	{ content: 'Has one error' },
];
var errors_sample2 = [
	{ content: 'The supplied input is not valid (1)' },
	{ content: 'The supplied input is not valid (2)' },
	{ content: 'The supplied input is not valid (3)' },
	{ content: 'The supplied input is not valid (4)' },
	{ content: 'The supplied input is not valid (5)' },
	{ content: 'The supplied input is not valid (6)' },
	{ content: 'The supplied input is not valid (7)' },
	{ content: 'The supplied input is not valid (8)' },
	{ content: 'The supplied input is not valid (9)' },
	{ content: 'The supplied input is not valid (10)' },
	{ content: 'The supplied input is not valid (11)' },
];
var state = {
	value: 'asdf',
	errorsA: errors_sample1,
	errorsB: errors_sample2,
};


function onInputTextInputA(v) {
	state.value = v;
}


function onInputTextInputB() {
	var randomNumberOfErrors = Math.floor(Math.random() * errors_sample2.length);
	state.errorsB = errors_sample2.slice(0, randomNumberOfErrors);
	state.errorsB.fill({ content: 'Some random error message (' + randomNumberOfErrors + ')' });
}


function view() {
	return m('div', [
		m('h1', 'TextInput'),

		m(TextInput),

		m(TextInput, { value: state.value }),

		m(TextInput, { label: 'Specific ID attribute supplied', id: 'the-id', value: state.value }),

		m(TextInput, { value: state.value, oninput: onInputTextInputA.bind(null) }),

		m(TextInput, {
			value: state.value,
			oninput: onInputTextInputA.bind(null),
			errors: state.errorsA,
		}),

		m(TextInput, { type: TextInput.types.multiline, value: state.value, oninput: onInputTextInputA.bind(null) }),

		m(TextInput, {
			label: 'Random Number of Errors on input',
			value: state.value,
			type: TextInput.types.multiline,
			errors: state.errorsB,
			oninput: onInputTextInputB.bind(null),
		}),
		m('pre', JSON.stringify(state.value, '', 2)),

		m('h2', 'Variations'),

		m(TextInput, { label: 'Variation 1', variation: 'variation-1' }),

	]);
}


module.exports = {
	view: view,
};
