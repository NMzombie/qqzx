$(function () {
    $.ajax({
        url: "js/nav-info1.json",
        type: "GET",
        dataType: "json",
        success: (res) => {
            const data = res.data;
            let topImg ='';
            let content=''
            for(let i=0;i<data.list.length;i++){
                if(getQueryString('id') === JSON.stringify(data.list[i].id)){
                    console.log(data.list[i].id);
                    topImg +=`<img src="${data.list[i].picUrl}" alt="">`;
                    content += `<h4>${data.list[i].name}</h4><div class="priceInfo"><span class="price vipFree tag">会员免费</span></div><div class="share"><i class="iconfont">&#xe624;</i><span> 分享</span></div><div class="buyer">${data.list[i].listenCountDesc}</div>`
                }
            }
            $('.detialTop').append(topImg);
            $('.goodsInfo').append(content);
        }
    })

});