		require.config({
			baseUrl: 'js',
		    paths: {
		        jquery : 'jquery-1.11.0',
		        j2t:	"jsonTotable",
		        table:	'table'	      
		      		       
		    }
		});

		require(['jquery','table','radar_custom_module','page6-analys','column_table'],function($,table,radar,page6_analys,column_table){
			
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
					var objectArray = [{
			"Total": "34",
			"Version": "1.0.4",
			"Office": "New York",
			"test": "1"
		}, {
			"Total": "34",
			"Version": "1.1.0",
			"Office": "Paris",
			"test": "√"
		},
		{
			"Total": "35",
			"Version": "1.1.0",
			"Office": "Paris",
			"test": "f"
		},
		{
			"Total": "35",
			"Version": "1.1.0",
			"Office": "Paris",
			"test": "f"
		},
		{
			"Total": "35",
			"Version": "1.1.0",
			"Office": "Paris",
			"test": "f"
		},
		{
			"Total": "36",
			"Version": "1.1.0",
			"Office": "Paris",
			"test": "f"
		},
			{
			"Total": "37",
			"Version": "1.1.0",
			"Office": "Paris",
			"test": "f"
		},
		{
			"Total": "38",
			"Version": "1.1.0",
			"Office": "Paris",
			"test": "√"
		},
		{
			"Total": "38",
			"Version": "1.1.0",
			"Office": "Paris",
			"test": "√"
		},
		{
			"Total": "38",
			"Version": "1.1.0",
			"Office": "Paris",
			"test": "√"
		}];
				//console.log($);
			////	console.log(table);
				//$();
				window.data=data;
				var ob={color:"white",backgroundColor:"#D32F2F"}
				table($('#table_container'),'table',data,"测评指标",ob);
				radar({
					container:"#chart-container"					
				});
				page6_analys();
				column_table({tableselector:"#column_table",classname:"hbar"})
			});