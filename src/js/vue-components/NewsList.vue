<template>
    <div class="container">
        <div id="filmStrip">
            <span class="oj-panel oj-panel-alt2 demo-filmstrip-item" v-for="article in articles">
                <div class="media-body">
                    <h4 class="media-heading"><a v-bind:href="article.url" target="_blank">{{article.title}}</a></h4>
                    <h5><i>by {{article.author}}</i></h5>
                    <p>{{article.description}}</p>
                    <div class="media-left">
                        <a v-bind:href="article.url" target="_blank">
                            <img class="media-object" v-bind:src="article.urlToImage">
                        </a>
                    </div>
                </div>
            </span>
        </div>
    </div>
</template>

<script>
        define(['Vue', 'ojs/ojfilmstrip'], function (Vue) {
          Vue.component('NewsList', {
                template: template,
                props: ['source'],
                data() {
                  return {
                        articles: []
                  };
                },
                methods: {
                  updateSource: function (source) {
                        this.$http.get('https://newsapi.org/v1/articles?source=' + source + '&apiKey=28c1e583f45f4b9681096130ab063229')
                                        .then(response => {
                                          this.articles = response.data.articles;
                                        });
                  }
                },
                updated: function() {
                  $('#filmStrip').ojFilmStrip("refresh");
                },
                created: function () {
                  this.updateSource(this.source);
                },
                mounted() {
                  $('#filmStrip').ojFilmStrip({
                        arrowPlacement: "adjacent",
                        arrowVisibility: "visible"
                  });
                },
                watch: {
                  source: function (val) {
                        this.updateSource(val);
                  }
                }
          });
        });
</script>