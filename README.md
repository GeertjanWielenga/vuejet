# Full Replacement of Knockout with Vue in Oracle JET

Experimental Demo App illustrating inclusion of 
the following in an Oracle JET app, with the exclusion
of Knockout:

   * vue
   * vue-router
   * vue-resource (retired) and Axios

## Purpose 

Investigate whether and to what extend Knockout can
be replaced with Vue in Oracle JET applications.

## Tasks

### Register Vue via Require in an Oracle JET application.

 **Status:** Done. See the package.json and main.js files.

### Rewrite Oracle JET modules to use Vue instead of Knockout.

 **Status:** Done. See the 'views' folder and the 'viewModels' folder.

### Create and load Vue components in Oracle JET modules.

 **Status:** Done. See the 'vue-components' folder.

### Wrap Oracle JET components in Vue components.

 **Status:** In progress. Each Oracle JET component is a jQuery UI component
 that needs to be wrapped as a Vue component, so that custom tags
 provided by Vue can be used to load Oracle JET components.

### Replace Oracle JET router with vue-router.

 **Status:** Done. See the [package.json](https://github.com/GeertjanWielenga/vuejet/blob/master/package.json), [main.js](https://github.com/GeertjanWielenga/vuejet/blob/master/src/js/main.js), and Header2.vue files.

### Provide new solution for handling responsive design.

 **Status:** Done. Knockout-based utility classes for responsive design
 are replace by Enquire.js.

### Rewrite 'navdrawer' Oracle JET template to use Vue components.

 **Status:** Done. See the index.html file.

### Include Vue libraries in build and serve Grunt tasks.

 **Status:** Done. See oraclejet-build.js and oraclejet-serve.js files.

### Remove Knockout from the application.

 **Status:** Done. No more reference to Knockout anywhere.

### Integrate vue-resource and Axios for HTTP/REST/AJAX calls.

 **Status:** vue-resource is done, see the About module, though vue-resource
 is retired; next step is to integrate Axios.

## References and Further Information

   * [Retiring vue-resource](https://medium.com/the-vue-point/retiring-vue-resource-871a82880af4)
   * [Vue.js 2 & Vue-Resource - Real-World Vue Application With External API Access](https://medium.com/codingthesmartway-com-blog/vue-js-2-vue-resource-real-world-vue-application-with-external-api-access-c3de83f25c00)

