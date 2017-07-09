<template>
    <div>
        <div id="navDrawer" class="oj-contrast-marker oj-web-applayout-offcanvas oj-offcanvas-start">
            <ul class='oj-md-justify-content-flex-end oj-web-applayout-navbar'>
                    <li v-for='link in links'>
                    <router-link :to='link.url'
                        class="oj-navigationlist-focused-element oj-navigationlist-item-content">
                        <span :class='link.iconClass'></span>
                        <span class="oj-navigationlist-item-label">{{link.name}}</span>
                    </router-link>
                    </li>
            </ul>
        </div>
    </div>
</template>

<script>
   define(['Vue', 'vue_router', 'routes', 'NavDataFactory'],
    function (Vue, VueRouter, AppRoutes, NavDataFactory) {
      Vue.use(VueRouter);
            var router = new VueRouter({
              mode: 'hash',
              routes: AppRoutes
            });
      Vue.component('my-navdrawer-component', {
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
                  links: NavDataFactory.createNavDataFactory()
              };
          }
      });
    });
</script>