<template>
  <div class='calendar'>
    {{ msg }}
  </div>
</template>
<script>
export default {
  data(){
    return {
      msg: 'hello calendar'
    }
  }
}
</script>
<style lang='scss' scope>
  .calendar {
    color: red;
  }
</style>