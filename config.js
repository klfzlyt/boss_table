		require.config({
			 waitSeconds: 0,
			baseUrl: 'js',
		    paths: {
		        jquery : 'jquery-1.11.0',
		        j2t:	"jsonTotable",
		        table:	'table'	      
		      		       
		    }
		});

		require(['jquery','table','radar_custom_module','page6-analys','column_table','util','totalcalcu'],function($,table,radar,page6_analys,column_table,util,totalcalcu){			
			//random_the_data
			var arry_level_1=[
			"学习专注力",
			"记忆力",
			"情感控制力",
			"行为管理能力",
			"思维力",
			"社会适应能力",
			"创造力",
			"社交能力"	
			];
			var arry_level_2=[
			"空间搜索",
			"脑功能",
			"学习动机",
			"行为表征",
			"短时记忆",
			"工作记忆",
			"行为表征",
			"生理表征",
			"行为抑制",
			"行为表征",
			"视动整合",
			"行为抑制",
			"行为表征",
			"推理能力",
			"计划能力",
			"监控能力",
			"组织能力",
			"启动能力",
			"微表情识别",
			"情绪识别",
			"同感能力",
			"认知灵活性",
			"文字流畅性",
			"行为表征",
			"自我控制力",
			"合作性",
			"主张性",
			"责任感",
			"同伴能力",
			"情绪认知",
			"共情能力"];
			
			var head=[
			"测评指标","测评组分","达标值","调整","基本","正常","良好","优秀"			
			];
			var level_1_num=[
				4,3,3,3,5,3,3,7
			];
			function isNumber(obj) {  
			    return typeof obj === 'number' && isFinite(obj)      
			}  
			var iterate=0;
			var data=[]
			for (var i=0;i<arry_level_2.length;i++) {
				//do something
				var ob={};
				ob[head[0]]=arry_level_1[iterate];
				ob[head[1]]=arry_level_2[i];
				ob[head[2]]=Math.round(Math.random()*100);
				ob[head[3]]=""
				ob[head[4]]=""
				ob[head[5]]=""
				ob[head[6]]=""
				ob[head[7]]=""
				var ramdon_right=Math.floor(Math.random()*5)+3+''
				ob[head[ramdon_right]]="√";
				level_1_num[iterate]--
				if(level_1_num[iterate]===0)iterate++;
				data.push(ob);
			}			
			//end of ramndon data
				
				var url='http://www.21thkids.com/up/chaxunnew.php?CHD_ID=';
				//console.log($(".childid").dataset.childid);
				var chdid=$(".childid").data("childid");
				var chdname=$(".childname").data('childname');
				url+=chdid;
				
				var strdata;
				//
				strdata=$.ajax({url:url,async:false}).responseText;
				//console.log(strdata);
				data=util.converJsondataToexpectedData(strdata);
				
				
				//
				//表格		
				table($('#table_container'),'table',data,"测评指标",{color:"white",backgroundColor:"#D32F2F"});
				//优势分析
				var splitdata=page6_analys(data);				
				column_table({tableselector:"#column_table",classname:"hbar_wrap",data:splitdata});
				//汇总数据计算
				var jsonstr='{"study_attention":{"study_motive":"134","behavior":"null"},"memory":{"behavior":"null"},"emotion_control":{"behavior":"null"},"behavior_manage":{"behavior_yizhi":"null","behavior_biaozheng":"null"},"thinking":{"jihua":"null","jiankong":"null","zuzhi":"null","qidong":"null"},"Social_adaptability":{"behavior":"null"},"cteativity":{"behavior":"123"},"social_ability":{"self_control":"null","cooperation":"null","opinion":"null","responsibility":"null","companion":"null"}}';
				var job=JSON.parse(jsonstr);
				var totaldata=totalcalcu(util.converArraydataToPartdata(data));
				//雷达图
				radar({
					container:"#chart-container",
					data:totaldata,
					width:350,
					height:210 
				});
				$('svg').attr("height",parseInt($('svg').attr("height"))+10);
				//日期
				$('.date').text(util.getNowFormatDate());
				$('.data_length').text(data.length);
				var report_number="6D4E3C2178"+Math.round(Math.random()*10000);
				$(".report_number").text(report_number);
	
				for(var i=2;i<=6;i++){
					$('<div class="center headpage">&nbsp&nbsp国际儿童青少年素质测评中心&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp学生综合素质测评报告&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+chdname+'(Q3C28D'+chdid+')</div>').addClass("header").appendTo($(".page"+i));
				}
				$('<div class="center headpage">&nbsp&nbsp国际儿童青少年素质测评中心&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp学生综合素质测评报告&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+chdname+'(Q3C28D'+chdid+')</div>').addClass("header").appendTo($(".page12"));
				for(var i=2;i<=6;i++){
					$('<div>'+(i-1)+'/6</div>').addClass("footer").appendTo($(".page"+i));
				}
				$('<div>6/6</div>').addClass("footer").appendTo($(".page12"));
				
				
			});