/**
 * Created by Administrator on 2016/12/10 0010.
 */
//获取用户地理位置信息
var getLocation = {
    init: function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.locationSuccess,this.locationError);
        }else {
            alert("您的浏览器不支持H5定位")
        }
    },
    //获取成功处理函数
    locationSuccess: function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var accuracy = position.coords.accuracy;
        console.log("地理位置纬度："+latitude);
        console.log("地理位置径度："+longitude);
        console.log("地理位置精度："+accuracy);
    },
    //获取失败处理函数
    locationError: function (error) {
        console.error("errCode:"+error.code)
        switch(error.code)
        {
            case error.PERMISSION_DENIED:
                console.error("您拒绝了使用位置共享服务，查询已取消");
                break;
            case error.POSITION_UNAVAILABLE:
                console.error("抱歉，暂时无法为您提供位置服务")
                break;
            case error.TIMEOUT:
                console.error("连接超时，请重试")
                break;
            case error.UNKNOWN_ERROR:
                console.error("An unknown error occurred.")
                break;
        }
    },
};

window.getLocation = getLocation;