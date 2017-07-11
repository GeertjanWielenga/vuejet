define(['Vue', 'text!views/incidents.html', 
  'vue!libs/ojv/v.0.0.1/debug/ojvchart',
  'vue!libs/ojv/v.0.0.1/debug/ojvdatepicker',
  'ojs/ojdatetimepicker', 'ojs/ojtimezonedata',
  'vue!libs/ojv/v.0.0.1/debug/ojvgauge'
],
		function (Vue, file) {
		  return Vue.extend({
			template: file,
			data: function () {
			  return {
				myDate: '12/23/2016',
				value: 20,
				stats: [
				  {name: "Series 1", items: [42, 34]},
				  {name: "Series 2", items: [55, 30]},
				  {name: "Series 3", items: [36, 50]},
				  {name: "Series 4", items: [22, 46]},
				  {name: "Series 5", items: [22, 46]}]
			  };
			},
			methods: {
			  setDate(val) {
				this.myDate = val;
			  }
			}
		  });
		});