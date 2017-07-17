<template>
    <div></div>
</template>

<script>
   define(['Vue', 'ojs/ojgauge'],
    function (Vue) {
      Vue.component('ojvgauge', {
          template: template,
          props: ['min','max','initial'],
          data() {
              return {
                value: this.initial
              };
          },
          mounted() {
            $(this.$el).ojStatusMeterGauge({
                min: this.min,
                max: this.max,
                value: this.initial,
                orientation: 'circular',
                readOnly: false,
                style: {fill: 'blue'},
                referenceLines: [{value: 33, color:'red'},{value: 67, color:'green'}],
                optionChange: (event, ui) => {
                  this.$emit('changed', ui['value']);
                  this.value = ui['value'];
                }
            });
          }
      });
    });
</script>