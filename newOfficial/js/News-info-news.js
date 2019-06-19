$(function () {
const orderId = {
        order : "id"
    };
    const orderHot = {
        order : "clickNum"
    };
    // 默认加载自选动态
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
                if (data.list[i].articleType === 0) {
                    if (content === '') {
                        content = `<div class="news-content"><div class="news-content-img"><img src="${data.list[0].picUrls}" width="100%" height="100%" alt="${data.list[i].title}"></div><div class="news-content-aside"><div class="news-content-text"><div class="news-content-topic"><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm">${data.list[i].title}</a></div><div class="news-content-brief">${data.list[i].description}</div></div><div class="news-content-bottom"><div class="news-content-time">${moment(data.list[i].createTime).format('YYYY-MM-DD')}</div><div class="news-content-heat">热度：<span style="color: #0e9aef">${data.list[i].clickNum}</span></div></div></div></div>`
                    } else {
                        content += `<div class="line"></div><div class="news-content"><div class="news-content-img"><img src="${data.list[0].picUrls}" width="100%" height="100%" alt="${data.list[i].title}"></div><div class="news-content-aside"><div class="news-content-text"><div class="news-content-topic"><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm">${data.list[i].title}</a></div><div class="news-content-brief">${data.list[i].description}</div></div><div class="news-content-bottom"><div class="news-content-time">${moment(data.list[i].createTime).format('YYYY-MM-DD')}</div><div class="news-content-heat">热度：<span style="color: #0e9aef">${data.list[i].clickNum}</span></div></div></div></div>`
                    }
                }
            }

            $('.news-content-container').html(content);

        }
    });

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
                        content = `<div class="news-content"><div class="news-content-img"><img src="${data.list[0].picUrls}" width="100%" height="100%" alt="${data.list[i].title}"></div><div class="news-content-aside"><div class="news-content-text"><div class="news-content-topic"><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm">${data.list[i].title}</a></div><div class="news-content-brief">${data.list[i].description}</div></div><div class="news-content-bottom"><div class="news-content-time">${moment(data.list[i].createTime).format('YYYY-MM-DD')}</div><div class="news-content-heat">热度：<span style="color: #0e9aef">${data.list[i].clickNum}</span></div></div></div></div>`
                    } else {
                        content += `<div class="line"></div><div class="news-content"><div class="news-content-img"><img src="${data.list[0].picUrls}" width="100%" height="100%" alt="${data.list[i].title}"></div><div class="news-content-aside"><div class="news-content-text"><div class="news-content-topic"><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm">${data.list[i].title}</a></div><div class="news-content-brief">${data.list[i].description}</div></div><div class="news-content-bottom"><div class="news-content-time">${moment(data.list[i].createTime).format('YYYY-MM-DD')}</div><div class="news-content-heat">热度：<span style="color: #0e9aef">${data.list[i].clickNum}</span></div></div></div></div>`
                    }
                }
            }
            $('.news-content-container').html(content);
        }
});
}

// 资讯页媒体报道新闻配置
function mediaClick() {
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
                        content = `<div class="news-content"><div class="news-content-img"><img src="${data.list[0].picUrls}" width="100%" height="100%" alt="${data.list[i].title}"></div><div class="news-content-aside"><div class="news-content-text"><div class="news-content-topic"><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm">${data.list[i].title}</a></div><div class="news-content-brief">${data.list[i].description}</div></div><div class="news-content-bottom"><div class="news-content-time">${moment(data.list[i].createTime).format('YYYY-MM-DD')}</div><div class="news-content-heat">热度：<span style="color: #0e9aef">${data.list[i].clickNum}</span></div></div></div></div>`
                    } else {
                        content += `<div class="line"></div><div class="news-content"><div class="news-content-img"><img src="${data.list[0].picUrls}" width="100%" height="100%" alt="${data.list[i].title}"></div><div class="news-content-aside"><div class="news-content-text"><div class="news-content-topic"><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm">${data.list[i].title}</a></div><div class="news-content-brief">${data.list[i].description}</div></div><div class="news-content-bottom"><div class="news-content-time">${moment(data.list[i].createTime).format('YYYY-MM-DD')}</div><div class="news-content-heat">热度：<span style="color: #0e9aef">${data.list[i].clickNum}</span></div></div></div></div>`
                    }
                }
            }
            $('.news-content-container').html(content);
        }
});
}

// 资讯页行业动态新闻配置
function industryClick() {
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
                        content = `<div class="news-content"><div class="news-content-img"><img src="${data.list[0].picUrls}" width="100%" height="100%" alt="${data.list[i].title}"></div><div class="news-content-aside"><div class="news-content-text"><div class="news-content-topic"><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm">${data.list[i].title}</a></div><div class="news-content-brief">${data.list[i].description}</div></div><div class="news-content-bottom"><div class="news-content-time">${moment(data.list[i].createTime).format('YYYY-MM-DD')}</div><div class="news-content-heat">热度：<span style="color: #0e9aef">${data.list[i].clickNum}</span></div></div></div></div>`
                    } else {
                        content += `<div class="line"></div><div class="news-content"><div class="news-content-img"><img src="${data.list[0].picUrls}" width="100%" height="100%" alt="${data.list[i].title}"></div><div class="news-content-aside"><div class="news-content-text"><div class="news-content-topic"><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm">${data.list[i].title}</a></div><div class="news-content-brief">${data.list[i].description}</div></div><div class="news-content-bottom"><div class="news-content-time">${moment(data.list[i].createTime).format('YYYY-MM-DD')}</div><div class="news-content-heat">热度：<span style="color: #0e9aef">${data.list[i].clickNum}</span></div></div></div></div>`
                    }
                }
            }
            $('.news-content-container').html(content);
        }
});
}
