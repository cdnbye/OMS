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
  let unit = 'kbps'
  const mb = 1000
  const gb = 1000 * 1000
  const tb = 1000 * 1000 * 1000
  if(val >= tb) {
    unit =  'tbps'
  } else if(val >= gb) {
    unit =  'gbps'
  } else if(val >= mb) {
    unit = 'mbps'
  }
   return unit
}

export function formatTraffic(val, unit) {
  let value = 0
  const mb = 1000
  const gb = 1000 * 1000
  const tb = 1000 * 1000 * 1000
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