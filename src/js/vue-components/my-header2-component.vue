<template>

    <div class="oj-flex-bar oj-web-applayout-max-width oj-sm-align-items-center">
        <div id="navigationlist" class='oj-flex-bar-end oj-sm-only-hide oj-md-condense'>
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

</template>

<script>
	define(['Vue', 'vue_router', 'routes', 'NavDataFactory'],
			function (Vue, VueRouter, AppRoutes, NavDataFactory) {
			  Vue.use(VueRouter);
			  var router = new VueRouter({
				mode: 'hash',
				routes: AppRoutes
			  });
			  Vue.component('my-header2-component', {
				template: template,
				router: router,
				data: function () {
				  return {
					links: NavDataFactory.createNavDataFactory()
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