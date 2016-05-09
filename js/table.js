define('table', ["jquery", "j2t"], function($, ConvertJsonToTable) {
 
	return function(container, tableid,json_object,merged_column) {
		var jsonHtmlTable = ConvertJsonToTable(json_object, tableid);
		if (container instanceof jQuery) container.html(jsonHtmlTable);
		else $(container).html(jsonHtmlTable);
		var $table = $('#' + tableid);
		
		//style
		$table.addClass("table").addClass('table-bordered').addClass('table-striped').css({
				'text-align': "center"				
			});			
		
		var merged_num=1;
		var _all_heads=$table.find("thead tr th");
		for(var i=1;i<_all_heads.length+1;i++){
			if(_all_heads[i-1].innerText===merged_column){
				merged_num=i;break;
			}
		}
		var _all_tds=$table.find('tbody tr td:nth-child('+merged_num+')');
		var _to_be_changedtd=[];
		var _to_be_removedtd=[];
		var _to_change_row_span=[];
		var _row_num=1;				
		var last_ele;
		
		$.each(_all_tds, function(ele) {
					var _ele=_all_tds[ele];
					if(!last_ele || _ele.innerText !== last_ele.innerText){
						_to_be_changedtd.push(_ele)
						if(ele!==0){
							_to_change_row_span.push(_row_num);
							
						}
						_row_num=1;
					}
					else{ 
						_row_num++;
						_to_be_removedtd.push(_ele);
						
					}
					last_ele=_ele;
		});
		_to_change_row_span.push(_row_num);
		var ROW_changed_num = _to_be_changedtd.length;										
		for (var i = 0; i < ROW_changed_num; i++) {
			$tochangedtd= $(_to_be_changedtd[i]);			
				$tochangedtd.attr("rowspan", _to_change_row_span[i]).css({
					"vertical-align": "middle"
				});									
		}
		_to_be_removedtd=$(_to_be_removedtd);
		_to_be_removedtd.remove();				
	}
});