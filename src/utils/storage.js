/**
 * 存储数据
 */
export const setItem = (key, value) => {
  // 将数组、对象类型的数据转化为 JSON 字符串进行存储
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

/**
 * 获取数据
 */
export const getItem = key => {
  const data = window.localStorage.getItem(key)
  try {
    const item = JSON.parse(data)
    if (item.duration && item.startTime) {
      let date = new Date().getTime();
      if(date - item.startTime > item.duration){
        //缓存过期，清除缓存，返回null
        window.localStorage.removeItem(key);
        return null;
      }else{
        //缓存未过期，返回值
        return item.value;
      }
    } else {
      return item;
    }
  } catch (err) {
    return data
  }
}

/**
 * 删除数据
 */
export const removeItem = key => {
  window.localStorage.removeItem(key)
}

/**
 * 删除所有数据
 */
export const removeAllItem = () => {
  window.localStorage.clear()
}

/**
 * 存储数据（带过期时间）ms
 */
export const setItemWithExpiration = (key, value, duration) => {
  let obj = {
    value,
    duration,
    startTime: new Date().getTime()//记录何时将值存入缓存，毫秒级
  }
  window.localStorage.setItem(key, JSON.stringify(obj))
}
