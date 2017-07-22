define(['Vue', 'text!views/dashboard.html',
  'ojs/ojdatacollection-common',
  'vue!libs/ojv/v.0.0.1/debug/ojvtree',
  'vue!libs/ojv/v.0.0.1/debug/ojvsimpleweather'], function (Vue, file) {
  return Vue.extend({
	template: file,
	data: function () {
	  return {
		myLocation: 'Tokyo, Japan'
	  };
	},
	methods: {
	  setLocation(val) {
		this.myLocation = val;
	  }
	}
  });
});