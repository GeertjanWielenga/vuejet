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
                            <span :class='link.icon'></span>
                            <span class="oj-navigationlist-item-label">{{link.title}}</span>
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
    define(['Vue', 'vue_router', 'routes',
            'ojs/ojnavigationlist',
            'vue!vue-components/my-header-component',
            'vue!vue-components/my-footer-component'
           ],
        function (Vue, VueRouter, AppRoutes) {
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
                        links: [
                          {
                          'url': '/',
                          'title': 'Dashboard',
                          'icon': 'demo-chart-icon-24 oj-navigationlist-item-icon demo-icon-font-24'
                        },{
                          'url': '/incidents',
                          'title': 'Incidents',
                          'icon': 'demo-fire-icon-24 oj-navigationlist-item-icon demo-icon-font-24'
                        },{
                          'url': '/customers',
                          'title': 'Customers',
                          'icon': 'demo-people-icon-24 oj-navigationlist-item-icon demo-icon-font-24'
                        },{
                          'url': '/about',
                          'title': 'About',
                          'icon': 'demo-info-icon-24 oj-navigationlist-item-icon demo-icon-font-24'
                        }
                      ]
                    };
                  }
              });
        });
</script>