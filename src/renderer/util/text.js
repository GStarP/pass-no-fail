
/**
 * 文本工具
 */

export function htmlText (text) {
  // JS 没有 replaceAll()
  return text.replace(new RegExp('\\n', 'gm'), '<br>')
}
