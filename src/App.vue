<template>
  <div class="main">
    <Calendar></Calendar>
  </div>
</template>
<script>
import Calendar from './components/Calendar'

export default {
  components: {
    Calendar
  }
}
</script>
<style lang='scss' scope>
  .main {
    width: auto;
    height: 1200px;
    background-color: rgba(208, 207, 207, 0.4);
    position: relative;
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
  }
</style>