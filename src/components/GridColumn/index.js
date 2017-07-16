'use strict';


var m = require('mithril');
var CSSManager = require('./../utils').CSSManager;


var name = 'GridColumn';
var className = '.' + name;
var types = {};
var cssMediaQueries = {
	_0: '@media (min-width: 0px)',
	_768: '@media (min-width: 768px)',
	_992: '@media (min-width: 992px)',
	_1200: '@media (min-width: 1200px)',
};
var css = {
	boxSizing: 'border-box',
	position: 'relative',
	minHeight: '1px',
	paddingLeft: '15px',
	paddingRight: '15px',
};


function init() {
	var i, j;
	var columns = 12;
	var columnNumber = 0;
	var breakpoints = ['xs', 'sm', 'md', 'lg'];
	var currentBreakpoint;
	var _css = {};

	_css[cssMediaQueries._0] = {};
	_css[cssMediaQueries._768] = {};
	_css[cssMediaQueries._992] = {};
	_css[cssMediaQueries._1200] = {};

	var allColumns_xs_string = '';
	var allColumns_sm_string = '';
	var allColumns_md_string = '';
	var allColumns_lg_string = '';

	for (i = 0; i < columns; i++) {
		var width = 0;
		columnNumber = i + 1;

		width = 100 * (columnNumber / 12) + '%';
		// console.log(columnNumber, width);

		for (j = 0; j < breakpoints.length; j++) {
			currentBreakpoint = breakpoints[j];
			types[currentBreakpoint + String(columnNumber)] = '--' + currentBreakpoint + '-' + columnNumber;

			// console.log(currentBreakpoint, columnNumber);

			switch (currentBreakpoint) {
				case 'xs':
					allColumns_xs_string += '&--' + currentBreakpoint + '-' + columnNumber + ', ';
					// _css['&--' + currentBreakpoint + '-' + columnNumber] = {
					// 	width: width,
					// };
					_css[cssMediaQueries._0]['&--' + currentBreakpoint + '-' + columnNumber] = {
						width: width,
					};
					break;

				case 'sm':
					allColumns_sm_string += '&--' + currentBreakpoint + '-' + columnNumber + ', ';
					_css[cssMediaQueries._768]['&--' + currentBreakpoint + '-' + columnNumber] = {
						width: width,
					};
					break;

				case 'md':
					allColumns_md_string += '&--' + currentBreakpoint + '-' + columnNumber + ', ';
					_css[cssMediaQueries._992]['&--' + currentBreakpoint + '-' + columnNumber] = {
						width: width,
					};
					break;

				case 'lg':
					allColumns_lg_string += '&--' + currentBreakpoint + '-' + columnNumber + ', ';
					_css[cssMediaQueries._1200]['&--' + currentBreakpoint + '-' + columnNumber] = {
						width: width,
					};
					break;
			}

			// Add push, pull, offset
		}

	}

	// Remove trailing commas
	allColumns_xs_string = allColumns_xs_string.substr(0, allColumns_xs_string.length - 2);
	allColumns_sm_string = allColumns_sm_string.substr(0, allColumns_sm_string.length - 2);
	allColumns_md_string = allColumns_md_string.substr(0, allColumns_md_string.length - 2);
	allColumns_lg_string = allColumns_lg_string.substr(0, allColumns_lg_string.length - 2);

	_css[allColumns_xs_string] = {
		float: 'left',
	};

	_css[cssMediaQueries._768][allColumns_sm_string] = {
		float: 'left',
	};

	_css[cssMediaQueries._992][allColumns_md_string] = {
		float: 'left',
	};

	_css[cssMediaQueries._1200][allColumns_lg_string] = {
		float: 'left',
	};

	console.log(allColumns_xs_string);
	// console.log(types);

	console.log(_css);

	css[className] = _css;

	CSSManager.addComponentHeadStyle(className, css);
}


function view(vnode) {
	var i,
		classNameModifier = '';

	if (vnode.attrs.types) {
		for (i = 0; i < vnode.attrs.types.length; i++) {
			classNameModifier += className + '' + vnode.attrs.types[i];
		}
	}

	return m(className + classNameModifier, {
	}, vnode.children);
}


init();


module.exports = {
	types: types,
	className: className,
	view: view,
};
