// URL配置
let baseUrl = '';
// window.location.href.indexOf('dev') > -1 ? baseUrl = 'http://dev.wegoomall.cn' : baseUrl = 'http://localhost:63342/platfrom-htdocs';
window.location.href.indexOf('dev') > -1 ? baseUrl = 'http://dev.wegoomall.cn' : baseUrl = 'http://wchoosemall.com';
$(function () {
    $('.side-menu-download').mouseover(function () {
        $(".side-menu-download .side-menu-text").css("color","white");
        $(".side-menu-download").css("background","rgba(238,39,28,1)");
        $(".side-menu-download img").attr("src","https://file.wchoosemall.com/platform/manager/pic/20190610/14097237432681566.png");
        $(".erweima").css("display","block");
    });
    $(".side-menu-download").mouseleave(function(){
        $(".side-menu-download .side-menu-text").css("color","black");
        $(".side-menu-download").css("background","rgba(255,255,255,1)");
        $(".side-menu-download img").attr("src","https://file.wchoosemall.com/platform/manager/pic/20190610/14260023591740866.png");
        $(".erweima").css("display","none");
    });

    $('.side-menu-service').mouseover(function () {
        $(".side-menu-service .side-menu-text").css("color","white");
        $(".side-menu-service").css("background","rgba(238,39,28,1)");
        $(".side-menu-service img").attr("src","https://file.wchoosemall.com/platform/manager/pic/20190610/14097237456162271.png");
    });
    $(".side-menu-service").mouseleave(function(){
        $(".side-menu-service .side-menu-text").css("color","black");
        $(".side-menu-service").css("background","rgba(255,255,255,1)");
        $(".side-menu-service img").attr("src","https://file.wchoosemall.com/platform/manager/pic/20190610/14093866611316136.png");
    });


    $('.side-menu-phone').mouseover(function () {
        $(".side-menu-phone .side-menu-text").css("color","white");
        $(".side-menu-phone").css("background","rgba(238,39,28,1)");
        $(".side-menu-phone img").attr("src","https://file.wchoosemall.com/platform/manager/pic/20190610/14263394444181535.png");
        $(".tel-img").css("display","block");
    });
    $(".side-menu-phone").mouseleave(function(){
        $(".side-menu-phone .side-menu-text").css("color","black");
        $(".side-menu-phone").css("background","rgba(255,255,255,1)");
        $(".side-menu-phone img").attr("src","https://file.wchoosemall.com/platform/manager/pic/20190610/14260023614439296.png");
        $(".tel-img").css("display","none");
    });

    $(".side-menu-top").on('click',function(){
        $('html,body').animate({scrollTop:0},'slow');
    });

    $(".morebox").on('click',function () {
        window.location.href=`${baseUrl}/newOfficial/newOfficialInformation.html`
    });

});
// 正式环境：
function changeMenu(num) {
    if (num === 0) {
        window.location.href=`${baseUrl}`
    }
    if (num === 1) {
        window.location.href=`${baseUrl}/newOfficial/newOfficialDownload.html`
    }
    if (num === 2) {
        window.location.href=`${baseUrl}/newOfficial/newOfficialInformation.html`
    }
    if (num === 3) {
        window.location.href=`${baseUrl}/newOfficial/newOfficialHelp.html`
    }
    if (num === 4) {
        window.location.href=`${baseUrl}/newOfficial/newOfficialAbout.html`
    }
}


