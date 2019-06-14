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
        window.location.href='newOfficialInformation.html'
    })
});
function changeMenu(num) {
    if (num === 0) {
        window.location.href='index.html'
    }
    if (num === 1) {
        window.location.href='newOfficialDownload.html'
    }
    if (num === 2) {
        window.location.href='newOfficialInformation.html'
    }
    if (num === 3) {
        window.location.href='newOfficialHelp.html'
    }
    if (num === 4) {
        window.location.href='newOfficialAbout.html'
    }
}