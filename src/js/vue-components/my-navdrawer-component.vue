<template>
    <div class="oj-contrast-marker">
        <div id="navDrawer" class="oj-web-applayout-offcanvas oj-offcanvas-start">
            <ul class='oj-md-justify-content-flex-end oj-web-applayout-navbar'>
                <li v-for='link in links'>
                    <router-link :to='link.url' tag="a"
                        class="oj-navigationlist-focused-element oj-navigationlist-item-content">
                        <span :class='link.iconClass'></span>
                        <span>{{link.name}}</span>
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