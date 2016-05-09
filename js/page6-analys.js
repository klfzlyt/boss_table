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
			for(var i=0;i<length;i++){
				$(classname).parent('p').last().show();
				$(classname).append($("<span>"+ob[level][i]["测评组分"]+"</span>"));
			}
		}
		console.log("ob: ",ob);
		return ob;
	}
	return page6_analys;		
});