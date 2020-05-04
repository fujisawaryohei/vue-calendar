<template>
  <calendar></calendar>
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
</style>