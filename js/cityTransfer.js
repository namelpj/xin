/**
 * Created by l on 2017/4/2.
 */
$(document).ready(function () {
    //tab切换
    $(".tabSwitch a:first").addClass("tabactive");
    var $div = $('.con');

    $(".tabSwitch a").click(function () {
        var $this = $(this);
        var $index = $this.index();
        $(".tabSwitch a").removeClass("tabactive");
        $this.addClass('tabactive');
        $div.css('display','none');
        $div.eq($index).css('display','block');
    });


    //业务类型选择公共代码
    $(".carCapacity a:first").addClass("carActive");


    $(".carCapacity a").click(function () {
        $(".carCapacity a").removeClass("carActive");
        $(this).addClass("carActive");
    });



    $(".carType a:first").addClass("typeActive");


    $(".carType a").click(function () {
        $(".carType a").removeClass("typeActive");
        $(this).addClass("typeActive");
    });



    //短信验证码
    $(".carPhone_lastinput2 ").click(function(){

        var countdown = 60;
        var _this = $(this);

        _this.attr("disabled", "true");
        _this.addClass("carPhone_disable");
        _this.val(countdown + "s");
        var timer = setInterval(function(){
            if (countdown == 0) {
                clearInterval(timer);
                _this.removeAttr("disabled");
                _this.removeClass("carPhone_disable");
                _this.val("发送验证码");
            }
            else {
                countdown--;
                _this.val(countdown + "s");
            }
        }, 1000);
        return false;
    });



});