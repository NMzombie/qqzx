$(function () {
    // 首页新闻配置：
    $.ajax({
        type: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        url: `${baseUrl}/doc/api/common/newsArticle/findArticleInformation`,
        // data: `data=${JSON.stringify(activityId)}`,
        success: (res) => {
            const data = res.data;
            let dynamic = 0;
            let media = 0;
            let industry = 0;
            let firArr = '';
            let secArr = '';
            for (let i = 0; i < data.list.length; i++) {
                if (data.list[i].articleType === 0) {
                    if (dynamic === 0) {
                        firArr += `<div class="news-item-img"><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm"><img src="${data.list[i].picUrls}" width="100%" height="100%"></a></div><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm"><div class="news-text-topic">${data.list[i].title}</div></a>`
                    } else if (dynamic > 0 && dynamic <= 3) {
                        secArr += `<div style="display: flex;justify-content: space-between"><div class="news-text-content"><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm">${data.list[i].title}</a></div><div class="news-time">${moment(data.list[i].createTime).format('YYYY-MM-DD')}</div></div>`
                    }
                    dynamic++
                }
            }
            $('.news-item1').append(`${firArr}<div class="news-text-container">${secArr}</div>`);


            firArr = '';
            secArr = '';
            for (let i = 0; i < data.list.length; i++) {
                if (data.list[i].articleType === 1) {
                    if (media === 0) {
                        firArr += `<div class="news-item-img"><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm"><img src="${data.list[i].picUrls}" width="100%" height="100%"></a></div><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm"><div class="news-text-topic">${data.list[i].title}</div></a>`
                    } else if (media > 0 && media <= 3) {
                        secArr += `<div style="display: flex;justify-content: space-between"><div class="news-text-content"><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm">${data.list[i].title}</a></div><div class="news-time">${moment(data.list[i].createTime).format('YYYY-MM-DD')}</div></div>`
                    }
                    media++
                }
            }
            $('.news-item2').append(`${firArr}<div class="news-text-container">${secArr}</div>`);


            firArr = '';
            secArr = '';
            for (let i = 0; i < data.list.length; i++) {
                if (data.list[i].articleType === 2) {
                    if (industry === 0) {
                        firArr += `<div class="news-item-img"><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm"><img src="${data.list[i].picUrls}" width="100%" height="100%"></a></div><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm"><div class="news-text-topic">${data.list[i].title}</div></a>`
                    } else if (industry > 0 && industry <= 3) {
                        secArr += `<div style="display: flex;justify-content: space-between"><div class="news-text-content"><a href="${baseUrl}/doc/wap/news-${data.list[i].id}.htm">${data.list[i].title}</a></div><div class="news-time">${moment(data.list[i].createTime).format('YYYY-MM-DD')}</div></div>`
                    }
                    industry++
                }
            }
            $('.news-item3').append(`${firArr}<div class="news-text-container">${secArr}</div>`);
        }
    });


});
