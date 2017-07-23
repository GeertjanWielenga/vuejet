<template>
    <div id="chart">
        <h3>Today: {{temp}}</h3>
    </div>
</template>

<script>
   define(['Vue', 'simpleWeather'],
    function (Vue) {
      Vue.component('WeatherForecast', {
          template: template,
          props: ['source'],
          data() {
            return {
               groups: ['', '', '', '', ''],
               series: [{items: this.getSeriesItems()}],
               currently: '',
               temp: ''
            };
          },
          updated: function() {
              $('#chart').ojChart("refresh");
          },
          created: function () {
            this.updateSource(this.source);
          },
          methods: {
            getSeriesItems: function() {
                var items = [];
                for (var g = 0; g < 5; g++) {
                    items.push("0");
                }
                return items;
            },
            updateSource: function (source) {
                var self = this;
                $.simpleWeather({
                  location: source,
                  woeid: '',
                  unit: 'c',
                  success: function (weatherObject) {
                      self.currently = weatherObject.currently;
                      self.temp = weatherObject.temp + '´' + weatherObject.units.temp;
                      for (var s = 0; s < self.series.length; s++) {
                        for (var g = 0; g < self.series[s].items.length; g++) {
                            self.series[s].items[g] = weatherObject.forecast[g].high;
                            self.groups[g] = weatherObject.forecast[g].day;
                        }
                      }
                  }
                });
            }
          },
          watch: {
            source: function (val) {
                this.updateSource(val);
            }
          },
          mounted() {
            $(this.$el).ojChart({
                 type: 'line',
                 orientation: 'vertical',
                 series: this.series,
                 groups: this.groups,
                 animationOnDisplay: 'auto',
                 animationOnDataChange: 'auto'
            });
          }
      });
    });
</script>