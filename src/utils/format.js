//sha256 加密
export function setSha256(value) {
  const sha256 = require("js-sha256").sha256
  return sha256(value)
}

// 对带宽数据进行处理，返回数值及单位
export function formatBandwidth(val) {
  const mbps = 1024
  const gbps = 1024 * 1024
  let value
  if(val >= gbps) {
    value = {
      num: (val / gbps).toFixed(2),
      unit: 'gbps'
    }
  } else if(val >= mbps) {
    value = {
      num: (val / mbps).toFixed(2),
      unit: 'mbps'
    }
  } else {
    value = {
      num: val,
      unit: 'kbps'
    }
  }
  value.num = Number(value.num)
  return value
}

export function getBandwidthNum(val, unit) {
  let value = 0
  const mb = 1024
  const gb = 1024 * 1024
  switch (unit) {
    case 'gbps':
      value =  (val / gb).toFixed(2)
      break;
    case 'mbps':
      value = (val / mb).toFixed(2)
      break;
    case 'kbps':
      value = val
      break;
    default:
      break;
  }
  value = Number(value)
  return value
}

// 对流量数据进行处理，返回数值及单位
export function formatTraffic(val) {
  const mb = 1024
  const gb = 1024 * 1024
  const tb = 1024 * 1024 * 1024
  let value = {num: 0,unit: 'KB'}
  if(val >= tb) {
    value = {
      num: (val / tb).toFixed(2),
      unit: 'TB'
    }
  } else if(val >= gb) {
    value = {
      num: (val / gb).toFixed(2),
      unit: 'GB'
    }
  } else if(val >= mb) {
    value = {
      num: (val / mb).toFixed(2),
      unit: 'MB'
    }
  } else {
    value = {
      num: val,
      unit: 'KB'
    }
  }
  value.num = Number(value.num)
  return value
}

export function getTrafficNum(val, unit) {
    let value = 0
    const mb = 1024
    const gb = 1024 * 1024
    const tb = 1024 * 1024 * 1024
    switch (unit) {
        case 'TB':
            value =  (val / tb).toFixed(2)
            break;
        case 'GB':
            value = (val / gb).toFixed(2)
            break;
        case 'MB':
            value = (val/mb).toFixed(2)
            break;
        default:
            value = val.toFixed(2)
            break;
    }
    return value

}

export function formatPieData(data) {
  const temp = data.filter(a => {
    return a.value > 0
  })
  return temp
}

// 获取路径中query参数并返回对象格式
export function getQueryObj(url) {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf("?") + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, function (rs, $1, $2) {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

export const formatDuration = ms => {
  if (ms < 0) ms = -ms;
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
  };
  const keyToText = {
    day: 'D',
    hour: 'H',
    minute: 'M',
    second: 'S',
  };
  return Object.entries(time)
      .filter(val => val[1] !== 0)
      .map(([key, val]) => `${val}${keyToText[key]}`)
      .join(',');
}
