<template>
    <div class='oj-web-applayout-page'>
        <div class='oj-web-applayout-header'>
            <my-header-component
                class='oj-web-applayout-max-width oj-flex-bar oj-sm-align-items-center'
                name='App Name'>
            </my-header-component>
            <div id="navigationlist" class='oj-sm-only-hide oj-md-condense'>
                <ul class='oj-md-justify-content-flex-end oj-web-applayout-navbar'>
                    <li class="oj-navigationlist-item-element oj-navigationlist-item">
                        <router-link to="/"
                           class="oj-navigationlist-focused-element oj-navigationlist-item-content">
                            <span class="oj-navigationlist-item-icon demo-icon-font-24 demo-chart-icon-24"></span>
                            <span class="oj-navigationlist-item-label">Dashboard</span>
                        </router-link>
                    </li>
                    <li class="oj-navigationlist-item-element oj-navigationlist-item">
                        <router-link to="/incidents"
                           class="oj-navigationlist-focused-element oj-navigationlist-item-content">
                            <span class="oj-navigationlist-item-icon demo-icon-font-24 demo-fire-icon-24"></span>
                            <span class="oj-navigationlist-item-label">Incidents</span>
                        </router-link>
                    </li>
                    <li class="oj-navigationlist-item-element oj-navigationlist-item">
                        <router-link to="/customers"
                           class="oj-navigationlist-focused-element oj-navigationlist-item-content">
                            <span class="oj-navigationlist-item-icon demo-icon-font-24 demo-fire-icon-24"></span>
                            <span class="oj-navigationlist-item-label">Customers</span>
                        </router-link>
                    </li>
                    <li class="oj-navigationlist-item-element oj-navigationlist-item">
                        <router-link to="/about"
                           class="oj-navigationlist-focused-element oj-navigationlist-item-content">
                            <span class="oj-navigationlist-item-icon demo-icon-font-24 demo-fire-icon-24"></span>
                            <span class="oj-navigationlist-item-label">About</span>
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
                  }
              });
        });
</script>