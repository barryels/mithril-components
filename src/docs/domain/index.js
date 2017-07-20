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
		'/component/Divider': { name: 'Divider' },
		'/component/Grid': { name: 'Grid' },
		'/component/GridList': { name: 'GridList' },
		'/component/Icon': { name: 'Icon' },
		'/component/List': { name: 'List' },
		'/component/Media': { name: 'Media' },
		'/component/Notification': { name: 'Notification' },
		'/component/Pagination': { name: 'Pagination' },
		'/component/Panel': { name: 'Panel' },
		'/component/ProgressIndicator': { name: 'ProgressIndicator' },
		'/component/RadioGroup': { name: 'RadioGroup' },
		'/component/SegmentedInput': { name: 'SegmentedInput' },
		'/component/Select': { name: 'Select' },
		'/component/Slider': { name: 'Slider' },
		'/component/TagList': { name: 'TagList' },
		'/component/Table': { name: 'Table' },
		'/component/Tabs': { name: 'Tabs' },
		'/component/TextInput': { name: 'TextInput' },
		'/component/Tooltip': { name: 'Tooltip' },
		'/component/Switch': { name: 'Switch' },
	},
};


module.exports = {
	query: require('./query')(state),
	command: require('./command')(state),
};
