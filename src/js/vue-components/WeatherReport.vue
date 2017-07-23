<template>
    <div>
        <h3>Summary: {{currently}}</h3>
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
               currently: '',
               temp: ''
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
                      self.temp = weatherObject.temp + '´' + weatherObject.units.temp;
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