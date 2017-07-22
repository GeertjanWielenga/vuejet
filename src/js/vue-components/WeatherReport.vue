<template>
    <p>Weather -- {{source}}</p>
</template>

<script>
   define(['Vue', 'simpleWeather'],
    function (Vue) {
      Vue.component('WeatherReport', {
          template: template,
          props: ['source'],
          data() {
            return {
                stats: []
            };
          },
          created: function () {
            this.updateSource(this.source);
          },
          methods: {
            updateSource: function (source) {
                $.simpleWeather({
                  location: this.source,
                  woeid: '',
                  unit: 'c',
                  success: function (weatherObject) {
                      console.log(weatherObject);
                  }
                });
            }
          },
          watch: {
            source: function (val) {
                this.updateSource(val);
            }
          }
      });
    });
</script>