export function formatBandwidth(val) {
  const mbps = 1000
  const gbps = 1000000
  const tbps = 1000000000

  let value = {
    num: 0,
    unit: 'kbps'
  }
  if(val >= tbps) {
    value = {
      num: val / tbps,
      unit: 'tbps'
    }
  } else if(val >= gbps) {
    value = {
      num: val / gbps,
      unit: 'gbps'
    }
  } else if(val >= mbps) {
    value = {
      num: val / mbps,
      unit: 'mbps'
    }
  } else {
    value = {
      num: val,
      unit: 'kbps'
    }
  }
   return value
  // let value = 0
  // if(val >= tbps) {
  //   value = val / tbps + ' tbps'
  // } else if(val >= gbps) {
  //   value = val / gbps + ' gbps'
  // } else if(val >= mbps) {
  //   value = val / mbps + ' mbps'
  // } else {
  //   value = val + ' kbps'
  // }
  //  return value
}