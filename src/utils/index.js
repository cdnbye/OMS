import store from '@/store'
import { fetchUserDomain } from '@/api/userDomain'
import el from "element-ui/src/locale/lang/el";

export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function() {
    // 据上一次触发时间间隔
    const last = + new Date() - timestamp

    // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function(...args) {
    context = this
    timestamp = + new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

export function downloadFile(content, filename) {
  // 创建隐藏的可下载链接
  var eleLink = document.createElement('a')
  eleLink.download = filename
  eleLink.style.display = 'none'
  // 字符内容转变成blob地址
  var blob = new Blob([content])
  eleLink.href = URL.createObjectURL(blob)
  // 触发点击
  document.body.appendChild(eleLink)
  eleLink.click()
  // 然后移除
  document.body.removeChild(eleLink)
}

//删除左右两端的空格
export function trim(str){
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

export function fetchAllDomainAndApp() {
  return new Promise((resolve, reject) => {
    fetchUserDomain(1, 300).then(res => {
      let currentDomainExist = false
      let currentDomain = store.getters.currentDomain
      if(res.data) {
        let hasValidDomain = false
        for (let i = 0; i < res.data.length; i++) {
          if(res.data[i].isValid === 1) {
            store.dispatch('setDomain', res.data)
            // console.warn(JSON.stringify(res.data[i]))
            hasValidDomain = true
            break
          }
        }
        if (currentDomain.domain) {
          currentDomainExist = res.data.some(item => {
            return item.domain === currentDomain.domain
          })
        }
        if(hasValidDomain) {
          const validDomain = res.data.filter(item => item.isValid === 1)
          // 排序 首先按域名级数排序 同一级数按字母排序
          validDomain.sort((x, y) =>  {
            const dotsX = x.domain.split('.').length
            const dotsY = y.domain.split('.').length
            if (dotsX !== dotsY) {
              return dotsX - dotsY
            }
            return x.domain.localeCompare(y.domain)
          })
          store.dispatch('setValidDomain', validDomain)
          // console.warn(store.getters.currentDomain)
          // console.warn(currentDomainExist)
          if (!currentDomainExist) {
            store.dispatch('setCurrentDomain', validDomain[0])
          }
          resolve(validDomain)
        } else {
          store.dispatch('setValidDomain', [])
          store.dispatch('setCurrentDomain', {})
          store.dispatch('setDomain', [])
        }
      }
      resolve([])
    }).catch(err => {
      console.log(err)
      reject(err)
    })
  })
}

