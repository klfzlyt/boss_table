<?php

/*
返回数据格式如下
{
    "CHD_ID":"1","childname":"小明","sex":"1","age":"5",
    "kids_value":
    {
        "p1":{"value":"0","result":"偏差","value_ref":"1","w1000":"12","w1001":"13"},
        "p2":{"value":"0","result":"偏差","value_ref":"1","w2000":"12","w2001":"13"},
        "p3":{"value":"0","result":"偏差","value_ref":"1","w3000":"12","w3001":"13"},
    },
}


{
    "study_attention":{"study_motive":"134","behavior":"null"},
    "memory":{"behavior":"null"},
    "emotion_control":{"behavior":"null"},
    "behavior_manage":{"behavior_yizhi":"null","behavior_biaozheng":"null"},
    "thinking":{"jihua":"null","jiankong":"null","zuzhi":"null","qidong":"null"},
    "Social_adaptability":{"behavior":"null"},
    "cteativity":{"behavior":"null"},
    "social_ability":{"self_control":"null","cooperation":"null","opinion":"null","responsibility":"null","companion":"null"}
}

*/
require_once('connect1.php');
db::getInstance();


$CHD_ID = $_GET['CHD_ID']; 


 
fanhui_liyangtao($CHD_ID);
function fanhui_liyangtao($CHD_ID)
{
    $fanhuizhi = return_info($CHD_ID);
    $ajax_data = array();
    //学习专注力
    $ajax_data['study_attention']['study_motive'] = $fanhuizhi['kids_value']['p59']['value'];  //学习动机
    $ajax_data['study_attention']['behavior'] = $fanhuizhi['kids_value']['p93']['value'];      //行为特征

    //记忆力
    $ajax_data['memory']['behavior'] = $fanhuizhi['kids_value']['p92']['value'];   //行为表征   

    //情感控制能力
    $ajax_data['emotion_control']['behavior'] = $fanhuizhi['kids_value']['p90']['value'];  //行为表征

    //行为管理能力
    $ajax_data['behavior_manage']['behavior_yizhi'] = $fanhuizhi['kids_value']['p87']['w87000']; //行为抑制
    $ajax_data['behavior_manage']['behavior_biaozheng'] = $fanhuizhi['kids_value']['p87']['w87001'];  //行为表征

    //思维力
    $ajax_data['thinking']['jihua'] = $fanhuizhi['kids_value']['p96']['w96000'];    //计划能力
    $ajax_data['thinking']['jiankong'] = $fanhuizhi['kids_value']['p96']['w96001'];  //监控能力
    $ajax_data['thinking']['zuzhi'] = $fanhuizhi['kids_value']['p96']['w96002'];     //组织能力
    $ajax_data['thinking']['qidong'] = $fanhuizhi['kids_value']['p96']['w96003'];     //启动能力

    //社会适应能力
    $ajax_data['Social_adaptability']['behavior'] = $fanhuizhi['kids_value']['p94']['value'];  //行为表征

    //创造力
    $ajax_data['cteativity']['behavior'] = $fanhuizhi['kids_value']['p89']['value'];   //行为表征

    //社交能力
    $ajax_data['social_ability']['self_control'] = $fanhuizhi['kids_value']['p95']['w95000'];  //自我控制能力
    $ajax_data['social_ability']['cooperation'] = $fanhuizhi['kids_value']['p95']['w95001'];    //合作性
    $ajax_data['social_ability']['opinion'] = $fanhuizhi['kids_value']['p95']['w95002'];        //主张性
    $ajax_data['social_ability']['responsibility'] = $fanhuizhi['kids_value']['p95']['w95003'];  //责任感
    $ajax_data['social_ability']['companion'] = $fanhuizhi['kids_value']['p95']['w95004'];        //同伴能力

    echo json_encode($ajax_data);
}


//根据孩子ID获取所有项目所有信息
function return_info($CHD_ID)
{
    $CHD_ID = $CHD_ID;
    $return_info = array();
    //$pro_array = array("p87");
    for($i = 1; $i < 97; $i ++)
    {
        $pro_array[] = "p".$i;
    } 
    $return_info[CHD_ID] = $CHD_ID;
    $return_info[childname] = huoqu_childname($CHD_ID);
    $return_info[sex] = huoqu_sex($CHD_ID);
    $return_info[age] = huoqu_age($CHD_ID);
    $return_value = array();
    for($i = 0; $i < count($pro_array); $i ++)
    {
        $return_value[$pro_array[$i]] = array_merge(huoqu_kids_result($CHD_ID,$pro_array[$i]),huoqu_kids_relt2dim($CHD_ID,$pro_array[$i]));
    }
    $return_info[kids_value] = $return_value;
    return $return_info;
}

