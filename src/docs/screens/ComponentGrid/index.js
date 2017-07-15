'use strict';


var m = require('mithril');


var GridContainer = require('./../../../components/GridContainer');
var GridRow = require('./../../../components/GridRow');
var GridColumn = require('./../../../components/GridColumn');


function view() {
	return m('div', [
		m('h1', 'Grid'),

		m('h2', 'Regular'),
		m(GridContainer,
			m(GridRow,
				m(GridColumn, { types: [GridColumn.types.xs1] }, '1'),
				m(GridColumn, { types: [GridColumn.types.xs1] }, '2'),
				m(GridColumn, { types: [GridColumn.types.xs1] }, '3'),
				m(GridColumn, { types: [GridColumn.types.xs1] }, '4'),
				m(GridColumn, { types: [GridColumn.types.xs1] }, '5'),
				m(GridColumn, { types: [GridColumn.types.xs1] }, '6'),
				m(GridColumn, { types: [GridColumn.types.xs1] }, '7'),
				m(GridColumn, { types: [GridColumn.types.xs1] }, '8'),
				m(GridColumn, { types: [GridColumn.types.xs1] }, '9'),
				m(GridColumn, { types: [GridColumn.types.xs1] }, '10'),
				m(GridColumn, { types: [GridColumn.types.xs1] }, '11'),
				m(GridColumn, { types: [GridColumn.types.xs1] }, '12'),
			),
			m(GridRow,
				m(GridColumn, { types: [GridColumn.types.xs2] }, '1'),
				m(GridColumn, { types: [GridColumn.types.xs2] }, '2'),
				m(GridColumn, { types: [GridColumn.types.xs2] }, '3'),
				m(GridColumn, { types: [GridColumn.types.xs2] }, '4'),
				m(GridColumn, { types: [GridColumn.types.xs2] }, '5'),
				m(GridColumn, { types: [GridColumn.types.xs2] }, '6'),
			),
			m(GridRow,
				m(GridColumn, { types: [GridColumn.types.xs3] }, '1'),
				m(GridColumn, { types: [GridColumn.types.xs3] }, '2'),
				m(GridColumn, { types: [GridColumn.types.xs3] }, '3'),
				m(GridColumn, { types: [GridColumn.types.xs3] }, '4')
			),
			m(GridRow,
				m(GridColumn, { types: [GridColumn.types.xs4] }, '1'),
				m(GridColumn, { types: [GridColumn.types.xs4] }, '2'),
				m(GridColumn, { types: [GridColumn.types.xs4] }, '3'),
			),
			m(GridRow,
				m(GridColumn, { types: [GridColumn.types.xs6] }, '1 (xs-6)'),
				m(GridColumn, { types: [GridColumn.types.xs6] }, '2 (xs-6)'),
			),
			m(GridRow,
				m(GridColumn, { types: [GridColumn.types.xs1, GridColumn.types.sm2, GridColumn.types.md4, GridColumn.types.lg4,] }, '1 (xs1, sm2, md3, lg4)'),
				m(GridColumn, { types: [GridColumn.types.xs1, GridColumn.types.sm2, GridColumn.types.md4, GridColumn.types.lg4,] }, '2 (xs1, sm2, md3, lg4)'),
				m(GridColumn, { types: [GridColumn.types.xs1, GridColumn.types.sm2, GridColumn.types.md4, GridColumn.types.lg4,] }, '3 (xs1, sm2, md3, lg4)'),
				m(GridColumn, { types: [GridColumn.types.xs1, GridColumn.types.sm2, GridColumn.types.md4, GridColumn.types.lg4,] }, '4 (xs1, sm2, md3, lg4)'),
				m(GridColumn, { types: [GridColumn.types.xs1, GridColumn.types.sm2, GridColumn.types.md4, GridColumn.types.lg4,] }, '5 (xs1, sm2, md3, lg4)'),
				m(GridColumn, { types: [GridColumn.types.xs1, GridColumn.types.sm2, GridColumn.types.md4, GridColumn.types.lg4,] }, '6 (xs1, sm2, md3, lg4)'),
				m(GridColumn, { types: [GridColumn.types.xs1, GridColumn.types.sm2, GridColumn.types.md4, GridColumn.types.lg4,] }, '7 (xs1, sm2, md3, lg4)'),
				m(GridColumn, { types: [GridColumn.types.xs1, GridColumn.types.sm2, GridColumn.types.md4, GridColumn.types.lg4,] }, '8 (xs1, sm2, md3, lg4)'),
				m(GridColumn, { types: [GridColumn.types.xs1, GridColumn.types.sm2, GridColumn.types.md4, GridColumn.types.lg4,] }, '9 (xs1, sm2, md3, lg4)'),
				m(GridColumn, { types: [GridColumn.types.xs1, GridColumn.types.sm2, GridColumn.types.md4, GridColumn.types.lg4,] }, '10 (xs1, sm2, md3, lg4)'),
				m(GridColumn, { types: [GridColumn.types.xs1, GridColumn.types.sm2, GridColumn.types.md4, GridColumn.types.lg4,] }, '11 (xs1, sm2, md3, lg4)'),
				m(GridColumn, { types: [GridColumn.types.xs1, GridColumn.types.sm2, GridColumn.types.md4, GridColumn.types.lg4,] }, '12 (xs1, sm2, md3, lg4)'),
			),
		),

		m('h2', 'Fluid'),
		m(GridContainer, { type: GridContainer.types.FLUID },
			m(GridRow,
				m(GridColumn, 'Column 1')
			)
		)
	]);
}


module.exports = {
	view: view
};
