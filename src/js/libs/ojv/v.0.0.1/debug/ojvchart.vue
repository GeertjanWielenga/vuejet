<template>
    <div></div>
</template>

<script>
   define(['Vue', 'ojs/ojchart'],
    function (Vue) {
      Vue.component('ojvchart', {
          template: template,
          props: {
	    type: String,
	    orientation: String,
	    series: Array
          },
          mounted() {
            $(this.$el).ojChart({
                type: this.type,
                orientation: this.orientation,
                stack: 'off',
                series: this.series,
                groups: ["Group A", "Group B"],
                animationOnDisplay: 'auto',
                animationOnDataChange: 'auto',
                hoverBehavior: 'dim'
            });
          }
      });
    });
</script>