<template>
<transition>
  <div class="calendar-modal" v-bind:style="{ visibility: modalDisplay }">
    <header class="modal-header">
      <font-awesome-icon icon='times' class='close-btn clearfix' @click="closeModal"></font-awesome-icon>
    </header>
    <h2 class="modal-title">{{ dateId }}</h2>
    <main class="modal-main">
      <h2 class="modal-main-title">Todo</h2>
      <ul class="todo-list">
        <li v-for="(item, index) in toDo" :key="index">
          {{ item.id }}. {{ item.todo }}
        </li>
      </ul>
    </main>
    <input type="text" class="modal-form">
  </div>
</transition>
</template>
<script>
export default {
  props: {
    modalDisplay: String,
    dateId: String,
    toDo: Array
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

  .modal-main-title {
    font-size: 2.0rem;
    margin-top: 2.5%;
    margin-left: 10%;
  }

  .todo-list {
    text-align: center;
    margin-top: 3%;
  }

  .todo-list li {
    padding-bottom: 4%;
    font-size: 1.5rem;
  }

  .modal-form {
    position: absolute;
    top: 90%;
    margin-left: 10%;
    height: 5%;
    width: 80%;
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