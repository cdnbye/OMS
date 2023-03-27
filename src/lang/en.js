export default {
  route: {
    liveData: 'Realtime Data',
    liveDataPerApp: 'Per Domain/App',
    liveDataGlobal: 'Global',
    liveDataAdmin: 'Realtime Data',
    overallData: 'Overall Data',
    hotChannel: 'Content Popularity',
    financial: 'Finance Info',
    incomeTrend: 'Income Trend',
    disChart: 'Distribution',
    Operational: 'Operational data',
    bandwidth: 'Traffic',
    online: 'Online',
    permission: 'Permission',
    pagePermission: 'Page Permission',
    userData: 'Operation Management',
    domain: 'Domain',
    list: 'User Management',
    userDomain: 'Domain list',
    p2pRate: 'P2P rate',
    userDistribution: 'GEO Distribution',
    chinaDistribution: 'China',
    chinaDisGlobal: 'China (Global)',
    USADistribution: 'USA',
    USADisGlobal: 'USA (Global)',
    worldDistribution: 'World',
    worldDisGlobal: 'World (Global)',
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
    p2pTrafficGlobal: 'Global Traffic Trend',
    onlineNum: 'Online Trend',
    onlineNumGlobal: 'Global Online Trend',
    rebufferTrend: 'Rebuffer Trend',
    domainInfo: 'Website Management',
    domainList: 'Domain List',
    package: 'Traffic Package',
    monthlyPackage: 'Monthly Plan',
    order: 'Order History',
    invitation: 'Commissions',
    p2pConfig: 'P2P Setting',
    edit: 'edit',
    appInfo: 'App Management',
    p2pSwitch: 'Enable/Disable P2P',
    uploadRule: 'Uploading Rules',
    activationRatio: 'Activation Ratio',
    signalManage: 'Signal Configuration',
    seederManage: 'Server as Peer',
    stunManage: 'Stun Configuration',
    invoices: 'Invoices',
    shopping: 'Shopping',
    geofly: 'GEO Fly Line',
  },
  navbar: {
    logOut: 'Log Out',
    dashboard: 'Dashboard',
    dosAddress: 'Documentation',
    screenfull: 'Screenfull',
    theme: 'Theme',
    size: 'Global Size',
    myInfo: 'Profile',
    currZone: 'Zone: ',
    zoneTip: 'If a non default zone (HK, USA) is selected, you need to manually configure the tracker address for the SDK. Details can be found <a style="color: #337ab7" href="https://swarmcloud.net/views/tracker.html" target="_blank">here</a>',
  },
  auth: {
    login: 'Login',
    signup: 'Signup',
    resetPasswd: 'Forgot password?',
    email: 'Please input the correct E-mail',
    usernameError: 'Please input the correct E-mail',
    mailError: 'Please enter the correct E-mail',
    sendTitle: 'The verification code has been sent to your mobile',
    phoneWarn: 'Please enter your phone number',
    phoneError: 'Please enter the correct phone number',
    passwdError: 'The password must be between 6 and 18 digits',
    captchaError: 'The code is not match',
    vcodeError: 'The verification code can not be less than 4 digits',
    console: 'Select Zone',
    consoleHK: 'HongKong',
    consoleCN: 'China',
    consoleUSA: 'USA',
  },
  login: {
    title: 'Login',
    logIn: 'Log in',
    logInSuccess: 'login successfully',
    username: 'Enter your verified email',
    password: 'Enter your password',
    code: 'Enter characters here',
    selectZoneWarn: 'Please select a zone',
  },
  signup: {
    title: 'Signup',
    signUp: 'signup',
    signUpSuccess: 'signup successfully',
    password: 'password',
    confirm_password: 'Please enter your password again',
    confirm_password_error: 'The two passwords you entered were inconsistent',
    vcode: 'Verification Code',
    email: 'E-mail',
    send: 'Send Verification Code',
    contract: 'I have read and agreed to ',
    contractName: 'Terms of Service',
    confirmContract: 'Please agree to the Terms of Service',
    inviter: 'Inviter Email (Optional)',
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
    goBind: 'Register Domain',
    switchDomain: 'Switch',
    tip: 'Register domain name or create app now?',
    online: 'Current Online Viewers',
    p2pTraffic: 'P2P Traffic Today',
    httpTraffic: 'HTTP Traffic Today',
    shareTraffic: 'Share Traffic Today',
    p2pEfficiency: 'Current Efficiency',
    serveNum: 'Playback Sessions Today',
    rebufferRatio: 'Rebuffer Ratio',
    maxOnlineNum: 'Peak Concurrent Viewers',
    remain: 'Remaining Paid Traffic',
    monthlyRemain: 'Remaining Plan Traffic Today',
    free: 'Remaining Free Traffic',
    versionDis: 'Version',
    tagDis: 'Custom Label',
    terminalDis: 'Terminal',
    liveDis: 'Live/VOD',
    netDis: 'Network Type',
    ispDis: 'ISP',
    natDis: 'NAT Type',
    domainDis: 'Online',
    p2pTip: 'Want to increase p2p traffic? See <a style="color: #337ab7" href="https://swarmcloud.net/en/views/optimization.html" target="_blank">here</a>',
    httpTip: 'The stream traffic downloaded through HTTP (origin server or CDNs), the sum of HTTP traffic and P2P traffic is equal to the total traffic',
    freeTip: '5GB traffic will be given after the domain name is registered, and additional 20 GB after signing in every day. \nNote that both of these will be cleared the next day. The consumed P2P traffic is first deducted by free traffic while the excess is deducted by paid traffic. \nIf there is no available traffic, P2P service will be stopped.',
    remainTip: 'Please buy <a style="color: #337ab7" href="#/shopping/package">traffic package</a> or <a style="color: #337ab7" href="#/shopping/monthly_package">monthly plan</a> in time to avoid service interruption.',
    efficiencyTip: 'Percentage of P2P traffic increment to total traffic increment',
    rebufferTip: 'Percentage of rebuffer count to total media request count',
    checkin: 'Get Free Traffic',
    checkinSuccess: 'Get free traffic successfully!',
    haveChecked: 'You can only get it once a day',
    checkinFail: 'Failed, please try again!',
    invite: 'Invite friends get Commission',
    bonus: 'Get 5$ Bonus',
    changeUTC: 'TimeZone',
    trafficUseOut: 'You have run out of available traffic, please go to purchase the traffic package.',
    onlinesTip: 'P2P only works on browsers that support WebRTC Data Channels. On browsers that don’t have such support, P2P will be automatically disabled and fallback to native playback. Those unsupported devices will not have any analytics collected from them, which can cause some discrepancy between the numbers that you see on your own analytics systems and here. This discrepancy is expected and will vary based on the % of unsupported devices your end-users use.',
    viewsTip: 'Total view times today',
    goApp: 'Create App',
    descGlobal: 'This page shows the summarized real-time data of all domains/APPs.',
    descPerApp: 'This page displays the real-time data of a single domain/APP. You can switch through the "Switch" button above.',
  },
  domainTable: {
    bindDomain: 'Register Your Domain/Root Domain',
    bindDomainTip: 'Enter your domain name，such as: (Do not input IP address)\nwww.example.com\nNotice: for iframed or embedded players, the domain name taken into account will be the source website.',
    playUrlTip: 'Enter the link of your website homepage or the guide page link to the play page\nhttps://example.com/index.html',
    // bindWarning: 'CDNBye does not provide P2P services for illegal content such as pornography.Please ensure that your website complies with legal norms. ',
    bindWarning: '',
    bindDomainTError: 'PLease input the correct domain!',
    domain: 'Domain',
    status: 'State',
    unavailable: 'Unauthorized',
    operation: 'Operation',
    verifyDomain: 'Verify domain',
    certification: 'Verify',
    certificationTip: 'You need to verify your domain name of the added website. You can choose any of the following methods.',
    doneTip: 'Click the "Verify Now" button when you are done',
    verifyLater: 'Verify Later',
    verifyNow: 'Verify Now',
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
    desc: 'This page is used to register domain name, please note that mobile native App and Electron App do not require to register domain name. You can register up to 300 domains. Domain records that have not been used within 60 days will be automatically deleted. \nTips:You can use root domain to match all sub-domains, one domain per line, up to 50 domains in one submit.',
    illegal: 'Not Approved',
    tokenOnly: 'If enabled, domain registration is no longer required once you have config token in web SDK, it is applicable to the scene where a large number of domains are used or the website is accessed by ip',
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
    name: 'Username: ',
    mail: 'E-mail: ',
    passwd: 'Password: ',
    mobile: 'Mobile Number',
    mobileBonus: 'Bind your Mobile, Earn 5$!',
    changeMobile: {
      change: 'Update Mobile Number',
      number: 'your mobile number',
      cc: 'country code',
      wrongCCError: 'please enter your valid country code',
      wrongError: 'please enter your valid mobile number',
      sameError: 'please do not enter the same mobile number',
      someError: 'please enter your valid mobile and country code',
    },
    vcodeEmailSuccess: 'The verification code has been sent to your mailbox',
    vcodeMobileSuccess: 'The verification code has been sent to your mobile',
    time: 'Registration Date: ',
    timeZone: 'Time Zone',
    change: 'update',
    balanceUSD: 'Balance(USD)',
    balanceCNY: 'Balance(CNY)',
    recharge: 'recharge',
    rechargeTip: 'Cash withdrawal is not supported after recharging',
    changeMail: {
      change: 'update E-mail',
      newMail: 'new E-mail',
      code: 'Verification code',
      noneError: 'please enter your email',
      wrongError: 'please enter your valid email',
      sameError: 'please do not enter the same E-mail',
      codeNoneError: 'please enter your verification code',
      codeWrongError: 'please enter your valid verification code',
    },
    changePasswd: {
      change: 'update password',
      new: 'new password',
      old: 'old password',
      noneError: 'Please enter your password',
      blankError: 'Passwords are not allowed to contain spaces',
      lengthError: 'Please enter a 6 to 18 digit password',
    },
    changeName: {
      change: 'update username',
      newName: 'new username',
      noneError: 'Please enter your username',
    }
  },
  common: {
    ok: 'Confirm',
    cancel: 'Cancel',
    delete: 'Delete',
    update: 'Update',
    deleteSuccess: 'delete successfully',
    closeSuccess: 'close successfully',
    yes: 'YES',
    no: 'NO',
    status: 'status',
    available: 'Active',
    userClosed: 'Closed',
    reviewing: 'Under Review',
    illegal: 'Not Approved',
    success: 'Success',
    error: 'Error',
    warning: 'Warning',
    message: 'Message',
    sureDelete: 'Do you confirm to delete?',
    sureUpdate: 'Do you confirm to update?',
    default: 'Default',
    setting: 'Setting',
  },
  historyData: {
    hour: '1 Hour',
    day: '24 Hours',
    week: '7 Days',
    month: '30 Days',
    descGlobal: 'This page shows the summarized historical data of all domains/APPs.',
  },
  package: {
    payMethod: 'Payment method',
    packageSubTitle: 'Notice: ',
    packageSub: 'Each user can consume a certain amount of P2P traffic. You can increase quota of traffic by buying the listed traffic packages below. Contact service@cdnbye.com if you have problems. Notice: Refunds are not supported.',
    monthlyPackageSub: 'Each of our plans comes with a defined event quota. If you exceed that quota, don’t worry, you can buy traffic package as supplement. Since the additional events cost more than pre-paid events, we recommend picking a plan that pre-pays for a little more than you think you\'ll need to avoid paying on-demand rates. It\'s a classic volume discount: when you use more, you pay less. Contact service@cdnbye.com if you have problems. Notice: Refunds are not supported. If you upgrade your plan, the due time of new plan is same as old one.',
    packageInfo: 'Item',
    unitPrice: 'Unit price',
    quantity: 'Quantity',
    expense: 'Expense',
    total: 'total:',
    confirmPurchase: 'Pay Now',
    paySuccess: 'Thank you! The payment for your order has been confirmed, and the order information has been sent to your mailbox.',
    paySuspended: 'The payment process has been suspended. You can find the order in Order History page and continue the payment.',
    payFail: 'Failed to pay!',
    payPending: 'Your payment is under process, the order information will be sent to your mailbox once the payment is completed.',
    systemError: 'Sorry, the system is maintaining',
    payLoadingTip: 'Jumping to payment page...',
    checkResultLoadingTip: 'Checking payment status...',
    comfirmCreate: 'Do you confirm to create an order?',
    buyFlow: 'Traffic package',
    buyMonthly: 'Monthly plan',
    monthly: 'Until ',
    totalMonths: 'Total Months: ',
    totalPrice: 'Total Price: ',
    totalTraffic: 'Total Traffic: ',
    resetAfter: 'Reset After',
    createOrder: 'Create Order',
    useBalance: 'Use Balance',
  },
  order: {
    createTime: 'Date',
    type: 'Type',
    payMethod: 'Payment Method',
    flowPackage: 'Traffic Package',
    monthlyPlan: 'Monthly Plan',
    recharge: 'Balance Recharge',
    price: 'Price',
    currency:'Currency',
    status: 'Status',
    action: 'Operation',
    pay: 'Pay',
    close: 'Close',
    waitPay: 'Pending',
    processing: 'Processing',
    fail: 'Closed',
    tip: 'Do you confirm to close order?',
    alipay: 'Alipay',
    packageName: 'Item',
    amount: 'Quantity',
    totalTraffic: 'Traffic',
    upgraded: 'Note: Upgraded Plan',
    balance: 'Balance',
  },
  p2pConfig: {
    status: 'Status',
    open: 'Opened',
    close: 'Closed',
    configSuccess: 'Successfully configured',
    configFail: 'Operation failed',
    name: 'Domain/AppId',
    uploadRule: {
      status: 'Only allow uploading on Wi-Fi and Ethernet',
      desc: 'This page allows you to define your own uploading logic with regards to the network condition. By default, uploading on cellular is enabled.\nCompatibility: web: 1.3+, android: 1.5+, iOS: 1.4+',
      on: 'Enabled',
      off: 'Disabled',
    },
    activationRatio: {
      desc: 'This page enables you to allocate an exact percentage of your audience to benefit from SwarmCloud peer-to-peer on a per-device basis. By starting with a small activation ratio, you will be able to test how our technology works on a small percentage of end-users. Then, you can increase it with time after checking the results. Disabled viewers still run our libraries but do not connect to our tracker. Peer connections for those viewers will not be initiated and their videos will be loaded from CDNs only.\n0% - No users are P2P enabled.\n100% - All users are P2P enabled(the default setting).',
      status: 'Activation Ratio(%)',
    },
    signalManage: {
      desc: 'This page is used for configuration of signaling address. Signaling is used to exchange information between nodes to establish P2P connection. If the address is configured on this page, the one on the SDK side will be overridden. If the backup signaling address is set, the SDK will connect two signaling at the same time and automatically switch to the backup signaling when the primary signaling is unavailable. ',
      signalAddr: 'Primary Signal Address',
      signalAddr2: 'Backup Signal Address',
      switch: "Disable/Enable",
      official: 'Pick an official signaling address that is geographically close to your viewers',
    },
    stunManage: {
        addr: 'Stun Address',
        desc: 'This page is used to configure the stun address. Stun is used for peers behind NAT to discover their public IP and port. Enter one address per line, up to 3 addresses. Please note that it will override default stun address in SDK.',
    },
  },
  app: {
    createToken: 'Create Token',
    createTokenSuccess: 'Create token successfully',
    createFormItem: '+ Create APP',
    createItemSuccess: 'Create successfully',
    createTitle: 'Input APP Information',
    createTip: 'You can create up to 200 apps',
    appName: 'The display name of APP',
    appID: 'You can refer to <a style="color: #337ab7" target="view_window" href="https://swarmcloud.net/en/views/bindings.html#app-id-and-token">here</a> to obtain APP ID',
    platform: 'Platform',
    sureCreateToken: 'Do you confirm to create token?',
    deleteItemSuccess: 'Delete successfully',
    updateItemSuccess: 'Update successfully',
    createTime: 'Create Time',
    name: 'Name',
    copy: 'Click to copy',
    watch: 'Monitor',
    title: 'Notice:',
    desc: 'This page is used to configure mobile native App and Electron App. You can create up to 200 apps. App records that have not been used within 60 days will be automatically deleted. It takes more than a minute to take effect after the creation is successful.',
    appIdTip: 'com.company.example',
    introTip: 'Enter the download link of your APP or the link of introduction page',
    signatureTip: 'Enter the SHA1 value of your APK signature, need Android SDK version >= 2.2.0, see <a style="color: #337ab7" target="view_window" href="http://www.cdnbye.com/en/views/FAQ.html#how-to-get-android-app-signature">here</a>',
    copied: 'Copied',
    illegal: 'Not Approved',
    signature: 'Signature(SHA1)',
    updateSign: 'Update SHA1',
    websiteWarn: 'Please add domain on the tab of Website Management',
  },
  seeder: {
    create: '+ Super Peer',
    createTitle: 'Input Super Peer Information',
    seedTitle: 'Input Seeding Information',
    addr: 'Server Address',
    desc: '',
    running: 'Running',
    stopped: 'Stopped',
    auto: 'Auto Seeding',
    seed: "Seed",
    copy: 'Copy Base64',
    inputChannelId: 'Input m3u8/mpd url or customized video id',
    remarks: 'Remarks',
    bandwidth: 'Bandwidth(Mbps)',
  },
  hotChannels: {
    content: 'Content',
    num: 'Viewers',
    desc: 'This page shows the popularity of contents ranked from height to low. Please note that content with viewers lower than 50 is not shown.',
  },
  invitation: {
    date: 'Date',
    copy: 'Copy Invitation Link',
    from: 'Client Email',
    price: 'Order Amount',
    status: 'Order Status',
    done: 'Completed',
    commission: 'Commission',
    tip: 'After inviting your friends to register successfully, you will be able to get 20% of the total amount from your friends\' purchases. The commission will be put into your account balance, which can be used for purchasing.',
  }
}
