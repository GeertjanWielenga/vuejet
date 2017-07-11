<template>
    <div></div>
</template>

<script>
   define(['Vue', 'ojs/ojgauge'],
    function (Vue) {
      Vue.component('ojvgauge', {
          template: template,
          props: {
	    min: Number,
	    max: Number,
	    value: Number
          },
          mounted() {
            $(this.$el).ojStatusMeterGauge({
                min: this.min,
                max: this.max,
                value: this.value,
                orientation: 'circular',
                readOnly: false
            });
          }
      });
    });
</script>