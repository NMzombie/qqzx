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

    $.ajax({
        type: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        url: `${baseUrl}/doc/api/common/newsArticle/findArticleInformation`,
        success: (res) => {
            const data = res.data;
            let content = '';

            for (let i = 0; i < data.list.length; i++){
                if (data.list[i].articleType === 0) {
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

// 资讯页媒体报道新闻配置
function mediaClick() {
    $(".top-guide-name").text($(".news-nav-text").eq(1).text());
    $(".news-nav-text").eq(1).addClass("news-nav-text-choose");
    $(".news-nav-text").eq(1).siblings().removeClass("news-nav-text-choose");
$.ajax({
        type: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        url: `${baseUrl}/doc/api/common/newsArticle/findArticleInformation`,
        success: (res) => {
            const data = res.data;
            // 资讯页新闻配置
            let content = '';
            for (let i = 0; i < data.list.length; i++){
                if (data.list[i].articleType === 1) {
                    if (content === '') {
                        content = `<div class="news-content"><div class="news-content-img"><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm"><img src="${data.list[0].picUrls}" width="100%" height="100%" alt="${data.list[i].title}"></a></div><div class="news-content-aside"><div class="news-content-text"><div class="news-content-topic"><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm"><h1>${data.list[i].title}</h1></a></div><div class="news-content-brief">${data.list[i].description}</div></div><div class="news-content-bottom"><div class="news-content-time">${moment(data.list[i].createTime).format('YYYY-MM-DD')}</div><div class="news-content-heat">热度：<span style="color: #0e9aef">${data.list[i].clickNum}</span></div></div></div></div>`
                    } else {
                        content += `<div class="line"></div><div class="news-content"><div class="news-content-img"><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm"><img src="${data.list[0].picUrls}" width="100%" height="100%" alt="${data.list[i].title}"></a></div><div class="news-content-aside"><div class="news-content-text"><div class="news-content-topic"><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm"><h1>${data.list[i].title}</h1></a></div><div class="news-content-brief">${data.list[i].description}</div></div><div class="news-content-bottom"><div class="news-content-time">${moment(data.list[i].createTime).format('YYYY-MM-DD')}</div><div class="news-content-heat">热度：<span style="color: #0e9aef">${data.list[i].clickNum}</span></div></div></div></div>`
                    }
                }
            }
            $('.news-content-container').html(content);
        }
});
}

// 资讯页行业动态新闻配置
function industryClick() {
    $(".top-guide-name").text($(".news-nav-text").eq(2).text());
    $(".news-nav-text").eq(2).addClass("news-nav-text-choose");
    $(".news-nav-text").eq(2).siblings().removeClass("news-nav-text-choose");
$.ajax({
        type: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        url: `${baseUrl}/doc/api/common/newsArticle/findArticleInformation`,
        success: (res) => {
            const data = res.data;
            let content = '';
            for (let i = 0; i < data.list.length; i++){
                if (data.list[i].articleType === 2) {
                    if (content === '') {
                        content = `<div class="news-content"><div class="news-content-img"><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm"><img src="${data.list[0].picUrls}" width="100%" height="100%" alt="${data.list[i].title}"></a></div><div class="news-content-aside"><div class="news-content-text"><div class="news-content-topic"><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm"><h1>${data.list[i].title}</h1></a></div><div class="news-content-brief">${data.list[i].description}</div></div><div class="news-content-bottom"><div class="news-content-time">${moment(data.list[i].createTime).format('YYYY-MM-DD')}</div><div class="news-content-heat">热度：<span style="color: #0e9aef">${data.list[i].clickNum}</span></div></div></div></div>`
                    } else {
                        content += `<div class="line"></div><div class="news-content"><div class="news-content-img"><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm"><img src="${data.list[0].picUrls}" width="100%" height="100%" alt="${data.list[i].title}"></a></div><div class="news-content-aside"><div class="news-content-text"><div class="news-content-topic"><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm"><h1>${data.list[i].title}</h1></a></div><div class="news-content-brief">${data.list[i].description}</div></div><div class="news-content-bottom"><div class="news-content-time">${moment(data.list[i].createTime).format('YYYY-MM-DD')}</div><div class="news-content-heat">热度：<span style="color: #0e9aef">${data.list[i].clickNum}</span></div></div></div></div>`
                    }
                }
            }
            $('.news-content-container').html(content);
        }
});
}


window.onload = function () {
    let type = sessionStorage.getItem("type");
    // if(type === 'dynamic'){
    //     $('#dynamic').onclick = dynamicClick();
    //     // 清除 type 防止在test页面刷新后依然触发$('#xxx').click()
    //     // sessionStorage.setItem("type","");
    // }
    // if(type === 'media'){
    //     $('#media').onclick = mediaClick();
    //     // sessionStorage.setItem("type","");
    // }
    // if(type === 'industry'){
    //     $('#industry').onclick = industryClick();
    //     // sessionStorage.setItem("type","");
    // }
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


