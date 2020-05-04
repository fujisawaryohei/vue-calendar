<template>
  <div class="calendar-modal" v-bind:style="{ display: modalDisplay }">
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
  props: {
    modalDisplay: String
  }
}
</script>
<style lang='scss' scoped>
  .calendar-modal {
    position: absolute;
    top: 15%;
    left: 22.5%;
    background-color: white;
    width: 55%;
    height: 70%;
    z-index: 1.0;
    border-radius: 3%;
  }
</style>