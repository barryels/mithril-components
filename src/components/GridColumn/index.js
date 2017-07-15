'use strict';


var m = require('mithril');
var CSSManager = require('./../utils').CSSManager;


var name = 'GridColumn';
var className = '.' + name;
var types = {};
var cssMediaQueries = {
	'_768': '@media (min-width: 768px)',
	'_992': '@media (min-width: 992px)',
	'_1200': '@media (min-width: 1200px)'
};
var css = {
	boxSizing: 'border-box',
	position: 'relative',
	minHeight: '1px',
	paddingLeft: '15px',
	paddingRight: '15px'
};


function init() {
	var i, j;
	var columns = 12;
	var columnNumber = 0;
	var breakpoints = ['xs', 'sm', 'md', 'lg'];
	var currentBreakpoint;
	var _css = {};

	css[cssMediaQueries._768] = {
		// float: 'left',
	};
	css[cssMediaQueries._992] = {
		// float: 'left',
	};
	css[cssMediaQueries._1200] = {
		// float: 'left',
	};

	for (i = 0; i < columns; i++) {
		var width = 0;
		columnNumber = i + 1;

		width = 100 * (columnNumber / 12) + '%';

		console.log(columnNumber, width);

		for (j = 0; j < breakpoints.length; j++) {
			currentBreakpoint = breakpoints[j];
			types[currentBreakpoint + String(columnNumber)] = '--' + currentBreakpoint + '-' + columnNumber;

			_css['&--' + currentBreakpoint + '-' + columnNumber] = {
				float: 'left',
				width: width,
			};

			// Add push, pull, offset
		}

	}

	console.log(types);

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
	view: view
};
