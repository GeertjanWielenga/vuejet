<template>

    <div class="oj-flex-bar oj-web-applayout-max-width oj-sm-align-items-center">
        <div id="navigationlist" class='oj-flex-bar-end oj-sm-only-hide oj-md-condense'>
            <ul class='oj-md-justify-content-flex-end oj-web-applayout-navbar'>
                <li v-for='link in links'>
                <router-link :to='link.path'
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
	define(['Vue', 'vue_router', 'routes', 'routes'],
			function (Vue, VueRouter, AppRoutes, routes) {
			  Vue.use(VueRouter);
			  var router = new VueRouter({
				mode: 'hash',
				routes: AppRoutes
			  });
			  Vue.component('Header2', {
				template: template,
				router: router,
				data: function () {
				  return {
					links: routes
				  };
				},
				mounted() {
				  $('#navigationlist').ojNavigationList({
					edge: 'top',
					navigationLevel: 'application'
				  });
				}
			  });
			});
</script>