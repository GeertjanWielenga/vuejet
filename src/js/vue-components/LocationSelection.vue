<template>
    <div id="location"></div>
</template>

<script>
      define(['Vue', 'text!data/cities.json', 'ojs/ojtree', 'ojs/ojdatacollection-common'],
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
                  sourceChanged: function (event, ui) {
                        if (ui.func === 'select') {
                          var city = this._arrayToCity(ui['item']);
                          var country = this._arrayToCountry(ui['item']);
                          if (country !== 'undefined') {
                                this.source = city + ', ' + country;
                                this.$emit('sourceChanged', this.source);
                          }
                        }
                  },
                  _arrayToCity(arr) {
                        var s = "";
                        $.each(arr, function (i, val) {
                          if (i) {
                                s += ", ";
                          }
                          s += $(arr[i]).attr("id");
                        });
                        return s;
                  },
                  _arrayToCountry(arr) {
                        var s = "";
                        $.each(arr, function (i, val) {
                          if (i) {
                                s += ", ";
                          }
                          s += $(arr[i]).attr("country");
                        });
                        return s;
                  }
                },
                mounted() {
                  $('#location').ojTree({
                        before: this.sourceChanged,
                        data: new oj.JsonTreeDataSource(this.items)
                  });
                }
          });
        });
</script>