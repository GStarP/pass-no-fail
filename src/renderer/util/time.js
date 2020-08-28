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

/**
 * 将 YYYY-mm-DD hh:MM 格式的字符串转为 Date 对象
 * @param {string} str
 */
export function strToDate (str) {
  const ymd = str.split(' ')[0].split('-')
  const hm = str.split(' ')[1].split(':')
  const d = new Date()
  d.setFullYear(Number.parseInt(ymd[0]))
  d.setMonth(Number.parseInt(ymd[1]) - 1)
  d.setDate(Number.parseInt(ymd[2]))
  d.setHours(Number.parseInt(hm[0]))
  d.setMinutes(Number.parseInt(hm[1]))
  return d
}

/**
 * 返回指定时间与当前时间的关系
 * @param {string} str
 */
export function getTimeStr (str) {
  const t = strToDate(str)
  const d = new Date()
  if (t.getFullYear() !== d.getFullYear()) {
    return `${d.getFullYear() - t.getFullYear()}年前`
  } else if (t.getMonth() !== d.getMonth()) {
    return `${d.getMonth() - t.getMonth()}月前`
  } else if (t.getDate() !== d.getDate()) {
    const days = d.getDate() - t.getDate()
    if (days > 7) {
      return `${(days / 7).toFixed(0)}周前`
    } else {
      return `${days}天前`
    }
  } else {
    let h = t.getHours()
    if (h < 10) {
      h = '0' + h
    }
    let m = t.getMinutes()
    if (m < 10) {
      m = '0' + m
    }
    return `${h}:${m}`
  }
}
