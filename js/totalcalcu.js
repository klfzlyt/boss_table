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
			var ob=total_calcu["average_calcu"](partsdatas);
			var total_score=total_calcu['average_sum_score_calcu'](ob);
			$(".total_score").text(total_score);
			$(".level").text(util.level_calc(total_score));
			$items=$('.item').hide();
			for(var i=2;i<10;i++){
				$('.page4 .analysis p:nth-of-type('+i+')').hide()							
			}
			function findindex(arr,str){
				for(var i=0;i<arr.length;i++){
					if(arr[i]===str)return i+2;
				}
				return -1;
			}
			console.log(ob);
			for(var property in ob){
				var index=findindex(arry,property);
				$($items.get(index-2)).show();
				$('.page4 .analysis p:nth-of-type('+index+')').show();
				$('.page4 .analysis p:nth-of-type('+index+')'+" span:nth-of-type(1)").text(ob[property].score);
				$('.page4 .analysis p:nth-of-type('+index+')'+" span:nth-of-type(2)").text(ob[property].level);
			}
			//$('.page4 .analysis p:nth-of-type('+i+')'+" span:last-child").text(arry_ob[i-2].level);
			return ob;
		}
		total_calcu['average_sum_score_calcu']=function(ob){
			var sum=0;
			var i=0;
			for(var property in ob){
					i++;
					sum+=parseInt(ob[property].score);
			}					
			return i===0?null:(sum/i).toPrecision(4);
		}
	
		total_calcu["average_calcu"]=function(partsdatas){
			var obreturn={};			
			for(var i=0;i<arry.length;i++){
				var arrypart=partsdatas[arry[i]];
				var sum=0;
				if(arrypart){					
					for(var j=0;j<arrypart.length;j++){
						sum+=parseInt(arrypart[j]["达标值"]);
					}				
					var score=(sum/arrypart.length).toPrecision(4);
					var ob={};
					ob.score=score;
					ob.level=util.level_calc(score);
					obreturn[arry[i]]=ob;
				}
			}
			return obreturn;
		}		
		return total_calcu;		
})
