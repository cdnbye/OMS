export default {
  route: {
    dashboard: '实时数据分析',
    liveData: '实时数据',
    basicAnalysis: '实时数据分析',
    financial: '财务信息',
    disChart: '分布图',
    Operational: '整体运营数据',
    bandwidth: '流量趋势图',
    online: '在线人数趋势图',
    permission: '权限测试页',
    pagePermission: '页面权限',
    userData: '用户数据分析',
    domain: '域名',
    list: '用户列表',
    userDomain: '域名列表',
    p2pRate: 'P2P分享率',
    userDistribution: '用户地理分布',
    chinaDistribution: '中国分布图',
    worldDistribution: '世界分布图',
    config: '配置管理',
    trackerConfig: 'tracker配置',
    SignalConfig: '信令管理',
    userConfig: '客户管理',

    dataAnalysis: '高级数据分析',
    p2pTraffic: 'P2P流量趋势图',
    onlineNum: '在线人数趋势图',
    domainInfo: '域名管理',
    domainList: '域名列表',
    package: '购买流量包',
    monthlyPackage: '包年包月套餐',
    order: '历史订单',
    p2pConfig: 'P2P配置',
    edit: '编辑信息',
    appInfo: '应用管理',
  },
  navbar: {
    logOut: '退出登录',
    dashboard: '首页',
    dosAddress: '文档地址',
    screenfull: '全屏',
    theme: '换肤',
    size: '布局大小',
    myInfo: '个人信息',
  },
  auth: {
    login: '登录',
    signup: '注册',
    resetPasswd: '忘记密码',

    usernameError: '请输入正确的邮箱',
    mailError: '请输入正确的邮箱',
    sendTitle: '验证码已发送至手机',
    phoneWarn: '请输入手机号码',
    phoneError: '请输入正确的手机号码',
    passwdError: '密码必须在6到18位之间',
    vcodeError: '验证码不能小于4位',
  },
  login: {
    title: '登录',
    logIn: '登录',
    logInSuccess: '登录成功',
    username: '请输入已验证的邮箱',
    password: '请输入密码',
  },
  signup: {
    title: '注册',
    signUp: '注册',
    signUpSuccess: '注册成功',
    password: '请输入密码',
    confirm_password: '请再次输入密码',
    confirm_password_error: '两次输入的密码不一致',
    vcode: '请输入验证码',
    email: '请输入邮箱',
    send: '发送验证码',
  },
  passwdReset: {
    title: '重置密码',
    successTitle: '重置密码成功',
    email: '请输入邮箱',
    vcode: '验证码',
    send: '发送验证码',
    password: '请输入密码',
    submit: '重置',
  },
  dashboard: {
    currentDomain: '当前域名：',
    goBind: '绑定域名',
    switchDomain: '切换域名/AppID',
    tip: '您还未绑定域名或创建应用，是否现在就去？',
    online: '当前在线人数',
    p2pTraffic: '今日P2P流量',
    serveNum: '今日观看次数',
    maxOnlineNum: '最高在线人数',
    remain: '剩余流量包流量',
    monthlyRemain: '今日剩余流量',
    free: '剩余免费流量',
    versionDis: '版本分布',
    tagDis: 'Tag分布',
    terminalDis: '终端分布',
    liveDis: '直播点播分布',
    natDis: '网络类型分布',
    p2pTip: '采用北京时间计时。<br/>如果节省的流量未达到期望，请参考<a style="color: #337ab7" href="https://docs.cdnbye.com/#/m3u8" target="_blank">文档</a>进行配置。',
    freeTip: '绑定后的域名每日赠送5GB流量，签到后再额外赠送10GB流量，次日清零。<br/>消耗的P2P流量先用免费流量抵扣，超出部分用付费流量抵扣。<br/>如果可用流量为零，则停止P2P服务。',
    remainTip: '请及时购买<a style="color: #337ab7" href="#/user/package">流量包</a>或者<a style="color: #337ab7" href="#/user/monthly_package">包年包月套餐</a>，以避免服务中断。',
    checkin: '签到免费领流量',
    checkinSuccess: '签到成功！',
    haveChecked: '你今天已经签到了哦~',
    checkinFail: '签到失败，请重试！',
    trafficUseOut: '您的可用流量已用完，请前往购买流量包',
    onlinesTip: '只显示支持P2P的在线设备数量',
    viewsTip: '总的观看量，每观看一个视频计数一次',
    goApp: '创建应用'
  },
  domainTable: {
    bindDomain: '绑定域名',
    bindDomainTip: '输入你的网站域名(请勿输入IP地址)，例如：\nwww.example.com\n注意：域名是指播放器所在的域名（如果嵌入iframe则是src的域名），不是流地址(m3u8)的域名。',
    bindWarning: 'CDNBye不对色情等非法内容提供P2P服务，请确保您的网站符合法律规范。',
    bindDomainTError: '请输入正确的域名！',
    domain: '域名',
    status: '状态',
    available: '可用',
    unavailable: '不可用',
    illegal: '非法网站',
    operation: '操作',
    verifyDomain: '验证域名',
    certification: '认证',
    certificationTip: '您需要对添加的网站进行域名所有权认证，可以选择以下任意一种方式进行验证。',
    doneTip: '完成操作后请点击"立即验证"按钮',
    verifyLater: '稍后验证',
    verifyNow: '立即验证',
    delete: '删除',
    tip: '确定删除吗？',
    none: '暂无域名',
    select: '请选择',
    userVerifyDomain: {
      //DNS
      verifyWay: '验证方式',
      DNSVerify: 'DNS 验证',
      fileVerify: '文件验证',
      verifyTipHead: '设置cdnbye_dns_auth.',
      verifyTipEnd: '的TXT域名解析内容为下列字符：(注意有些不需要填写根域名)',
      //file
      downloadFileHead: '下载专有的',
      downloadFileEnd: 'HTML验证文件',
      uploadFile: '将该文件上传至：',
      fileName: '注意文件名称不要修改，文件名称为auth.txt',
      navVisitHead: '用浏览器访问',
      navVisitEnd: '，确认是否上传成功',
    },
    verifySuccess: '验证成功'
  },
  documentation: {
    documentation: '使用文档',
    github: 'Github 地址'
  },
  tagsView: {
    refresh: '刷新',
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  },
  myInfo: {
    mail: '邮箱：',
    passwd: '密码：',
    time: '注册时间：',
    change: '修改',
    changeMail: {
      change: '修改邮箱',
      newMail: '新邮箱',
      code: '验证码',
      noneError: '请输入邮箱',
      wrongError: '请输入正确的邮箱',
      sameError: '请不要输入相同的邮箱',
      codeNoneError: '请输入验证码',
      codeWrongError: '请输入正确的验证码',
    },
    changePasswd: {
      change: '修改密码',
      new: '新密码',
      old: '旧密码',
      noneError: '请输入密码',
      blankError: '密码不允许包含空格',
      lengthError: '请输入6到18位的密码',
    },
  },
  common: {
    ok: '确定',
    cancel: '取消',
    deleteSuccess: '删除成功',
    closeSuccess: '关闭成功'
  },
  historyData: {
    hour: '1小时内',
    day: '24小时内',
    week: '7天',
    month: '30天'
  },
  package: {
    noBuyTitle: '温馨提示',
    noBuyTip: '请先选择你要购买的流量包',
    payMethod: '付款方式',
    packageSubTitle: '流量包说明：',
    packageSub: '流量包用于提高可消耗的P2P流量额度，属于消耗品。购买后当日生效（可能会有几分钟延迟）。不支持退款。支付遇到问题请联系 service@cdnbye.com。',
    monthlyPackageSub: '包年包月套餐可提供每天对应额度的流量，有效期分为一个月或一年。不支持退款。支付遇到问题请联系 service@cdnbye.com。\nTips:如果包月套餐每日额度不够用，可以额外购买流量包作为补充，系统会优先扣除包月套餐流量，再扣除流量包流量。',

    packageInfo: '套餐信息',
    unitPrice: '单价',
    quantity: '数量',
    expense: '费用',
    total: '总计：',
    confirmPurchase: '确认购买',
    paySuccess: '付款成功，订单信息已经发送至您的邮箱。',
    payFail: '付款失败',
    systemError: '抱歉，系统正在维护中',
    payLoadingTip: '正在跳转至支付页面',
    checkResultLoadingTip: '正在查询支付状态...',

    buyFlow: '购买流量包',
    buyMonthly: '购买包年包月服务',
    monthly: '有效期至 '
  },
  order: {
    createTime: '创建时间',
    type: '类型',
    flowPackage: '流量包',
    payMethod: '支付方式',
    price: '价格',
    currency:'币种',
    status: '订单状态',
    action: '操作',
    pay: '付款',
    close: '关闭',
    waitPay: '待付款',
    finish: '完成',
    fail: '关闭',
    tip: '确认关闭订单吗？',
    alipay: '支付宝',
    packageName: '商品名称',
    amount: '数量',
    totalTraffic: '流量'
  },
  p2pConfig: {
    status: '状态',
    open: '开启',
    close: '关闭',
    illegal: '非法网站',
    configSuccess: '配置成功',
    configFail: '只有付费用户才能开启/关闭P2P',
    desc: '如果您在同一个账号同时绑定了多个域名，则开启P2P的所有域名会共享流量包。您可以在这里关闭某个域名的P2P服务从而节省流量包消耗。',
    switchErr: '至少一个域名需要保持开启状态。'
  },
  app: {
    createToken: '生成Token',
    createTokenSuccess: '生成token成功',
    createFormItem: '+ 创建应用',
    createItemSuccess: '创建成功',
    createTitle: '输入应用信息',
    createTip: '每个用户最多创建20个应用',
    appName: 'APP显示的名称',
    appID: 'APP ID的获取方式可参考<a style="color: #337ab7" target="view_window" href="https://docs.cdnbye.com/#/bindings?id=%e7%bb%91%e5%ae%9a-app-id-%e5%b9%b6%e8%8e%b7%e5%8f%96token">这里</a>',
    platform: '平台',
    sureCreateToken: '确定要生成token吗？',
    sureDelete: '确定要删除吗？',
    deleteItemSuccess: '删除成功',
    createTime: '创建时间',
    name: '应用名称',
    copy: '点击复制',
    watch: '监控',
    title: '说明：',
    desc: '本页面用于配置移动端 SDK 和 Electron。每个用户最多创建20个应用。创建成功后需要等待1分钟以上才生效。',
    appIdTip: 'com.company.example',
  }
}
