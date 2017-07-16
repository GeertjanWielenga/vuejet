# Full Replacement of Knockout with Vue in Oracle JET

Experimental Demo App illustrating inclusion of 
the following in an Oracle JET app, with the exclusion
of Knockout:

   * [vue](https://vuejs.org/)
   * [require-vuejs](https://github.com/edgardleal/require-vuejs)
   * [vue-router](https://github.com/vuejs/vue-router)
   * [vue-resource](https://github.com/pagekit/vue-resource) ([retired](https://medium.com/the-vue-point/retiring-vue-resource-871a82880af4)) and Axios
   * [enquire](http://wicky.nillia.ms/enquire.js) (for responsive design)

## Purpose 

Investigate whether and to what extend Knockout can
be replaced with Vue in Oracle JET applications.

## Tasks

### Register Vue via Require in an Oracle JET application.

 **Status:** Done. See the 
 [package.json](https://github.com/GeertjanWielenga/vuejet/blob/master/package.json) and
 [main.js](https://github.com/GeertjanWielenga/vuejet/blob/master/src/js/main.js) files.

### Rewrite Oracle JET modules to use Vue instead of Knockout.

 **Status:** Done. See the 
 [views](https://github.com/GeertjanWielenga/vuejet/tree/master/src/js/views) folder and the
 [viewModels](https://github.com/GeertjanWielenga/vuejet/tree/master/src/js/viewModels) folder.

### Create and load Vue components in Oracle JET modules.

 **Status:** Done. See the 
 [vue-components](https://github.com/GeertjanWielenga/vuejet/tree/master/src/js/vue-components) folder.

### Split combined constructs into HTML/JS files.

 **Status:** In progress. Done for Vue-based Oracle JET modules, not yet for Vue components.
 See the
 [dashboard.html](https://github.com/GeertjanWielenga/vuejet/blob/master/src/js/views/dashboard.html) and
 [dashboard.js](https://github.com/GeertjanWielenga/vuejet/blob/master/src/js/viewModels/dashboard.js) files.

### Wrap Oracle JET components in Vue components.

 **Status:** In progress. Each Oracle JET component is a jQuery UI component
 that needs to be wrapped as a Vue component, so that custom tags
 provided by Vue can be used to load Oracle JET components. See the
 [ojvdatepicker.vue](https://github.com/GeertjanWielenga/vuejet/blob/master/src/js/libs/ojv/v.0.0.1/debug/ojvdatepicker.vue) and the
 [ojvchart.vue](https://github.com/GeertjanWielenga/vuejet/blob/master/src/js/libs/ojv/v.0.0.1/debug/ojvchart.vue) files.

### Replace Oracle JET router with vue-router.

 **Status:** Done. See the 
 [package.json](https://github.com/GeertjanWielenga/vuejet/blob/master/package.json), 
 [main.js](https://github.com/GeertjanWielenga/vuejet/blob/master/src/js/main.js), and 
 [Header2.vue](https://github.com/GeertjanWielenga/vuejet/blob/master/src/js/vue-components/Header2.vue) files.

### Provide new solution for handling responsive design.

 **Status:** Done. Knockout-based utility classes for responsive design
 are replace by Enquire.js. See the
 [Header1.vue](https://github.com/GeertjanWielenga/vuejet/blob/master/src/js/vue-components/Header1.vue) file.

### Rewrite 'navdrawer' Oracle JET template to use Vue components.

 **Status:** Done. See the 
 [index.html](https://github.com/GeertjanWielenga/vuejet/blob/master/src/index.html) and the
 [Layout2.vue](https://github.com/GeertjanWielenga/vuejet/blob/master/src/js/vue-components/Layout2.vue) files.

### Include Vue libraries in build and serve Grunt tasks.

 **Status:** Done. See the
 [oraclejet-build.js](https://github.com/GeertjanWielenga/vuejet/blob/master/scripts/grunt/config/oraclejet-build.js) and 
 [oraclejet-serve.js](https://github.com/GeertjanWielenga/vuejet/blob/master/scripts/grunt/config/oraclejet-serve.js) files.

### Remove Knockout from the application.

 **Status:** Done. No more references to Knockout anywhere.

### Integrate vue-resource and Axios for HTTP/REST/AJAX calls.

 **Status:** vue-resource is done, see the 
 [about.html](https://github.com/GeertjanWielenga/vuejet/blob/master/src/js/views/about.html) and
 [about.js](https://github.com/GeertjanWielenga/vuejet/blob/master/src/js/viewModels/about.js) files, although vue-resource
 is retired; the next step is to integrate Axios.

## References and Further Information

   * [GitHub: Simple RequireJS App with Vue](https://github.com/GeertjanWielenga/RequireJSSamples/tree/master/RequireVue)
   * [YouTube: From Knockout to Vue in Oracle JET](https://www.youtube.com/watch?v=BMs9KoSGi7s)
   * [YouTube: Replacing Knockout Completely in Oracle JET](https://www.youtube.com/watch?v=54CqLy_t7KY)
   * [Retiring vue-resource](https://medium.com/the-vue-point/retiring-vue-resource-871a82880af4)
   * [Vue.js 2 & Vue-Resource - Real-World Vue Application With External API Access](https://medium.com/codingthesmartway-com-blog/vue-js-2-vue-resource-real-world-vue-application-with-external-api-access-c3de83f25c00)

