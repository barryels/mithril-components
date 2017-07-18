'use strict';


var state = {
	isMainNavigationShowing: false,
	AppHeader: {
		height: 64,
	},
	routes: {
		'/': { name: 'Home' },
		'/404': { name: 'FourOhFour', showInNav: false },
		'/component/Accordion': { name: 'Accordion' },
		'/component/Breadcrumbs': { name: 'Breadcrumbs' },
		'/component/Button': { name: 'Button' },
		'/component/Carousel': { name: 'Carousel' },
		'/component/Checkbox': { name: 'Checkbox' },
		'/component/DateInput': { name: 'DateInput' },
		'/component/Dialog': { name: 'Dialog' },
		'/component/Grid': { name: 'Grid' },
		'/component/Icon': { name: 'Icon' },
		'/component/ListGroup': { name: 'ListGroup' },
		'/component/Media': { name: 'Media' },
		'/component/Notification': { name: 'Notification' },
		'/component/Pagination': { name: 'Pagination' },
		'/component/Panel': { name: 'Panel' },
		'/component/ProgressBar': { name: 'ProgressBar' },
		'/component/RadioGroup': { name: 'RadioGroup' },
		'/component/SegmentedInput': { name: 'SegmentedInput' },
		'/component/Select': { name: 'Select' },
		'/component/Slider': { name: 'Slider' },
		'/component/TagList': { name: 'TagList' },
		'/component/Table': { name: 'Table' },
		'/component/Tabs': { name: 'Tabs' },
		'/component/TextInput': { name: 'TextInput' },
		'/component/Tooltip': { name: 'Tooltip' },
		'/component/Toggle': { name: 'Toggle' },
	},
};


module.exports = {
	query: require('./query')(state),
	command: require('./command')(state),
};
