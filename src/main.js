var chatOptions = require('./chat.vue')
Vue.config.debug = true


var chat = new Vue(chatOptions).$mount('#chat')
