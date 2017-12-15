/**
 * Created by ���ǳ� on 2017/11/22.
 */

$(function(){
    var params=getParams('categoryid')
    console.log(params);
    var page=1;
    getProductList(params,page)



    //var href=window.location.href.split('?')[1];
    //console.log(href);

   function getProductList(params,page){
       $.ajax({
           url:'http://127.0.0.1:3000/api/getproductlist',
           dataTyp:"json",
           data:{categoryid:params,pageid:page},
           success:function(data){
               //console.log(data)
               var html=template('product-list',data);
               $('#product>#product-item').html(html)
               var totalPage=Math.ceil(data.totalCount/data.pagesize);
               //alert(totalPage)
               var optionTag=''
               for(var i=0;i<totalPage;i++){

                   if((i+1)==page){
                       optionTag+='<option value='+(i+1)+' selected>'+(i+1)+'/'+totalPage+'</option>'


                   }else{
                       optionTag+='<option value='+(i+1)+'>'+(i+1)+'/'+totalPage+'</option>'


                   }

               }
               //console.log(optionTag);
               $('select').html(optionTag)
               console.log(optionTag)

               $('.prev').click(function(){
                   if(page==1){
                       page=1;
                       alert('�Ѿ��ǵ�һҳ��')

                   }else{
                       page--
                   }
                   getProductList(params,page)
                   goTop()
                   return false;
               })
               $('.next-page').click(function(){
                   //console.log('234')
                   if(page>=totalPage){
                       page=totalPage
                       alert('�Ѿ������һҳ��')
                   }else{
                       page++
                   }
                   getProductList(params,page)
                   goTop()
                   return false;
               })
               $('select').unbind('change').bind('change',function(){
                   page=$(this).val()
                   console.log(page)
                   getProductList(params,page)
               })

           }
       })

   }




})
