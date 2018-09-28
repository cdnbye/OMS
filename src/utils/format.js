export function formatBandwidth(val) {
  const mbps = 1000
  const gbps = 1000000
  const tbps = 1000000000
  let value = 0
  if(val >= tbps) {
    value = val / tbps + ' tbps'
  } else if(val >= gbps) {
    value = val / tbps + ' gbps'
  } else if(val >= mbps) {
    value = val / tbps + ' mbps'
  } else {
    value = val / tbps + ' kbps'
  }
   return value
}