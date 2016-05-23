define(function(){
	function util(){
		
	}
	util.level_calc=function(score){
			if(score>=90&&score<=100)return "优秀";
			if(score>=80&&score<90)return "良好";
			if(score>=70&&score<80)return "正常";
			if(score<70&&score>=60)return "基本";
			return "调整";
	}
	util.converArraydataToPartdata=function(datas){
		var ob={};
		for(var i in datas){
			var data=datas[i];
			var part=data['测评指标'];
			if(!ob[part]){ob[part]=[];}
			ob[part].push(datas[i]);
		}
		return ob;
	}
 
	util.getNowFormatDate=function(){
		    var date = new Date();
		    var seperator1 = "年";
		    var seperator2 = "月";
		    var seperator3="日";
		    var month = date.getMonth() + 1;
		    var strDate = date.getDate();
		    if (month >= 1 && month <= 9) {
		        month = "0" + month;
		    }
		    if (strDate >= 0 && strDate <= 9) {
		        strDate = "0" + strDate;
		    }
		    var currentdate = date.getFullYear() + seperator1 + month + seperator2 + strDate
		            +seperator3;
		    return currentdate;
	}
	var datamap_level1={
		"study_attention":"学习专注力",
		"memory":"记忆力",
		"emotion_control":"情感控制力",
		"behavior_manage":"行为管理能力",
		"thinking":"思维力",
		"Social_adaptability":"社会适应能力",
		"cteativity":"创造力",
		"social_ability":"社交能力"		
	};
	var datamap_level2={
				"attention":"注意力",
				"study_motive":"学习动机",
	  			"behavior":"行为表征",
	  			"space_search":"空间搜索",
	 			"brain_function":"脑功能",	 			 
	  			"working_memory":"工作记忆",
	  			"short_memory":"短时记忆",
	  			"physiology":"生理表征",	  			 
	  			"behavior_yizhi":"行为抑制",	  			
	 			"behavior_biaozheng":"行为表征",
	  			"vision_motion":"视动整合",
	  			"jihua":"计划能力",
	  			"jiankong":"监控能力",
	  			"zuzhi":"组织能力",
	  			"hannuota":"计划能力",
	  			"qidong":"启动能力",
	  			"tuili":"推理能力",
	  			"liangbiao":"表征",
	  			"micro_expression_recognition":"微表情识别"	,
	  			"emotional_recognition":"情绪识别",	  		 
	  			"writing_fluency":"文字流畅性",
	 			"cognitive_flexibility":"认知灵活性",
	 			"self_control":"自我控制力",
	 			"cooperation":"合作性",
	  			"opinion":"主张性",
	  			"responsibility":"责任感",
	  			"companion":"同伴能力",
	  			"heartflower":"反映转换灵活性",
	  			"emotional_cognition":"情绪认知",
	  			"empathy_ability":"共情能力",
	  			"heartflower":"反映转换灵活性",			
	  			"flanker":"感知转换灵活性",
	  			"stroop":"抑制能力",
	 			"card_sort":"任务规则转换灵活性",
	 			"gonogo":"抑制能力"
	  			
	  			
	}
	/*
	 * study_attention:学习专注力
	 * 			attention:注意力
	 * 			study_motive:学习动机
	 * 			behavior:行为表征
	 * 			space_search:空间搜索
	 * 			brain_function:脑功能
	 * 
	 * memory:记忆力
	 * 			behavior:行为表征
	 * 			working_memory:工作记忆
	 * 			short_memory:短时记忆
	 * 
	 * emotion_control:情感控制力
	 * 			physiology:生理表征
	 * 			behavior:行为表征
	 * 			behavior_yizhi:行为抑制
	 * 
	 * behavior_manage:行为管理能力
	 * 			behavior_yizhi:行为抑制
	 *			behavior_biaozheng:行为表征
	 * 			vision_motion:视动整合
	 * 
	 *thinking:思维力
	 * 			jihua:计划能力
	 * 			jiankong:监控能力
	 * 			zuzhi:组织能力
	 * 			qidong:启动能力
	 * 			tuili:推理能力
	 * 			hannuota:计划能力
	 * 			liangbiao:表征
	 * 
	 *Social_adaptability:社会适应能力
	 * 			micro_expression_recognition:微表情识别	
	 * 			emotional_recognition:情绪识别
	 * 			behavior:行为表征
	 * 
	 *cteativity: 创造力
	 * 			heartflower:反映转换灵活性
	 * 			behavior:行为表征
	 * 			flanker:感知转换灵活性
	 * 			stroop:抑制能力
	 * 			card_sort:任务规则转换灵活性
	 * 			writing_fluency:文字流畅性
	 * 			cognitive_flexibility:认知灵活性
	 * 
	 * social_ability:社交能力
	 * 			self_control:自我控制力
	 * 			cooperation:合作性
	 * 			opinion:主张性
	 * 			responsibility:责任感
	 * 			companion:同伴能力
	 * 			gonogo:抑制能力
	 * 			emotional_cognition:情绪认知
	 * 			empathy_ability:共情能力
	 */
	
	
	util.converJsondataToexpectedData=function(jsonstr){	
		var partdata=util.converJsondataToPartData(jsonstr);
		return util.converPartdataToOriginalData(partdata);
	}
	
	util.converPartdataToOriginalData=function(partsdata){
		var arry_return=[];
		for(var property in partsdata){
			var length=partsdata[property].length;
			for(var i=0;i<length;i++){
				arry_return.push(partsdata[property][i]);
			}
		}
		return arry_return;
	}

	util.converJsondataToPartData=function(jsonstr){		
		jsonstr=jsonstr||'{"study_attention":{"study_motive":"66","behavior":"12"},"memory":{"behavior":"null"},"emotion_control":{"behavior":"89"},"behavior_manage":{"behavior_yizhi":"null","behavior_biaozheng":"null"},"thinking":{"jihua":"null","jiankong":"null","zuzhi":"null","qidong":"null"},"Social_adaptability":{"behavior":"null"},"cteativity":{"behavior":"123"},"social_ability":{"self_control":"null","cooperation":"null","opinion":"null","responsibility":"null","companion":"null"}}';		
		var job=JSON.parse(jsonstr);
		var partdata={};	
		for(var level1str in job){			
			for(var level2str in job[level1str]){
				if(!partdata[datamap_level1[level1str]])partdata[datamap_level1[level1str]]=[];
				var ob={};
				if(job[level1str][level2str]==="null" || job[level1str][level2str]===null)continue;
				var score=Math.round(job[level1str][level2str]*100);
				ob["测评指标"]=datamap_level1[level1str];
				ob["测评组分"]=datamap_level2[level2str];		
				ob["达标值"]=score;													
				ob["调整"]="";
				ob["基本"]="";
				ob["正常"]="";
				ob["良好"]="";
				ob["优秀"]="";								
				if(score!=='null' && score!==null){
					ob[util.level_calc(score)]="√";
					partdata[datamap_level1[level1str]].push(ob);
				}
			}
		}
		return partdata;
	}
		
 
	return util;
})