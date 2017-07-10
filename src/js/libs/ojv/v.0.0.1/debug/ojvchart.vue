<template>
    <div id="chart"></div>
</template>

<script>
   define(['Vue', 'ojs/ojchart'],
    function (Vue) {
      Vue.component('ojvchart', {
          template: template,
          mounted() {
            $('#chart').ojChart({
                type: 'bar',
                orientation: 'vertical',
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