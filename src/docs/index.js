'use strict';


var m = require('mithril');
require('./themes/Wireframe').init();


function init() {
	m.route(document.getElementById('app'), '/', buildRoutes());
}


function buildRoute(screen, layout) {
	var LayoutDefault = require('./layouts/Default');
	layout = layout || LayoutDefault;

	return {
		render: function () {
			return m(layout, m(screen));
		}
	};
}


function buildRoutes() {
	return {
		'/': buildRoute({
			view: function () {
				return m('div',
					m('ul', [
						m('li', m('a', { href: '#!/component/Button' }, 'Button')),
						m('li', m('a', { href: '#!/component/TextField' }, 'TextField')),
						m('li', m('a', { href: '#!/component/RadioGroup' }, 'RadioGroup')),
						m('li', m('a', { href: '#!/component/Tabs' }, 'Tabs')),
						m('li', m('a', { href: '#!/component/Checkbox' }, 'Checkbox')),
						m('li', m('a', { href: '#!/component/Toggle' }, 'Toggle')),
						m('li', m('a', { href: '#!/component/Select' }, 'Select')),
						m('li', m('a', { href: '#!/component/Grid' }, 'Grid')),
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
				);
			}
		}),
		'/component/Button': buildRoute({
			view: function () {
				var Button = require('./../components/Button');

				return m('div', [
					m('h1', 'Button'),
					m(Button),
					m(Button, 'With Label as child'),
					m(Button, { label: 'With Label as attribute' }),
					m(Button, { disabled: true }, 'Disabled'),
					m(Button, { onclick: window.alert.bind(null, 'Button clicked!') }, 'onClick')
				]);
			}
		})
	};
}


module.exports = {
	init: init
};
