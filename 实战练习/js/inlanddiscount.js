
$(function(){
    getlist();
    var pageCount='';
      isLoading=false;
    $(window).scroll(function(){
        var totalHeight=$(document).height()
        //console.log(totalHeight)
        var visibleHeight=$(window).height();
        //console.log(visibleHeight)
        var scroTop=$(window).scrollTop();
        //console.log(scroTop)
        var footerHeight=$('#footer').height()
        //console.log(footerHeight);
        console.log((visibleHeight+scroTop)+'---+++++++++_________----------'+(totalHeight-footerHeight))
        if(visibleHeight+scroTop>=totalHeight-footerHeight){
            //console.log('hehe')
          if(!isLoading){
              if(pageid>=pageCount){
                  $('#loading').html('所有图片加载完毕')
                  $('#loading-info>img').css({display:'none'})

              }else{
                  pageid=pageid+1;
                  getlist()


              }
          }

        }
    })


    //var totalpageId=
    getlist()
  function getlist(){
      isLoading=true;
       pageid=1
      setTimeout(function(){
          //$('#loading').css({display:'none'})

          $.ajax({
              url:'http://127.0.0.1:3000/api/getproductlist',
              type:'get',
              dataType:'json',
              data:{categoryid:0,pageid :pageid},
              success:function(data){
                  console.log(data);
                  var html=template('discountlist',data);
                  $('#product-list').append(html);
                  pageCount=Math.ceil(data.totalCount/data.pagesize)
              }
          })
          //$('#loading').html('所有图片加载完毕')
          //$('#loading-info>img').css({display:'none'})

      },2000)
      isLoading=false
  }
})

