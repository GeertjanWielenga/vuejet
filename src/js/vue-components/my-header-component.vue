<template>
    <div>
        <span role="img" class="oj-sm-only-hide oj-icon demo-oracle-icon" title="Oracle Logo" alt="Oracle Logo"></span>
        <span class="oj-web-applayout-header-title">{{name}}</span>
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