<template>
  <div class="calendar">
    <div class="calendar-header">
      <p>May 2020</p>
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
          <td v-for="day in tableLine1()" 
              v-bind:key="day">
              {{ day }}
          </td>
        </tr>
        <tr align='center'>
          <td v-for="day in tableLine2()" 
              v-bind:key="day">
              {{ day }}
          </td>
        </tr>
        <tr align='center'>
          <td v-for="day in tableLine3()" 
              v-bind:key="day">
              {{ day }}
          </td>
        </tr>
        <tr align='center'>
          <td v-for="day in tableLine4()" 
              v-bind:key="day">
              {{ day }}
          </td>
        </tr>
        <tr align='center'>
          <td v-for="day in tableLine5()" 
              v-bind:key="day">
              {{ day }}
          </td>
        </tr>
        <tr align='center'>
          <td v-for="day in tableLine6()" 
              v-bind:key="day">
              {{ day }}
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
      selectedYear: null,
      selectedmonth: null,
      selectedDate: null,
      now: new Date(2020, 5, 0),
      dates: null
    }
  },
  created(){
    const currentDates = [];
    const currentDayOfTheWeek = this.getCurrentDayOfTheWeek() //現在の曜日
    const dayOfEndOfTheMonth = this.getDayOfEndOfTheMonth(this.getFullYear, this.getMonth) //末の曜日
    const currentDate = this.getDates(this.getFullYear, this.getMonth) //今月の日数
    const begin = this.getBeginningOfTheMonthToEndOfTheMonth(this.getFullYear, this.getMonth, currentDayOfTheWeek) //前の余白
    const end = this.getEndOfTheMonthToBeginningOfTheMonth(this.getFullYear, this.getMonth, dayOfEndOfTheMonth) //後ろの余白
    for(let i = 1; i <= currentDate; i++){
      currentDates.push(i)
    }
    this.dates = begin.concat(currentDates).concat(end)
  },
  methods:{
    getDates: function(year, month){
      return new Date(year, month, 0).getDate()
    },
    getCurrentDayOfTheWeek: function(){
      return new Date().getDay()
    },
    getDayOfEndOfTheMonth: function(year, month){
      return new Date(year, month, 0).getDay()
    },
    getBeginningOfTheMonthToEndOfTheMonth: function(currentYear, currentMonth, currentDayOfTheWeek){
      const end = [];
      let endOfTheDate = new Date(currentYear, currentMonth-1, 0).getDate()
      for(let i=0; i < currentDayOfTheWeek; i++){
        end.push(endOfTheDate);
        endOfTheDate -= 1
      }
      end.sort(function(a,b){
        if( a < b ) return -1;
        if( a > b ) return 1;
        return 0;
      })
      return end
    },
    getEndOfTheMonthToBeginningOfTheMonth: function(currentYear, currentMonth, dayOfEndOfTheMonth){
      const begin = [];
      let beginOfTheDate = new Date(currentYear, currentMonth+1, 1).getDate()//1
      for(dayOfEndOfTheMonth+1; dayOfEndOfTheMonth < 6; dayOfEndOfTheMonth++){
        begin.push(beginOfTheDate)
        beginOfTheDate += 1
      }
      return begin
    },
    tableLine1: function(){
      return this.dates.slice(0, 7)
    },
    tableLine2: function(){
      return this.dates.slice(7, 14)
    },
    tableLine3: function(){
      return this.dates.slice(14, 21)
    },
    tableLine4: function(){
      return this.dates.slice(21, 28)
    },
    tableLine5: function(){
      return this.dates.slice(28, 35)
    },
    tableLine6: function(){
      return this.dates.slice(35, 42)
    }
  },
  computed: {
    getFullYear: function(){
      return this.now.getFullYear()
    },
    getMonth: function(){
      const monthArr = [1,2,3,4,5,6,7,8,9,10,11,12]
      const num = this.now.getMonth()
      return monthArr[num]
    },
    getDate: function(){
      return this.now.getDate()
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