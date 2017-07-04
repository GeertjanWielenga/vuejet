<template>
    <div>
        <ul v-for='module in modules'>
            <li>
              <router-link :to='module.url'>{{module.title}}</router-link>
            </li>
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