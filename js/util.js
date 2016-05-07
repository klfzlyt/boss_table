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
	return util;
})