<template>
    <div>
        <b>{{name}}</b>
    </div>
</template>

<script>
    define(['Vue'], function (Vue) {
      Vue.component('my-header-component', {
          template: template,
          props: ['name']
      });
    });
</script>