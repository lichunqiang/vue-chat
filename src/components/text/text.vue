<style lang="less">
.m-text {
  height: 160px;
  border-top: solid 1px #ddd;
  
  textarea {
    padding: 10px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    font-family: "Micrsofot Yahei";
    resize: none;
  }
}
</style>

<template>
<div class="m-text">
  <textarea placeholder="按 Ctrl + Enter 发送" v-model="text" v-on="keyup: inputing"></textarea>
</div>
</template>

<script>
export default {
  props: ['store'],

  data() {
    return {
      text: ''
    }
  },

  methods: {
    inputing (e) {
      if (e.ctrlKey && e.keyCode === 13 && this.text.length) {
        this.store.sessionList[this.store.sessionId].messages.push({
            text: this.text,
            date: new Date(),
            self: true
        });
        this.text = '';
      }
    }
  }
}
</script>
