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
		//分析优势					
		//
		var param = $.extend({
			classname:"hbar_wrap",
			tableselector: '#table',
			data: data
		}, setting);
		
		
		
		var data=param.data;
		var item_number=0;
		var switchdata=[];
		var aryy_str=["优秀","良好","正常","基本","调整"];
		for(var i in aryy_str){
			var property=aryy_str[i];
			if(data[property]){
				for(var i=0; i <data[property].length;i++){				
					if(property!=="优秀" && item_number>=2)break;
					item_number++;
					var tempob={};
					if(data[property][i]["测评组分"]==="行为表征")tempob.item=data[property][i]["测评组分"]+"<br/>("+data[property][i]["测评指标"]+")";
					else tempob.item=data[property][i]["测评组分"];
					tempob.value=data[property][i]["达标值"];
					switchdata.push(tempob);					
				}
			}
		}
		
		data=switchdata;
		var tableselector=param.tableselector;
		var classname=param.classname;
		function render(data,tableselector) {
			// Enter
			var tr = d3.select(tableselector+" tbody").selectAll('tr').data(data).enter().append("tr");
			tr.append("td");
			var wrap=tr.append("td").append("div").attr("class", classname);
			wrap.append("div").attr("class","hbar");
			tr.append("td");
			// Update
			var tb=d3.select(tableselector+" tbody");
			tb.selectAll("tr td:nth-child(1)").data(data).html(function(data){return data.item});				 
			tb.selectAll("tr td:nth-child(2) div.hbar").data(data).style("width", function(data) {
					return data.value + "%";
			});				
			tb.selectAll("tr td:nth-child(3)").data(data).text(function(data){return data.value});				 
		}
		render(data,tableselector);		
		function background_bar(){
			$(tableselector+" tbody div.hbar_wrap").append($('<div class="hbar_background"></div>'));
		}
		background_bar();	

	}
	return column_table;
});