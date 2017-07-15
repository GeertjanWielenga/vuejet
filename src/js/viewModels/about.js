/* global Newslist, SourceSelection */
define(['Vue', 'text!views/about.html', 'vue_resource',
  'vue!vue-components/SourceSelection',
  'vue!vue-components/NewsList'
],
		function (Vue, file, VueResource, sourceselection, newslist) {
		  Vue.use(VueResource);
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