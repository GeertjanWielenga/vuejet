define(['Vue', 
  'text!views/customers.html', 
  'vue!libs/ojv/v.0.0.1/debug/ojvgrid'], 
 function(Vue, file) {
  return Vue.extend({
    template: file,
    data: function() {
      return {
		  searchQuery: '',
		  gridColumns: ['name', 'power'],
		  gridData: [
			{name: 'Chuck Norris', power: 'Infinity'},
			{name: 'Bruce Lee', power: 9000},
			{name: 'Jackie Chan', power: 7000},
			{name: 'Jet Li', power: 8000}
		  ]
      };
    }
  });
});