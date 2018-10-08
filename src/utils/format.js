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