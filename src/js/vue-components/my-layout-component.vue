<template>
    <div class='oj-web-applayout-page'>
        <div class='oj-web-applayout-header'>
            <my-header-component
                class='oj-web-applayout-max-width oj-flex-bar oj-sm-align-items-center'
                name='App Name'>
            </my-header-component>
            <div id="navigationlist" class='oj-sm-only-hide oj-md-condense'>
                <ul class='oj-md-justify-content-flex-end oj-web-applayout-navbar'>
                    <li v-for='link in links'>
                    <router-link :to='link.url'
                        class="oj-navigationlist-focused-element oj-navigationlist-item-content">
                        <span :class='link.iconClass'></span>
                        <span>{{link.name}}</span>
                    </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="oj-web-applayout-max-width oj-web-applayout-content">
            <router-view></router-view>
        </div>
        <my-footer-component
            class='oj-web-applayout-footer'>
        </my-footer-component>
    </div>
</template>

<script>
    define(['Vue', 'vue_router', 'routes', 'NavDataFactory',
            'ojs/ojnavigationlist',
            'vue!vue-components/my-header-component',
            'vue!vue-components/my-footer-component'
           ],
        function (Vue, VueRouter, AppRoutes, NavDataFactory) {
              Vue.use(VueRouter);
              var router = new VueRouter({
                mode: 'hash',
                routes: AppRoutes
              });
              Vue.component('my-layout-component', {
                  template: template,
                  router: router,
                  mounted() {
                    $('#navigationlist').ojNavigationList({
                      edge: 'top',
                      navigationLevel: 'application'
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