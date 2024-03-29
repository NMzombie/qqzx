$(function(){
	var ckAll_goodId = {};
	var ckAll_countryCode = {};
	var ckAll_memberID = {};
	//选择关联商品信息
	$("#select_pro").bind("click", function(e) {
		var page = '';
		getArr();
		getitemSerach(page);
	});

    $("#select_category_recommend").bind("click", function(e) {
        getArr();
        getCategoryRecommendSerach();
    });


    //选择产销国
	$("#select_countrycode").bind("click", function(e) {
		var page = '';
		getCountrySerach();
	});
	
	$(".select_pro").bind("click",function(e){
		var page = '';
		getitemSerach(page);
	});
	
	//关联会员
	$("#select_member").bind("click",function(e){
		var page = '';
		getmemberSerach(page);
	});
	
	//选择订单sku
	 $('[id^="select_sku_"]').bind("click", function(e) {
		var subOrderNo = $(this).attr("subOrderNo");
		getOrderSkuDetailList(subOrderNo);
	});
	 
	//399分佣明细
	 $('[id^="memberCommissionDetail_"]').bind("click", function(e) {
		var orderNo = $(this).attr("orderNo");
		getMemberCommissionDetail(orderNo);
	});
	 
	//用户月结详情显示
	 $('[id^="commission_month_"]').bind("click", function(e) {
		 var page = '';
		var mid = $(this).attr("mid");
		var memberName = $(this).attr("memberName");
		
		$("#mid").val(mid);
		$("#memberName").text(memberName);
		$("#yearMonth").text($("#month").val());
		 var yearMonth = $("#month").val();
		 $(".commission_menus a:first").click();
	});
	 
	 //菜单切换
	 $(".commission_menus a").bind("click", function(e) {
		 var page = '';
		 var type = $(this).attr("type");
		 var mid = $("#mid").val();
		 var yearMonth = $("#month").val();
		 
		 $(".mennu").removeClass('menuactive');
		 $(this).parent().addClass('menuactive');
		 
		 if(type=='normal'){
			 $(".comSkuDetail").show();
			 $("#totalNormalH").show();
			 $(".memberSkuDetail").hide();
			 $("#totalmemberH").hide();
			 getCommissionMonthNormalOrderDetailByMid(page,mid,yearMonth);
		 }else if(type=='399'){
			 $(".comSkuDetail").hide();
			 $("#totalNormalH").hide();
			 $(".memberSkuDetail").show();
			 $("#totalmemberH").show();
			 getCommissionMonth399DetailByMid(page,mid,yearMonth);
		 }
	});
	 
	 
	 
	 
		//选择订单
	 $('[id^="select_mid_"]').bind("click", function(e) {	
		var subOrderNo = $(this).attr("subOrderNo");
		getOrderSkuDetailList(subOrderNo);
	});
	 
	 $('[id^="select_399_"]').bind("click", function(e) {	
			var orderNo = $(this).attr("orderNo");
			getMemberDetailList(orderNo);
		});
		//获取 订单商品分佣明细
		function getMemberDetailList(orderNo){
			$.ajax({
	            url: "/admin/base/commissionmanage/memOrderSkuDetailListView.json?orderNo=" + orderNo,
	            type: "get",
	            success: function (data) {
	                if (data != null) {
	                	console.info("===========");
	                	console.info(data);
	                  	var comOrderCommissionSkuDetailList = data.data;
		        		var tpl = '';
		        		if(comOrderCommissionSkuDetailList.length > 0 ){
		        			$('#skuDetailList').html('');
		        			
		        			for(var i = 0; i < comOrderCommissionSkuDetailList.length; i++){
					    		var tr1 = '<tr>'+
										  '<td>'+ comOrderCommissionSkuDetailList[i].itemName +'</td>'+
										  '<td>'+ comOrderCommissionSkuDetailList[i].itemSkuId +'</td>'+
										  '<td>'+ comOrderCommissionSkuDetailList[i].nickName +'</td>'+
										  '<td>'+ comOrderCommissionSkuDetailList[i].midLevel +'</td>'+
										  '<td>'+ comOrderCommissionSkuDetailList[i].playNumber +'</td>'+
										  '<td>'+ comOrderCommissionSkuDetailList[i].savePrice +'</td>'+
										  '<td>'+ comOrderCommissionSkuDetailList[i].commissionFloor +'</td>'+
										  '<td>'+ comOrderCommissionSkuDetailList[i].commssionStatus +'</td>'+
										  '<td>'+ comOrderCommissionSkuDetailList[i].commissionPrice +'</td>'+
								 	      '</tr>';
					    		
					    		tpl += tr1;
							}
							$('#skuDetailList').html(tpl);
		        		}
	                }
	            }
	        });
		}
	 
	  
	 
	// 订单商品分佣列表
	function getOrderSkuList(subOrderNo){
		$.ajax({
            url: "/admin/base/commissionmanage/comOrderSkuListView.json?subOrderNo=" + subOrderNo,
            type: "get",
            success: function (data) {
            	
            	console.info(data);
                if (data != null) {
                  	var comOrderCommissionSkuList = data.data;
	        		var tpl = '';
	        		if(comOrderCommissionSkuList.length > 0 ){
	        			$('#skuList').html('');
	        			
	        			for(var i = 0; i < comOrderCommissionSkuList.length; i++){
				    		var tr1 = '<tr>'+
									  '<td>'+ comOrderCommissionSkuList[i].itemName +'</td>'+
									  '<td>'+ comOrderCommissionSkuList[i].itemSkuId +'</td>'+
									  '<td>'+ comOrderCommissionSkuList[i].marketPrice +'</td>'+
									  '<td>'+ comOrderCommissionSkuList[i].savePrice +'</td>'+
									  '<td>'+ comOrderCommissionSkuList[i].memberPrice +'</td>'+
									  '<td>'+ comOrderCommissionSkuList[i].amount +'</td>'+
							 	      '</tr>';
				    		
				    		tpl += tr1;
						}
						$('#skuList').html(tpl);
	        		}
                }
            }
        });
	}
	
	//获取 订单商品分佣明细
	function getOrderSkuDetailList(subOrderNo){
		$.ajax({
            url: "/admin/base/commissionmanage/comOrderSkuDetailListView.json?subOrderNo=" + subOrderNo,
            type: "get",
            success: function (data) {
                if (data != null) {
                	console.info("===========");
                	console.info(data);
                  	var comOrderCommissionSkuDetailList = data.data;
	        		var tpl = '';
	        		if(comOrderCommissionSkuDetailList.length > 0 ){
	        			$('#skuDetailList').html('');
	        			for(var i = 0; i < comOrderCommissionSkuDetailList.length; i++){   
	        				var trStar = '<tr>'+
	        							 '<td rowspan='+comOrderCommissionSkuDetailList[i].list.length+'>'+comOrderCommissionSkuDetailList[i].itemName+'</td>'+
	        							 '<td rowspan='+comOrderCommissionSkuDetailList[i].list.length+'>'+comOrderCommissionSkuDetailList[i].itemSkuName+'</td>'+
	        							 '<td rowspan='+comOrderCommissionSkuDetailList[i].list.length+'>'+comOrderCommissionSkuDetailList[i].amount+'</td>'+
	        							 '<td rowspan='+comOrderCommissionSkuDetailList[i].list.length+'>'+priceFormat(comOrderCommissionSkuDetailList[i].sellPrice)+'</td>'+
	        							 '<td rowspan='+comOrderCommissionSkuDetailList[i].list.length+'>'+priceFormat(comOrderCommissionSkuDetailList[i].memberPrice)+'</td>';
	        							var flag = false;
	        							for(var j = 0; j < comOrderCommissionSkuDetailList[i].list.length; j++){
	        								
	        								if(flag==true){
	        									trStar = trStar + ' <tr> <td>'+ comOrderCommissionSkuDetailList[i].list[j].nickName +'</td>';
		        								trStar = trStar +  '<td>'+ comOrderCommissionSkuDetailList[i].list[j].mid +'</td>';
		        								trStar = trStar +  '<td>'+ comOrderCommissionSkuDetailList[i].list[j].midLevel +'</td>';
		        								trStar = trStar +  '<td>'+ priceFormat(comOrderCommissionSkuDetailList[i].list[j].commissionPrice) +'</td>';
		        								trStar = trStar +   '<td>'+ comOrderCommissionSkuDetailList[i].list[j].commissionFloor +'</td> </tr> ';
	        								}
	        								if(flag==false){
	        									trStar = trStar + '<td>'+ comOrderCommissionSkuDetailList[i].list[j].nickName +'</td>';
		        								trStar = trStar +  '<td>'+ comOrderCommissionSkuDetailList[i].list[j].mid +'</td>';
		        								trStar = trStar +  '<td>'+ comOrderCommissionSkuDetailList[i].list[j].midLevel +'</td>';
		        								trStar = trStar +  '<td>'+ priceFormat(comOrderCommissionSkuDetailList[i].list[j].commissionPrice) +'</td>';
		        								trStar = trStar +   '<td>'+ comOrderCommissionSkuDetailList[i].list[j].commissionFloor +'</td>';
		        								trStar = trStar + '<td rowspan='+comOrderCommissionSkuDetailList[i].list.length+'>'+comOrderCommissionSkuDetailList[i].commssionStatus+'</td>';
		        		        				trStar = trStar + '<td rowspan='+comOrderCommissionSkuDetailList[i].list.length+'>'+comOrderCommissionSkuDetailList[i].supplierName+'</td></tr>';
		        		        				flag = true;
	        								}
	        							}
	        				
				    		tpl += trStar;
						}
						$('#skuDetailList').html(tpl);
	        		}
                }
            }
        });
	}
	
	
	//获取 399分佣明细 弹框
	function getMemberCommissionDetail(orderNo){
		$.ajax({
            url: "/admin/base/commissionmanage/memberCommissionDetail.json?orderNo=" + orderNo,
            type: "get",
            success: function (data) {
                if (data != null) {
                  	var memOrderCommissionDetailList = data.data;
	        		var tpl = '';
	        		if(memOrderCommissionDetailList.length > 0 ){
	        			$('#memberCommissionDetailList').html('');
	        			for(var i = 0; i < memOrderCommissionDetailList.length; i++){   
	        				var trStar = '<tr>'+
	        							 '<td>'+memOrderCommissionDetailList[i].memberName+'</td>'+
	        							 '<td>'+memOrderCommissionDetailList[i].memberId+'</td>'+
	        							 '<td>'+memOrderCommissionDetailList[i].midLevel+'</td>'+
	        							 '<td>'+priceFormat(memOrderCommissionDetailList[i].commissionPrice)+'</td>'+
	        							 '<td>'+memOrderCommissionDetailList[i].commssionStatus+'</td></tr>';
				    		tpl += trStar;
						}
						$('#memberCommissionDetailList').html(tpl);
	        		}
                }
            }
        });
	}
	
	
	//获取用户月结表普通订单分佣明细
	function getCommissionMonthNormalOrderDetailByMid(page,mid,yearMonth){
		$.ajax({
            url: "/admin/base/commissionmanage/commissionMonthDetailByMid.json?page="+page+"&mid=" + mid+"&yearMonth="+yearMonth,
            type: "get",
            success: function (data) {
                if (data != null) {
                	console.info("===========");
                	console.info(data);
                  	var comOrderCommissionSkuDetailList = data.data;
	        		var tpl = '';
	        		if(comOrderCommissionSkuDetailList.length > 0 ){
	        			var totalCommissionPrice = 0;
	        			$('#skuDetailList').html('');
	        			$('#memberSkuDetailList').html('');
	        			for(var i = 0; i < comOrderCommissionSkuDetailList.length; i++){   
	        				var trStar = '<tr>'+
	        							 '<td rowspan='+comOrderCommissionSkuDetailList[i].list.length+'>'+comOrderCommissionSkuDetailList[i].itemName+'</td>'+
	        							 '<td rowspan='+comOrderCommissionSkuDetailList[i].list.length+'>'+comOrderCommissionSkuDetailList[i].itemSkuName+'</td>'+
	        							 '<td rowspan='+comOrderCommissionSkuDetailList[i].list.length+'>'+comOrderCommissionSkuDetailList[i].amount+'</td>'+
	        							 '<td rowspan='+comOrderCommissionSkuDetailList[i].list.length+'>'+priceFormat(comOrderCommissionSkuDetailList[i].sellPrice)+'</td>'+
	        							 '<td rowspan='+comOrderCommissionSkuDetailList[i].list.length+'>'+priceFormat(comOrderCommissionSkuDetailList[i].memberPrice)+'</td>';
	        							var flag = false;
	        							for(var j = 0; j < comOrderCommissionSkuDetailList[i].list.length; j++){
	        								totalCommissionPrice += comOrderCommissionSkuDetailList[i].list[j].commissionPrice;
	        								if(flag==true){
		        								trStar = trStar +  '<tr> <td>'+ comOrderCommissionSkuDetailList[i].list[j].midLevel +'</td>';
		        								trStar = trStar +  '<td>'+ priceFormat(comOrderCommissionSkuDetailList[i].list[j].commissionPrice) +'</td>';
		        								trStar = trStar +   '<td>'+ comOrderCommissionSkuDetailList[i].list[j].commissionFloor +'</td> </tr> ';
	        								}
	        								if(flag==false){
		        								trStar = trStar +  '<td>'+ comOrderCommissionSkuDetailList[i].list[j].midLevel +'</td>';
		        								trStar = trStar +  '<td>'+ priceFormat(comOrderCommissionSkuDetailList[i].list[j].commissionPrice) +'</td>';
		        								trStar = trStar +   '<td>'+ comOrderCommissionSkuDetailList[i].list[j].commissionFloor +'</td>';
		        								trStar = trStar + '<td rowspan='+comOrderCommissionSkuDetailList[i].list.length+'>'+comOrderCommissionSkuDetailList[i].commssionStatus+'</td>';
		        		        				trStar = trStar + '<td rowspan='+comOrderCommissionSkuDetailList[i].list.length+'>'+comOrderCommissionSkuDetailList[i].supplierName+'</td></tr>';
		        		        				flag = true;
	        								}
	        							}
	        				
				    		tpl += trStar;
						}
	        			$('#totalNormal').text('');
	        			$('#totalmember').text('');
	        			$('#totalNormal').text(priceFormat(totalCommissionPrice));
						$('#skuDetailList').html(tpl);
	        		}
                }
            }
        });
	}
	
	//获取用户月结表399分佣明细
	function getCommissionMonth399DetailByMid(page,mid,yearMonth){
		
		$.ajax({
            url: "/admin/base/commissionmanage/commissionMonth399DetailByMid.json?page="+page+"&mid=" + mid+"&yearMonth="+yearMonth,
            type: "get",
            success: function (data) {
            	
                if (data != null) {
                	console.info("===========");
                	console.info(data);
                  	var comOrderCommissionSkuDetailList = data.data;
	        		var tpl = '';
	        		var totalCommissionPrice = 0;
	        		if(comOrderCommissionSkuDetailList&&comOrderCommissionSkuDetailList.length > 0 ){
	        			$('#skuDetailList').html('');
	        			$('#memberSkuDetailList').html('');
	        			for(var i = 0; i < comOrderCommissionSkuDetailList.length; i++){   
	        				var trStar = '<tr>'+
	        							 '<td rowspan='+comOrderCommissionSkuDetailList[i].list.length+'>'+comOrderCommissionSkuDetailList[i].itemName+'</td>'+
	        							 '<td rowspan='+comOrderCommissionSkuDetailList[i].list.length+'>'+comOrderCommissionSkuDetailList[i].itemSkuName+'</td>';
	        							var flag = false;
	        							for(var j = 0; j < comOrderCommissionSkuDetailList[i].list.length; j++){
	        								totalCommissionPrice += comOrderCommissionSkuDetailList[i].list[j].commissionPrice;
	        								if(flag==true){
		        								trStar = trStar +  '<tr> <td>'+ comOrderCommissionSkuDetailList[i].list[j].midLevel +'</td>';
		        								trStar = trStar +  '<td>'+ priceFormat(comOrderCommissionSkuDetailList[i].list[j].commissionPrice) +'</td>';
		        								trStar = trStar +   '<td>'+ comOrderCommissionSkuDetailList[i].list[j].commissionFloor +'</td> </tr> ';
	        								}
	        								if(flag==false){
		        								trStar = trStar +  '<td>'+ comOrderCommissionSkuDetailList[i].list[j].midLevel +'</td>';
		        								trStar = trStar +  '<td>'+ priceFormat(comOrderCommissionSkuDetailList[i].list[j].commissionPrice) +'</td>';
		        								trStar = trStar +   '<td>'+ comOrderCommissionSkuDetailList[i].list[j].commissionFloor +'</td>';
		        								trStar = trStar + '<td rowspan='+comOrderCommissionSkuDetailList[i].list.length+'>'+comOrderCommissionSkuDetailList[i].commssionStatus+'</td>';
		        		        				trStar = trStar + '<td rowspan='+comOrderCommissionSkuDetailList[i].list.length+'>'+comOrderCommissionSkuDetailList[i].supplierName+'</td></tr>';
		        		        				flag = true;
	        								}
	        							}
	        				
				    		tpl += trStar;
						}
	        			$('#totalNormal').text('');
	        			$('#totalmember').text('');
	        			$('#totalmember').text(priceFormat(totalCommissionPrice));
						$('#memberSkuDetailList').html(tpl);
	        		}
                }
            }
        });
	}
	
	//获取订单信息
	function getOrderDetailList(subOrderNo){
		$.ajax({
            url: "/admin/base/commissionmanage/findByOrderNo.json?subOrderNo=" + subOrderNo,
            type: "get",
            success: function (data) {
            	
                if (data != null) {
                  	var orderDetail = data.data;
	        		var tpl = '';
	        		$('#orderDetail').html('');
	        		if(orderDetail){
			    		var tr1 = '<tr>'+
								  '<td>'+ orderDetail.nickName +'</td>'+
								  '<td>'+ orderDetail.subOrderNo +'</td>'+
								  '<td>'+ orderDetail.orderStatus +'</td>'+
						 	      '</tr>';
			    		tpl += tr1;
					
						$('#orderDetail').html(tpl);
	        		}
                }
            }
        });
	}

    //获取一级推荐
    function getCategoryRecommendSerach(){
        $.ajax({
            url: "/admin/commondatamanage/searchLevel1Category.json",
            type: "get",
            success: function (data) {
                if (data != null) {
                    var category1List = data.data;
                    console.log(category1List)
                    var tpl = '';
                    if(category1List.length > 0 ){
                        for(var i = 0; i < category1List.length; i++){
                            var tr1 = '<tr>'+
                                '<td><input type="checkbox" class="ckid" value="'+ category1List[i].id +'"/></td>'+
                                '<td>'+ category1List[i].id +'</td>'+
                                '<td>'+ category1List[i].name +'</td>'+
                                '</tr>';
                            for (var j in ckAll_goodId) {
                                if(j == category1List[i].id){
                                    tr1 = '<tr>'+
                                        '<td><input type="checkbox" class="ckid" checked="checked" value="'+ category1List[i].id +'"/></td>'+
                                        '<td>'+ category1List[i].id +'</td>'+
                                        '<td>'+ category1List[i].name +'</td>'+
                                        '</tr>';
                                }
                            }
                            tpl += tr1;
                        }
                        $('#catIdList').html(tpl);
                    }
                    getArr();
                    ckIs();
                }
            }
        });
    }


    //获取商品信息
	function getitemSerach(page){
		var id = $('#good_id').val();
	 	var name = $('#good_name').val();
		$.ajax({
            url: "/admin/commondatamanage/itemSerach.json?page=" + page +"&cid=" +id+ "&name="+name,
            type: "get",
            success: function (data) {
                if (data != null) {
                  	var data = data.data;
	        		var goodList = data.recordList;
	        		var tpl = '';
	        		if(goodList.length > 0 ){
	        			for(var i = 0; i < goodList.length; i++){
				    		var tr1 = '<tr>'+
									  '<td><input type="checkbox" class="ckid" value="'+ goodList[i].id +'"/></td>'+
									  '<td><img class="left rowimg" src='+pictureFormat(goodList[i].picUrls[0],200)+' /></td>'+
									  '<td>'+ goodList[i].id +'</td>'+
									  '<td>'+ goodList[i].name +'</td>'+
							 	      '</tr>';
				    		for (var j in ckAll_goodId) {
				    			if(j == goodList[i].id){
						            tr1 = '<tr>'+
									 '<td><input type="checkbox" class="ckid" checked="checked" value="'+ goodList[i].id +'"/></td>'+
									 '<td><img class="left rowimg" src='+pictureFormat(goodList[i].picUrls[0],200)+' /></td>'+
									 '<td>'+ goodList[i].id +'</td>'+
									 '<td>'+ goodList[i].name +'</td>'+
							 	     '</tr>';
						        }
				    		}
				    		tpl += tr1;
						}
						$('#goodList').html(tpl);
	        		}
	        		pages(data.pages, data.page);
	        		getArr();
	        		ckIs();
                }
            }
        });
	}
	
	
	//获取会员信息
	function getmemberSerach(page){
		
		var mid = $('#member_id').val();
	 	var name = $('#member_name').val();
		$.ajax({
            url: "/admin/commondatamanage/memberSerach.json?page=" + page +"&mid=" +mid+ "&memberName="+name,
            type: "get",
            success: function (data) {
                if (data != null) {
                  	var data = data.data;
	        		var memberList = data.recordList;
	        		var tpl = '';
	        		if(memberList.length > 0 ){
	        			for(var i = 0; i < memberList.length; i++){
				    		var tr1 = '<tr>'+
				    		 		  '<td><input type="checkbox" class="ckid" value="'+ memberList[i].id +'"/></td>'+
									  '<td>'+ memberList[i].id +'</td>'+
									  '<td>'+ memberList[i].nickName +'</td>'+
							 	      '</tr>';
				    		for (var j in ckAll_memberID) {
				    			if(j == memberList[i].id){
						            tr1 = '<tr>'+
									 '<td><input type="checkbox" class="ckid" checked="checked" value="'+ memberList[i].id +'"/></td>'+
									 '<td>'+ memberList[i].id +'</td>'+
									 '<td>'+ memberList[i].name +'</td>'+
							 	     '</tr>';
						        }
				    		}
				    		tpl += tr1;
						}
						$('#memberList').html(tpl);
	        		}
	        		memberpages(data.pages, data.page);
	        		ckMemberIs();
                }
            }
        });
	}

	//分页
	function pages(pages,page){
		var pageCount = pages;
        var currentPage = page;
        var options = {
            bootstrapMajorVersion: 2, //版本
            currentPage: currentPage, //当前页数
            totalPages: pageCount, //总页数
            itemTexts: function (type, page, current) {
                switch (type) {
                    case "first":
                        return "首页";
                    case "prev":
                        return "上一页";
                    case "next":
                        return "下一页";
                    case "last":
                        return "末页";
                    case "page":
                        return page;
                }
            },//点击事件，用于通过Ajax来刷新整个list列表
            onPageClicked: function (event, originalEvent, type, page) {
            	getitemSerach(page);
            }
        };
        $('#example').bootstrapPaginator(options);
	}
	
	//会员分页
	function memberpages(pages,page){
		var pageCount = pages;
        var currentPage = page;
        var options = {
            bootstrapMajorVersion: 2, //版本
            currentPage: currentPage, //当前页数
            totalPages: pageCount, //总页数
            itemTexts: function (type, page, current) {
                switch (type) {
                    case "first":
                        return "首页";
                    case "prev":
                        return "上一页";
                    case "next":
                        return "下一页";
                    case "last":
                        return "末页";
                    case "page":
                        return page;
                }
            },//点击事件，用于通过Ajax来刷新整个list列表
            onPageClicked: function (event, originalEvent, type, page) {
            	getmemberSerach(page);
            }
        };
        $('#example').bootstrapPaginator(options);
	}
	
	//获取国家列表
	function getCountrySerach(){
		var name = $('#country_name').val();
		$.ajax({
            url: "/admin/commondatamanage/countrySerach.json?description="+name,
            type: "get",
            success: function (data) {
                if (data != null) {
                	
                  	var countryList = data.data;
	        		var tpl = '';
	        		if(countryList.length > 0 ){
	        			$('#countryList').html("");
	        			for(var i = 0; i < countryList.length; i++){
				    		var tr1 = '<tr>'+
									  '<td><input type="checkbox" class="ckid" value="'+ countryList[i].code+"_"+ countryList[i].description +'"/></td>'+
									  '<td>'+ countryList[i].id +'</td>'+
									  '<td>'+ countryList[i].code +'</td>'+
									  '<td>'+ countryList[i].description +'</td>'+
							 	      '</tr>';
				    		for (var j in ckAll_countryCode) {
				    			if(j == countryList[i].code){
						            tr1 = '<tr>'+
									 '<td><input type="checkbox" class="ckid" checked="checked" value="'+ countryList[i].code +'"/></td>'+
									  '<td>'+ countryList[i].id +'</td>'+
									  '<td>'+ countryList[i].code +'</td>'+
									  '<td>'+ countryList[i].description +'</td>'+
							 	     '</tr>';
						        }
				    		}
				    		tpl += tr1;
				    		
						}
						$('#countryList').html(tpl);
	        		}
	        		ckCountryIs();
                }
            }
        });
	}

	//将用户之前选定的商品id放到公共的数组里面
	function getArr(){
		var arr = [];
    	var str = $('#goodsId').val();
    	if(str != "" && str != "undefined"){
    		arr = str.split(",");
	    	for(var m = 0; m < arr.length; m++){
	    		ckAll_goodId[arr[m]] = arr[m];
	    	}
    	}
	}

	//确定按钮事件
	$('#btn_ok').bind("click", function() {
		
		delete ckAll_goodId['on'];
		var list_goodId = [];
		for(var i in ckAll_goodId){
			list_goodId.push(i);
			$('#goodsId').val(list_goodId);
		}
		
	    $('#myModal').removeClass('in');
	});
	
	$('#member_btn_ok').bind("click", function() {
		for(var obj in ckAll_memberID){
			$('#memberId').val(obj);
		}
	    $('#myModal').removeClass('in');
	});
	
	
	$('#country_btn_ok').bind("click", function() {
		for(var obj in ckAll_countryCode){
			var countryArr = obj.split("_");
			$('#countryCode').val(countryArr[0]);
			$('#countryName').val(countryArr[1]);
		}
	    $('#myModal').removeClass('in');
	});

	
	
	//单选
	function ckIs(){
		$("input[type='checkbox']").each(function() {  
			$(this).on("click",function(){
				if(!this.checked){
					isCheckAll = false;
					$('#swapCheck').attr('checked',false);
					delete ckAll_goodId[this.value];
		 		} else{
		 			ckAll_goodId[this.value] = this.value;
	 			}  
			});
     	}); 
	}

	//全选
	var isCheckAll = false; 
	$('#swapCheck').bind("click", function() {
		
	 	if (isCheckAll) {  
            $("input[type='checkbox']").each(function() {  
                this.checked = false;  
                delete ckAll_goodId[this.value];
            });  
            isCheckAll = false;  
        } else {  
            $("input[type='checkbox']").each(function() {  
                this.checked = true;  
                ckAll_goodId[this.value] = this.value;
            });  
            isCheckAll = true;  
        }  
		delete ckAll_goodId['on'];
	});
	
	//单选会员
	function ckMemberIs(){
		$("input[type='checkbox']").each(function() {  
			$(this).on("click",function(){
				$("input[type='checkbox']").each(function() {  
	                this.checked = false;  
	            }); 
				this.checked = true;  
				ckAll_memberID = {};
				ckAll_memberID[this.value] = this.value;
	 			
			});
     	}); 
	}
	
	//单选国家
	function ckCountryIs(){
		$("input[type='checkbox']").each(function() {  
			$(this).on("click",function(){
				$("input[type='checkbox']").each(function() {  
	                this.checked = false;  
	            }); 
				this.checked = true;  
				ckAll_countryCode = {};
				ckAll_countryCode[this.value] = this.value;
	 			
			});
     	}); 
	}

	//搜索
	$('#search_good').bind('click',function(){
	 	var page = '';
		getitemSerach(page);
	});
	
	//搜索会员
	$('#search_member').bind('click',function(){
	 	var page = '';
	 	getmemberSerach(page);
	});
	
	$('#search_country').bind('click',function(){
		getCountrySerach();
	});
	
	function pictureFormat(picUrl,size) {
		return picUrl + "_" + size +"w.jpg";

	}
});


