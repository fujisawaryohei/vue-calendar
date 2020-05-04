<template>
  <div class="calendar-modal" v-bind:style="{ display: modalStyle.display }">
    <div class="wrapper">
      <div class="modal-header">
      </div>
      <div class="modal-main">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      modalStyle: {
        display: 'none'
      }
    }
  }
}
</script>
<style lang='scss' scoped>
  .calendar-modal {
    position: absolute;
    top: 20%;
    left: 15%;
    background-color: white;
    width: 70%;
    height: 70%;
  }
</style>