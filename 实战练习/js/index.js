/**
 * Created by ÀîÑÇ³¬ on 2017/10/20.
 */
$(function(){
    //console.log('12312')
    //console.log(template);
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:3000/api/getindexmenu",
        dataType:"json",
       success:function(data){
           var msg=template("menu-list",data);
           $("#menu .container").html(msg);


           var menuLiHeight= $("#menu>.container>.row>ul>li:nth-of-type(8)").height();
           console.log(menuLiHeight)
           $("#menu>.container>.row>ul>li:nth-last-child(-n+4)").css({height:"0px"})

           var flag=true;
           $("#menu>.container>.row>ul>li:nth-of-type(8)").click(function(){
               if(flag==true){
                   $("#menu>.container>.row>ul>li:nth-last-child(-n+4)").css({display:"block"})

                   $("#menu>.container>.row>ul>li:nth-last-child(-n+4)").css({height:menuLiHeight})
                   flag=false;
               }else if(flag==false){
                   $("#menu>.container>.row>ul>li:nth-last-child(-n+4)").css({display:"block"})

                   $("#menu>.container>.row>ul>li:nth-last-child(-n+4)").css({height:"0px"});
                   flag=true;
               }
               return false;


           })

       }

    })


    $.ajax({
        type:'get',
        url:'http://127.0.0.1:3000/api/getmoneyctrl',
        dataType:'json',
        success:function(data){
            var html=template('recommend-template',data)
            $(".recommend-content").html(html)
        }

    })


})

