define(['Vue', 'text!views/incidents.html', 'vue!libs/ojv/v.0.0.1/debug/ojvchart'],
		function (Vue, file) {
		  return Vue.extend({
			template: file,
			data: function () {
			  return {
				stats: [
				  {name: "Series 1", items: [42, 34]},
				  {name: "Series 2", items: [55, 30]},
				  {name: "Series 3", items: [36, 50]},
				  {name: "Series 4", items: [22, 46]},
				  {name: "Series 5", items: [22, 46]}]
			  };
			}
		  });
		});