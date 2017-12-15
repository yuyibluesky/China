

/**
 * Created by ¿Ó—«≥¨ on 2017/12/1.
 */

$(function(){
    var openshoped=false
    var areaopened=false
    $(".filter-name .shop").click(function(){
        //$(".shop-content").css({display:'block'})
        if(openshoped){
            openshop()
        }else{
            closeshop()
        }


        return false
    })


    var areaid=0;
    var shopid=0;


    $(".filter-name .area").click(function(){
       if(areaopened){
           openarea()
       }else{
           closearea()
       }
        return false

    })




    $.ajax({
        url:'http://127.0.0.1:3000/api/getgsshop',
        type:'get',
        success:function(data){
            //console.log(data);
            var html=template('shop-id-tpl',data)
            $('.shop-content').html(html)

            $(".shop-content a").click(function(){
                $(".shop-content a").removeClass('haha')
                $(this).addClass('haha');

                shopid=this.dataset['shopnameId']
                console.log(shopid);
                $('.shop').text($(this).text())
                closeshop();
                getlist()
            })





            $.ajax({
                url: "http://127.0.0.1:3000/api/getgsshoparea",
                dataType: "json",
                success:function(data){
                    var html=template('area-id-tpl',data)
                    $('.area-content').html(html)


                    $('.area-content a').click(function(){
                        $('.area-content a').removeClass('haha')
                        $(this).addClass("haha")
                        areaid=this.dataset['areanameId'];
                        console.log(areaid);
                        $(".area").text($(this).text())
                        closearea()
                        getlist()
                    })
                }
            })
        },



    })



    function getlist(){
        $.ajax({
            url: "http://127.0.0.1:3000/api/getgsproduct",
            dataType: "json",
            data: { shopid: shopid, areaid: areaid },
            success:function(data){

            }
        })
    }







    function openshop(){
        closearea()

            $(".shop-content").css({display:'block'})
        $(".shop").addClass('opened')
            openshoped=false


    }
    function closeshop(){
        $(".shop-content").css({display:'none'})
        $(".shop").removeClass('opened')
        openshoped=true
    }

    function openarea(){
        closeshop()

        $(".area-content").css({display:'block'})
        $(".area").addClass("opened");
        areaopened=false

    }
    function closearea(){
        $(".area-content").css({display:'none'})
        $(".area").removeClass("opened");
        areaopened=true;
    }
})
