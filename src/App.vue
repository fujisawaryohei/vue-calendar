<template>
  <div class="main">
    <calendar></calendar>
  </div>
</template>
<script>
import Calendar from './components/Calendar'

export default {
  components: {
    'calendar': Calendar
  }
}
</script>
<style lang='scss'>
  html, body {
    height: 100%;
  }
  .main {
    width: auto;
    height: 100%;
    background-color: rgba(208, 207, 207, 0.4);
    position: relative;
    background-image: url('/public/background-image.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  p {
    font-family: 'ヒラギノ丸ゴ ProN','Hiragino Maru Gothic ProN',sans-serif;
    font-size: 2.0rem;
  }
  th, td {
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.7rem;
  }
  td {
    vertical-align: middle;
    transition: 0.5s;
  }
  td:hover {
    cursor: pointer;
    background-color: #ff8e90;
  }
</style>