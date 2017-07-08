define(['ojs/ojcore'], function (oj) {
  var NavDataFactory = {
	createNavDataFactory: function () {
	  return [
      {name: 'Dashboard', id: 'dashboard', url: '/',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-chart-icon-24'},
      {name: 'Incidents', id: 'incidents', url: '/incidents',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-fire-icon-24'},
      {name: 'Customers', id: 'customers', url: '/customers',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-people-icon-24'},
      {name: 'About', id: 'about', url: '/about',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-info-icon-24'}
      ];
	}
  };
  return NavDataFactory;
});