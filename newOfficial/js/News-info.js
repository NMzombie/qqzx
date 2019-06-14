$(function () {
    // 获取url参数
    function getUrlinfo(variable)
    {
        let query = window.location.search.substring(1);
        let vars = query.split("&");
        for (let i=0;i<vars.length;i++) {
            let pair = vars[i].split("=");
            if(pair[0] === variable){
                return pair[1];
            }
        }
        return(false);
    }

    const data = [
        {
            id:0,
            newsTitle:'社交+电商对于商家有什么帮助？',
            newsInfo:'现如今的商品市场已经步入并深耕电商经济，企业开始追逐互联网社交红利，社交电商是风口也已经是老生常谈；额。那到底社交+电商对于企业来说有什么帮助呢？',
            heat:400,
            time:'2019.6.14'
        },
        {
            id:1,
            newsTitle:'电商发展带来的好处',
            newsInfo:'“电子商务”和“网上购物”通常可以互换使用，但其核心电子商务比这更广泛 - 它体现了在线开展业务的概念，包含多种不同的服务，例如进行在线支付，预订机票等。',
            heat:100,
            time:'2019-05-24'
        },
        {
            id:2,
            newsTitle:'2019年电子商务趋势',
            newsInfo:'近年来，电子商务的兴起是显而易见的，也有很多公司都开始将精力集中在更人性化的客户体验上。然而要做到这一点，就必须跟上当今的电商趋势。下面是2019年要考虑的四种电子商务趋势。',
            heat:320,
            time:'2019.6.13'
        },
        {
            id:3,
            newsTitle:'电商形式可以为企业带来什么好处？',
            newsInfo:'电商的发展对于企业的商品运营及其日常运行以及整体利润率产生重大影响。那具体可以带来什么好处呢？',
            heat:350,
            time:'2019.6.14'
        },
        {
            id:4,
            newsTitle:'电子商务业务模式和传统订单模式的区别',
            newsInfo:'商业模式决定了零售商的角色定位、产品存储类型和产品到用户的方式，那么电子商务业务模式和传统订单模式又有哪些区别呢？',
            heat:320,
            time:'2019.6.13'
        }
    ];

    // 资讯页新闻配置
    let content = '';
    for(let i=0; i<data.length; i++){
        if(i === 0){
            content = `<div class="news-content"><div class="news-content-img"></div><div class="news-content-aside"><div class="news-content-text"><div class="news-content-topic"><a href="newOfficialNewsDetail.html?id=${data[i].id}">${data[i].newsTitle}</a></div><div class="news-content-brief">${data[i].newsInfo}</div></div><div class="news-content-bottom"><div class="news-content-time">${data[i].time}</div><div class="news-content-heat">热度：<span style="color: #0e9aef">${data[i].heat}</span></div></div></div></div>`
        }else {
            content += `<div class="line"></div><div class="news-content"><div class="news-content-img"></div><div class="news-content-aside"><div class="news-content-text"><div class="news-content-topic"><a href="newOfficialNewsDetail.html?id=${data[i].id}">${data[i].newsTitle}</a></div><div class="news-content-brief">${data[i].newsInfo}</div></div><div class="news-content-bottom"><div class="news-content-time">${data[i].time}</div><div class="news-content-heat">热度：<span style="color: #0e9aef">${data[i].heat}</span></div></div></div></div>`
        }
    }
    $('.news-content-container').append(content);

    // 资讯页最新文章推荐
    let Reccontent1 = '';
    for(let i=0; i<5; i++){
       Reccontent1 += `<div><a href="">${data[i].newsTitle}</a></div>`
    }
    $('.new-rec-container').append(Reccontent1);

    $('.hot-rec-container').append(Reccontent1);





    // 首页新闻区域配置
    let homeContent1 = '';
    homeContent1 += `<div class="news-item-img"></div><div class="news-text-topic">${data[0].newsTitle}</div><div class="news-text-container"><div style="display: flex;justify-content: space-between"><div class="news-text-content"><a href="">${data[1].newsTitle}</a></div><div class="news-time">${data[1].time}</div></div><div style="display: flex;justify-content: space-between"><div class="news-text-content"><a href="">${data[2].newsTitle}</a></div><div class="news-time">${data[2].time}</div></div><div style="display: flex;justify-content: space-between"><div class="news-text-content"><a href="">${data[3].newsTitle}</a></div><div class="news-time">${data[3].time}</div></div></div></div>`
    $('.news-item1').append(homeContent1);


    // for(let i=0; i<data.length; i++){
    //     if(getUrlinfo("id")===data[i].id.toString()){
    //         $('.news-detail-topic').html(data[i].newsTitle);
    //     }
    // }

});
