define(['Vue', 'text!views/dashboard.html',
  'vue!vue-components/LocationSelection',
  'vue!vue-components/WeatherReport',
  'vue!vue-components/WeatherForecast',
  'ojs/ojdatacollection-common'], 
function (Vue, file, locationselection, weatherreport, weatherforecast) {
  Vue.use(VueGoogleMaps, {
      load: {
        key: 'AIzaSyDLNm1oBRipQ_9kh2LEN_ZZ97qy2DcSfGE'
      }
  });
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