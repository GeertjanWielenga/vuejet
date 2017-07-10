<template>
    <div class='oj-web-applayout-page'>
        <div class='oj-web-applayout-header'>
            <my-header1-component
                name='App Name'>
            </my-header1-component>
            <my-header2-component/>
        </div>
        <div class="oj-web-applayout-max-width oj-web-applayout-content">
            <router-view/>
        </div>
        <my-footer-component
            class='oj-web-applayout-footer'>
        </my-footer-component>
    </div>
</template>

<script>
	define(['Vue', 'vue_router', 'routes',
	  'ojs/ojnavigationlist',
	  'vue!vue-components/my-header1-component',
	  'vue!vue-components/my-header2-component',
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