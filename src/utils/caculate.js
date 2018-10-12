import moment from 'moment'

export function getGran(startDate, endDate) {
  let gran = 5
  const start = moment(startDate)
  const end = moment(endDate)
  const temp = end.diff(start, 'days')
  const hour = 60
  const day = 1440
  const week = 1440 * 7
  const month = 1440 * 30
  if(temp >= 210) {
    gran = month
  } else if(temp >= 60) {
    gran = week
  } else if(temp >= 7) {
    gran = day
  } else if(temp >= 3) {
    gran = hour
  }
  return gran
}
