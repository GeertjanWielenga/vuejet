<template>
    <div class="container">
      <ul class="media-list">
        <li class="media" v-for="article in articles">
          <div class="media-left">
            <a v-bind:href="article.url" target="_blank">
              <img class="media-object" v-bind:src="article.urlToImage">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading"><a v-bind:href="article.url" target="_blank">{{article.title}}</a></h4>
            <h5><i>by {{article.author}}</i></h5>
            <p>{{article.description}}</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
	define(['Vue'], function (Vue) {
	  Vue.component('NewsList', {
		template: template,
		props: ['source'],
		data() {
		  return {
			articles: []
		  }
		},
		methods: {
		  updateSource: function (source) {
			this.$http.get('https://newsapi.org/v1/articles?source=' + source + '&apiKey=28c1e583f45f4b9681096130ab063229')
					.then(response => {
					  this.articles = response.data.articles;
					});
		  }
		},
		created: function () {
		  this.updateSource(this.source);
		},
		watch: {
		  source: function (val) {
			this.updateSource(val);
		  }
		}
	  });
	});
</script>