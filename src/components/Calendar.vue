<template>
  <div class="calendar">
    <div class="calendar-header">
      <p>May 2019</p>
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
          <td>26</td>
          <td>27</td>
          <td>28</td>
          <td>29</td>
          <td>30</td>
          <td>1</td>
          <td>2</td>
        </tr>
        <tr align='center'>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
        </tr>
        <tr align='center'>
          <td>10</td>
          <td>11</td>
          <td>12</td>
          <td>13</td>
          <td>14</td>
          <td>15</td>
          <td>16</td>
        </tr>
        <tr align='center'>
          <td>17</td>
          <td>18</td>
          <td>19</td>
          <td>20</td>
          <td>21</td>
          <td>22</td>
          <td>23</td>
        </tr>
        <tr align='center'>
          <td>24</td>
          <td>25</td>
          <td>26</td>
          <td>27</td>
          <td>28</td>
          <td>29</td>
          <td>30</td>
        </tr>
        <tr align='center'>
          <td>31</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data(){
    return {
      msg: 'hello calendar'
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