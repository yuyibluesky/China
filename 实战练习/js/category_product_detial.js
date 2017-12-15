/**
 * Created by ¿Ó—«≥¨ on 2017/11/22.
 */
$(function(){
    var params=getParams('productid')
    var categoryId='';
    console.log(params);
    $.ajax({
        url:'http://127.0.0.1:3000/api/getproduct',
        dataType:'json',
        data:{productid :params},
        success:function(data){
            var displayName=data.result[0].productName.substring(0,2);
            //console.log(data)
            var productNameTag='<li class="active">'+displayName+'</li>'
            //$('.breadcrumb').append(productNameTag)
             categoryId=data.result[0].categoryId
            $.ajax({
                url:'http://127.0.0.1:3000/api/getcategorybyid',
                dataType:'json',
                data:{categoryid:categoryId},
                success:function(data){
                    console.log(data)
                    var categoryNameTag='<li><a href="category_product_list.html?categoryid='+categoryId+'">'+data.result[0].category+'</a></li>'
                    $('.breadcrumb').append(categoryNameTag)
                    //$('.breadcrumb').append(productNameTag)
                }
            })
        }
    })
})