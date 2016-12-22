/**
 * Created by Administrator on 2016/10/14 0014.
 */

(function (doc,win) {

    var docEl = doc.documentElement,
        resizeEvt = "orientationchange" in window ? "orientationchange" :"resize",
        recalc = function () {
            clientWidth = docEl.clientWidth;
            if(!clientWidth) return;
            var myclientWidth = clientWidth;
            if(myclientWidth>=1024){
                myclientWidth = 1000;
            }
            //750为设计稿宽度，此时html的font-size=100px;也就是1rem=100px;
            docEl.style.fontSize = 100 * (myclientWidth/750) + "px";
            if(document.body){
                document.body.style.fontSize = docEl.style.fontSize;
            }
        };
    recalc();
    if(!doc.addEventListener) return;
    win.addEventListener(resizeEvt,recalc,false);
    doc.addEventListener("DOMContentLoaded",recalc,false);

})(document,window);