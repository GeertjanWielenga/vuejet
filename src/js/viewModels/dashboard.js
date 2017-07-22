define(['Vue', 'text!views/dashboard.html',
  'vue!vue-components/LocationSelection',
  'vue!vue-components/WeatherReport',
  'ojs/ojdatacollection-common'], function (Vue, file, locationselection, weatherreport) {
  return Vue.extend({
	components: {
	  locationselection,
	  weatherreport
	},
	template: file,
	data: function () {
	  return {
		source: ""
	  };
	},
	methods: {
	  sourceChanged: function (source) {
		this.source = source;
	  }
	}
  });
});