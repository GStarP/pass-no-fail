/**
 * 读写存档工具
 */

import fs from 'fs'
import path from 'path'

// 只有指定到 resources 才能使得打包的 .exe 能够读写存储文件
const STORE_PATH = process.env.NODE_ENV === 'production'
  ? path.join('resources/static/store.json')
  : path.join(__static, 'store.json')

export function getStore () {
  const content = fs.readFileSync(STORE_PATH, 'utf8')
  return JSON.parse(content)
}

export function updateStore (data) {
  console.log('===start write===')
  fs.writeFileSync(STORE_PATH, JSON.stringify(data))
  console.log('===finish write===')
}
