define(["util","jquery"],function(util,$){
	
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
		
		
		function total_calcu(partsdatas){			
			var arry_ob=total_calcu["average_calcu"](partsdatas);
			for(var i=2;i<10;i++){
				$('.page4 .analysis p:nth-of-type('+i+')'+" span:first-child").text(arry_ob[i-2].score);
				$('.page4 .analysis p:nth-of-type('+i+')'+" span:last-child").text(arry_ob[i-2].level);				
			}
			return arry_ob;
		}
		total_calcu["level_calcu"]=function(score){
			if(score>=90&&score<=100)return "优秀";
			if(score>=80&&score<90)return "良好";
			if(score>=70&&score<80)return "正常";
			return "一般";
		}
		total_calcu["average_calcu"]=function(partsdatas){
			var arry_ob=[];
			for(var i=0;i<arry.length;i++){
				var arrypart=partsdatas[arry[i]];
				var sum=0;
				for(var j=0;j<arrypart.length;j++){
					sum+=parseInt(arrypart[j]["达标值"]);
				}				
				var score=sum/arrypart.length;
				var ob={};
				ob.score=score;
				ob.level=total_calcu["level_calcu"](score);
				arry_ob.push(ob);
			}
			return arry_ob;
		}
		
		return total_calcu;		
})
