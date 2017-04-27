$(document).ready(function(){
    $("#myform").easyform();
})

/*点击，密码可视*/
var flag=true;
$("#visible").click(function(){
    if(flag){
       $("#password").attr("type","text");
       flag=false;
    }else{
       $("#password").attr("type","password");
       flag=true;
    }
    
})
/**********输入正确金额***********/
