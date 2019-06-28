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
            contentTop += `<div class="headerline"><div class="line"></div><div class="title">${data[a].moduleView.moduleName}</div><div class="more"><span>查看全部</span></div></div><div class="bottom-line"></div><div class="studyPlan"><ul class="vipul"></ul><div class="spacer"></div>`;
            $('.mode2').append(contentTop);
            content='';
            for(let i=0;i<data[a].moduleViewInfoList.length;i++){
                content += `<li><div class="cover"><img class="cover-img" src="${data[a].moduleViewInfoList[i].imageUrl}" lazy="loaded"></div><div class="classInfo"><h4>${data[a].moduleViewInfoList[i].title}</h4><p>${data[a].moduleViewInfoList[i].titleDesc}</p><p class="desc"><span class="desc1">${data[a].moduleViewInfoList[i].desc1}</span><span class="desc2">${data[a].moduleViewInfoList[i].desc2}</span></p></div></li>`
            }
            $('.mode2 .vipul').append(content)

            //模块3
            contentTop = '';
            a++;
            contentTop += `<div class="headerline"><div class="line"></div><div class="title">${data[a].moduleView.moduleName}</div><div class="more"><span>查看全部</span></div></div><div class="bottom-line"></div><div class="studyPlan"><ul class="vipul"></ul><div class="spacer"></div>`;
            $('.mode3').append(contentTop);
            content='';
            for(let i=0;i<data[a].moduleViewInfoList.length;i++){
                content += `<li><div class="cover"><img class="cover-img" src="${data[a].moduleViewInfoList[i].imageUrl}" lazy="loaded"></div><div class="classInfo"><h4>${data[a].moduleViewInfoList[i].title}</h4><p>${data[a].moduleViewInfoList[i].titleDesc}</p><p class="desc"><span class="desc1">${data[a].moduleViewInfoList[i].desc1}</span><span class="desc2">${data[a].moduleViewInfoList[i].desc2}</span></p></div></li>`
            }
            $('.mode3 .vipul').append(content)

            //模块4
            contentTop = '';
            a++;
            contentTop += `<div class="headerline"><div class="line"></div><div class="title">${data[a].moduleView.moduleName}</div><div class="more"><span>查看全部</span></div></div><div class="bottom-line"></div><ul class="recommend"></ul><div class="spacer"></div>`;
            $('.mode4').append(contentTop);
            content='';
            for(let i=0;i<data[a].moduleViewInfoList.length;i++){
                content += `<li><div class="graphic"><div class="info"><h5>${data[a].moduleViewInfoList[i].title}</h5><p>${data[a].moduleViewInfoList[i].titleDesc}</p></div><div class="coverList"><div class="cover oneover"><img class="cover-img" src="https://img.mall.xc2018.com.cn/mall/upload/20190625/182830_91_gjq9.jpg" lazy="loaded"></div></div></div></li>`
            }
            $('.recommend').append(content)

        }
    })

});