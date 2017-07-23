$('document').ready(function () {
    /*
     * 生成级联菜单
     */
    var i = 1945;
    var date = new Date();
    var year = date.getFullYear();//获取当前年份

    /*
     * 处理每个月有多少天---联动
     */
    $('.ddlMonth').change(function () {
        BindDayList();
    });

});

function BindDayList(){
    var currentDay;
    var currentMonth = $('.ddlMonth').val();
    var myDate = new Date();
    var date = myDate.getFullYear();//获取当前年份
    var nowMonth = myDate.getMonth() + 1;
    var nowDay = myDate.getDate();
    //alert("currentMonth:" + currentMonth + "  nowMonth:" + nowMonth);

    switch (currentMonth) {
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12": total = 31; break;
        case "4":
        case "6":
        case "9":
        case "11": total = 30; break;
        case "2":
            if ((Flag % 4 == 0 && Flag % 100 != 0) || Flag % 400 == 0) {
                total = 29;
            } else {
                total = 28;
            }
        default: break;
    }

    if (currentMonth == nowMonth && nowDay + 1 < total) {
        nowDay = myDate.getDate() + 1;
    }
    else {
        nowDay = 1;
    }

    if (nowDay == total) {
        nowDay = nowDay + "<option value='" + nowDay + "'>" + nowDay + "日</option>";
    }
    else {
        for (day = nowDay; day <= total; day++) {
            currentDay = currentDay + "<option value='" + day + "'>" + day + "日</option>";
        }
    }


    $('.ddlDay').html(currentDay);//生成日期下拉菜单

}