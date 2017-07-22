<template>
    <div>
        <h3>Currently: {{currently}}</h3>
    </div>
</template>

<script>
   define(['Vue', 'simpleWeather'],
    function (Vue) {
      Vue.component('WeatherReport', {
          template: template,
          props: ['source'],
          data() {
            return {
               currently: ''
            };
          },
          created: function () {
            this.updateSource(this.source);
          },
          methods: {
            updateSource: function (source) {
                var self = this;
                $.simpleWeather({
                  location: source,
                  woeid: '',
                  unit: 'c',
                  success: function (weatherObject) {
                      self.currently = weatherObject.currently;
//                      console.log(weatherObject);
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