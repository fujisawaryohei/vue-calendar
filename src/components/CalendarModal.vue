<template>
  <div class="calendar-modal" v-bind:style="{ display: modalDisplay }">
    <div class="modal-header">
      <font-awesome-icon icon='times' class='close-btn clearfix'></font-awesome-icon>
    </div>
    <h2 class="modal-title">{{ dateId }}のスケジュール</h2>
    <div class="modal-main">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    modalDisplay: String,
    dateId: String
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

  .modal-header {
    height: 10%;
    width: auto;
  }

  .modal-header .close-btn {
    float: right;
    width: 7%;
    height: 60%;
    opacity: 0.6;
  }

  .modal-title {
    font-size: 2.0em;
    text-align: center;
  }
</style>