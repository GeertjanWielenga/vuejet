define(['Vue', 'text!views/dashboard.html',
  'vue!vue-components/LocationSelection',
  'vue!vue-components/WeatherReport',
  'vue!vue-components/WeatherForecast',
  'ojs/ojdatacollection-common'], 
function (Vue, file, locationselection, weatherreport, weatherforecast) {
  return Vue.extend({
	components: {
	  locationselection,
	  weatherreport,
	  weatherforecast
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