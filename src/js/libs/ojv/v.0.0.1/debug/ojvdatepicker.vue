<template>
    <div>
        Date: <input id="date">
    </div>
</template>

<script>
    define(['Vue'], function (Vue) {
      Vue.component('datepicker', {
            template: template,
            props: ['initial'],
            data() {
              return {
                date: this.initial
              };
            },
            mounted() {
              $('#date').ojInputDateTime({
                optionChange: (event, ui) => {
                  this.$emit('changed', ui['value']);
                  this.date = ui['value'];
                }
              });
            }
      });
    });
</script>