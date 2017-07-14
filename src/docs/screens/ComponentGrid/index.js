'use strict';


var m = require('mithril');


var GridContainer = require('./../../../components/GridContainer');
var GridRow = require('./../../../components/GridRow');
var GridColumn = require('./../../../components/GridColumn');


function view() {
	return m('div', [
		m('h1', 'Grid'),
		m(GridContainer,
			m(GridRow,
				m(GridColumn, 'Column 1')
			)
		)
	]);
}


module.exports = {
	view: view
};
