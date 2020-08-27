export default {
  route: {
    dashboard: 'Realtime data',
    liveData: 'Live data',
    basicAnalysis: 'Realtime Data',
    financial: 'Finance Info',
    disChart: 'Distribution',
    Operational: 'Operational data',
    bandwidth: 'Traffic',
    online: 'Online',
    permission: 'Permission',
    pagePermission: 'Page Permission',
    userData: 'User data',
    domain: 'Domain',
    list: 'User list',
    userDomain: 'Domain list',
    p2pRate: 'P2P rate',
    userDistribution: 'GEO Distribution',
    chinaDistribution: 'China',
    worldDistribution: 'Global',
    config: 'Config management',
    trackerConfig: 'Tracker',
    SignalConfig: 'Signal',
    AnnounceConfig: 'Announce',
    BlockOriginsConfig: 'BlockOrigins',
    BlockIpsConfig: 'IP BlackList',
    AllowIpsConfig: 'IP WhiteList',
    userConfig: 'user',
    dataAnalysis: 'Historical Data',
    p2pTraffic: 'Traffic Trend',
    onlineNum: 'Online Viewers Trend',
    domainInfo: 'Website Management',
    domainList: 'Domain List',
    package: 'Traffic Package',
    monthlyPackage: 'Monthly Plan',
    order: 'Order History',
    p2pConfig: 'P2P Setting',
    edit: 'edit',
    appInfo: 'App Management',
    p2pSwitch: 'Enable/Disable P2P',
    uploadRule: 'Uploading Rules',
    activationRatio: 'Activation Ratio',
  },
  navbar: {
    logOut: 'Log Out',
    dashboard: 'Dashboard',
    dosAddress: 'Documentation',
    screenfull: 'Screenfull',
    theme: 'Theme',
    size: 'Global Size',
    myInfo: 'Profile',
  },
  auth: {
    login: 'Login',
    signup: 'Signup',
    resetPasswd: 'Forget Password',

    usernameError: 'Please input the correct E-mail',
    mailError: 'Please enter the correct E-mail',
    sendTitle: 'The verification code has been sent to your mobile',
    phoneWarn: 'Please enter your phone number',
    phoneError: 'Please enter the correct phone number',
    passwdError: 'The password must be between 6 and 18 digits',
    vcodeError: 'The verification code can not be less than 4 digits',
  },
  login: {
    title: 'Login',
    logIn: 'Log in',
    logInSuccess: 'login successfully',
    username: 'Please enter your verified email',
    password: 'Please enter your password',
  },
  signup: {
    title: 'Signup',
    signUp: 'signup',
    signUpSuccess: 'signup successfully',
    password: 'password',
    confirm_password: 'Please enter your password again',
    confirm_password_error: 'The two passwords you entered were inconsistent',
    vcode: 'code',
    email: 'E-mail',
    send: 'send',
    contract: 'I have read and agreed to ',
    contractName: 'CDNBye User Service Agreement',
    confirmContract: 'Please agree to the user service agreement first',
  },
  passwdReset: {
    title: 'Password Reset',
    successTitle: 'Reset password successfully',
    email: 'Please enter your E-mail',
    vcode: 'Verification Code',
    send: 'send',
    password: 'Please enter your password',
    submit: 'Reset'
  },
  dashboard : {
    currentDomain: 'Current Domain: ',
    goBind: 'Bind your domain',
    switchDomain: 'Switch Domain/AppID',
    tip: 'You have not bound domain name or created app, are you going now?',
    online: 'Current Online Viewers',
    p2pTraffic: 'P2P Traffic Today',
    httpTraffic: 'HTTP Traffic Today',
    serveNum: 'Playback Sessions Today',
    maxOnlineNum: 'Peak Concurrent Viewers',
    remain: 'Remaining Package Traffic',
    monthlyRemain: 'Remaining Daily Traffic',
    free: 'Remaining Free Traffic',
    versionDis: 'Version Distribution',
    tagDis: 'Tag Distribution',
    terminalDis: 'Terminal Distribution',
    liveDis: 'Live/VOD Distribution',
    netDis: 'Network Type Distribution',
    ispDis: 'ISP Distribution',
    natDis: 'NAT Type Distribution',
    p2pTip: 'UTC+8 adopted.<br/>Want to increase p2p traffic? See <a style="color: #337ab7" href="https://p2p.cdnbye.com/en/views/m3u8.html" target="_blank">here</a>',
    freeTip: '5GB of traffic will be given after the domain name is bound with an additional 10 GB after signing in every day. <br/>Note that both of these will be cleared the next day. The consumed P2P traffic is first deducted by free traffic while the excess is deducted by paid traffic. <br/>If there is no available traffic, P2P service will be stopped.',
    remainTip: 'Please buy <a style="color: #337ab7" href="#/user/package">traffic package</a> or <a style="color: #337ab7" href="#/user/monthly_package">monthly/annual plan</a> in time to avoid service interruption.',
    checkin: 'Sign in for free traffic',
    checkinSuccess: 'Sign in successfully!',
    haveChecked: 'You have signed in today',
    checkinFail: 'Sign in failed, please try again!',
    trafficUseOut: 'You have run out of available traffic, please go to purchase the traffic package.',
    onlinesTip: 'Merely show the number of online devices that support P2P',
    viewsTip: 'Total view times today',
    goApp: 'Create App'
  },
  domainTable: {
    bindDomain: 'Bind Your Domain',
    bindDomainTip: 'Enter your domain name，such as: (Do not input IP address)\nwww.example.com\nNotice: Verify the domain of the web site that host the player, or the domain of src while using iframe.',
    playUrlTip: 'Enter the link of your website homepage or the guide page link to the play page\nhttps://example.com/index.html',
    // bindWarning: 'CDNBye does not provide P2P services for illegal content such as pornography.Please ensure that your website complies with legal norms. ',
    bindWarning: '',
    bindDomainTError: 'PLease input the correct domain!',
    domain: 'Domain',
    status: 'State',
    available: 'Verified',
    unavailable: 'Unverified',
    operation: 'Operation',
    verifyDomain: 'Verify domain',
    certification: 'Verify',
    certificationTip: 'You need to verify your domain name of the added website. You can choose any of the following methods.',
    doneTip: 'Click the "Verify Now" button when you are done',
    verifyLater: 'Verify Later',
    verifyNow: 'Verify Now',
    delete: 'Delete',
    tip: 'Sure to delete？',
    none: 'None',
    current: 'Current:  ',
    select: 'please select',
    userVerifyDomain: {
      //DNS
      verifyWay: 'Ways of verify',
      DNSVerify: 'DNS',
      fileVerify: 'file',
      verifyTipHead: 'Set the TXT domain name resolution content of cdnbye_dns_auth.',
      verifyTipEnd: ' to the following characters:',
      //file
      downloadFileHead: 'Download the specific ',
      downloadFileEnd: 'HTML verification file',
      uploadFile: 'Upload the file to: ',
      fileName: 'please note that the file name is auth.txt which should not be modified.',
      navVisitHead: 'Access ',
      navVisitEnd: ' to confirm that the upload was successful',
    },
    verifySuccess: 'verify successfully',
    title: 'Notice:',
    desc: 'This page is used to bind domain name, mobile native App and Electron App do not require to bind domain name. Each user can bind up to 200 domain names',
    illegal: 'Not Approved',
  },
  documentation: {
    documentation: 'Documentation',
    github: 'Github Repository'
  },
  tagsView: {
    refresh: 'Refresh',
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close All'
  },
  myInfo: {
    mail: 'E-mail: ',
    passwd: 'password: ',
    time: 'Registration time: ',
    change: 'update',
    changeMail: {
      change: 'update E-mail',
      newMail: 'new E-mail',
      code: 'Verification code',
      noneError: 'please enter your email',
      wrongError: 'please enter your vaild email',
      sameError: 'Please do not enter the same E-mail',
      codeNoneError: 'please enter your verification code',
      codeWrongError: 'please enter your vaild verification code',
    },
    changePasswd: {
      change: 'update password',
      new: 'new password',
      old: 'old password',
      noneError: 'Please enter your password',
      blankError: 'Passwords are not allowed to contain spaces',
      lengthError: 'Please enter a 6 to 18 digit password',
    },
  },
  common: {
    ok: 'Confirm',
    cancel: 'Cancel',
    deleteSuccess: 'delete successfully',
    closeSuccess: 'close successfully',
    yes: 'YES',
    no: 'NO',
    status: 'status',
    available: 'Available',
    reviewing: 'Under Review',
    illegal: 'Not Approved',
    success: 'Success',
    error: 'Error',
    warning: 'Warning',
    message: 'Message',
  },
  historyData: {
    hour: '1 Hour',
    day: '24 Hours',
    week: '7 Days',
    month: '30 Days'
  },
  package: {
    noBuyTitle: 'Tips',
    noBuyTip: 'Please select the traffic package you want to purchase first.',
    payMethod: 'Payment method',
    packageSubTitle: 'Notice: ',
    packageSub: 'Each user can consume a certain amount of P2P traffic. You can increase quota of traffic by buying the listed traffic packages below.  It takes effect immediately after purchase. Refunds are not supported. Contact service@cdnbye.com if you have problems. Notice: The traffic purchased by PayPal can only be used outside China.',
    monthlyPackageSub: 'The annual and monthly plan can provide the corresponding amount of traffic per day. It is valid for one month or one year. It takes effect immediately after purchase. Refunds are not supported. Contact service@cdnbye.com if you have problems. Notice: The traffic purchased by PayPal can only be used outside China.',

    packageInfo: 'Package info',
    unitPrice: 'Unit price',
    quantity: 'Quantity',
    expense: 'Expense',
    total: 'total:',
    confirmPurchase: 'Pay Now',
    paySuccess: 'Paid successfully. Your order information has been sent to your mailbox.',
    payFail: 'Failed to pay!',
    systemError: 'Sorry, the system is maintaining',
    payLoadingTip: 'Jumping to payment page...',
    checkResultLoadingTip: 'Checking payment status...',
    comfirmCreate: 'Are you sure you want to create an order?',
    buyFlow: 'Buy traffic package',
    buyMonthly: 'Buy monthly/annual plan',
    monthly: 'Until ',
    payAnotherWay: 'Please pay with cryptocurrency such as BTC or ETH. Contact us for the details.',
  },
  order: {
    createTime: 'Date',
    type: 'Type',
    payMethod: 'Payment Method',
    flowPackage: 'Traffic Package',
    price: 'Price',
    currency:'Currency',
    status: 'Order status',
    action: 'Action',
    pay: 'Pay',
    close: 'Close',
    waitPay: 'Pending',
    finish: 'Finished',
    fail: 'Closed',
    tip: 'Sure to close order?',
    alipay: 'alipay',
    packageName: 'Item',
    amount: 'Quantity',
    totalTraffic: 'Traffic'
  },
  p2pConfig: {
    status: 'Status',
    open: 'Opened',
    close: 'Closed',
    configSuccess: 'Successfully configured',
    // configFail: 'Only paid users can turn P2P on / off',
    configFail: 'Operation failed',
    desc: 'If you bind multiple domain names in one account, those which open P2P services share traffic packets together. You can save on packet consumption by shutting down P2P services of one or several domain names.',
    switchErr: 'At least one domain name needs to remain open.',
    name: 'Domain/AppId',
    uploadRule: {
      status: 'Only allow uploading on Wi-Fi and Ethernet',
      desc: 'This configuration allows you to define your own uploading logic with regards to the network condition. By default, uploading on cellular is enabled.\nCompatibility: web: 1.3+, android: 1.5+, iOS: 1.4+',
    },
    activationRatio: {
      desc: 'This config enables you to allocate an exact percentage of your audience to benefit from CDNBye peer-to-peer on a per-device basis. By starting with a small activation ratio, you will be able to test how our technology works on a small percentage of end-users. Then, you can increase it with time after checking the results. Disabled viewers still run our libraries but do not connect to our tracker. Peer connections for those viewers will not be initiated and their videos will be loaded from CDNs only.',
      status: 'Activation Ratio(%)',
    },
  },
  app: {
    createToken: 'Create Token',
    createTokenSuccess: 'Create token successfully',
    createFormItem: '+ Create APP',
    createItemSuccess: 'Create successfully',
    createTitle: 'Input APP Information',
    createTip: 'Each user can create up to 200 apps',
    appName: 'The display name of APP',
    appID: 'You can refer to <a style="color: #337ab7" target="view_window" href="https://p2p.cdnbye.com/en/views/bindings.html#app-id-and-token">here</a> to obtain APP ID',
    platform: 'Platform',
    sureCreateToken: 'Sure to create token?',
    sureDelete: 'Sure to delete?',
    deleteItemSuccess: 'Delete successfully',
    createTime: 'Create Time',
    name: 'Name',
    copy: 'Click to copy',
    watch: 'Monitor',
    title: 'Notice:',
    desc: 'This page is used to configure mobile native App and Electron App. Each user can create up to 200 apps. It takes more than a minute to take effect after the creation is successful.',
    appIdTip: 'com.company.example',
    introTip: 'Enter the download link of your APP or the link of introduction page',
    copied: 'Copied',
  }
}
