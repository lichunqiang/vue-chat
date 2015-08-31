<template>
<div class="m-list">
  <ul>
    <li v-repeat="item in store.userList" 
      v-on="click: select($index)"
      v-class="active: selectUserId === item.id"
      v-show="item.name.indexOf(search) > -1">
      <img class="avatar" alt="{{item.name}}" width="30" height="30" v-attr="src: item.img">
      <p class="name">{{item.name}}</p>
    </li>
  </ul>
</div>
</template>

<style lang="less">
.m-list {
  li {
    padding: 12px 15px;
    border-bottom: 1px solid #292C33;
    cursor: pointer;
    transition: background-color .1s;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.03);
    }
    &.active {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  .avatar, .name {
    vertical-align: middle;
  }
  .avatar {
    border-radius: 2px;
  }
  .name {
    display: inline-block;
    margin: 0 0 0 15px;
  }
}
</style>


<script>
  
export default {
  props: ['store'],

  data() {
    return {
      search: ''
    }
  },

  ready() {
    this.$on('search', (search) => {
      this.search = search
    })
  },

  computed: {
    selectUserId() {
      return this.store.sessionList[this.store.sessionId].userId
    }
  },

  methods: {
    select(index) {
      this.store.sessionId = index
    }
  }
}
</script>
