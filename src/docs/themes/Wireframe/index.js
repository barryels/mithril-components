'use strict';


var CSSManager = require('./../../../components/utils').CSSManager;

var config = {
	base_unit: 8,
	base_font_size: 14
};


function init() {
	initGlobalStyling();
	initComponentStyling();
}


function initGlobalStyling() {
	CSSManager.addGlobalHeadStyle('theme', {
		'html, body': {
			background: '#fff',
			color: '#555',
			fontFamily: 'Arial, sans-serif',
			fontSize: config.base_font_size + 'px',
			margin: 0
		}
	});

}


function initComponentStyling() {
	var Button = require('./../../../components/Button');

	CSSManager.updateComponentHeadStyle(Button.className, {
		background: '#fff',
		border: '1px solid #ccc',
		padding: config.base_unit + 'px',

		':disabled': {
			background: '#eee',
			color: '#ccc'
		}
	});

}


module.exports = {
	init: init
};
