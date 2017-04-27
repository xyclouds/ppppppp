var commonPara = function(data){
   
   this.Ver = data.Ver || "1.0";
   this.datatype = data.datatype || "1";
   this.Username = data.Username || "lawrence";
   this.Password = data.Password == undefined?false:data.Password || "123456789";
   this.timestamp =this.getFullTime() ;
   this.RequestId = data.RequestId || "1";
   this.source =data.source || "301";
   this.functionCode = data.functionCode == undefined?false:data.functionCode;

}
commonPara.prototype.getFullTime = function(){
   var date = new Date();
   var time = date.getFullYear().toString() + pad(date.getMonth()+1) + pad( date.getDate()) + pad( date.getHours() ) + pad( date.getMinutes() ) + pad( date.getSeconds() ) ;
   return time;
}

function pad(n){
	return n < 10 ? '0'+n:n
}

var server="http://openapi.eqianbao.cc/api.svc/api";
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
