<template>
<transition>
  <div class="calendar-modal" v-bind:style="{ visibility: modalDisplay }">
    <header class="modal-header">
      <font-awesome-icon icon='times' class='close-btn clearfix' @click="closeModal"></font-awesome-icon>
    </header>
    <h2 class="modal-title">{{ dateId }}</h2>
    <main class="modal-main">
    </main>
  </div>
</transition>
</template>
<script>
export default {
  props: {
    modalDisplay: String,
    dateId: String
  },
  methods: {
    closeModal: function(){
      this.$emit('closeModal')
    }
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
    margin-top: 2%;
    margin-right: 2%;
    width: 5%;
    height: 60%;
    opacity: 0.6;
    cursor: pointer;
  }

  .modal-title {
    font-size: 1.5em;
    text-align: center;
  }

  //モーダルアニメーション
  .v-enter-active, .v-leave-active {
    transition: opacity 1s;
  }
  .v-enter {
    opacity: 0;
  }
  .v-enter-to {
    opacity: 1;
  }
  .v-leave {
    opacity: 1;
  }
  .v-leave-to {
    opacity: 0;
  }
</style>