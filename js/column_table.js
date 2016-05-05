define(['d3', "jquery"], function(d3, $) {
	function column_table(setting) {

		var data=[
			{
				item:"空间搜索",
				value:"80"
			},
			{
				item:"脑功能",
				value:"70"
			}				
		];
		var param = $.extend({
			classname:"hbar",
			tableselector: '#table',
			data: data
		}, setting);
		var classname=param.classname;
		var data=param.data;
		var tableselector=param.tableselector;
		var classname=param.classname;
		function render(data,tableselector) {
			// Enter
			var tr = d3.select(tableselector+" tbody").selectAll('tr').data(data).enter().append("tr");
			tr.append("td");
			tr.append("td").append("div").attr("class", classname); 
			tr.append("td");

			// Update
			var tb=d3.select(tableselector+" tbody");
			tb.selectAll("tr td:nth-child(1)").data(data).text(function(data){return data.item});				 
			tb.selectAll("tr td:nth-child(2) div").data(data).style("width", function(data) {
					return data.value + "%";
			});				
			tb.selectAll("tr td:nth-child(3)").data(data).text(function(data){return data.value});				 
		}
		render(data,tableselector);		
	}
	return column_table;
});