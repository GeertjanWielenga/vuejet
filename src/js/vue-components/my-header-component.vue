<template>
    <div>
        <h3>{{name}} Content Area</h2>
        <hr>
    </div>
</template>

<script>
    define(['Vue'], function (Vue) {
      Vue.component("my-header-component", {
          template: template,
          props: ['name']
      });
    });
</script>