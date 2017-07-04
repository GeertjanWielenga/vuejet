<template>
    <div id="navigationlist" class="oj-web-applayout-navbar oj-sm-only-hide oj-md-condense oj-md-justify-content-flex-end">
        <ul>
            <router-link
                active-class='oj-navigationlist-item-element oj-navigationlist-item oj-selected'
                tag='li'
                to='/'>
                <a>Dashboard</a>
            </router-link>
            <router-link
                active-class='oj-navigationlist-item-element oj-navigationlist-item oj-selected'
                tag='li'
                to='/customers'>
                <a>Customers</a>
            </router-link>
        </ul>
        <router-view></router-view>
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
          },
          data: function() {
            return {
                modules: [
                  {
                  'url': '/',
                  'title': 'Dashboard'
                },{
                  'url': '/customers',
                  'title': 'Customers'
                }
              ]
            };
          }
      });
    });
</script>