// translate router.meta.title, be used in breadcrumb sidebar tagsview

export function generateTitle(title) {
  const hasKey = this.$te('route.' + title)
  const translatedTitle = this.$t('route.' + title) // $t :this method from vue-i18n, inject in @/lang/index.js

  if (hasKey) {
    return translatedTitle
  }
  return title
}

export function navLang() {
  var lang = navigator.language || navigator.userLanguage //常规浏览器语言和IE浏览器
  lang = lang.substr(0, 2) //截取lang前2位字符
  return lang === 'zh' ? 'zh' : 'en'
}
