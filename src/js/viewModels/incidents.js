define(['Vue', 'text!views/incidents.html', 'vue!libs/ojv/v.0.0.1/debug/ojvchart'], 
 function(Vue, file){
     return Vue.extend({
       template: file
     });
});