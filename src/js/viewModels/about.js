/* global Newslist, SourceSelection */
define(['Vue', 'text!views/about.html', 'vue_axios', 'axios',
  'vue!vue-components/SourceSelection',
  'vue!vue-components/NewsList'
],
		function (Vue, file, VueAxios, axios, sourceselection, newslist) {
		  Vue.use(VueAxios, axios);
		  return Vue.extend({
			components: {
			  sourceselection,
			  newslist
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