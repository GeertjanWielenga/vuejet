/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
'use strict';

/**
 * Example of Require.js boostrap javascript
 */

requirejs.config(
{
  baseUrl: 'js',

  // Path mappings for the logical module names
  // Update the main-release-paths.json for release mode when updating the mappings
  paths:
  //injector:mainReleasePaths
  {
//    'knockout': 'libs/knockout/knockout-3.4.0.debug',
    'jquery': 'libs/jquery/jquery-3.1.1',
    'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.12.0',
    'promise': 'libs/es6-promise/es6-promise',
    'hammerjs': 'libs/hammer/hammer-2.0.8',
    'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.0',
    'ojs': 'libs/oj/v3.1.0/debug',
    'ojL10n': 'libs/oj/v3.1.0/ojL10n',
    'ojtranslations': 'libs/oj/v3.1.0/resources',
    'text': 'libs/require/text',
    'signals': 'libs/js-signals/signals',
    'customElements': 'libs/webcomponents/CustomElements',
    'proj4': 'libs/proj4js/dist/proj4-src',
    'css': 'libs/require-css/css',
    'enquire': 'libs/enquire.js/dist/enquire',
    'Vue': 'libs/vue/dist/vue',
	'vue': 'libs/require-vuejs/dist/require-vuejs',
	'vue_router': 'libs/vue-router/dist/vue-router',
	'vue_resource': 'libs/vue-resource/dist/vue-resource'
  }
  //endinjector
  ,
  // Shim configurations for modules that do not expose AMD
  shim:
  {
    'jquery':
    {
      exports: ['jQuery', '$']
    },
	'Vue': 
	{
	  exports: 'Vue'
	},
	'vue_router': 
    {
	  'exports': 'VueRouter'
	},
	'vue_resource': 
    {
	  'exports': 'VueResource'
	}
  }
}
);

/**
 * A top-level require call executed by the Application.
 * Although 'ojcore' and 'knockout' would be loaded in any case (they are specified as dependencies
 * by the modules themselves), we are listing them explicitly to get the references to the 'oj' and 'ko'
 * objects in the callback
 */
require(['ojs/ojcore', 'Vue', 
  'vue!vue-components/my-navdrawer-component',
  'vue!vue-components/my-layout-component',
],
  function (oj, Vue) { // this callback gets executed when all required modules are loaded

    $(function() {

      function init() {
		new Vue({
		  el: "#pageDrawer"
        });
		new Vue({
		  el: "#pageContent"
        });
      }

      // If running in a hybrid (e.g. Cordova) environment, we need to wait for the deviceready 
      // event before executing any code that might interact with Cordova APIs or plugins.
      if ($(document.body).hasClass('oj-hybrid')) {
        document.addEventListener("deviceready", init);
      } else {
        init();
      }

    });

  }
);
