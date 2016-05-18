define(['radar-chart',"jquery"],function(RadarChart,$){
  function Radar(setting){
  	//setting
  		var arry=[
			"学习专注力",
			"记忆力",
			"情感控制力",
			"行为管理能力",
			"思维力",
			"社会适应能力",
			"创造力",
			"社交能力"		
		];
		
		  	var data = [
		  {
		    className: 'argentina',
		    axes: [
//		      {axis: "学习专注力", value: 6}, 
//		      {axis: "记忆力", value: 7}, 
//		      {axis: "情感控制能力", value: 10},  
//		      {axis: "行为管理能力", value: 13},  
//		      {axis: "思维力", value: 9},
//		       {axis: "社会适应能力", value: 9},
//		        {axis: "创造力", value: 9},
//		        {axis: "社交能力", value: 9}
		    ]
		  }
		];
  		var param = $.extend({
			width:500,
			height:700,
			radius:3,
			container:document,
			data:data
			}, setting);
			//construct the data
			
			var oridata=param.data;
//			for(var i=0;i<param.data.length;i++){
//				data[0].axes[i].value=Math.round(param.data[i].score);
//			}
			var i=0;
			for(var property in oridata){
				i++;
				if(i===1){
					var ob={
						axis:property,
						value:oridata[property].score,
						yOffset:-1
					}
				}
				else{
						var ob={
						axis:property,
						value:oridata[property].score						 
					}
				}
				data[0].axes.push(ob);
			}
			
    var chart = RadarChart.chart();
  

		RadarChart.defaultConfig.radius = param.radius;
		RadarChart.defaultConfig.w = param.width;
		RadarChart.defaultConfig.h = param.height;
		RadarChart.draw(param.container, data);
}
  return Radar;
  });
