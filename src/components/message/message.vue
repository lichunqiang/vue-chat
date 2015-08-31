<style lang="less">
.m-message {
  padding: 10px 15px;
  overflow-y: scroll;
  
  li {
    margin-bottom: 15px;
  }
  .time {
    margin: 7px 0;
    text-align: center;
    
    > span {
      display: inline-block;
      padding: 0 18px;
      font-size: 12px;
      color: #fff;
      border-radius: 2px;
      background-color: #dcdcdc;
    }
  }
  .avatar {
    float: left;
    margin: 0 10px 0 0;
    border-radius: 3px;
  }
  .text {
    display: inline-block;
    position: relative;
    padding: 0 10px;
    max-width: ~'calc(100% - 40px)';
    min-height: 30px;
    line-height: 2.5;
    font-size: 12px;
    text-align: left;
    word-break: break-all;
    background-color: #fafafa;
    border-radius: 4px;
    
    &:before {
      content: " ";
      position: absolute;
      top: 9px;
      right: 100%;
      border: 6px solid transparent;
      border-right-color: #fafafa;
    }
  }
  
  .self {
    text-align: right;
    
    .avatar {
      float: right;
      margin: 0 0 0 10px;
    }
    .text {
      background-color: #b2e281;
      
      &:before {
        right: inherit;
        left: 100%;
        border-right-color: transparent;
        border-left-color: #b2e281;
      }
    }
  }
}
</style>

<template>
<div class="m-message" v-scroll-bottom="store.sessionList[store.sessionId].messages">
  <ul>
    <li v-repeat="item in store.sessionList[store.sessionId].messages">
      <p class="time"><span>{{item.date | time}}</span></p>
      <div class="main" v-class="self: item.self">
        <img class="avatar" v-attr="src: item | avatar" width="30" height="30" />
        <div class="text">{{item.text}}</div>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
var time = require('filters/date')

export default {
  props: ['store'],

  filters: {
    avatar: function(item) {
      if (item.self) {
          return this.store.user.img;
      }
      let session = this.store.sessionList[this.store.sessionId],
          user = this.store.userList.filter(user => user.id === session.userId)[0];
      
      return user && user.img;
    },
    time: time
  },

  directives: {
    'scroll-bottom': function() {
      Vue.nextTick(() => {
        this.el.scrollTop = this.el.scrollHeight - this.el.clientHeight;
      });
    }
  }
}
</script>
