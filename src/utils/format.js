export function setSha256(value) {
  const sha256 = require("js-sha256").sha256
  return sha256(value)
}

export function formatBandwidth(val) {
  const mbps = 1024
  const gbps = 1024 * 1024
  let value = {
    num: 0,
    unit: 'kbps'
  }
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
  return value
}

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
  return value
}

export function formatPieData(data) {
  const temp = data.filter(a => {
    return a.value > 0
  })
  return temp
}
