export default {
  route: {
    dashboard: 'Realtime data',
    liveData: 'Live data',
    basicAnalysis: 'Realtime Analysis',
    disChart: 'Distribution',
    Operational: 'Operational data',
    bandwidth: 'bandwidth',
    online: 'online',
    permission: 'Permission',
    pagePermission: 'Page Permission',
    userData: 'User data',
    domain: 'domain',
    list: 'User list',
    userDomain: 'Domain list',
    p2pRate: 'P2P rate',
    whole: 'whole',
    userDistribution: 'Geographical Distribution',
    chinaDistribution: 'China',
    worldDistribution: 'Global',
    config: 'Config management',
    trackerConfig: 'tracker',
    userConfig: 'user',

    dataAnalysis: 'Advanced Analysis',
    p2pTraffic: 'P2P Traffic Trend',
    onlineNum: 'Online Viewers Trend',
    domainInfo: 'Domain Info',
    domainList: 'Domain List',
    package: 'Traffic Packages',
    order: 'Orders History'
  },
  navbar: {
    logOut: 'Log Out',
    dashboard: 'Dashboard',
    dosAddress: 'Documentation',
    screenfull: 'Screenfull',
    theme: 'Theme',
    size: 'Global Size',
    myInfo: 'My Info',
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
    passwdError: 'The password must be between 6 and 12 digits',
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
    goBind: 'Go bind',
    switchDomain: 'Switch Domain',
    tip: 'You have not bound a domain name, are you binding now?',
    online: 'Current Online Viewers',
    p2pTraffic: 'P2P Traffic Today',
    serveNum: 'Served Viewers Today',
    maxOnlineNum: 'Peak Concurrent Viewers',
    remain: 'Remaining Purchased Traffic',
    free: 'Remaining Free Traffic',
    versionDis: 'Version Distribution',
    tagDis: 'Tag Distribution',
    terminalDis: 'Terminal Distribution',
    liveDis: 'Live/VOD Distribution',
    natDis: 'Network Type Distribution',
    p2pTip: 'Want to increase p2p traffic? See <a style="color: #337ab7" href="https://docs.cdnbye.com/#/en/m3u8" target="_blank">here</a>',
    freeTip: '10GB of traffic will be given after the domain name is bound with an additional 40 GB after signing in every day. <br/>Note that both of these will be cleared the next day. The consumed P2P traffic is first deducted by free traffic while the excess is deducted by traffic package. <br/>If there is no available traffic, P2P service will be stopped.',
    remainTip: 'The traffic packages is used to increase avaliable P2P traffic. Please <a style="color: #337ab7" href="/user/package">buy</a> it in time to avoid service interruption.',
    checkin: 'Sign in for free traffic',
    checkinSuccess: 'Sign in successfully!',
    haveChecked: 'You have signed in today',
    checkinFail: 'Sign in failed, please try again!'
  },
  domainTable: {
    bindDomain: 'Bind Your Domain',
    bindDomainTip: 'Enter your domain name，such as:\nwww.example.com',
    bindDomainTError: 'PLease input the correct domain!',
    domain: 'Domain',
    status: 'State',
    available: 'Available',
    unavailable: 'Unavailable',
    operation: 'Operation',
    verifyDomain: 'Verity domain',
    certification: 'Verify',
    certificationTip: 'You need to verify your domain name of the added website. The public domain name can be verified by any of the following methods. The intranet domain name only supports DNS authentication for security reasons. Notice: Verify the domain of the web site that host the player, not the domain name of the m3u8 address.',
    doneTip: 'Click the "Verify Now" button when you are done',
    verifyLater: 'Verify Later',
    verifyNow: 'Verify Now',
    delete: 'Delete',
    tip: 'Sure to delete？',
    none: 'None',
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
    verifySuccess: 'verify successfully'
  },
  documentation: {
    documentation: 'Documentation',
    github: 'Github Repository'
  },
  errorLog: {
    tips: 'Please click the bug icon in the upper right corner',
    description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
    documentation: 'Document introduction'
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
      lengthError: 'Please enter a 6 to 12 digit password',
    },
  },
  common: {
    ok: 'OK',
    cancel: 'Cancel',
    deleteSuccess: 'delete successfully',
    closeSuccess: 'close successfully'
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
    packageSub: 'Each user can consume a certain amount of P2P traffic. You can increase quota of traffic by buying the listed traffic packages below.  It takes effect immediately after purchase. Refunds are not supported. Contact service@cdnbye.com if you have problems.',

    packageInfo: 'Package info',
    unitPrice: 'Unit price',
    quantity: 'Quantity',
    expense: 'Expense',
    total: 'total:',
    confirmPurchase: 'Pay now',       
    paySuccess: 'Paid successfully',
    payFail: 'payment fail',
    systemError: 'Sorry, the system is maintaining',
    payLoadingTip: 'Jumping to payment page...',
    checkResultLoadingTip: 'Checking payment status...'
  },
  order: {
    createTime: 'Date',
    type: 'Type',
    payMethod: 'Payment method',
    flowPackage: 'Traffic package',
    price: 'Price',
    status: 'Order status',
    action: 'Action',
    pay: 'Pay',
    close: 'Close',
    waitPay: 'Pending',
    finish: 'Finish',
    fail: 'Close',
    tip: 'Sure to close order?',
    alipay: 'alipay'
  }
}
