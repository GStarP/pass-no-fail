<template>
  <div>
    <input id="inp">
  </div>
</template>

<script>
import fs from 'fs'
import path from 'path'

export default {
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    },
    onInp (val) {
      fs.writeFileSync(path.join(__static, '/store.txt'), val)
    }
  },
  mounted () {
    const content = fs.readFileSync(path.join(__static, '/store.txt'), 'utf8')
    console.log(content)
    document.getElementById('inp').onchange = (e) => {
      this.onInp(e.target.value)
    }
  }
}
</script>

<style>
</style>
