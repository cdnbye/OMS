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

export function copy(value, callback) {
  var currentFocus = document.activeElement;// 保存当前活动节点
  
  let input = document.createElement('input');// 创建一个input标签
  document.body.appendChild(input);// 把标签添加给body
  input.style.opacity = 0;//设置input标签设置为透明(不可见)
  input.value = value;// 把需要复制的值放到input上

  // 记录当前滚动位置, 因为添加节点并选中的时候回影响页面滚动
  let scrollY = window.scrollY;

  input.focus();// input节点获取焦点
  input.setSelectionRange(0, input.value.length);// 选中input框中的所有文字

  var res = document.execCommand('copy', true);// 复制文字并获取结果

  currentFocus.focus();// 之前活动节点获得焦点
  document.body.removeChild(input);// 删除添加的input节点

  // 页面滚动到之前位置
  window.scrollTo(0, scrollY);
  
  callback();
  return res;// 返回操作结果
}

