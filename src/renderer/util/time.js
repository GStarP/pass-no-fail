/**
 * 日期时间相关
 */

/**
 * 获取当前时间字符串
 * YYYY-mm-DD hh:MM
 */
export function getCurTimeStr () {
  const d = new Date()
  const year = d.getFullYear()
  let month = d.getMonth() + 1
  if (month < 10) {
    month = '0' + month
  }
  let date = d.getDate()
  if (date < 10) {
    date = '0' + date
  }
  let hour = d.getHours()
  if (hour < 10) {
    hour = '0' + hour
  }
  let minute = d.getMinutes()
  if (minute < 10) {
    minute = '0' + minute
  }
  return `${year}-${month}-${date} ${hour}:${minute}`
}
