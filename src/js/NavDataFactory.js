define(['ojs/ojcore'], function (oj) {
  var NavDataFactory = {
	createNavDataFactory: function () {
	  return [
		{
		  'url': '/',
		  'title': 'Dashboard',
		  'icon': 'demo-chart-icon-24 oj-navigationlist-item-icon demo-icon-font-24'
		}, {
		  'url': '/incidents',
		  'title': 'Incidents',
		  'icon': 'demo-fire-icon-24 oj-navigationlist-item-icon demo-icon-font-24'
		}, {
		  'url': '/customers',
		  'title': 'Customers',
		  'icon': 'demo-people-icon-24 oj-navigationlist-item-icon demo-icon-font-24'
		}, {
		  'url': '/about',
		  'title': 'About',
		  'icon': 'demo-info-icon-24 oj-navigationlist-item-icon demo-icon-font-24'
		}
	  ];
	}
  };
  return NavDataFactory;
});