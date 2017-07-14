'use strict';


var j2c = require('j2c')();


var name = 'CSSManager';


function addHeadStyle(id, css, doUpdateExisting) {
	var cssString = '',
		head = getHTMLHead(),
		style,
		styleId = '';

	console.warn(name + '.addHeadStyle(' + id + ') requesting to add styling', 'doUpdateExisting: ', doUpdateExisting);

	styleId = 'CSSManager-' + id;

	if (typeof css === 'string') {
		cssString = css;
	} else {
		cssString = j2c.sheet(css);
	}

	if (doUpdateExisting) {
		if (doesHeadStyleExist(styleId)) {
			// console.warn(name + '.addHeadStyle(' + id + ') updating styling');
			// Replace existing style tag
			style = getHeadStyleById(styleId);
			style.innerHTML += cssString;
		}
	} else {
		// New style tag
		// console.warn(name + '.addHeadStyle(' + id + ') adding styling');
		style = createDOMStyleElement();
		style.id = styleId;
		style.appendChild(document.createTextNode(cssString));
		head.appendChild(style);
	}
}


function doesHeadStyleExist(id) {
	if (getHeadStyleById(id)) {
		return true;
	}
	return false;
}


function getHeadStyleById(id) {
	return document.getElementById(id);
}


function addGlobalHeadStyle(id, css, doUpdateExisting) {
	addHeadStyle(id, {
		'@global': css
	}, doUpdateExisting);
}


function addComponentHeadStyle(id, css, doUpdateExisting) {
	var _css = {
		'@global': {}
	};
	_css['@global'][id] = css;

	addHeadStyle(id, _css, doUpdateExisting);
}


function updateComponentHeadStyle(id, css) {
	addComponentHeadStyle(id, css, true);
}


function addHTMLLinkTag(href) {
	var head = getHTMLHead();

	var l = document.createElement('link');

	l.setAttribute('rel', 'stylesheet');
	l.setAttribute('href', href);

	head.appendChild(l);
}


function getHTMLHead() {
	return document.head || document.getElementsByTagName('head')[0];
}


function createDOMStyleElement() {
	return document.createElement('style');
}


function generateCSSFromJS(js) {
	return j2c.sheet(js);
}


module.exports = {
	name: name,
	generateCSSFromJS: generateCSSFromJS,
	addHeadStyle: addHeadStyle,
	addGlobalHeadStyle: addGlobalHeadStyle,
	addComponentHeadStyle: addComponentHeadStyle,
	updateComponentHeadStyle: updateComponentHeadStyle,
	addHTMLLinkTag: addHTMLLinkTag
};
