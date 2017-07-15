<template>
    <div class='oj-web-applayout-page'>
        <div class='oj-web-applayout-header'>
            <Header1 name='App Name'/>
            <Header2/>
        </div>
        <div class="oj-web-applayout-max-width oj-web-applayout-content">
            <router-view/>
        </div>
        <Footer class='oj-web-applayout-footer'/>
    </div>
</template>

<script>
	define(['Vue', 'vue_router', 'routes',
	  'ojs/ojnavigationlist',
	  'vue!vue-components/Header1',
	  'vue!vue-components/Header2',
	  'vue!vue-components/Footer'
	],
			function (Vue, VueRouter, AppRoutes) {
			  Vue.use(VueRouter);
			  var router = new VueRouter({
				mode: 'hash',
				routes: AppRoutes
			  });
			  Vue.component('Layout2', {
				template: template,
				router: router
			  });
			});
</script>