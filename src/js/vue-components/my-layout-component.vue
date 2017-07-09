<template>
    <div class='oj-web-applayout-page'>
        <my-header-component
            class='oj-web-applayout-header'
            name='App Name'>
        </my-header-component>
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
				router: router
			  });
			});
</script>