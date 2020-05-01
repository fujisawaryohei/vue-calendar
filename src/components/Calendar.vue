<template>
  <div class="calendar">
    <div class="calendar-header">
      <p>{{ this.month }}月 {{ this.year }}年</p>
      <button @click="reduceMonth()" class="calendar-left-btn">
        前へ
      </button>
      <button @click="addMonth()" class="calendar-right-btn">後へ</button>
    </div>
    <table class="calendar-main">
      <thead class='calendar-head-row'>
        <tr align='center'>
          <th>S</th>
          <th>M</th>
          <th>T</th>
          <th>W</th>
          <th>T</th>
          <th>F</th>
          <th>S</th>
        </tr>
      </thead>
      <tbody class='calendar-body'>
        <tr align='center'>
          <td v-for="(item, index) in tableLine1()" 
              v-bind:key="index">
            {{ item }}
          </td>
        </tr>
        <tr align='center'>
           <td v-for="(item, index) in tableLine2()" 
              v-bind:key="index">
            {{ item }}
          </td>
        </tr>
        <tr align='center'>
           <td v-for="(item, index) in tableLine3()" 
              v-bind:key="index">
            {{ item }}
          </td>
        </tr>
        <tr align='center'>
           <td v-for="(item, index) in tableLine4()" 
              v-bind:key="index">
            {{ item }}
          </td>
        </tr>
        <tr align='center'>
           <td v-for="(item, index) in tableLine5()" 
              v-bind:key="index">
            {{ item }}
          </td>
        </tr>
        <tr align='center'>
           <td v-for="(item, index) in tableLine6()" 
              v-bind:key="index">
            {{ item }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data(){
    return {
      year: 0,
      month: 0,
      calendar: null
    }
  },
  created(){
    this.year = this.getCurrentFullYear()
    this.month = this.getCurrentMonth()
    this.createCalendar()
  },
  methods:{
    createCalendar: function(){ //watch と createdで呼び出す
      this.calendar = null; //カレンダーの日にち配列の初期化
      const currentMonthDates = this.getCurrentMonthDates() //現在の月の日にち全件取得
      const previousRemainderDates= this.getPreviousRemainder() //前の余白の日付
      const lastRemainderDates = this.getLastRemainder(currentMonthDates.concat(previousRemainderDates)) //後の余白の日付
      this.calendar = previousRemainderDates.concat(currentMonthDates).concat(lastRemainderDates)
    },
    getCurrentFullYear: function(){
      return new Date().getFullYear()
    },
    getCurrentMonth: function(){
      return new Date().getMonth() + 1
    },
    getCurrentMonthDates: function(){
      const dates = []
      const currentMonthDate = new Date(this.year, this.month, 0).getDate() //現在の月の日数
      for(let i = 1; i <= currentMonthDate; i++){
        dates.push(i)
      }
      return dates
    },
    getPreviousRemainder: function(){
      const dates = []
      const firstDayOfCurrentMonth = new Date(this.year, this.month - 1, 1).getDay() //現在の月初の曜日位置
      let endOflastMonth = new Date(this.year, this.month - 1, 0).getDate() //先月末
      for(let i=0; i < firstDayOfCurrentMonth; i++){
        dates.push(endOflastMonth)
        endOflastMonth -= 1;
      }
      dates.sort(function(a, b){
        if( a < b ) return -1;
        if( a > b ) return 1;
        return 0;
      })
      return dates
    },
    getLastRemainder: function(arr){
      const dates = []
      let count = 42 - arr.length+1
      for(let i=1; i < count; i++){
        dates.push(i)
      }
      return dates
    },
    tableLine1: function(){
      return this.calendar.slice(0, 7)
    },
    tableLine2: function(){
      return this.calendar.slice(7, 14)
    },
    tableLine3: function(){
      return this.calendar.slice(14, 21)
    },
    tableLine4: function(){
      return this.calendar.slice(21, 28)
    },
    tableLine5: function(){
      return this.calendar.slice(28, 35)
    },
    tableLine6: function(){
      return this.calendar.slice(35, 42)
    },
    checkedMonth: function(){
      
    },
    addMonth: function(){
      const monthArr = [1,2,3,4,5,6,7,8,9,10,11,12]
      if(monthArr[this.month-1] === 12){
        this.month = monthArr[0]
        this.year += 1
      } else {
        this.month = monthArr[this.month-1] + 1
      }
    },
    reduceMonth: function(){
      const monthArr = [1,2,3,4,5,6,7,8,9,10,11,12]
      if(monthArr[this.month-1] === 1){
        this.month = monthArr[11]
        this.year -= 1
      } else {
        this.month = monthArr[this.month-1] - 1
      }
    }
  },
  watch: {
    month: function(){
      this.createCalendar()
    }
  }
}
</script>
<style lang='scss' scope>
  .calendar {
    width: 50%;
    height: 50%;
    box-sizing: border-box;
    margin: 0 auto;
    background-color: white;
    box-shadow: 1px 1px 1px 1px rgba(211, 206, 206, 0.4);
    position: relative;
    top: 10%;
    border-radius: 1px;
  }

  .calendar-header p {
    text-align: center;
    padding-top: 10%;
  }

  .calendar-left-btn {
    display: block;
    float: left;
    width: 10%;
    height: 10%;
  }

  .calendar-right-btn {
    display: block;
    float: right;
    width: 10%;
    height: 10%;
  }

  .calendar-main {
    width: 100%;
    height: 70%;
    margin: 5% auto auto auto;
    position: relative;
  }

  .calendar-head-row th {
    opacity: 0.2;
  }
</style>