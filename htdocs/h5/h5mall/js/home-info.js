$(function () {
    $.ajax({
        url: "js/info.json",
        type: "GET",
        dataType: "json",
        success: (res) => {
            const data = res.data;
            let a=0;
            // 模块1
            let contentTop = '';
            contentTop += `<div class="headerline"><div class="line"></div> <div class="title">${data[a].moduleView.moduleName}</div> </div> <div class="bottom-line"></div><div class="videoHot"><ul></ul></div><div class="spacer"></div>`;
            $('.mode1').append(contentTop);
            let content='';
            for(let i=0;i<data[a].moduleViewInfoList.length;i++){
                content += `<li><div class="cover"><img class="cover-img" lazy="loaded" src="${data[a].moduleViewInfoList[i].imageUrl}"></div><div class="videoInfo"><h4>${data[a].moduleViewInfoList[i].title}</h4> <p class="desc">${data[a].moduleViewInfoList[i].titleDesc}</p><p class="price"></p></div></li>`
            }
            $('.videoHot ul').append(content)


            // 模块2
            contentTop = '';
            a++;
            console.log(a)
            contentTop += `<div class="headerline"><div class="line"></div><div class="title">${data[a].moduleView.moduleName}</div><div class="more"><span>查看全部</span></div></div><div class="bottom-line"></div><div class="studyPlan"><ul class="vipul"></ul><div class="spacer"></div>`;
            $('.mode2').append(contentTop);
            content='';
            for(let i=0;i<data[a].moduleViewInfoList.length;i++){
                content += `<li><div class="cover"><img class="cover-img" src="src="${data[a].moduleViewInfoList[i].imageUrl}" lazy="loaded"></div><div class="classInfo"><h4>如何塑造第一印象</h4><p>头像和昵称</p><p class="desc"><span class="desc1">已经有5人学习</span><span class="desc2">1讲|2课</span></p></div></li>`
            }
            $('.mode2 .vipul').append(content)


        }
    })

});