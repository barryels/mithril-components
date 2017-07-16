'use strict';


var CSSManager = require('./../../../components/utils').CSSManager;

var config = {
	base_unit: 8,
	base_font_size: 14,
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
			margin: 0,
		},
	});

}


function initComponentStyling() {
	var Button = require('./../../../components/Button');
	var GridContainer = require('./../../../components/GridContainer');
	var GridRow = require('./../../../components/GridRow');
	var GridColumn = require('./../../../components/GridColumn');
	var Checkbox = require('./../../../components/Checkbox');
	var ProgressBar = require('./../../../components/ProgressBar');

	CSSManager.updateComponentHeadStyle(Button.className, {
		background: '#fff',
		border: '1px solid #ccc',
		padding: config.base_unit + 'px',

		':disabled': {
			background: '#eee',
			color: '#ccc',
		},
	});


	CSSManager.updateComponentHeadStyle(GridContainer.className, {
		background: 'rgba(255,0,0,0.3)',
	});

	CSSManager.updateComponentHeadStyle(GridRow.className, {
		background: 'rgba(0,255,0,0.3)',
	});

	CSSManager.updateComponentHeadStyle(GridColumn.className, {
		background: 'rgba(0,0,255,0.3)',
		border: '1px solid #f00',
		padding: '10px',
		textAlign: 'center',
	});

	CSSManager.updateComponentHeadStyle(Checkbox.className, {
		background: '#fff',
		border: '1px solid #ccc',
		height: config.base_unit * 2 + 'px',
		width: config.base_unit * 2 + 'px',

		':disabled': {
			background: '#eee',
			color: '#ccc',
		},
	});

	var ProgressBarStyle = {
		height: config.base_unit * 4 + 'px',
		marginBottom: config.base_unit * 2 + 'px',

		'&__Foreground': {
			height: config.base_unit * 4 + 'px',
		},
	};
	CSSManager.updateComponentHeadStyle(ProgressBar.className, ProgressBarStyle);

}


module.exports = {
	init: init,
};
