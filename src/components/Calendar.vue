<template>
  <div class="wrapper">
    <div class="calendar">
      <div class="calendar-header">
        <font-awesome-icon
          icon="chevron-left"
          class="calendar-left-btn"
          @click="reduceMonth()"
        >
        </font-awesome-icon>
        <p>{{ numToStringMonth }} {{ this.year }}年</p>
        <font-awesome-icon
          icon="chevron-right"
          class="calendar-right-btn"
          @click="addMonth()"
        >
        </font-awesome-icon>
      </div>
      <table class="calendar-main">
        <thead class="calendar-head-row">
          <tr align="center">
            <th>S</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th>
            <th>F</th>
            <th>S</th>
          </tr>
        </thead>
        <tbody class="calendar-body">
          <tr align="center">
            <td
              v-for="(item, index) in tableLine1()"
              :id="item.dateId"
              :key="index"
              :style="{ color: item.color }"
              @click="appendModal($event)"
            >
              {{ item.date }}
            </td>
          </tr>
          <tr align="center">
            <td
              v-for="(item, index) in tableLine2()"
              :id="item.dateId"
              :key="index"
              :style="{ color: item.color }"
              @click="appendModal($event)"
            >
              {{ item.date }}
            </td>
          </tr>
          <tr align="center">
            <td
              v-for="(item, index) in tableLine3()"
              :id="item.dateId"
              :key="index"
              :style="{ color: item.color }"
              @click="appendModal($event)"
            >
              {{ item.date }}
            </td>
          </tr>
          <tr align="center">
            <td
              v-for="(item, index) in tableLine4()"
              :id="item.dateId"
              :key="index"
              :style="{ color: item.color }"
              @click="appendModal($event)"
            >
              {{ item.date }}
            </td>
          </tr>
          <tr align="center">
            <td
              v-for="(item, index) in tableLine5()"
              :id="item.dateId"
              :key="index"
              :style="{ color: item.color }"
              @click="appendModal($event)"
            >
              {{ item.date }}
            </td>
          </tr>
          <tr v-if="checkedTableLine()" align="center">
            <td
              v-for="(item, index) in tableLine6()"
              :id="item.dateId"
              :key="index"
              :style="{ color: item.color }"
              @click="appendModal($event)"
            >
              {{ item.date }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="modal-fade-layer" :style="{ visibility: fadeStyle }"></div>
    <calendar-modal
      :modal-display="modalDisplay"
      :date-id="dateId"
      :to-do="this.filterTodo"
      @closeModal="closeModal()"
      @addTodo="addTodo($event)"
    >
    </calendar-modal>
  </div>
</template>
<script>
import calendarModal from './CalendarModal'

export default {
  components: {
    'calendar-modal': calendarModal
  },
  data() {
    return {
      year: 0,
      month: 0,
      calendar: null,
      // モーダル関連のスタイルリアクティブデータ
      modalDisplay: 'hidden',
      fadeStyle: 'hidden',
      // モーダルに渡す日にち
      dateId: null,
      // 全TODOデータ
      todo: [],
      // モーダルにわたすTODOデータ
      filterTodo: []
    }
  },
  computed: {
    // 月のリアクティブデータはNumber型で持たせているのでそのNumber型を月の名前に変換
    numToStringMonth() {
      const monthArr = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
      return monthArr[this.month - 1]
    }
  },
  watch: {
    // 月のりアクティブデータの変更をフックしてカレンダーを再描画する
    month() {
      this.createCalendar()
    },
    todo(newv) {
      this.filterTodo = this.todo.filter((el) => {
        return el.date === newv[newv.length - 1].date
      })
    }
  },
  created() {
    this.year = this.getCurrentFullYear()
    this.month = this.getCurrentMonth()
    this.createCalendar()
  },
  methods: {
    // カレンダーを描画する関数
    createCalendar() {
      // 描画する日付を配列をこの変数に返す。一旦Nullで初期化
      this.calendar = null
      // 現在の月の日付全件取得
      const currentMonthDates = this.getCurrentMonthDates()
      // 現在の月の前の余白の日付を配列で返す
      const previousRemainderDates = this.getPreviousRemainder()
      // 現在の月の後ろの余白の日付を配列で返す
      const lastRemainderDates = this.getLastRemainder(
        currentMonthDates.concat(previousRemainderDates)
      )
      // 描画する日付の配列をマージして返す
      this.calendar = previousRemainderDates
        .concat(currentMonthDates)
        .concat(lastRemainderDates)
    },
    getCurrentFullYear() {
      return new Date().getFullYear()
    },
    getCurrentMonth() {
      return new Date().getMonth() + 1
    },
    getCurrentMonthDates() {
      const dates = []
      // 現在の月の日数を取得
      const currentMonthLastDate = new Date(this.year, this.month, 0).getDate()
      // 現在の月の日数分インクリメントすることで現在の月の日付を全件配列として返す
      for (let i = 1; i <= currentMonthLastDate; i++) {
        dates.push({
          dateId: `${this.year}-${this.month}-${i}`,
          date: i,
          color: '#000'
        })
      }
      return dates
    },
    getPreviousRemainder() {
      const dates = []
      // 現在の月初めの日付の曜日位置を取得
      const firstDayOfCurrentMonth = new Date(
        this.year,
        this.month - 1,
        1
      ).getDay()
      // 先月末の日付を取得して月初めの日付の曜日位置分ズラスことで前の余白分の日付の最初の部分を取得
      let endOflastMonth =
        new Date(this.year, this.month - 1, 0).getDate() -
        firstDayOfCurrentMonth +
        1
      // 先月末の日付から曜日位置分取得することで前の余白で描画する先月分の日付を取得して配列で返す
      for (let i = 0; i < firstDayOfCurrentMonth; i++) {
        dates.push({
          dateId: `${this.year}-${this.month - 1}-${endOflastMonth}`,
          date: endOflastMonth,
          color: '#e8f3ed'
        })
        endOflastMonth += 1
      }
      return dates
    },
    getLastRemainder(arr) {
      // カレンダーは最大縦横6*7なので42からgetCurrentMonthDatesとgetPreviousRemainderで取得した前の余白と
      // 現在の月の日にちをマージした配列の要素分から差し引く事で6行目で描画する来月分の余白を埋める日付を配列で返す事ができる
      const dates = []
      const count = 42 - arr.length + 1
      for (let i = 1; i < count; i++) {
        dates.push({
          dateId: `${this.year}-${this.month + 1}-${i}`,
          date: i,
          color: '#e8f3ed'
        })
      }
      return dates
    },
    tableLine1() {
      return this.calendar.slice(0, 7)
    },
    tableLine2() {
      return this.calendar.slice(7, 14)
    },
    tableLine3() {
      return this.calendar.slice(14, 21)
    },
    tableLine4() {
      return this.calendar.slice(21, 28)
    },
    tableLine5() {
      return this.calendar.slice(28, 35)
    },
    tableLine6() {
      return this.calendar.slice(35, 42)
    },
    // 月の末尾が6行目に含まれるかどうか
    checkedTableLine() {
      let bool
      const currentMonthLastDate = new Date(this.year, this.month, 0).getDate()
      this.tableLine6().forEach(function(el) {
        if (el.date === currentMonthLastDate) {
          bool = true
        }
      })
      return bool
    },
    addMonth() {
      // クリックしてリアクティブデータを更新する時に12月まで行ったら1月に再度戻るようにする
      // その際に年度も+1更新
      const monthArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      if (monthArr[this.month - 1] === 12) {
        this.month = monthArr[0]
        this.year += 1
      } else {
        this.month = monthArr[this.month - 1] + 1
      }
    },
    reduceMonth() {
      // 逆に1月まで戻ったら12月に戻るようにする
      // その際に年度も-1更新
      const monthArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      if (monthArr[this.month - 1] === 1) {
        this.month = monthArr[11]
        this.year -= 1
      } else {
        this.month = monthArr[this.month - 1] - 1
      }
    },
    appendModal(event) {
      this.modalDisplay = 'visible'
      this.fadeStyle = 'visible'
      this.dateId = event.target.id
      this.filterTodo = this.todo.filter((el) => {
        return el.date === event.target.id
      })
    },
    closeModal() {
      this.modalDisplay = 'hidden'
      this.fadeStyle = 'hidden'
      // 閉じる時に初期化
      this.filterTodo = []
    },
    addTodo($event) {
      this.todo.push($event)
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  width: auto;
  height: 100%;
  position: relative;
  background-image: url('/public/background-image.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
th,
td {
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

.calendar {
  width: 50%;
  height: 70%;
  margin: 0 auto;
  background-color: white;
  box-shadow: 1px 1px 1px 1px rgba(211, 206, 206, 0.4);
  position: relative;
  top: 10%;
  border-radius: 1px;
}

.calendar-header {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.calendar-header p {
  margin-top: 7%;
  margin-left: 6%;
  margin-right: 6%;
}

.calendar-left-btn {
  display: block;
  margin-top: 9%;
  width: 2%;
  height: 2%;
  cursor: pointer;
}

.calendar-right-btn {
  display: block;
  margin-top: 9%;
  width: 2%;
  height: 2%;
  cursor: pointer;
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

.modal-fade-layer {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.5;
  z-index: 0.5;
}
</style>
