<template>
    <div class="oj-contrast-marker">
        <div id="navDrawer" class="oj-web-applayout-offcanvas oj-offcanvas-start">
            <ul class='oj-md-justify-content-flex-end oj-web-applayout-navbar'>
                <li v-for='link in links'>
                    <router-link v-bind:to='link.path' tag="a"
                        class="oj-navigationlist-focused-element oj-navigationlist-item-content">
                        <span v-bind:class='link.iconClass'></span>
                        <span>{{link.name}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
   define(['Vue', 'vue_router', 'routes'],
    function (Vue, VueRouter, routes) {
      Vue.use(VueRouter);
            var router = new VueRouter({
              mode: 'hash',
              routes: routes
            });
      Vue.component('Layout1', {
          template: template,
          router: router,
          mounted() {
            $('#navDrawer').ojNavigationList({
                navigationLevel: 'application',
                edge: 'start'
            });
          },
          data: function() {
              return {
                  links: routes
              };
          }
      });
    });
</script>