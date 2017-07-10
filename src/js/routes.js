define([
  './viewModels/dashboard',
  './viewModels/incidents',
  './viewModels/customers',
  './viewModels/about'
  ], function(dashboard, incidents, customers, about){
    return [
      {
        path:'/',
        component: dashboard
      },
      {
        path:'/incidents',
        component: incidents
      },
      {
        path:'/customers',
        component: customers
      },
      {
        path:'/about',
        component: about
      }
    ];
  });