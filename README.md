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

 **Status:** Done. See package.json and main.js.

### Create and load Vue components in Oracle JET modules.

 **Status:** Done. See vue-components folder.

### Replace Oracle JET router with vue-router.

 **Status:** Done. See package.json, main.js, and Header2.vue.

### Rewrite 'navdrawer' Oracle JET template to use Vue components.

 **Status:** Done. See index.html.

### Integrate vue-resource and Axios for HTTP/REST/AJAX calls.

 **Status:** vue-resource is done, see the About module, though vue-resource
 is retired; next step is to integrate Axios.