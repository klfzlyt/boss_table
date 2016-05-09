define(function(){
	function util(){
		
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
	/*
	 * study_attention:学习专注力
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
	 * 
	 *Social_adaptability:社会适应能力
	 * 			micro_expression_recognition:微表情识别	
	 * 			emotional_recognition:情绪识别
	 * 			behavior:行为表征
	 * 
	 *cteativity: 创造力
	 * 			behavior:行为表征
	 * 			writing_fluency:文字流畅性
	 * 			cognitive_flexibility:认知灵活性
	 * 
	 * social_ability:社交能力
	 * 			self_control:自我控制力
	 * 			cooperation:合作性
	 * 			opinion:主张性
	 * 			responsibility:责任感
	 * 			companion:同伴能力
	 * 			emotional_cognition:情绪认知
	 * 			empathy_ability:共情能力
	 */
	
	
	util.converJsondataToexpectedData=function(jsonstr){
		
	}
		
	return util;
})