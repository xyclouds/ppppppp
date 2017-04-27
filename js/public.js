//全局公用函数库
//获取地址栏的键值
function getQueryString(name) {
	    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);  //获取url中"?"符后的字符串并正则匹配
        var context = "";
        if (r != null)
            context = r[2];
        reg = null;
        r = null;
        return context == null || context == "" || context == "undefined" ? "" : context;
}
//获取地址栏中的键值对
function GetRequest() { 
    var url = location.search; //获取url中"?"符后的字串 
    var theRequest = new Object(); 
    if (url.indexOf("?") != -1) { 
        var str = url.substr(1); 
        strs = str.split("&"); 
        for(var i = 0; i < strs.length; i ++) { 
        theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]); 
        } 
    } 
    return theRequest; 
}

function toDecimal2(x) {       
  var f = parseFloat(x);       
  if (isNaN(f)) {  
    return false;      
  }       
  var f = Math.round(x*100)/100;       
  var s = f.toString();       
  var rs = s.indexOf('.');       
  if (rs < 0) {         
    rs = s.length;        
    s += '.';      
  }       
  while (s.length <= rs + 2) {
    s += '0';      
  }
  return s;
}

/*获取 yyyyMMddhhmmss*/
function getFullTime(){
   function pad(n) { return n < 10 ? '0' + n : n }
   var date = new Date();
    var time = date.getFullYear().toString() + pad(date.getMonth() + 1) + pad( date.getDate()) + pad( date.getHours() ) + pad( date.getMinutes() ) + pad( date.getSeconds() ) ;
    return time;
}
var fulltime = getFullTime();
var server="http://openapi.eqianbao.cc/api.svc/api";
var testurl = "http://yl.dianxiao2.cc/api.svc/api"
var requestId = parseInt(Math.random()*1000000);

function commonPara(callback,pwd){
  var data={
      "Ver": "1.0", 
      "datatype": "1",
      "Username": "wap",
      "Password": pwd,
      "timestamp": fulltime,
      "RequestId": requestId,
      "source": "301",
      "functionCode": callback,
      "unitid": "test"
    } 
  return data;
}

function PostAjax(data) {
    var r = {};
    $.ajax({
        url: server,
        type: 'POST',
        async: false,
        data: JSON.stringify(data),
        success: function ($data) {
            r =JSON.parse($data);
        }

    })
    return r;
}
