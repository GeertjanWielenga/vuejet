define([
  './viewModels/dashboard_1',
  './viewModels/customers_1'
  ], function(dashboard, customers){
    return [
      {
        path:'/',
        component: dashboard
      },
      {
        path:'/customers',
        component: customers
      }
    ]
  });