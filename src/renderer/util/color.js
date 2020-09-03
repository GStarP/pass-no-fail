export function hexToRGBA (hex) {
  let hexStr = hex.toLowerCase()
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
  if (hexStr && reg.test(hexStr)) {
    if (hexStr.length === 4) {
      let completeHexStr = '#'
      for (let i = 1; i < 4; i++) {
        completeHexStr += hexStr.slice(i, i + 1).concat(hexStr.slice(i, i + 1))
      }
      hexStr = completeHexStr
    }
    let colorArr = []
    for (let i = 1; i < 7; i += 2) {
      colorArr.push(parseInt('0x' + hexStr.slice(i, i + 2)))
    }
    return {
      r: colorArr[0],
      g: colorArr[1],
      b: colorArr[2]
    }
  }
  return hexStr
}
