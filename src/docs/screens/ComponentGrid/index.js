'use strict';


var m = require('mithril');


var GridContainer = require('./../../../components/GridContainer');
var GridRow = require('./../../../components/GridRow');
var GridColumn = require('./../../../components/GridColumn');


var testGrid1 = [
	m(GridRow,
		m(GridColumn, { types: [GridColumn.types.xs1] }, '1 (xs1)'),
		m(GridColumn, { types: [GridColumn.types.xs1] }, '2 (xs1)'),
		m(GridColumn, { types: [GridColumn.types.xs1] }, '3 (xs1)'),
		m(GridColumn, { types: [GridColumn.types.xs1] }, '4 (xs1)'),
		m(GridColumn, { types: [GridColumn.types.xs1] }, '5 (xs1)'),
		m(GridColumn, { types: [GridColumn.types.xs1] }, '6 (xs1)'),
		m(GridColumn, { types: [GridColumn.types.xs1] }, '7 (xs1)'),
		m(GridColumn, { types: [GridColumn.types.xs1] }, '8 (xs1)'),
		m(GridColumn, { types: [GridColumn.types.xs1] }, '9 (xs1)'),
		m(GridColumn, { types: [GridColumn.types.xs1] }, '10 (xs1)'),
		m(GridColumn, { types: [GridColumn.types.xs1] }, '11 (xs1)'),
		m(GridColumn, { types: [GridColumn.types.xs1] }, '12 (xs1)'),
	),
	m(GridRow,
		m(GridColumn, { types: [GridColumn.types.sm1] }, '1 (sm1)'),
		m(GridColumn, { types: [GridColumn.types.sm1] }, '2 (sm1)'),
		m(GridColumn, { types: [GridColumn.types.sm1] }, '3 (sm1)'),
		m(GridColumn, { types: [GridColumn.types.sm1] }, '4 (sm1)'),
		m(GridColumn, { types: [GridColumn.types.sm1] }, '5 (sm1)'),
		m(GridColumn, { types: [GridColumn.types.sm1] }, '6 (sm1)'),
		m(GridColumn, { types: [GridColumn.types.sm1] }, '7 (sm1)'),
		m(GridColumn, { types: [GridColumn.types.sm1] }, '8 (sm1)'),
		m(GridColumn, { types: [GridColumn.types.sm1] }, '9 (sm1)'),
		m(GridColumn, { types: [GridColumn.types.sm1] }, '10 (sm1)'),
		m(GridColumn, { types: [GridColumn.types.sm1] }, '11 (sm1)'),
		m(GridColumn, { types: [GridColumn.types.sm1] }, '12 (sm1)'),
	),
	m(GridRow,
		m(GridColumn, { types: [GridColumn.types.xs2] }, '1 (xs2)'),
		m(GridColumn, { types: [GridColumn.types.xs2] }, '2 (xs2)'),
		m(GridColumn, { types: [GridColumn.types.xs2] }, '3 (xs2)'),
		m(GridColumn, { types: [GridColumn.types.xs2] }, '4 (xs2)'),
		m(GridColumn, { types: [GridColumn.types.xs2] }, '5 (xs2)'),
		m(GridColumn, { types: [GridColumn.types.xs2] }, '6 (xs2)'),
	),
	m(GridRow,
		m(GridColumn, { types: [GridColumn.types.xs3] }, '1 (xs3)'),
		m(GridColumn, { types: [GridColumn.types.xs3] }, '2 (xs3)'),
		m(GridColumn, { types: [GridColumn.types.xs3] }, '3 (xs3)'),
		m(GridColumn, { types: [GridColumn.types.xs3] }, '4 (xs3)'),
	),
	m(GridRow,
		m(GridColumn, { types: [GridColumn.types.xs4] }, '1 (xs4)'),
		m(GridColumn, { types: [GridColumn.types.xs4] }, '2 (xs4)'),
		m(GridColumn, { types: [GridColumn.types.xs4] }, '3 (xs4)'),
	),
	m(GridRow,
		m(GridColumn, { types: [GridColumn.types.xs6] }, '1 (xs6)'),
		m(GridColumn, { types: [GridColumn.types.xs6] }, '2 (xs6)'),
	),
	m(GridRow,
		m(GridColumn, { types: [GridColumn.types.xs12, GridColumn.types.sm6, GridColumn.types.md4, GridColumn.types.lg3,] }, '1 (xs12, sm2, md4, lg3)'),
		m(GridColumn, { types: [GridColumn.types.xs12, GridColumn.types.sm6, GridColumn.types.md4, GridColumn.types.lg3,] }, '2 (xs12, sm2, md4, lg3)'),
		m(GridColumn, { types: [GridColumn.types.xs12, GridColumn.types.sm6, GridColumn.types.md4, GridColumn.types.lg3,] }, '3 (xs12, sm2, md4, lg3)'),
		m(GridColumn, { types: [GridColumn.types.xs12, GridColumn.types.sm6, GridColumn.types.md4, GridColumn.types.lg3,] }, '4 (xs12, sm2, md4, lg3)'),
		m(GridColumn, { types: [GridColumn.types.xs12, GridColumn.types.sm6, GridColumn.types.md4, GridColumn.types.lg3,] }, '5 (xs12, sm2, md4, lg3)'),
		m(GridColumn, { types: [GridColumn.types.xs12, GridColumn.types.sm6, GridColumn.types.md4, GridColumn.types.lg3,] }, '6 (xs12, sm2, md4, lg3)'),
		m(GridColumn, { types: [GridColumn.types.xs12, GridColumn.types.sm6, GridColumn.types.md4, GridColumn.types.lg3,] }, '7 (xs12, sm2, md4, lg3)'),
		m(GridColumn, { types: [GridColumn.types.xs12, GridColumn.types.sm6, GridColumn.types.md4, GridColumn.types.lg3,] }, '8 (xs12, sm2, md4, lg3)'),
		m(GridColumn, { types: [GridColumn.types.xs12, GridColumn.types.sm6, GridColumn.types.md4, GridColumn.types.lg3,] }, '9 (xs12, sm2, md4, lg3)'),
		m(GridColumn, { types: [GridColumn.types.xs12, GridColumn.types.sm6, GridColumn.types.md4, GridColumn.types.lg3,] }, '10 (xs12, sm2, md4, lg3)'),
		m(GridColumn, { types: [GridColumn.types.xs12, GridColumn.types.sm6, GridColumn.types.md4, GridColumn.types.lg3,] }, '11 (xs12, sm2, md4, lg3)'),
		m(GridColumn, { types: [GridColumn.types.xs12, GridColumn.types.sm6, GridColumn.types.md4, GridColumn.types.lg3,] }, '12 (xs12, sm2, md4, lg3)'),
	),
];


function view() {
	return m('div', [
		m('h1', 'Grid'),

		m('h2', 'Regular'),
		m(GridContainer, testGrid1),

		m('h2', 'Fluid'),
		m(GridContainer, { type: GridContainer.types.FLUID }, testGrid1)
	]);
}


module.exports = {
	view: view
};