//根据孩子ID获取孩子姓名
function huoqu_childname($CHD_ID)
{
    $sql = "select childname from t_kids_children where CHD_ID = $CHD_ID";
    $result = mysql_query($sql);
    $row = mysql_fetch_array($result);
    return $row[0];
}

//根据孩子ID获取孩子性别
function huoqu_sex($CHD_ID)
{
    $sql = "select sex from t_kids_children where CHD_ID = $CHD_ID";
    $result = mysql_query($sql);
    $row = mysql_fetch_array($result);
    return $row[0];
}

//根据孩子ID获取孩子年龄
function huoqu_age($CHD_ID)
{
    $sql = "select birthday from t_kids_children where CHD_ID = $CHD_ID";
    $result = mysql_query($sql);
    $row = mysql_fetch_array($result);
    $age=floor((strtotime(date("Y-m-d"))-strtotime($row[0]))/31536000);
    return $age;
}

//根据孩子ID和项目ID获取孩子总体值
function huoqu_kids_result($CHD_ID,$PRO_ID)
{
    $return_result = array();
    $CHD_ID = $CHD_ID;
    $PRO_ID = $PRO_ID;
    $sql = "select value,result,value_ref from t_kids_result where  subtask_id in (select max(subtask_id) from t_kids_subtask where PRO_ID = '".$PRO_ID."' and pro_status = '0' and task_id in (select task_id from t_kids_task where CHD_ID = $CHD_ID ))";
    //$sql = "select value,result,value_ref from t_kids_result where  subtask_id in (901)";
    $result = mysql_query($sql);
    $row = mysql_fetch_assoc($result);
    $return_result[value] = ($row[value] == NULL ? "null":$row[value]);
    $return_result[result] = ($row[result] == NULL ? "null":$row[result]);
    $return_result[value_ref] = ($row[value_ref] == NULL ? "null":$row[value_ref]);
    return $return_result;
} 

//根据孩子ID和项目ID获取孩子总体值
function huoqu_kids_relt2dim($CHD_ID,$PRO_ID)
{
    $CHD_ID = $CHD_ID;
    $PRO_ID = $PRO_ID;
    $return_array = array();

    $sql = "select rslt_ID from t_kids_result where  subtask_id in (select max(subtask_id) from t_kids_subtask where PRO_ID = '".$PRO_ID."' and  pro_status = '0' and task_id in (select task_id from t_kids_task where CHD_ID = $CHD_ID ))";
    //$sql = "select rslt_ID from t_kids_result where  subtask_id in (901)";

    $result = mysql_query($sql);
    $row = mysql_fetch_array($result);  
    $sql = "select DIM_ID,value from t_kids_rslt2dim where rslt_ID = $row[0]";
    $result = mysql_query($sql);
    $num = mysql_num_rows($result);
    $weidu_length = huoqu_weidu_length($PRO_ID);
    if(num == 0)
    {
         if($weidu_length != 0)
        {
            for($i = 0; $i < $weidu_length; $i ++)
            {
                 $weidu = "w".(substr($PRO_ID,1)*1000 + $i);
                 $return_array[$weidu] = "null";
            }
        }
    }
    else
    {    
        while($row = mysql_fetch_array($result))
        {
            $return_array[$row[DIM_ID]] = ($row[value] == NULL ? "null":$row[value]);
        }
    } 
    return $return_array;     
}

//根据项目ID PRO_ID获取维度的长度
function huoqu_weidu_length($PRO_ID)
{
    $PRO_ID = $PRO_ID;
    $sql = "select count(dim_ID) from t_kids_dim where PRO_ID = '".$PRO_ID."'";
    $result = mysql_query($sql);
    $row = mysql_fetch_array($result);
    $weidu_length = ($row[0] == NULL ? 0:$row[0]);
    return $weidu_length; 
} 
?>


