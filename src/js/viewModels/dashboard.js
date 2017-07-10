define(['Vue', 'text!views/dashboard.html'],
		function (Vue, file) {
		  return Vue.extend({
			template: file,
			data: function () {
			  return {
				links: [
				  {
					'url': 'https://vuejs.org/',
					'title': 'Vue'
				  }, {
					'url': 'https://twitter.com/vuejs',
					'title': '@vuejs'
				  }
				]
			  };
			}
		  });
		});