window.onload = function () {
    new Page({
        id: 'pagination',
        pageTotal: 5, //必填,总页数
        pageAmount: 5,  //每页多少条
        dataTotal: 5, //总共多少条数据
        curPage:1, //初始页码,不填默认为1
        pageSize: 5, //分页个数,不填默认为5
        showPageTotalFlag:true, //是否显示数据统计,不填默认不显示
        showSkipInputFlag:true, //是否支持跳转,不填默认不显示
        getPage: function (page) {
            //获取当前页数
            console.log(page);
        }
    });

    console.log(getQueryString('type'));
    if(getQueryString('type')==='dynamic'){
        $('#dynamic').onclick = dynamicClick();
    }
    if(getQueryString('type')==='media'){
        $('#media').onclick = mediaClick();
    }
    if(getQueryString('type')==='industry'){
        $('#industry').onclick = industryClick();
    }
    if(window.location.href.indexOf('type') === -1){
        $('#dynamic').onclick = dynamicClick();
    }

};

const newsInfo = {
    page:getQueryString('page'),
    articleType:getQueryString('articleType')
}



function information(type,page){
    $.ajax({
        type: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        url: `${baseUrl}/doc/api/common/newsArticle/findArticleInformation`,
        // data: `data=${JSON.stringify(type)}`,
        success: (res) => {
            const data = res.data;
            let content = '';
            for (let i = 0; i < data.list.length; i++){
                if (data.list[i].articleType === type && data.page===page) {
                    if (content === '') {
                        content = `<div class="news-content"><div class="news-content-img"><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm"><img src="${data.list[0].picUrls}" width="100%" height="100%" alt="${data.list[i].title}"></a></div><div class="news-content-aside"><div class="news-content-text"><div class="news-content-topic"><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm"><h1>${data.list[i].title}</h1></a></div><div class="news-content-brief">${data.list[i].description}</div></div><div class="news-content-bottom"><div class="news-content-time">${moment(data.list[i].createTime).format('YYYY-MM-DD')}</div><div class="news-content-heat">热度：<span style="color: #0e9aef">${data.list[i].clickNum}</span></div></div></div></div>`
                    } else {
                        content += `<div class="line"></div><div class="news-content"><div class="news-content-img"><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm"><img src="${data.list[0].picUrls}" width="100%" height="100%" alt="${data.list[i].title}"></a></div><div class="news-content-aside"><div class="news-content-text"><div class="news-content-topic"><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm"><h1>${data.list[i].title}</h1></a></div><div class="news-content-brief">${data.list[i].description}</div></div><div class="news-content-bottom"><div class="news-content-time">${moment(data.list[i].createTime).format('YYYY-MM-DD')}</div><div class="news-content-heat">热度：<span style="color: #0e9aef">${data.list[i].clickNum}</span></div></div></div></div>`
                    }
                }
            }
            $('.news-content-container').html(content);
        }
    })
}


$(function () {
const orderId = {
        order : "id"
    };
    const orderHot = {
        order : "clickNum"
    };
    // 资讯页最新文章推荐
$.ajax({
        type: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        url: `${baseUrl}/doc/api/common/newsArticle/searchArticleList`,
        data: `data=${JSON.stringify(orderId)}`,
        success: (res) => {
            const data = res.data;
            let rec1 = '';
            for(let i=0; i<data.list.length; i++){
                rec1 += `<div><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm">${data.list[i].title}</a></div>`
            }
            $('.new-rec-container').append(rec1);
        }
});

    // 资讯页最热文章推荐
$.ajax({
        type: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        url: `${baseUrl}/doc/api/common/newsArticle/searchArticleList`,
        data: `data=${JSON.stringify(orderHot)}`,
        success: (res) => {
            const data = res.data;
            let rec1 = '';
            for(let i=0; i<data.list.length; i++){
                rec1 += `<div><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm">${data.list[i].title}</a></div>`
            }
            $('.hot-rec-container').append(rec1);
        }
});
});

// 资讯页自选动态新闻配置
function dynamicClick() {
    $(".top-guide-name").text($(".news-nav-text").eq(0).text());
    $(".news-nav-text").eq(0).addClass("news-nav-text-choose");
    $(".news-nav-text").eq(0).siblings().removeClass("news-nav-text-choose");
    information(0,1)
}

// 资讯页媒体报道新闻配置
function mediaClick() {
    $(".top-guide-name").text($(".news-nav-text").eq(1).text());
    $(".news-nav-text").eq(1).addClass("news-nav-text-choose");
    $(".news-nav-text").eq(1).siblings().removeClass("news-nav-text-choose");
    information(1,1)
}

// 资讯页行业动态新闻配置
function industryClick() {
    $(".top-guide-name").text($(".news-nav-text").eq(2).text());
    $(".news-nav-text").eq(2).addClass("news-nav-text-choose");
    $(".news-nav-text").eq(2).siblings().removeClass("news-nav-text-choose");
    information(2,1)
}