$('[id^="withdrawalDetail_"]').bind("click", function(e) {	
	var mid = $(this).attr("mid");
	var month = $(this).attr("month");
	getWithdrawalDetailList(mid,month);
});

	//获取提现明细
	function getWithdrawalDetailList(mid,month){
	$.ajax({
        url: "/admin/member/memberwithdrawalrecordmanage/withdrawalDetailList.json?mid=" + mid+"&month="+month,
        type: "get",
        success: function (data) {      	
            if (data != null) {
              	var withdrawalDetailList = data.data;
        		var tpl = '';
        		$('#withdrawalDetails').html('');
        	    		
        		if(withdrawalDetailList.length > 0 ){
        			for(var i = 0; i < withdrawalDetailList.length; i++){
        	    		var tr1 = '<tr>'+
						  '<td>'+ formatCSTDate(withdrawalDetailList[i].askTime,"yyyy-MM-dd hh:mm:ss") +'</td>'+
						  '<td>'+ withdrawalDetailList[i].mid +'</td>'+
						  '<td>'+ withdrawalDetailList[i].name +'</td>'+
						  '<td>'+ priceFormat(withdrawalDetailList[i].withDrawalNum) +'</td>'+
						  '<td>'+ withDrawalStatusTranslate(withdrawalDetailList[i].withDrawalStatus) +'</td>'+
						
						  '<td>'+ removeNull(withdrawalDetailList[i].remark) +'</td>'+
						  
				 	      '</tr>';
        	    		tpl += tr1;				
        			}
        			$('#withdrawalDetails').html(tpl);
        		}
            }
        }
    });
}
	function priceFormat(prize){
		if (prize == null) {
			return "￥0";
		}
		if (prize % 100 == 0) {
			return "￥"+parseInt(prize / 100) ;
		} else if ((prize % 100) >= 10) {
			return"￥"+ parseInt(prize / 100) + "." + prize % 100 ;
		} else {
			return  "￥"+parseInt(prize / 100) + ".0" + prize % 100;
		}		
	}
	function removeNull(remark){
		if(remark==null){
			return '';
			}
		return remark
	}
	function withDrawalStatusTranslate(withDrawalNum){
		if(withDrawalNum==0){
			return '审核中';
		}else if(withDrawalNum==1){
			return '提现成功';
		}else if(withDrawalNum==2){
			return '提现失败';
		}
	}
	

    function formatCSTDate(strDate,format){
        return formatDate(new Date(strDate),format);
      }
          //格式化日期,
        function formatDate(date,format){
            var paddNum = function(num){
              num += "";
              return num.replace(/^(\d)$/,"0$1");
            }
            //指定格式字符
            var cfg = {
               yyyy : date.getFullYear() //年 : 4位
              ,yy : date.getFullYear().toString().substring(2)//年 : 2位
              ,M  : date.getMonth() + 1  //月 : 如果1位的时候不补0
              ,MM : paddNum(date.getMonth() + 1) //月 : 如果1位的时候补0
              ,d  : date.getDate()   //日 : 如果1位的时候不补0
              ,dd : paddNum(date.getDate())//日 : 如果1位的时候补0
              ,hh : paddNum(date.getHours())  //时
              ,mm : paddNum(date.getMinutes()) //分
              ,ss : paddNum(date.getSeconds()) //秒
            }
            format || (format = "yyyy-MM-dd hh:mm:ss");
            return format.replace(/([a-z])(\1)*/ig,function(m){return cfg[m];});
          } 
    
    


	