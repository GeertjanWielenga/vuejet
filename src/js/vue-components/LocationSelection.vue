<template>
    <select id="citySelect" class="form-control" v-on:change="sourceChanged">
        <option value="">Please select a capital city...</option>
        <option v-for="item in items" v-bind:value="item.city+', '+item.country">{{item.country}}, {{item.city}}</option>
    </select>
</template>

<script>
      define(['Vue', 'text!libs/country-json/src/country-by-capital-city.json', 'ojs/ojselectcombobox'],
        function (Vue, file) {
          Vue.component('LocationSelection', {
                template: template,
                data() {
                  var items = JSON.parse(file);
                  return {
                        source: '',
                        items: items
                  };
                },
                methods: {
                  sourceChanged: function(e) {
                    alert('nothing happening here');
                  }
                },
                mounted() {
                    $('#citySelect').ojSelect({
                        optionChange: (event, ui) => {
                          this.$emit('sourceChanged', ui['value']);
                          this.source = ui['value'];
                        }
                    });
                }
          });
        });
</script>