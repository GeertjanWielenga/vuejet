define([
  './viewModels/dashboard',
  './viewModels/incidents',
  './viewModels/customers',
  './viewModels/about'
  ], function(dashboard, incidents, customers, about){
    return [
      {name: 'Dashboard', id: 'dashboard', component: dashboard, path: '/',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-chart-icon-24'},
      {name: 'Incidents', id: 'incidents', component: incidents, path: '/incidents',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-fire-icon-24'},
      {name: 'Customers', id: 'customers', component: customers, path: '/customers',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-people-icon-24'},
      {name: 'About', id: 'about', component: about, path: '/about',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-info-icon-24'}
      ];
  });