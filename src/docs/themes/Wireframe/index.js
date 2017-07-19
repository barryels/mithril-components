'use strict';


var CSSManager = require('./../../../components/utils').CSSManager;


var name = 'ThemeWireframe';
var config = {
	base_unit: 8,
	base_font_size: 14,
};


function init() {
	initGlobalStyling();
	initComponentStyling();
}


function initGlobalStyling() {
	CSSManager.addGlobalHeadStyle(name, {
		'html, body': {
			background: '#fff',
			color: '#222',
			fontFamily: 'Arial, sans-serif',
			fontSize: config.base_font_size + 'px',
			margin: 0,
		},
	});

}


function initComponentStyling() {
	var Button = require('./../../../components/Button');
	var Checkbox = require('./../../../components/Checkbox');
	var GridContainer = require('./../../../components/GridContainer');
	var GridRow = require('./../../../components/GridRow');
	var GridColumn = require('./../../../components/GridColumn');
	var List = require('./../../../components/List');
	var ProgressIndicator = require('./../../../components/ProgressIndicator');
	var TextInput = require('./../../../components/TextInput');


	Button.theme.base({
		background: '#fff',
		border: '1px solid #ccc',
		boxShadow: '0 2px 0 2px rgba(0,0,0,0.75)',
		marginBottom: config.base_unit + 'px',
		padding: config.base_unit + 'px',

		'&:hover': {
			background: '#ccc',
			color: '#000',
		},
	});

	Button.theme.disabled({
		background: '#eee',
		color: '#ccc',
	});


	TextInput.theme.base({
		marginBottom: config.base_unit * 2 + 'px',
	});
	TextInput.theme.label({
		display: 'block',
		marginBottom: config.base_unit + 'px',
	});
	TextInput.theme.input({
		borderBottom: '2px solid #ccc',
		display: 'block',
		marginBottom: config.base_unit + 'px',
		padding: config.base_unit + 'px 0',
	});
	TextInput.theme.hasErrorsLabel({
		color: '#c00',
	});
	TextInput.theme.hasErrorsInput({
		borderBottomColor: '#c00',
	});
	TextInput.theme.errorMessages({
		color: '#c00',
	});


	List.theme.item({
		background: '#ccc',
		borderBottom: '2px solid #f00',
		padding: (config.base_unit * 2) + 'px',
	});
	List.theme.itemFirst({
		// background: '#000',
	});
	List.theme.itemLast({
		borderBottom: '0',
	});


	CSSManager.updateComponentHeadStyle(GridContainer.className, {
		background: 'rgba(255,0,0,0.3)',
	});

	CSSManager.updateComponentHeadStyle(GridRow.className, {
		background: 'rgba(0,255,0,0.3)',
		marginBottom: '10px',
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

	var ProgressIndicatorStyle = {
		height: config.base_unit * 4 + 'px',
		marginBottom: config.base_unit * 2 + 'px',

		'&__Foreground': {
			height: config.base_unit * 4 + 'px',
		},
	};
	CSSManager.updateComponentHeadStyle(ProgressIndicator.className, ProgressIndicatorStyle);

}


module.exports = {
	init: init,
};
