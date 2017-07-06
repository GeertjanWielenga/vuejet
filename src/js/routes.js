define([
  './viewModels/dashboard_1',
  './viewModels/incidents_1',
  './viewModels/customers_1'
  ], function(dashboard, incidents, customers){
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
      }
    ]
  });