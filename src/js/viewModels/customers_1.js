define(['Vue','vue!libs/ojv/v.0.0.1/debug/ojvgrid'], function(Vue) {
  return Vue.extend({
   template: `
    <div class="oj-hybrid-padding">
		<section id="grid">
		  <form id="search">
			  Search <input name="query" v-model="searchQuery">
		  </form>
		  <br/>
		  <ojvgrid
			  :data="gridData"
			  :columns="gridColumns"
			  :filter-key="searchQuery">
		  </ojvgrid>
	  </section>
    </div>
    `,
    data: function() {
      return {
		  searchQuery: '',
		  gridColumns: ['name', 'power'],
		  gridData: [
			{name: 'Chuck Norris', power: Infinity},
			{name: 'Bruce Lee', power: 9000},
			{name: 'Jackie Chan', power: 7000},
			{name: 'Jet Li', power: 8000}
		  ]
      };
    }
  });
});