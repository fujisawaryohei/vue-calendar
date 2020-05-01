<template>
  <div id="app">
    <p class="hoge">{{ msg }}</p>
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return {
      msg: 'hello world'
    }
  }
}
</script>
<style lang="scss" scope>
  .hoge {
    color: red;
  }
</style>>