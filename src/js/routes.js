define([
  './viewModels/dashboard',
  './viewModels/incidents',
  './viewModels/customers',
  './viewModels/about'
  ], function(dashboard, incidents, customers, about){
    return [
      {name: 'Dashboard', component: dashboard, path: '/',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-chart-icon-24'},
      {name: 'Incidents', component: incidents, path: '/incidents',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-fire-icon-24'},
      {name: 'Customers', component: customers, path: '/customers',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-people-icon-24'},
      {name: 'About', component: about, path: '/about',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-info-icon-24'}
      ];
  });