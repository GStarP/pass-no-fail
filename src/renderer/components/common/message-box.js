
import Vue from 'vue'
import MessageBoxConstructor from '@/components/common/MessageBox.vue'

let instance

function init () {
  instance = new MessageBoxConstructor({
    el: document.createElement('div')
  })
}

function show (options, resolve, reject) {
  if (!instance) {
    init()
  }
  instance.action = ''

  instance.title = options.title
  instance.hint = options.hint
  console.log(options.title, instance.title)
  instance.callback = (action) => {
    if (action === 'confirm') {
      resolve(instance.inputVal)
    } else {
      reject()
    }
  }

  document.body.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.show = true
  })
}

const MessageBox = function (options) {
  return new Promise((resolve, reject) => {
    show(options, resolve, reject)
  })
}

MessageBox.input = (title, hint) => {
  return MessageBox({
    title,
    hint
  })
}

export default MessageBox
