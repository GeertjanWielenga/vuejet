<template>

    <div>

        <span class="oj-flex-bar oj-web-applayout-max-width oj-sm-align-items-center">

            <div class="oj-flex-bar-start oj-md-hide">
                <button id="drawerToggleButton" class="oj-button-lg"></button>
            </div>

            <div v-bind:class="[displayIsSmall ? 'oj-flex-bar-center-absolute' : 'oj-flex-bar-middle oj-sm-align-items-baseline']">
                <span role="img" class="oj-sm-only-hide oj-icon demo-oracle-icon" title="Oracle Logo" alt="Oracle Logo"></span>
                <span class="oj-web-applayout-header-title">{{name}}</span>
            </div>

            <div class="oj-flex-bar-end">
                <button id="userMenu"/>
                <ul id='menu1' >
                    <li id="pref"><a href="#">Preferences</a></li>
                    <li id="help"><a href="#">Help</a></li>
                    <li id="about"><a href="#">About</a></li>
                    <li id="out"><a href="#">Sign Out</a></li>
                </ul>
            </div>

        </span>

        <span class="oj-flex-bar oj-web-applayout-max-width oj-sm-align-items-center">
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
        </span>

    </div>

</template>

<script>
	define(['Vue', 'vue_router', 'routes', 'NavDataFactory',
	  'enquire', 'ojs/ojoffcanvas',
	  'ojs/ojbutton', 'ojs/ojmenu', 'ojs/ojtoolbar',
	  'ojs/ojarraytabledatasource',
	  'ojs/ojcollectiontabledatasource'],
			function (Vue, VueRouter, AppRoutes, NavDataFactory, enquire) {
			  Vue.use(VueRouter);
			  var router = new VueRouter({
				mode: 'hash',
				routes: AppRoutes
			  });
			  Vue.component('my-header-component', {
				template: template,
				router: router,
				props: ['name'],
				data: function () {
				  return {
                                        displayIsLarge: false,
                                        displayIsSmall: true,
			                links: NavDataFactory.createNavDataFactory()
				  };
				},
                                created: function () {
                                  var self = this;
                                  enquire.register("screen and (min-width: 760px)", {
                                      match: function () {
                                          self.displayIsLarge = true;
                                          self.displayIsSmall = false;
                                      },
                                      unmatch: function () {
                                          self.displayIsLarge = false;
                                          self.displayIsSmall = true;
                                      }
                                  })
                                },
				mounted() {
				  $('#navigationlist').ojNavigationList({
					edge: 'top',
					navigationLevel: 'application'
				  });
				  $('#userMenu').ojButton({
					menu: '#menu1',
					label: "john.hancock@oracle.com",
					chroming: 'half'
				  });
				  $('#drawerToggleButton').ojButton({
					label: 'Application Navigation',
					chroming: 'half',
					display: 'icons',
					icons: {start: 'oj-web-applayout-offcanvas-icon'}
				  });
				  $("#drawerToggleButton").click(function () {
					return oj.OffcanvasUtils.toggle({
					  displayMode: 'push',
					  selector: '#navDrawer',
					  content: '#pageContent'
					});
				  });
				  $('#menu1').ojMenu({
				  });
				}
			  });
			});
</script>