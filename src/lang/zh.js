export default {
  route: {
    liveData: '實時數據',
    liveDataPerApp: '分域名/APP',
    liveDataGlobal: '匯總',
    liveDataAdmin: '实时数据',
    overallData: '汇总数据',
    hotChannel: '資源熱度',
    financial: '財務信息',
    incomeTrend: '收入趨勢',
    disChart: '分布圖',
    Operational: '整體運營數據',
    bandwidth: '流量趨勢圖',
    online: '在線人數趨勢圖',
    permission: '權限測試頁',
    pagePermission: '頁面權限',
    userData: '運營管理',
    domain: '域名',
    list: '用戶管理',
    userDomain: '域名列表',
    p2pRate: 'P2P分享率',
    userDistribution: '用戶地理分布',
    chinaDistribution: '中國',
    chinaDisGlobal: '中國(匯總)',
    USADistribution: '美國',
    USADisGlobal: '美國(匯總)',
    worldDistribution: '全球',
    worldDisGlobal: '全球(匯總)',
    config: '配置管理',
    trackerConfig: 'tracker配置',
    SignalConfig: '信令管理',
    AnnounceConfig: 'Announce白名單',
    BlockOriginsConfig: 'Origin黑名單',
    BlockIpsConfig: 'IP黑名單',
    AllowIpsConfig: 'IP白名單',
    userConfig: '客戶管理',
    dataAnalysis: '歷史數據',
    p2pTraffic: '流量趨勢圖',
    p2pTrafficGlobal: '全局流量趨勢圖',
    onlineNum: '在線人數趨勢圖',
    onlineNumGlobal: '全局在線人數趨勢圖',
    rebufferTrend: '卡頓率趨勢圖',
    domainInfo: '網站管理',
    domainList: '域名列表',
    package: '流量包',
    monthlyPackage: '包月套餐',
    order: '歷史訂單',
    p2pConfig: 'P2P配置',
    edit: '編輯信息',
    appInfo: 'APP管理',
    p2pSwitch: '開啟/關閉P2P',
    uploadRule: 'P2P分享策略',
    activationRatio: '激活比率',
    signalManage: '信令配置',
    stunManage: 'Stun配置',
    invoices: '發票管理',
    shopping: '商城',
    geofly: '飞线图',
  },
  navbar: {
    logOut: '登出',
    dashboard: '首頁',
    dosAddress: '文檔地址',
    screenfull: '全屏',
    theme: '換膚',
    size: '布局大小',
    myInfo: '個人信息',
    currZone: '可用區: ',
    zoneTip: '如果選擇了廣州以外的可用區，需要手動配置SDK連接的服務器地址，請參考<a style="color: #337ab7" href="https://swarmcloud.net/views/tracker.html" target="_blank">這裏</a>',
  },
  auth: {
    login: '登入',
    signup: '註冊',
    resetPasswd: '忘記密碼？',
    email: '請輸入正確的郵箱',
    usernameError: '請輸入正確的郵箱',
    mailError: '請輸入正確的郵箱',
    sendTitle: '驗證碼已發送至手機',
    phoneWarn: '請輸入手機號碼',
    phoneError: '請輸入正確的手機號碼',
    passwdError: '密碼必須在6到18位之間',
    captchaError: '驗證碼位數不正確',
    vcodeError: '驗證碼不能小於4位',
    console: '選擇可用區',
    consoleHK: '香港',
    consoleCN: '廣州',
    consoleUSA: '弗吉尼亞',

  },
  login: {
    title: '登入',
    logIn: '登入',
    logInSuccess: '登入成功',
    username: '輸入已驗證的郵箱',
    password: '輸入密碼',
    code: '輸入驗證碼',
    selectZoneWarn: '請選擇一個可用區',
  },
  signup: {
    title: '註冊',
    signUp: '註冊',
    signUpSuccess: '註冊成功',
    password: '請輸入密碼',
    confirm_password: '請再次輸入密碼',
    confirm_password_error: '兩次輸入的密碼不一致',
    vcode: '請輸入驗證碼',
    email: '請輸入郵箱',
    send: '發送驗證碼',
    contract: '我已經閱讀並同意',
    contractName: 'SwarmCloud用戶服務協議',
    confirmContract: '請先同意用戶服務協議',
  },
  passwdReset: {
    title: '重置密碼',
    successTitle: '重置密碼成功',
    email: '請輸入郵箱',
    vcode: '驗證碼',
    send: '發送驗證碼',
    password: '請輸入密碼',
    submit: '重置',
  },
  dashboard: {
    currentDomain: '當前域名：',
    goBind: '綁定域名',
    switchDomain: '切換',
    tip: '您還未綁定域名或創建APP，是否現在操作？',
    online: '當前在線人數',
    p2pTraffic: '今日P2P流量',
    httpTraffic: '今日HTTP流量',
    p2pEfficiency: '當前P2P效率',
    serveNum: '今日播放次數',
    rebufferRatio: '平均卡頓率',
    maxOnlineNum: '歷史最高在線人數',
    remain: '剩余流量包流量',
    monthlyRemain: '套餐今日剩余',
    free: '剩余免費流量',
    versionDis: '版本',
    tagDis: '自定義標簽',
    terminalDis: '終端類型',
    liveDis: '直播/點播',
    netDis: '網路類型',
    ispDis: '運營商',
    natDis: 'NAT類型',
    domainDis: '在線人數',
    p2pTip: '如果節省的流量未達到期望，請參考<a style="color: #337ab7" href="https://www.cdnbye.com/cn/views/optimization.html" target="_blank">文檔</a>進行配置。',
    httpTip: '通過HTTP方式（源服務器或者CDN）下載媒體的流量，HTTP流量和P2P流量加和等於總流量。',
    freeTip: '綁定後的域名每日贈送5GB流量，簽到後再額外贈送20GB流量，次日重置。<br/>消耗的P2P流量先用免費流量抵扣，超出部分用付費流量抵扣。<br/>如果可用流量為零，則停止P2P服務。',
    remainTip: '請及時購買<a style="color: #337ab7" href="#/shopping/package">流量包</a>或者<a style="color: #337ab7" href="#/shopping/monthly_package">包月套餐</a>，以避免服務中斷。',
    efficiencyTip: 'P2P流量增量占总流量增量的百分比',
    rebufferTip: '卡顿次数占总的媒体文件请求数的百分比',
    checkin: '簽到免費領流量',
    checkinSuccess: '簽到成功！',
    haveChecked: '你今天已經簽到了哦~',
    checkinFail: '簽到失敗，請重試！',
    changeUTC: '调整时区',
    trafficUseOut: '您的可用流量已用完，請前往購買流量包',
    onlinesTip: 'P2P依賴於WebRTC Data Channel的支持，在不支持的設備上將自動回退到原生播放並且不會上報統計信息，因此這裏統計的在線人數可能會比實際的偏低，差異的大小取決於有多少比例的設備不支持P2P。',
    viewsTip: '總的觀看量，每觀看一個視頻計數一次',
    goApp: '創建APP',
    descGlobal: '此界面用於展示匯總所有域名/APP的實時數據。',
    descPerApp: '此界面用於展示單個域名/APP的實時數據，請通過上方"切換"按鈕來切換域名或APP。',
  },
  domainTable: {
    bindDomain: '綁定(根)域名',
    bindDomainTip: '輸入你的網站域名(請勿輸入IP地址)，例如：www.example.com\n註意：域名是指播放器所在的域名（如果嵌入iframe則是src的域名），不是流地址(m3u8)的域名。\n端口不需要填寫，支持根域名通配。每行輸入一個域名，最多50個。',
    playUrlTip: '輸入你的網站首頁鏈接或者可以進入播放頁面的引導頁鏈接。網站不得包含非法內容，也不得包含跳轉到非法內容的鏈接。\nhttps://example.com/index.html',
    bindWarning: 'SwarmCloud不對色情、博彩等非法內容提供服務，請確保您的網站符合法律規範，服務於國內的域名必須已備案。',
    bindDomainTError: '請輸入正確的域名！',
    domain: '域名',
    status: '狀態',
    unavailable: '待驗證',
    operation: '操作',
    verifyDomain: '驗證域名',
    certification: '驗證',
    certificationTip: '您需要對添加的網站進行域名所有權驗證，可以選擇以下任意一種方式進行驗證。',
    doneTip: '完成操作後請點擊"立即驗證"按鈕',
    verifyLater: '稍後驗證',
    verifyNow: '立即驗證',
    delete: '刪除',
    tip: '確定刪除嗎？',
    none: '未綁定',
    current: '當前:  ',
    select: '請選擇',
    userVerifyDomain: {
      //DNS
      verifyWay: '驗證方式',
      DNSVerify: 'DNS 驗證',
      fileVerify: '文件驗證',
      verifyTipHead: '設置cdnbye_dns_auth.',
      verifyTipEnd: '的TXT域名解析內容為下列字符：(註意有些不需要填寫根域名)',
      //file
      downloadFileHead: '下載專有的',
      downloadFileEnd: 'HTML驗證文件',
      uploadFile: '將該文件上傳至：',
      fileName: '註意文件名稱不要修改，文件名稱為auth.txt',
      navVisitHead: '用瀏覽器訪問',
      navVisitEnd: '，確認是否上傳成功',
    },
    verifySuccess: '驗證成功',
    title: '說明：',
    desc: '本頁面用於綁定網站域名，移動端原生 App 和 Electron 應用無需綁定域名。每個賬號最多可以綁定300個域名，60天內未使用的域名記錄將被自動刪除。服務於國內的域名必須已備案。\nTips:支持根域名通配所有子域名，每行一個域名，支持同時輸入50個域名。',
    illegal: '未通過審核(請聯繫客服)',
    tokenOnly: '启动后只需在SDK配置token，无需再绑定域名，适用于有大量域名使用或用ip访问网站的情形，联系客服认证通过后才能启用',
  },
  documentation: {
    documentation: '使用文檔',
    github: 'Github 地址'
  },
  tagsView: {
    refresh: '刷新',
    close: '關閉',
    closeOthers: '關閉其它',
    closeAll: '關閉所有'
  },
  myInfo: {
    name: '用戶名：',
    mail: '郵箱：',
    passwd: '密碼：',
    time: '註冊時間：',
    timeZone: '时区',
    change: '修改',
    changeMail: {
      change: '修改郵箱',
      newMail: '新郵箱',
      code: '驗證碼',
      noneError: '請輸入郵箱',
      wrongError: '請輸入正確的郵箱',
      sameError: '請不要輸入相同的郵箱',
      codeNoneError: '請輸入驗證碼',
      codeWrongError: '請輸入正確的驗證碼',
    },
    changePasswd: {
      change: '修改密碼',
      new: '新密碼',
      old: '舊密碼',
      noneError: '請輸入密碼',
      blankError: '密碼不允許包含空格',
      lengthError: '請輸入6到18位的密碼',
    },
    changeName: {
      change: '輸入新的用戶名',
      newName: '新用戶名',
      noneError: '請輸入用戶名',
    }
  },
  common: {
    ok: '確定',
    cancel: '取消',
    delete: '刪除',
    update: '更新',
    deleteSuccess: '刪除成功',
    closeSuccess: '關閉成功',
    yes: 'YES',
    no: 'NO',
    status: '狀態',
    available: '可用',
    userClosed: '用户关闭',
    reviewing: '正在審核中',
    illegal: '未通過審核',
    success: '成功',
    error: '錯誤',
    warning: '警告',
    message: '消息',
    sureDelete: '確定要刪除嗎？',
    sureUpdate: '確定要更新嗎？',
    default: '默認',
  },
  historyData: {
    hour: '1小時內',
    day: '24小時內',
    week: '7天',
    month: '30天',
    descGlobal: '此界面用於展示匯總所有域名/APP的歷史數據。',
  },
  package: {
    payMethod: '付款方式',
    packageSubTitle: '購買說明：',
    packageSub: '流量包用於提高可消耗的P2P流量額度，屬於消耗品。購買後當日生效（可能會有幾分鐘延遲）。不支持退款。支付遇到問題請聯系 service@cdnbye.com。',
    monthlyPackageSub: '包月套餐可提供每天固定額度的流量，有效期30天，可疊加購買。不支持退款。支付遇到問題請聯系 service@cdnbye.com。\nTips:如果包月套餐每日額度不夠用，可以額外購買流量包作為補充，系統會優先扣除包月套餐流量，再扣除流量包流量。您也可以選擇升級套餐，升級前後有效期保持不變。',
    packageInfo: '套餐信息',
    unitPrice: '單價',
    quantity: '數量',
    expense: '費用',
    total: '總計：',
    confirmPurchase: '確認購買',
    paySuccess: '付款成功，訂單信息已經發送至您的郵箱。',
    paySuspended: '支付過程已被中止，您可以在歷史訂單頁面繼續支付。',
    payFail: '支付失敗！',
    payPending: '系統正在等待支付結果，付款成功後會將訂單信息發送至您的郵箱。',
    systemError: '抱歉，系統正在維護中',
    payLoadingTip: '正在跳轉至支付頁面',
    checkResultLoadingTip: '正在查詢支付狀態...',
    comfirmCreate: '確認創建訂單嗎？',
    buyFlow: '購買流量包',
    buyMonthly: '購買包月服務',
    monthly: '有效期至 ',
    totalMonths: '購買月數：',
    totalPrice: '總計費用：',
    totalTraffic: '購買流量：',
    resetAfter: '距離重置',
    createOrder: '創建訂單',
  },
  order: {
    createTime: '創建時間',
    type: '類型',
    flowPackage: '流量包',
    monthlyPlan: '包月套餐',
    payMethod: '支付方式',
    price: '價格',
    currency:'幣種',
    status: '訂單狀態',
    action: '操作',
    pay: '付款',
    close: '關閉',
    waitPay: '待付款',
    finish: '完成',
    fail: '關閉',
    tip: '確認關閉訂單嗎？',
    alipay: '支付寶',
    packageName: '商品名稱',
    amount: '數量',
    totalTraffic: '流量',
    upgraded: '備註：套餐升級',
  },
  p2pConfig: {
    status: '狀態',
    open: '已開啟',
    close: '已關閉',
    configSuccess: '配置成功',
    configFail: '操作失敗',
    name: '域名/AppId',
    uploadRule: {
      status: '只在wifi/有線網絡上傳數據',
      desc: '這裏可以配置在不同網絡環境下的P2P分享策略，默認情況下允許在蜂窩網絡上傳數據。\n版本要求：web: 1.3+, android: 1.5+, iOS: 1.4+',
      on: '開啟',
      off: '關閉',
    },
    activationRatio: {
      desc: '本頁面用於配置P2P的激活比率，即連接P2P網絡的設備占總設備的百分比。建議先設置一個較小的比例，然後觀察P2P效果以及用戶反饋，在確認正常的情況下逐步提高激活比率至100%。未激活的節點可以正常播放，但不會連接到P2P網絡，只能從CDN或源服務器下載數據。',
      status: '激活比率(%)',
    },
    signalManage: {
      desc: '本頁面用於雲端配置信令地址，信令用於節點之間交換信息以建立P2P連接。如果在此頁面配置了信令地址則會覆蓋SDK側配置的信令地址。如果設置了備用信令地址，那麽SDK會同時連接兩個信令，並在主信令不可用時自動切換到備用信令。',
      signalAddr: '主信令地址',
      signalAddr2: '備用信令地址',
      switch: "關閉/開啟",
      official: '挑選地理上接近您的用戶的官方信令地址',
    },
    stunManage: {
      addr: 'Stun地址',
      desc: '本頁面用於雲端配置stun地址，stun用於處於NAT後面的節點獲取公網ip和端口。每行輸入一個地址，最多輸入3個地址。一旦配置，將覆蓋SDK默認stun地址，請謹慎操作。',
    }
  },
  app: {
    createToken: '生成Token',
    createTokenSuccess: '生成token成功',
    createFormItem: '+ 創建APP',
    createItemSuccess: '創建成功',
    createTitle: '輸入APP信息',
    createTip: '每個用戶最多創建200個APP',
    appName: 'APP顯示的名稱',
    appID: 'APP ID的獲取方式可參考<a style="color: #337ab7" target="view_window" href="https://www.cdnbye.com/cn/views/bindings.html#%E7%BB%91%E5%AE%9A-app-id-%E5%B9%B6%E8%8E%B7%E5%8F%96token">這裏</a>',
    platform: '平臺',
    sureCreateToken: '確定要生成token嗎？',
    deleteItemSuccess: '刪除成功',
    updateItemSuccess: '更新成功',
    createTime: '創建時間',
    name: 'APP名稱',
    copy: '點擊復製',
    watch: '監控',
    title: '說明：',
    desc: '本頁面用於配置移動端原生 App 和 Electron，視頻網站請移步"網站管理"頁面綁定域名。每個用戶最多創建100個APP，60天內未使用的App記錄將被自動刪除。創建成功後需要等待1分鐘以上才生效。',
    appIdTip: 'com.company.example',
    introTip: '輸入你的APP下載鏈接或者APP介紹鏈接',
    signatureTip: '輸入你的APK簽名SHA1值，用於對當前應用進行二次身份校驗(選填, 不建議填寫)，簽名獲取方法可以參考<a style="color: #337ab7" target="view_window" href="http://www.cdnbye.com/cn/views/FAQ.html#%E5%A6%82%E4%BD%95%E8%8E%B7%E5%8F%96%E5%AE%89%E5%8D%93%E5%BA%94%E7%94%A8%E7%AD%BE%E5%90%8D">這裏</a>',
    copied: '已復製',
    illegal: '未通過審核(請聯系客服)',
    signature: '應用簽名(SHA1)',
    updateSign: '更新SHA1',
    websiteWarn: '請在網站管理頁面綁定域名',
  },
  hotChannels: {
    content: '資源',
    num: '熱度',
    desc: '本頁面用於展示參與P2P加速的資源的熱度，從大到小排序，不展示在線人數低於100的資源。',
  }
}
