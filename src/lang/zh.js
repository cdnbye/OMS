export default {
  route: {
    dashboard: '实时数据分析',
    liveData: '实时数据',
    basicAnalysis: '基本数据分析',
    disChart: '分布图',
    Operational: '整体运营数据',
    bandwidth: '带宽趋势图',
    online: '在线人数趋势图',
    permission: '权限测试页',
    pagePermission: '页面权限',
    userData: '用户数据分析',
    domain: '域名',
    list: '用户列表',
    userDomain: '域名列表',
    p2pRate: 'P2P分享率',
    whole: '总体信息',
    userDistribution: '用户地理分布',
    chinaDistribution: '中国分布图',
    worldDistribution: '世界分布图',
    config: '配置管理',
    trackerConfig: 'tracker配置',
    userConfig: '客户管理',

    dataAnalysis: '高级数据分析',
    p2pTraffic: 'P2P流量',
    onlineNum: '在线人数',
    domainInfo: '域名信息',
    domainList: '域名列表'
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
    passwdError: '密码必须在6到12位之间',
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
    switch: '切换',
    goBind: '去绑定',
    switchDomain: '切换域名',
    tip: '您还未绑定域名，是否现在绑定？',
    online: '当前在线人数',
    p2pTraffic: '今日P2P流量',
    serveNum: '今日服务人数',
    versionDis: '版本分布',
    tagDis: 'Tag分布',
    terminalDis: '终端分布',
    liveDis: '直播点播分布',
    natDis: '网络类型分布',
  },
  domainTable: {
    bindDomain: '绑定域名',
    domain: '域名',
    status: '可用状态',
    available: '可用',
    unavailable: '不可用',
    operation: '操作',
    certification: '认证',
    delete: '删除',
    tip: '确定删除吗？',
    none: '无',
    select: '请选择',
  },
  documentation: {
    documentation: '文档',
    github: 'Github 地址'
  },
  errorLog: {
    tips: '请点击右上角bug小图标',
    description: '现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报。',
    documentation: '文档介绍'
  },
  tagsView: {
    refresh: '刷新',
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  },
  common: {
    ok: '确定',
    cancel: '取消'
  }
}
