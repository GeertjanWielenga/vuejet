/* global google, VueGoogleMaps */

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
				source: "Amsterdam, Netherlands",
				mapTypeId1: google.maps.MapTypeId.ROADMAP,
				mapTypeId2: google.maps.MapTypeId.SATELLITE,
				center: {lat: 52.3702, lng: 4.8952}
			  };
			},
			methods: {
			  sourceChanged: function (source) {
				this.source = source;
				this.findLatLon();
			  },
			  findLatLon: function () {
				var self = this;
				var geocoder = new google.maps.Geocoder();
				geocoder.geocode({'address': this.source},
				  function (results, status) {
					if (status === google.maps.GeocoderStatus.OK) {
					  lat = results[0].geometry.location.lat();
					  lon = results[0].geometry.location.lng();
					  self.center = {lat: lat, lng: lon};
					}
				  });
			  }
			}
		  });
		});