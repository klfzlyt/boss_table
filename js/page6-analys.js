define(['jquery'],function($){
	//getthedata
	
	function page6_analys(data){
		
		var hashmap={
			"优秀":"excellent",
			"良好":"good",
			"正常":"Medium",
			"基本":"base",
			"调整":"develop"
		}		
		function getlevel(ob){
			for(var property in ob){
				if(ob[property]==="√")return property;
			}
		}
		//console.log(data);
		//get the data
		var AROWNUMBER=4;
		var iterate_data=data;
		var ob={};		
		for(var i=0;i<iterate_data.length;i++){
				var level=getlevel(iterate_data[i]);
				if(!ob[level]){ob[level]=[]}
				ob[level].push(iterate_data[i]);
		}
		for(var level in ob){			
			var classname="."+hashmap[level];
			var length=ob[level].length;
			var rownumber=Math.ceil(length/AROWNUMBER);			
			var table=$(classname+" table tbody");
			for(var j=0;j<rownumber;j++){
				table.append($("<tr></tr>"));
			}
			$(classname).parent('div.hidep').last().show();
			for(var i=0;i<length;i++){
				var row=Math.floor(i/AROWNUMBER)+1;			
				if(ob[level][i]["测评组分"]==='行为表征'){$(classname+" table tbody tr:nth-of-type("+row+")").append($("<td>"+ob[level][i]["测评组分"]+"("+ob[level][i]["测评指标"]+")</td>"));}// 
				else{
					$(classname+" table tbody tr:nth-of-type("+row+")").append($("<td>"+ob[level][i]["测评组分"]+"</td>"));
				}
			}
			for (var i = 0; i < rownumber*4-length; i++) {
				$(classname+" table tbody tr:nth-of-type("+row+")").append($("<td></td>"));


				
			}
		}
		//console.log("ob: ",ob);
		return ob;
	}
	return page6_analys;		
});