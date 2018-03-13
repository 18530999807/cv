<html>  
<head>  
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />  
<title>JSAPI与URLAPI结合示例</title>  
<script type="text/javascript" src="http://api.map.baidu.com/api?v=1.5&ak=2b866a6daac9014292432d81fe9b47e3"></script>  
<script src="http://d1.lashouimg.com/static/js/release/jquery-1.4.2.min.js" type="text/javascript"></script>  
<style type="text/css">  
html,body{  
    width:400px;  
    height:300px;
    margin:0;
    overflow:hidden;  
    }
</style>  
</head>  
<body>
        <a href='http://api.map.baidu.com/geocoder?address=郑州&output=html' target='_blank'> <img style="margin:2px" width="400" height="300" src="http://api.map.baidu.com/staticimage? 
        width=400&height=300&zoom=11¢er=郑州" />  
    </a>
</body>  
</html>  
<script type="text/javascript">  
    var map = new BMap.Map("container");  
    map.centerAndZoom(new BMap.Point(113.65 34.76), 13);  
    map.enableScrollWheelZoom();  
    var marker=new BMap.Marker(new BMap.Point(116.403884,39.914887));  
    map.addOverlay(marker);  
    var licontent="<b>郑州</b><br>";  
        licontent+="<span><strong>地址：</strong>郑州市</span><br>";  
        licontent+="<span><strong>电话：</strong>(010)63095718,(0371)62666666</span><br>";  
        licontent+="<span class="\"input\"><strong></strong><input" class="\"outset\"" type=\"text\" name=\"origin\" value=\"郑州站\"/><input class="\"outset-but\"" type=\"button\" value=\"公交\" onclick=\"gotobaidu(1)\" /><input class="\"outset-but\"" type=\"button\" value=\"驾车\"  onclick=\"gotobaidu(2)\"/><a class="\"gotob\"" href=\"url=\"http://api.map.baidu.com/direction?destination=latlng:"+marker.getPosition().lat+","+marker.getPosition().lng+"|name:天安门"+"®ion=北京"+"&output=html\" target=\"_blank\"></a></span>";
  
    var hiddeninput="<input type=\"hidden\" value=\""+'郑州'+"\" name=\"region\" /><input type=\"hidden\" value=\"html\" name=\"output\" /><input type=\"hidden\" value=\"driving\" name=\"mode\" /><input type=\"hidden\" value=\"latlng:"+marker.getPosition().lat+","+marker.getPosition().lng+"|name:天安门"+"\" name=\"destination\" />";
  
    var content1 ="<form id=\"gotobaiduform\" action=\"http://api.map.baidu.com/direction\" target=\"_blank\" method=\"get\">" + licontent +hiddeninput+"</form>";
   
    var opts1 = { width: 300 };  
        
    var  infoWindow = new BMap.InfoWindow(content1, opts1);  
    marker.openInfoWindow(infoWindow);  
    marker.addEventListener('click',function(){
        marker.openInfoWindow(infoWindow);
    });  
      
    function gotobaidu(type)  
    {  
        if($.trim($("input[name=origin]").val())=="")  
        {  
            alert("请输入起点！");  
            return;  
        }else{  
            if(type==1)  
            {  
                $("input[name=mode]").val("transit");  
                $("#gotobaiduform")[0].submit();  
            }else if(type==2)  
            {      
                $("input[name=mode]").val("driving");          
                $("#gotobaiduform")[0].submit();  
            }  
        }  
    }     
</script>
