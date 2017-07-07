<template>
    <div>
        <div class="oj-web-applayout-footer-item oj-web-applayout-max-width">
            <ul>
              <li>aaa</li>
              <li>bbb</li>
              <li>ccc</li>
            </ul>
         </div>
        <div class="oj-web-applayout-footer-item oj-web-applayout-max-width oj-text-secondary-color oj-text-sm">
            Copyright © 2014, 2017 Oracle and/or its affiliates All rights reserved.
        </div>
    </div>
</template>

<script>
    define(['Vue'], function (Vue) {
      Vue.component('my-footer-component', {
          template: template
      });
    });
</script>