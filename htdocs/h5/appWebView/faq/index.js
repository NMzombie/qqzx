$(function () {
  const data = [
    {
      title: '关于自选',
      img: 'https://file.wegoomall.cn/platform/manager/pic/20190505/3595913756851079.png',
      contents: [
        {
          question: '什么是全球自选',
          answer: '全球自选，是由原阿里巴巴的团队和明星杨晶晶共同创立的社交电商新零售创业赋能平台。目前已经与微谷中国达成战略合作，致力于利用最前沿的人工智能技术为平台提供AI相关产品及商业解决方案 通过AI赋能助力平台会员及合作伙伴提升商业效率 和价值，实现社群运营精准流量帮扶。'
        }
      ]
    },
    {
      title: '关于商品',
      img: 'https://file.wegoomall.cn/platform/manager/pic/20190505/3595922465698496.png',
      contents: [
        {
          question: '怎样保证商品正品',
          answer: '亲爱的自选家人，我们所有商品都有商标注册证及质检报告\n1）如果是海淘商品，我们每个商品都拥有报关单（海淘商品—跨境的要跨境报关单，一般贸的要一般保税报关单），平台规定报关主体必须与入驻商家主体保持一致。\n2）平台有相关的工商资质以及食品经营许可证书，消费者可以在APP内“我的”个人中心查看。所以您可以在全球自选APP放心购物。'
        },
        {
          question: '关于商品运费',
          answer: '亲爱的自选家人，平台商品支持全国包邮，港澳台和部分偏远地区除外（新疆，西藏，内蒙，青海等属于偏远地区，订单超重部分需买家承担，每超重1公斤需支付10元运费，60元为上限，具体运费以商品实际页面为准）。'
        }
      ]
    },
    {
      title: '关于物流问题',
      img: 'https://file.wegoomall.cn/platform/manager/pic/20190505/3595929944332341.png',
      contents: [
        {
          question: '商品没有物流信息',
          answer: '亲爱的自选家人，订单成交后平台会在24小时内出具物流单号，48小时内有物流信息，还请您耐心等待下哦。'
        },
        {
          question: '超时未收到货',
          answer: '亲爱的自选家人，若订单超出正常时效仍未收到\n建议您：\n1）联系物流公司查件，更加快捷有效，您可在【我的】-【待收货】中找到对应的订单，点击【查看物流】可查询到具体快递信息。\n2）联系自选客服，由客服带您联系快递公司确认快件状态，自选客服会在接到您的反馈后24小时内联系告知您快件状态及处理方案，此种方案时效较长，还请谅解！'
        },
        {
          question: '物流停滞',
          answer: '亲爱的自选家人，快递中转过程中，根据距离不同，时间一般为1-2天，较偏远地区可达到3天，一般未超出3天未更新物流信息均属正常情况，建议您耐心等待，如3天后快递仍未更新物流信息，请联系自选客服为您处理。'
        },
        {
          question: '已签收未收到货',
          answer: '亲爱的自选家人，若订单物流信息显示已签收而您实际未收到商品，建议您：\n1）建议咨询下您的家人、朋友、公司前台、小区门卫等是否代为签收\n2）联系物流公司查件，更加快捷有效，您可在【我的】-【待收货】中找到对应的订单，点击【查看物流】可查询到具体快递信息，点击快递电话可快速拨打快递公司电话\n3）联系自选客服，由客服带您联系快递公司确认快件状态，自选客服会在接到您的反馈后24小时内联系告知您快件状态及处理方案，此种方案时效较长，还请谅解！'
        },
        {
          question: '如何查询物流信息',
          answer: '亲爱的自选家人，您可在【我的】-【待收货】中找到对应的订单，点击【查看物流】可查询到具体快递信息。'
        }
      ]
    },
    {
      title: '关于会员',
      img: 'https://file.wegoomall.cn/platform/manager/pic/20190505/3595936550237725.png',
      contents: [
        {
          question: '如何成为自选会员',
          answer: '亲爱的自选家人，成为您自己的专属会员方法有两种，\n1）请到各大应用市场进行搜索“全球自选”输入您的邀请id\n2）通过您的专属二维码扫码下载，微信登陆，手机验证之后即可成为您的专属会员'
        },
        {
          question: '收益何时提现',
          answer: '亲爱的自选家人，每月10-19日当天08:00-15:30均可提现（节假日及周末顺延）提现前请先绑定提现银行卡，现阶段支持银行：中国银行，中国建设银行，中国农业银行，中国光大银行，招商银行，农村信用社联合社等100+家银行'
        },
        {
          question: '提现的税率',
          answer: '亲爱的自选家人，提现3万以内是2.6% ，提现3-15万 5.96%。一个月只能提一次，一次最高只能提15万。打比方说你本月要提14万，其中5万是线上提给您，因为公司规定线上最高只能提5万，剩下9万是线下打给您，但是不管是线上线下都是要交税的哈。'
        },
        {
          question: '预存款金额提现',
          answer: '亲爱的自选家人，预存款金额取不出来,只能用于消费'
        },
        {
          question: '预存款金额获取渠道',
          answer: '亲爱的自选家人，有2种方法可以获取预存金额\n1）会员点击全球自选APP-会员中心邀请好友成为会员页面，分享到微信，在微信中点开页面最下面的最新活动-点击一键充值-显示充值选项。\n2）全球自选安卓手机1.2.3版本，点击会员中心-最新活动，进入预存款页面。选择相对应的预存款额度。预存款完成即可在下图一，会员中心预预存款里面看到余额。'
        },
        {
          question: '优惠券是否可叠加',
          answer: '亲爱的自选家人，目前每笔订单仅支持使用一张优惠券，且优惠券不能叠加。'
        },
        {
          question: '退款优惠券计算方式',
          answer: '亲爱的自选家人，优惠券一旦使用既视为作废，退款根据实际金额扣除优惠券额度再返回您的账户，该优惠券不可再次使用。'
        }
      ]
    },
    {
      title: '关于售后',
      img: 'https://file.wegoomall.cn/platform/manager/pic/20190505/3595943951097044.png',
      contents: [
        {
          question: '如何申请退货',
          answer: '亲爱的自选家人，若您对收到的商品不满意，需要办理退货，在商品不影响二次销售的前提下您可提交退货申请\n1）如购买的商品未发货，申请路径：在APP内“我的”个人中心页面点击“我的订单”，点击需要退货商品，再点击“退款”小图标，填写退款说明、上传凭证，点击“提交”即可。退款需要一定时效，请耐心等待。\n2）如购买的商品已发货：在APP“我的——帮助与客服”点击“在线客服”输入退款原因以及退款凭证，待在线客服将退货地址告知您，按照地址寄回商品之后（商品寄回时需内附一张纸质说明，需写明姓名、电话号码、退换货理由、购买订单号等，如无此信息可能会影响退款时效），再将快递单号告知在线客服（质量问题选择邮费到付、非质量问题邮费由客户自己承担），待商家确认收货之后即可为您退款（如客户需要换货，操作步骤与此相同）。'
        },
        {
          question: '商品质量问题',
          answer: '亲爱的自选家人，如商品在运输中损坏，损坏率在三分之一以内，按比例赔偿；坏损比例在三分之一到二分之一之间，最高赔一半；坏损比例超过二分之一，全部赔付。'
        },
        {
          question: '发票问题',
          answer: '亲爱的自选家人，平台发票均由商家开具，且不和商品订单同时邮寄。如果您要开发票的话，等订单确认收货后，将订单号告知在线客服，并说明是开普票还是专票，写明发票抬头，之后我们会将发票单独邮寄给您。'
        },
        {
          question: '退换货须知',
          answer: '亲爱的自选家人，在退换货之前请知晓：\n1）无理由退货：在商品完好不影响二次销售的情况下，因个人主观原因不愿意完成本次交易的，支持快递签收之日起的7天内无理由退货（生鲜类/保税区/跨境商品及其他页面特别说明商品不支持无理由退货），退货运费由买家承担 。\n2）非无理由退货：因商品质量问题，破损错发等非买家原因导致的退货（过敏，快递延误等除外），支持快递签收之日起7天内退货，退货运费由平台承担，请在签收48小时内拍照并联系在线客服处理。\n3）特殊商品不退货：生鲜类/保税区/跨境商品等，一旦签收不支持退换货。特殊商品能否退换货请以页面说明为准，请消费者在签收时务必核实商品是否完好无损，如有问题可以选择拒签。\n4）确认收货后不退款：购买的商品一旦确认收货后暂不支持退货退款，请谨慎核实商品无问题之后再确认收货。\n5）联系在线客服退换货：所有退换货行为必须联系在线客服才能完成，请在APP“我的——帮助与客服”联系“在线客服”'
        }
      ]
    },
    {
      title: '关于实名认证',
      img: 'https://file.wegoomall.cn/platform/manager/pic/20190505/3595951776313469.png',
      contents: [
        {
          question: '实名认证有什么用',
          answer: '亲爱的自选家人，实名认证是为了提供购买跨境商品直邮使用的，跨境商品必须填写准确的身份证信息和上传身份证照片。'
        },
        {
          question: '实名认证是否可修改',
          answer: '亲爱的自选家人，实名认证信息不可修改，但是如果信息填错的话可以删除后重新填写，可以填写多个用户的实名信息。'
        }
      ]
    },
    {
      title: '关于app操作',
      img: 'https://file.wegoomall.cn/platform/manager/pic/20190505/3595957578741210.png',
      contents: [
        {
          question: '如何下载app',
          answer: '亲爱的自选家人，我们优先推荐大家使用应用宝（腾讯）下载， 因为这个在微信中传播最方便，所有品牌的手机均可使用应用宝下载全球自选。\n其次可以在各自手机品牌的默认官方应用市场下载， 如华为应用市场，小米应用市场， oppo应用市场，vivo 应用市场；（是由于竞争关系一些品牌的手机应用市场屏蔽了应用宝本身，例如华为）。\n第三才是官方下载。因为腾讯在微信中屏蔽了所有的第三方下载,所以使用我们的官方下载的时候，务必选择浏览器打开，而不是微信中打开。\n常见错误下载: 主要在baidu上搜索直接下载，以及一些非主流应用商店（他们通常抓取的是我们的旧版本，甚至修改了我们的apk加入了广告）。'
        },
        {
          question: '修改邀请码',
          answer: '亲爱的自选家人，非会员用户可在个人中心-点击头像-进入设置-我的邀请人-修改邀请码\n已经购买礼包成为会员的用户邀请码不可改，可以使用其他手机号重新注册绑定新邀'
        },
        {
          question: '在哪里修改手机号',
          answer: '亲爱的自选家人，所有用户均可修改手机号码，在个人中心-点击头像-进入设置-修改手机号码，需要输入原手机号码验证码和新手机号码验证码后，进行绑定。更换手机号码原ID其他信息不变。'
        },
        {
          question: '无法登陆APP',
          answer: '亲爱的自选家人，您的全球自选APP没有允许访问蜂窝移动数据导致无网络服务，您可以在设置中找到全球自选app手动打开蜂窝数据，即可正常登陆。'
        },
        {
          question: '在付款界面显示“系统异常”字样',
          answer: '亲爱的自选家人，请先确认您的手机是否联网，然后可以选择刷新页面重新支付，或者重新将宝贝加入购物车拍下。'
        }
      ]
    }
  ]
  let fir = ''
  for (let i = 0; i < data.length; i++) {
    fir += `<li class="acc"><div class="link clearfix"><div class="left"><img src="${data[i].img}" alt="" /><div class="title">${data[i].title}</div><div class="fa fa-chevron-down"></div></div>`
    if (data[i].contents.length <= 2) {
      data[i].contents.length === 1 ? fir += `<div class="right"><a href="detail.html?id=${i}&index=0"><div class="detail one one-txt-cut">${data[i].contents[0].question}</div></a></div></li>` : fir += `<div class="right"><a href="detail.html?id=${i}&index=0"><div class="detail one-txt-cut">${data[i].contents[0].question}</div></a><a href="detail.html?id=${i}&index=1"><div class="detail one-txt-cut">${data[i].contents[1].question}</div></a></div></li>`
    } else {
      fir += `<div class="right"><a href="detail.html?id=${i}&index=0"><div class="detail one-txt-cut">${data[i].contents[0].question}</div></a><a href="detail.html?id=${i}&index=1"><div class="detail one-txt-cut">${data[i].contents[1].question}</div></a></div></div><ul class="submenu"><li>`
      for (let j = 2; j < data[i].contents.length; j++) {
        fir += `<div class="clearfix"><div class="left"></div><div class="right"><a href="detail.html?id=${i}&index=${j}"><div class="detail">${data[i].contents[j].question}</div></a></div></div>`
      }
      fir += `</li></ul></li>`
    }
  }
  $('#accordion').append(fir)

  // 下拉功能
  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
    var links = this.el.find('.left');
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }
  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;
    $this = $(this).parent(), $next = $this.next();
    if ($this.parent().find('.submenu').find('.left').length <= 0) {
      return
    }
    $next.slideToggle();
    $this.parent().toggleClass('open');
    if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    }
    ;
  }
  var accordion = new Accordion($('#accordion'), false);
});
