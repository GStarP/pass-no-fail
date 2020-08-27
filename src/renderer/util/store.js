/**
 * 读写存档工具
 */

import fs from 'fs'
import path from 'path'

const STORE_PATH = path.join(__static, '/store.json')

export function getStore () {
  const content = fs.readFileSync(STORE_PATH, 'utf8')
  return JSON.parse(content)
}

export function updateStore (data) {
  fs.writeFileSync(path.join(__static, STORE_PATH), JSON.stringify(data))
}
