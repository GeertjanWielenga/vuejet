<template>
    <div>
        <div id="navDrawer" class="oj-contrast-marker oj-web-applayout-offcanvas oj-offcanvas-start">
        </div>
        <div class="oj-flex-bar-start oj-md-hide">
            <button id="drawerToggleButton" class="oj-button-lg"></button>
        </div>
        <div>
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
    </div>
</template>

<script>
    define(['Vue', 'NavDataFactory', 'ojs/ojoffcanvas',
        'ojs/ojbutton', 'ojs/ojmenu', 'ojs/ojtoolbar',
        'ojs/ojarraytabledatasource',
        'ojs/ojcollectiontabledatasource'],
    function (Vue, NavDataFactory) {
      Vue.component('my-header-component', {
        template: template,
        props: ['name'],
        mounted() {
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
            $("#drawerToggleButton").click(function(){
               return oj.OffcanvasUtils.toggle({
                displayMode: 'push',
                selector: '#navDrawer',
                content: '#pageContent'
               });
            });
            $('#menu1').ojMenu({
            });
            $('#navDrawer').ojNavigationList({
                navigationLevel: 'application',
                item: {template: 'navTemplate'},
                data: new oj.ArrayTableDataSource(NavDataFactory.createNavDataFactory(), {idAttribute: 'id'}),
                edge: 'start'
            });
        }
      });
    });
</script>