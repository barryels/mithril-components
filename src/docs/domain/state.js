'use strict';


var state = {
	isMainNavigationShowing: false,
	AppHeader: {
		height: 64,
	},
	routes: {
		'/': { name: 'Home' },
		'/404': { name: 'FourOhFour' },
		'/component/Grid': { name: 'Grid' },
		'/component/Button': { name: 'Button' },
		'/component/TextInput': { name: 'TextInput' },
		'/component/RadioGroup': { name: 'RadioGroup' },
		'/component/Tabs': { name: 'Tabs' },
		'/component/Checkbox': { name: 'Checkbox' },
		'/component/Toggle': { name: 'Toggle' },
		'/component/Select': { name: 'Select' },
		'/component/ProgressBar': { name: 'ProgressBar' },
		'/component/Accordion': { name: 'Accordion' },
		'/component/Carousel': { name: 'Carousel' },
		'/component/DateInput': { name: 'DateInput' },
		'/component/SegmentedInput': { name: 'SegmentedInput' },
		'/component/Pagination': { name: 'Pagination' },
		'/component/Breadcrumbs': { name: 'Breadcrumbs' },
		'/component/TagList': { name: 'TagList' },
		'/component/Slider': { name: 'Slider' },
		'/component/Icon': { name: 'Icon' },
		'/component/Tooltip': { name: 'Tooltip' },
		'/component/Snackbar': { name: 'Snackbar' },
		'/component/Dialog': { name: 'Dialog' },
		'/component/Panel': { name: 'Panel' },
		'/component/ListGroup': { name: 'ListGroup' },
		'/component/Media': { name: 'Media' },
		'/component/Table': { name: 'Table' },
	},
};


module.exports = state;
