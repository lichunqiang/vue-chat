<style lang="less">
#chat {
	overflow: hidden;
	border-radius: 3px;
	
	.sidebar, .main {
		height: 100%;	
	}
	.sidebar {
		float: left;
		width: 200px;
		color: #f4f4f4;
		background-color: #2e3238;
	}
	.main {
		position: relative;
		overflow: hidden;	
		background-color: #eee;
	}
	.m-text {
		position: absolute;
		width: 100%;
		bottom: 0;
		left: 0;
	}
	.m-message {
		height: ~'calc(100% - 160px)';
	}
}
</style>

<template>
<div>
  <div class="sidebar" v-on="click: test">
    <card store="{{store}}"></card>
    <list store="{{store}}"></list>
  </div>
  <div class="main">
    <message store="{{store}}"></message>
    <text store="{{store}}"></text>
  </div>
</div>
</template>

<script>
var store = require('./store')

export default {
  data() {
    store: store.fetch() 
  },

  ready() {
    this.$on('search', (search) => {
      this.$broadcast('search', search)
    })
  },

  methods: {
    test() {
      alert('test')
    }
  },

  watch: {
    'store.sessionList': {
      deep: true,
      handler () {
        store.save(this.store)
      }
    }
  },
  components: {
    card: require('./components/card/card.vue'),
    list: require('./components/list/list.vue'),
    text: require('./components/text/text.vue'),
    message: require('./components/message/message.vue')
  }
}
</script>
