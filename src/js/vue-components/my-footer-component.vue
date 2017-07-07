<template>
    <div>
        <div class="oj-web-applayout-footer-item oj-web-applayout-max-width">
            <ul>
                <li v-for='link in links'>
                    <a :href='link.url' target="_blank">{{link.title}}</a>
                </li>
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
          template: template,
          data: function() {
            return {
                links: [
                  {
                  'url': 'http://www.oracle.com/us/corporate/index.html#menu-about',
                  'title': 'About Oracle'
                },{
                  'url': 'http://www.oracle.com/us/corporate/contact/index.html',
                  'title': 'Contact Us'
                },{
                  'url': 'http://www.oracle.com/us/legal/index.html',
                  'title': 'Legal Notices'
                },{
                  'url': 'http://www.oracle.com/us/legal/terms/index.html',
                  'title': 'Terms Of Use'
                },{
                  'url': 'http://www.oracle.com/us/legal/privacy/index.html',
                  'title': 'Your Privacy Rights'
                }
              ]
            };
          }
      });
    });
</script>