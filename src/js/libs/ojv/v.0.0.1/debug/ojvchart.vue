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
	    orientation: String
          },
          mounted() {
            $(this.$el).ojChart({
                type: this.type,
                orientation: this.orientation,
                stack: 'off',
                series: [ {name: "Series 1", items: [42, 34]},
                             {name: "Series 2", items: [55, 30]},
                             {name: "Series 3", items: [36, 50]},
                             {name: "Series 4", items: [22, 46]},
                             {name: "Series 5", items: [22, 46]}],
                groups: ["Group A", "Group B"],
                animationOnDisplay: 'auto',
                animationOnDataChange: 'auto',
                hoverBehavior: 'dim'
            });
          }
      });
    });
</script>