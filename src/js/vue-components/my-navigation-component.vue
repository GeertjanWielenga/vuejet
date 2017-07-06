<template>
    <div>
        <div class='oj-web-applayout-header'>
            <my-header-component
                class='oj-web-applayout-max-width oj-flex-bar oj-sm-align-items-center'
                name='App Name'>
            </my-header-component>
            <div id="navigationlist" class='oj-sm-only-hide oj-md-condense'>
                <ul class='oj-md-justify-content-flex-end oj-web-applayout-navbar'>
                    <router-link class='oj-navigationlist-item-icon demo-icon-font-24 demo-chart-icon-24'
                        active-class='oj-navigationlist-item-element oj-navigationlist-item oj-selected'
                        tag='li'
                        to='/'>
                        <a>Dashboard</a>
                    </router-link>
                    <router-link class='oj-navigationlist-item-icon demo-icon-font-24 demo-fire-icon-24'
                        active-class='oj-navigationlist-item-element oj-navigationlist-item oj-selected'
                        tag='li'
                        to='/incidents'>
                        <a>Incidents</a>
                    </router-link>
                    <router-link class='oj-navigationlist-item-icon demo-icon-font-24 demo-people-icon-24'
                        active-class='oj-navigationlist-item-element oj-navigationlist-item oj-selected'
                        tag='li'
                        to='/customers'>
                        <a>Customers</a>
                    </router-link>
                    <router-link class='oj-navigationlist-item-icon demo-icon-font-24 demo-info-icon-24'
                        active-class='oj-navigationlist-item-element oj-navigationlist-item oj-selected'
                        tag='li'
                        to='/about'>
                        <a>About</a>
                    </router-link>
                </ul>
            </div>
        </div>
        <router-view class='oj-web-applayout-max-width oj-web-applayout-content'></router-view>
    </div>
</template>

<script>
    define(['Vue', 'vue_router', 'routes'], function (Vue, VueRouter, AppRoutes) {
      Vue.use(VueRouter);
      var router = new VueRouter({
        mode: 'hash',
        routes: AppRoutes
      });
      Vue.component('my-navigation-component', {
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