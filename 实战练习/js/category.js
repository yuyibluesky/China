/**
 * Created by 李亚超 on 2017/11/19.
 */
$(function(){
    $.ajax({
        dataType:'json',
        type:'get',
        url:'http://127.0.0.1:3000/api/getcategorytitle',
        success:function(data){
            var html=template('catagory-title',data)

            $('#category').html(html)


            //通过自定义属性获取到父级的属性；
            $('#category>#accordion .panel .panel-heading .panel-title a').click(function(){
                //console.log('23')
                var parentid=this.dataset["titleMyId"];
                //console.log(parentid);
                var parenthref=this.href;
                parenthref=parenthref.split('#')[1];
                //console.log(parenthref)
                $.ajax({
                    type:'get',
                    dataType:'json',
                    url:'http://127.0.0.1:3000/api/getcategory',
                    data:{titleid:parentid},
                    success:function(data){
                        //console.log(data)
                        var html=template('twochild',data)
                        //console.log("#category>.panel-group>.panel>#"+parenthref+">.panel-body")
                        //console.log(html);
                        ////
                        $("#category>.panel-group>.panel>#"+parenthref+">.panel-body").html(html)
                    //
                    }
                })
            })

            //$.ajax({
            //
            //});
        }
    });

});
function goTop(){
    var duration=300;

    //console.log("123")
    $('body').animate({scrollTop:0},duration)

}