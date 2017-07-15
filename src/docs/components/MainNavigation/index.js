'use strict';


var m = require('mithril');
var domainActions = require('./../../domain/actions');
var domainStore = require('./../../domain/store');
var CSSManager = require('./../../../components/utils').CSSManager;


var name = 'docs_MainNavigation';
var className = '.' + name;
var css = {
	background: '#f5f5f5',
	height: '100%',
	left: 0,
	position: 'fixed',
	top: 0,
	width: '320px',
	zIndex: 3
};


CSSManager.addComponentHeadStyle(className, css);


function view() {
	var style = {};

	if (!domainStore.isMainNavigationShowing()) {
		style.display = 'none';
	}

	return m(className, { style: style }, [
		m('button', { onclick: domainActions.toggleMainNavigationDisplay.bind(null) }, 'X'),
		m('ul', [
			m('li', m('a', { href: '#!/' }, 'Home')),
			m('li', m('a', { href: '#!/component/Grid' }, 'Grid')),
			m('li', m('a', { href: '#!/component/Button' }, 'Button')),
			m('li', m('a', { href: '#!/component/TextField' }, 'TextField')),
			m('li', m('a', { href: '#!/component/RadioGroup' }, 'RadioGroup')),
			m('li', m('a', { href: '#!/component/Tabs' }, 'Tabs')),
			m('li', m('a', { href: '#!/component/Checkbox' }, 'Checkbox')),
			m('li', m('a', { href: '#!/component/Toggle' }, 'Toggle')),
			m('li', m('a', { href: '#!/component/Select' }, 'Select')),
			m('li', m('a', { href: '#!/component/ProgressBar' }, 'ProgressBar')),
			m('li', m('a', { href: '#!/component/Accordion' }, 'Accordion')),
			m('li', m('a', { href: '#!/component/Carousel' }, 'Carousel')),
			m('li', m('a', { href: '#!/component/DateInput' }, 'DateInput')),
			m('li', m('a', { href: '#!/component/Pagination' }, 'Pagination')),
			m('li', m('a', { href: '#!/component/Breadcrumbs' }, 'Breadcrumbs')),
			m('li', m('a', { href: '#!/component/TagList' }, 'TagList')),
			m('li', m('a', { href: '#!/component/Slider' }, 'Slider')),
			m('li', m('a', { href: '#!/component/Icon' }, 'Icon')),
			m('li', m('a', { href: '#!/component/Tooltip' }, 'Tooltip')),
			m('li', m('a', { href: '#!/component/Snackbar' }, 'Snackbar')),
			m('li', m('a', { href: '#!/component/Dialog' }, 'Dialog')),
			m('li', m('a', { href: '#!/component/Panel' }, 'Panel')),
			m('li', m('a', { href: '#!/component/ListGroup' }, 'ListGroup')),
			m('li', m('a', { href: '#!/component/Embed' }, 'Embed'))
		])
	]);
}

module.exports = {
	view: view
};
