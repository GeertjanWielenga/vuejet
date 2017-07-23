# Full Replacement of Knockout with Vue in Oracle JET

Experimental Demo App illustrating inclusion of 
the following in an Oracle JET app, with the exclusion
of Knockout:

   * [vue](https://vuejs.org/)
   * [require-vuejs](https://github.com/edgardleal/require-vuejs)
   * [vue-router](https://github.com/vuejs/vue-router)
   * [vue-resource](https://github.com/pagekit/vue-resource) 
    ([retired](https://medium.com/the-vue-point/retiring-vue-resource-871a82880af4)) and 
    [axios](https://github.com/mzabriskie/axios) with [vue-axios](https://github.com/imcvampire/vue-axios)
   * [enquire](http://wicky.nillia.ms/enquire.js) (for responsive design)

## Purpose 

Investigate whether and to what extend Knockout can
be replaced with Vue in Oracle JET applications.

## Set Up

After cloning the repo, take the following steps in the order below.

`npm install`: the dependencies set in the
 [package.json](https://github.com/GeertjanWielenga/vuejet/blob/master/package.json) file are downloaded.

`grunt build`: the `web` staging folder is created and the custom libraries defined in the
  [oraclejet-build.js](https://github.com/GeertjanWielenga/vuejet/blob/master/scripts/grunt/config/oraclejet-build.js) 
  file are automatically moved to `web/js/libs`. The custom libraries
  are the Vue libraries, together with Enquire, listed above.

`grunt serve`: the application in the `web` staging folder opens in the browser, while
 the watch list defined in the
 [oraclejet-serve.js](https://github.com/GeertjanWielenga/vuejet/blob/master/scripts/grunt/config/oraclejet-serve.js)
 file is used to ensure that changes are automatically reloaded. 


## Tasks

 ### 1. Register Vue via Require in an Oracle JET application.

 **Status:** ![yes](https://github.com/GeertjanWielenga/vuejet/blob/master/green.png "Done")
 See the 
 [package.json](https://github.com/GeertjanWielenga/vuejet/blob/master/package.json) and
 [main.js](https://github.com/GeertjanWielenga/vuejet/blob/master/src/js/main.js) files.

### 2. Rewrite Oracle JET modules to use Vue instead of Knockout.

 **Status:** ![yes](https://github.com/GeertjanWielenga/vuejet/blob/master/green.png "Done") See the 
 [views](https://github.com/GeertjanWielenga/vuejet/tree/master/src/js/views) folder and the
 [viewModels](https://github.com/GeertjanWielenga/vuejet/tree/master/src/js/viewModels) folder.

### 3. Create and load Vue components in Oracle JET modules.

 **Status:** ![yes](https://github.com/GeertjanWielenga/vuejet/blob/master/green.png "Done") See the 
 [vue-components](https://github.com/GeertjanWielenga/vuejet/tree/master/src/js/vue-components) 
 folder, containing Vue components, loaded via 
 [require-vuejs](https://github.com/edgardleal/require-vuejs), as shown in
 [Layout2.vue](https://github.com/GeertjanWielenga/vuejet/blob/master/src/js/vue-components/Layout2.vue).

### 4. Split combined constructs into HTML/JS files.

 **Status:** In progress. Done for Vue-based Oracle JET modules, not yet for Vue components. Also,
 investigate creating a [Vue plugin](https://vuejs.org/v2/guide/plugins.html) that will automatically
 load the two together, removing the requirement to load the HTML file into the JavaScript,
 as is done by `ojModule` in standard Oracle JET applications.
 See the
 [dashboard.html](https://github.com/GeertjanWielenga/vuejet/blob/master/src/js/views/dashboard.html) and
 [dashboard.js](https://github.com/GeertjanWielenga/vuejet/blob/master/src/js/viewModels/dashboard.js) files.

### 5. Wrap Oracle JET components in Vue components.

 **Status:** In progress. Each Oracle JET component is a jQuery UI component
 that needs to be wrapped as a Vue component, so that custom tags
 provided by Vue can be used to load Oracle JET components. See the
 [ojvdatepicker.vue](https://github.com/GeertjanWielenga/vuejet/blob/master/src/js/libs/ojv/v.0.0.1/debug/ojvdatepicker.vue) and the
 [ojvchart.vue](https://github.com/GeertjanWielenga/vuejet/blob/master/src/js/libs/ojv/v.0.0.1/debug/ojvchart.vue) files.

### 6. Replace Oracle JET router with vue-router.

 **Status:** ![yes](https://github.com/GeertjanWielenga/vuejet/blob/master/green.png "Done") See the 
 [package.json](https://github.com/GeertjanWielenga/vuejet/blob/master/package.json), 
 [main.js](https://github.com/GeertjanWielenga/vuejet/blob/master/src/js/main.js), and 
 [Header2.vue](https://github.com/GeertjanWielenga/vuejet/blob/master/src/js/vue-components/Header2.vue) files.

### 7. Provide new solution for handling responsive design.

 **Status:** ![yes](https://github.com/GeertjanWielenga/vuejet/blob/master/green.png "Done") Knockout-based utility classes for responsive design
 are replaced by Enquire.js. See the
 [Header1.vue](https://github.com/GeertjanWielenga/vuejet/blob/master/src/js/vue-components/Header1.vue) file.

### 8. Rewrite 'navdrawer' Oracle JET template to use Vue components.

 **Status:** ![yes](https://github.com/GeertjanWielenga/vuejet/blob/master/green.png "Done") See the 
 [index.html](https://github.com/GeertjanWielenga/vuejet/blob/master/src/index.html) and the
 [Layout2.vue](https://github.com/GeertjanWielenga/vuejet/blob/master/src/js/vue-components/Layout2.vue) files.

### 9. Include Vue libraries in build and serve Grunt tasks.

 **Status:** ![yes](https://github.com/GeertjanWielenga/vuejet/blob/master/green.png "Done") See the
 [oraclejet-build.js](https://github.com/GeertjanWielenga/vuejet/blob/master/scripts/grunt/config/oraclejet-build.js) and 
 [oraclejet-serve.js](https://github.com/GeertjanWielenga/vuejet/blob/master/scripts/grunt/config/oraclejet-serve.js) files.

### 10. Remove Knockout from the application.

 **Status:** ![yes](https://github.com/GeertjanWielenga/vuejet/blob/master/green.png "Done") No more references to Knockout anywhere.

### 11. Integrate vue-resource and Axios for HTTP/REST/AJAX calls.

 **Status:** ![yes](https://github.com/GeertjanWielenga/vuejet/blob/master/green.png "Done") After integrating [vue-resource](https://github.com/pagekit/vue-resource) successfully, it was removed 
 because it has been [retired](https://medium.com/the-vue-point/retiring-vue-resource-871a82880af4)
 and replaced with [axios](https://github.com/mzabriskie/axios) 
 and [vue-axios](https://github.com/imcvampire/vue-axios). See the 
 [about.html](https://github.com/GeertjanWielenga/vuejet/blob/master/src/js/views/about.html) and
 [about.js](https://github.com/GeertjanWielenga/vuejet/blob/master/src/js/viewModels/about.js) 
 files, which integrates usage of [axios](https://github.com/mzabriskie/axios), defined in
 [SourceSelection.vue](https://github.com/GeertjanWielenga/vuejet/blob/master/src/js/vue-components/SourceSelection.vue).

### 12. Investigate whether/how CCA components can be integrated.

 **Status:** In progress. Maybe Vue components are enough, though
 it would be useful to be able to create CCA components that use Vue
 instead of Knockout and figure out how to reuse them in CCA-supporting
 products.

### 13. Investigate usage of Webpack instead of Require.

 **Status:** Not started. Maybe fork this project and then
 work on migrating from Require to Webpack via the fork.

## Screenshots

![pic2](https://github.com/GeertjanWielenga/vuejet/blob/master/pic-2.png "pic2")
![pic3](https://github.com/GeertjanWielenga/vuejet/blob/master/pic-3.png "pic3")
![pic4](https://github.com/GeertjanWielenga/vuejet/blob/master/pic-4.png "pic4")

## References and Further Information

   * [GitHub: Simple RequireJS App with Vue](https://github.com/GeertjanWielenga/RequireJSSamples/tree/master/RequireVue)
   * [YouTube: From Knockout to Vue in Oracle JET](https://www.youtube.com/watch?v=BMs9KoSGi7s)
   * [YouTube: Replacing Knockout Completely in Oracle JET](https://www.youtube.com/watch?v=54CqLy_t7KY)
   * [CodePen: Vue.js + jQueryUI Datepicker](https://codepen.io/nicolebek/pen/oxgvxe)
   * [Making Jquery ui datepicker work with Vuejs](https://forum.vuejs.org/t/making-jquery-ui-datepicker-works-with-vuejs/2752/10)
   * [Understanding Vue.js Lifecycle Hooks](https://alligator.io/vuejs/component-lifecycle/)
   * [Mutating Props Locally](https://stackoverflow.com/questions/39868963/vue-2-mutating-props-vue-warn)
   * [Retiring vue-resource](https://medium.com/the-vue-point/retiring-vue-resource-871a82880af4)
   * [Vue.js 2 & Vue-Resource - Real-World Vue Application With External API Access](https://medium.com/codingthesmartway-com-blog/vue-js-2-vue-resource-real-world-vue-application-with-external-api-access-c3de83f25c00)
   * [Fetching Data from a Third-Party API with Vue.js and Axios](https://www.sitepoint.com/fetching-data-third-party-api-vue-axios/)
   * [Weather](http://simpleweatherjs.com/)
   * [Google Maps](https://www.npmjs.com/package/vue2-google-maps)