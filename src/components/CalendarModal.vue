<template>
  <transition>
    <div class="calendar-modal" :style="{ visibility: modalDisplay }">
      <header class="modal-header">
        <font-awesome-icon
          icon="times"
          class="close-btn clearfix"
          @click="closeModal"
        ></font-awesome-icon>
      </header>
      <h2 class="modal-title">{{ dateId }}</h2>
      <main class="modal-main">
        <h2 class="modal-main-title">Todo</h2>
        <ul class="todo-list">
          <li v-for="(item, index) in toDo" :key="index">・ {{ item.todo }}</li>
        </ul>
      </main>
      <input type="text" class="modal-form" />
      <button class="modal-form-btn" @click="addTodo()">追加する</button>
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
  data() {
    return {
      id: 1
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
    addTodo() {
      const todoObj = {
        id: this.id,
        date: this.dateId,
        todo: document.querySelector('input.modal-form').value
      }
      this.id += 1
      document.querySelector('input.modal-form').value = ''
      this.$emit('addTodo', todoObj)
    }
  }
}
</script>
<style lang="scss" scoped>
.calendar-modal {
  position: absolute;
  top: 15%;
  left: 22.5%;
  background-color: white;
  width: 55%;
  height: 70%;
  z-index: 1;
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
  font-size: 2rem;
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
  margin-left: 15%;
  height: 5%;
  width: 60%;
}

.modal-form-btn {
  position: absolute;
  top: 90%;
  left: 85%;
  height: 5%;
  width: 10%;
  background-color: rgb(101, 200, 242);
  border-radius: 10px;
  color: white;
  font-weight: bold;
  border-style: none;
  cursor: pointer;
}

.modal-form-btn:hover {
  background-color: rgb(118, 205, 242);
}

//モーダルアニメーション
.v-enter-active,
.v-leave-active {
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
