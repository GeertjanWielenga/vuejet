<template>
    <div id="weather"></div>
</template>

<script>
   define(['Vue', 'simpleWeather'],
    function (Vue) {
      Vue.component('ojvsimpleweather', {
          template: template,
          props: {
	    location: String
          },
          mounted() {
            $.simpleWeather({
                location: this.location,
                woeid: '',
                unit: 'c',
                success: function(weather) {
                    html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
                    $("#weather").html(html);
                },
                error: function(error) {
                    $("#weather").html('<p>'+error+'</p>');
                }
            });
          }
      });
    });
</script>