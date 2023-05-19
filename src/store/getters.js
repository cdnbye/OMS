const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  device: state => state.app.device,
  token: state => state.user.token,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  roles: state => state.user.roles,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  userDomain: state => state.user.userDomain,
  userValidDomain: state => state.user.userValidDomain,
  currentDomain: state => state.user.currentDomain,
  profile: state => state.user.profile,
  switchDomainVisible: state => state.app.switchDomainVisible,
}
export default getters