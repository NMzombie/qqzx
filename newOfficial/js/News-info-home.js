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
                        firArr += `<div class="news-item-img"><a href="${baseUrl}/doc/news-${data.list[i].id}.htm"><img src="${data.list[i].picUrls}" width="100%" height="100%" alt="${data.list[i].title}"></a></div><a href="${baseUrl}/doc/news-${data.list[i].id}.htm"><div class="news-text-topic">${data.list[i].title}</div></a>`
                    } else if (dynamic > 0 && dynamic <= 3) {
                        secArr += `<div style="display: flex;justify-content: space-between"><div class="news-text-content"><a href="${baseUrl}/doc/news-${data.list[i].id}.htm">${data.list[i].title}</a></div><div class="news-time">${moment(data.list[i].createTime).format('YYYY-MM-DD')}</div></div>`
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
                        firArr += `<div class="news-item-img"><a href="${baseUrl}/doc/news-${data.list[i].id}.htm"><img src="${data.list[i].picUrls}" width="100%" height="100%" alt="${data.list[i].title}"></a></div><a href="${baseUrl}/doc/news-${data.list[i].id}.htm"><div class="news-text-topic">${data.list[i].title}</div></a>`
                    } else if (media > 0 && media <= 3) {
                        secArr += `<div style="display: flex;justify-content: space-between"><div class="news-text-content"><a href="${baseUrl}/doc/news-${data.list[i].id}.htm">${data.list[i].title}</a></div><div class="news-time">${moment(data.list[i].createTime).format('YYYY-MM-DD')}</div></div>`
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
                        firArr += `<div class="news-item-img"><a href="${baseUrl}/doc/news-${data.list[i].id}.htm"><img src="${data.list[i].picUrls}" width="100%" height="100%" alt="${data.list[i].title}"></a></div><a href="${baseUrl}/doc/news-${data.list[i].id}.htm"><div class="news-text-topic">${data.list[i].title}</div></a>`
                    } else if (industry > 0 && industry <= 3) {
                        secArr += `<div style="display: flex;justify-content: space-between"><div class="news-text-content"><a href="${baseUrl}/doc/news-${data.list[i].id}.htm">${data.list[i].title}</a></div><div class="news-time">${moment(data.list[i].createTime).format('YYYY-MM-DD')}</div></div>`
                    }
                    industry++
                }
            }
            $('.news-item3').append(`${firArr}<div class="news-text-container">${secArr}</div>`);
        }
    });

    $('#dynamic-more').click(function () {
        sessionStorage.setItem("type","dynamic")
    });

    $('#media-more').click(function () {
        sessionStorage.setItem("type","media")
    });

    $('#industry-more').click(function () {
        sessionStorage.setItem("type","industry")
    });

    const data =[
        {
            alt:"雅诗兰黛",
            imgUrl:"https://file.wchoosemall.com/platform/manager/pic/20190621/15016628020067608.png"
        },
        {
            alt:"迪奥",
            imgUrl:"https://file.wchoosemall.com/platform/manager/pic/20190621/15016627837385921.png"
        },
        {
            alt:"SKII",
            imgUrl:"https://file.wchoosemall.com/platform/manager/pic/20190621/15016627791868604.png"
        },
        {
            alt:"资生堂",
            imgUrl:"https://file.wchoosemall.com/platform/manager/pic/20190621/15182785021513907.png"
        },
        {
            alt:"雪花秀",
            imgUrl:"https://file.wchoosemall.com/platform/manager/pic/20190621/15182784989330271.png"
        },
        {
            alt:"苹果",
            imgUrl:"https://file.wchoosemall.com/platform/manager/pic/20190621/15182784982123090.png"
        },
        {
            alt:"华为",
            imgUrl:"https://file.wchoosemall.com/platform/manager/pic/20190621/15182784844019365.png"
        },
        {
            alt:"美图秀秀",
            imgUrl:"https://file.wchoosemall.com/platform/manager/pic/20190621/15016627990418901.png"
        },
        {
            alt:"飞科",
            imgUrl:"https://file.wchoosemall.com/platform/manager/pic/20190621/15182784837080951.png"
        },
        {
            alt:"vivo",
            imgUrl:"https://file.wchoosemall.com/platform/manager/pic/20190621/15182784782699104.png"
        },
        {
            alt:"oppo",
            imgUrl:"https://file.wchoosemall.com/platform/manager/pic/20190621/15182784781850585.png"
        },
        {
            alt:"可口可乐",
            imgUrl:"https://file.wchoosemall.com/platform/manager/pic/20190621/15182784980247982.png"
        },
        {
            alt:"科颜氏",
            imgUrl:"https://file.wchoosemall.com/platform/manager/pic/20190621/15182784952258044.png"
        },
        {
            alt:"Thehistory of Whoo",
            imgUrl:"https://file.wchoosemall.com/platform/manager/pic/20190621/15016627789388178.png"
        },
        {
            alt:"斐珞尔",
            imgUrl:"https://file.wchoosemall.com/platform/manager/pic/20190621/15182784832659319.png"
        },
        {
            alt:"蒙牛",
            imgUrl:"https://file.wchoosemall.com/platform/manager/pic/20190621/15016627988778437.png"
        },
        {
            alt:"贝亲",
            imgUrl:"https://file.wchoosemall.com/platform/manager/pic/20190621/15182784793326092.png"
        },
        {
            alt:"爱他美3",
            imgUrl:"https://file.wchoosemall.com/platform/manager/pic/20190621/15182784783619963.png"
        },
        {
            alt:"九阳",
            imgUrl:"https://file.wchoosemall.com/platform/manager/pic/20190621/15016627869630933.png"
        },
        {
            alt:"卡乐比",
            imgUrl:"https://file.wchoosemall.com/platform/manager/pic/20190621/15016627958971416.png"
        }
    ];
   let content = '';
    for (let i=0; i<20; i++){
        content += `<div class="cooperation-img"><img src="${data[i].imgUrl}"  alt="${data[i].alt}"/></div>`
    }
    $('.cooperation-content').append(content);

});


