<template>
    <table id="t01">
        <thead>
            <tr>
                <th id="th1" v-for="key in columns"
                    @click="sortBy(key)"
                    :class="{ active: sortKey == key }">
                    {{ key | capitalize }}
                    <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
                    </span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="entry in filteredData">
                <td id="td1" v-for="key in columns">
                    {{entry[key]}}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
	define(["Vue"], function (Vue) {
	  Vue.component("ojvgrid", {
		template: template, // the variable template will be injected
		props: {
		  data: Array,
		  columns: Array,
		  filterKey: String
		},
		data: function () {
		  var sortOrders = {}
		  this.columns.forEach(function (key) {
			sortOrders[key] = 1
		  })
		  return {
			sortKey: '',
			sortOrders: sortOrders
		  }
		},
		computed: {
		  filteredData: function () {
			var sortKey = this.sortKey
			var filterKey = this.filterKey && this.filterKey.toLowerCase()
			var order = this.sortOrders[sortKey] || 1
			var data = this.data
			if (filterKey) {
			  data = data.filter(function (row) {
				return Object.keys(row).some(function (key) {
				  return String(row[key]).toLowerCase().indexOf(filterKey) > -1
				})
			  })
			}
			if (sortKey) {
			  data = data.slice().sort(function (a, b) {
				a = a[sortKey]
				b = b[sortKey]
				return (a === b ? 0 : a > b ? 1 : -1) * order
			  })
			}
			return data
		  }
		},
		filters: {
		  capitalize: function (str) {
			return str.charAt(0).toUpperCase() + str.slice(1)
		  }
		},
		methods: {
		  sortBy: function (key) {
			this.sortKey = key
			this.sortOrders[key] = this.sortOrders[key] * -1
		  }
		}
	  });
	});
</script>