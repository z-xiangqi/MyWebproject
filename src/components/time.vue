<template>
    <div>
        <div class="time" style="display: flex;margin-bottom: 10px;">
            <div style="margin-right: 30px;">{{ year }}年</div>
            <div style="margin-right: 10px;">{{ month }}月</div>
            <div>{{ date }}日</div>
        </div>
        <div class="time" style="display: flex; margin-left: 3px;letter-spacing: 1px;">
            <div style="margin-right: 32px;">{{ getLunarDay.lunarYear }}</div>
            <div>{{ getLunarDay.dateStr }}</div>
        </div>
    </div>
</template>

<script>
import { getLunar } from 'chinese-lunar-calendar'
export default {
  data() {
    return {
		getLunarDay: '',
		year: new Date().getFullYear(),
      	month: new Date().getMonth() + 1,
      	date: new Date().getDate()
    }
  },
  mounted() {
	// 获取农历
    this.getLunarDay = getLunar(this.year, this.month, this.date)
    const time = new Date().getFullYear()
    console.log('time',time);
    
  }
}
</script>
<style scoped>
.time{
    font-size: 25px;
    font-family: aimin;
    background-image: -webkit-linear-gradient(left, #147B96, #e68505 25%, #147B96 50%, #e68505 75%, #147B96);
	-webkit-text-fill-color: transparent;
	-webkit-background-clip: text;
	-webkit-background-size: 200% 100%;
}
</style>