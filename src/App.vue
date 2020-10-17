<template>
  <calendar></calendar>
</template>
<script>
import Calendar from './components/Calendar'

export default {
  components: {
    calendar: Calendar
  }
}
</script>
<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

p {
  font-family: 'ヒラギノ丸ゴ ProN', 'Hiragino Maru Gothic ProN', sans-serif;
  font-size: 2rem;
}

.clearfix::after {
  content: '';
  clear: both;
  display: block;
}
</style>
