/**
 * Created by l on 2017/4/5.
 */

$(document).ready(function () {

    function GetProvinceList() {
        $.ajax({
            url: "/ajax/ajaxLocation.ashx",
            data: "rp=getprovince",
            type: "GET",
            dataType: "JSON",
            success: function (resultJson) {
                var html = "";
                for (var i in resultJson) {
                    html += "<option value=\"" + resultJson[i].ProvinceId + "\"" + ">" + resultJson[i].ProvinceName + "</option>";
                }
                $(".ddlProvince").empty().append("<option value=\"-1\">省份</option>").append(html);
            }
        });
    }

    function GetCityList(pid) {
        if (pid > 0) {
            $.ajax({
                url: "/ajax/ajaxLocation.ashx",
                data: "rp=getcity&provinceId=" + pid,
                type: "GET",
                dataType: "JSON",
                success: function (resultJson) {
                    var html = "";
                    for (var i in resultJson) {
                        html += "<option value=\"" + resultJson[i].CityId + "\"" + ">" + resultJson[i].CityName + "</option>";
                    }
                    $(".ddlCity").empty().append("<option value=\"0\">城市</option>").append(html);
                    $(".ddlArea").empty().append("<option value=\"0\">区县</option>");
                }
            });
        }
        else {
            $(".ddlCity").empty().append("<option value=\"0\">城市</option>");
            $(".ddlArea").empty().append("<option value=\"0\">区县</option>");
        }
    }

    function GetAreaList(cid) {
        if (cid > 0) {
            $.ajax({
                url: "/ajax/ajaxLocation.ashx",
                data: "rp=getarea&cityId=" + cid,
                type: "GET",
                dataType: "JSON",
                success: function (resultJson) {
                    var html = "";
                    for (var i in resultJson) {
                        html += "<option value=\"" + resultJson[i].AreaId + "\"" + ">" + resultJson[i].AreaName + "</option>";
                    }
                    $(".ddlArea").empty().append("<option value=\"0\">区县</option>").append(html);
                }
            });
        }
        else {
            $(".ddlArea").empty().append("<option value=\"0\">区县</option>");
        }
    }

});
