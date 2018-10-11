export function formatBandwidth(val) {
  const mbps = 1000
  let value = {
    num: 0,
    unit: 'kbps'
  }
  if(val >= mbps) {
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

export function formatTrafficUnit(val) {
  let unit = 'kb'
  const mb = 1024
  const gb = 1024 * 1024
  const tb = 1024 * 1024 * 1024
  if(val >= tb) {
    unit =  'tb'
  } else if(val >= gb) {
    unit =  'gb'
  } else if(val >= mb) {
    unit = 'mb'
  }
   return unit
}

export function formatTraffic(val, unit) {
  let value = 0
  const mb = 1024
  const gb = 1024 * 1024
  const tb = 1024 * 1024 * 1024
  switch (unit) {
    case 'gb':
      value =  (val / gb).toFixed(2)
      break;
    case 'mb':
      value = (val / mb).toFixed(2)
      break;
    case 'kb':
      value = val
      break;
    default:
      break;
  }
   return value
}