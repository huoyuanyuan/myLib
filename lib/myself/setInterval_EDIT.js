/**
 * Created by Administrator on 2017/1/11 0011.
 */
//功能：修改window.setInterval，使之可以传递参数和对象像参数
//方法：setInterval(回调函数，时间，参数1，参数n)参数可以为对象：如数组等
function setInterval_EDIT() {
    var __sto = setInterval;
    window.setInterval = function (callback,timeout,param) {
        var args = Array.prototype.slice.call(arguments,2);
        var _cb = function () {
            callback.apply(null,args);
        }
        __sto(_cb,timeout);
    }
}