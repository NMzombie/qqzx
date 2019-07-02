$(function () {
    $.ajax({
        url: "js/nav-info1.json",
        type: "GET",
        dataType: "json",
        success: (res) => {
            const data = res.data;
            let topImg ='';
            let content='';
            let contentImg='';
            for(let i=0;i<data.list.length;i++){
                if(getQueryString('id') === JSON.stringify(data.list[i].id)){
                    topImg +=`<img src="${JSON.parse(data.list[i].gallery)[0].img}" alt="">`;
                    content += `<h4>${data.list[i].name}</h4><div class="priceInfo"><span class="price vipFree tag">会员免费</span></div><div class="buyer">${data.list[i].listenCountDesc}</div>`;
                    // content += `<h4>${data.list[i].name}</h4><div class="priceInfo"><span class="price vipFree tag">会员免费</span></div><div class="share"><i class="iconfont">&#xe624;</i><span> 分享</span></div><div class="buyer">${data.list[i].listenCountDesc}</div>`
                    contentImg +=`${data.list[i].detail}`;
                }
            }
            $('.detialTop').append(topImg);
            $('.goodsInfo').append(content);
            $('.container').append(contentImg);
        }
    })

});
