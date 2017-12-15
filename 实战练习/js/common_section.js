
/**
 * Created by 李亚超 on 2017/11/22.
 */


$(function () {
    var headerElement=$('#header')

        if(headerElement.length>=1){


            var headerTag='';
            var className=headerElement.attr('class')
            //console.log(className);



            if(className&&className=='back'){
                var titleName=document.title;
                headerTag+='<a class="back" href="#">'
                //headerTag+='    <img src="./images/back.png" alt=""/>'
                headerTag+='</a>'
                headerTag+='<span class="title">'+titleName+'</span>'
            }else{
                headerTag+='<a href="m.mnmanbuy.com" class="header-logo">'
                headerTag+='    <img src="./images/header_logo.png" /> '
                headerTag+="</a>"
            }
            headerTag+=' <a href="#" class="header-app">'
            headerTag+='    <img src="images/header_app.png" alt=""/>  '
            headerTag+='</a>'
            headerElement.append(headerTag);


    }





    var searchElement=$("#search")
    if(searchElement){
        var searchTag=''
            searchTag+='<form action="">'
            searchTag+=     '<input type="search" placeholder="请输入要查询的商品名称" required/><span></span>'
            searchTag+=     '<button value="搜索">搜索</button>'
            searchTag+='</form>'

        searchElement.append(searchTag)
    }
    var footerElement=$('#footer')
    if(footerElement){
        var footerTag='';
        footerTag+='<div class="footer-title">'
        footerTag+=     '<a href="#">登录</a>'
        footerTag+=     '<a href="#">注册</a>'
        footerTag+=     '<a class="backTop" href="javascript:goTop()">返回顶部</a>'
        footerTag+='</div>'
        footerTag+='<div class="footer-msg">'
        footerTag+=     '<a href="#"><span>手机APP下载</span>慢慢买手机版-掌上比价平台</a><br/>'
        footerTag+=     '<a href="#">m.manmanbuy.com</a>'
        footerTag+='</div>'
        footerElement.append(footerTag)


    }
})

function goTop(){
    var duration=300;

    //console.log("123")
    $('body').animate({scrollTop:0},duration)

}

function getParams(key){
    var href=window.location.href.split('?')[1];
    var hrefArr=href.split("&");
    //console.log(hrefArr)

    var paramsObj={};
    for(var i=0;i<hrefArr.length;i++){
        var paramskey=hrefArr[i].split('=')[0];
        //console.log(paramskey)
        var paramsvalue=hrefArr[i].split('=')[1]
        //console.log(paramsvalue)

        paramsObj[paramskey]=paramsvalue;

    }
    return paramsObj[key]


}