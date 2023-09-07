<template>
    <div class="out" id="out">
			<div class="bj" id="background_image">
			</div>
			<div class="content">
				<div class="content_top"></div>
				<div class="content_center">2024</div>
				<div class="content_bottom" id="time">
					<div class="content_bottom_day" >
						<div class="content_bottom_day_top" id="timeDay"></div>
						<div class="content_bottom_day_bottom">天</div>
					</div>
					<div class="content_bottom_day" >
						<div class="content_bottom_day_top" id="timeHour"></div>
						<div class="content_bottom_day_bottom">时</div>
					</div>
					<div class="content_bottom_day" >
						<div class="content_bottom_day_top" id="timeMin"></div>
						<div class="content_bottom_day_bottom">分</div>
					</div>
					<div class="content_bottom_day" >
						<div class="content_bottom_day_top" id="timeSec"></div>
						<div class="content_bottom_day_bottom">秒</div>
					</div>
					
				</div>
			</div>
		</div>
</template>

<script>
import "@/assets/css/countdown.css"
import $ from 'jquery'
    export default {
        data(){
            return{}
        },
        mounted(){
            this.initializeCountdown()
        },
        methods:{
            initializeCountdown(){
                $(function(){
                    
                    // 倒计时
                    var iRemain=""; // 开始和结束之间相差得毫秒数
                    var sDate = ""; // 倒计得天数
                    var sHour = "";
                    var sMin = "";
                    var sSec = "";
                    var sMsec = "";
                    // 补零 在个位补零 n决定补几个0
                    function setDig(num,n){
                        var str = ""+num; // 将数字转化为字符串
                        while(str.length<n){
                            str = "0"+str;
                        }
                        return str;
                    }
                    // 获取相差得天，小时，分钟，秒
                    function getDate(){
                        // 创建开始时间和结束时间得日期对象
                        var oStarDate = new Date();
                        var oEndDate = new Date();
                        // 设置结束时间
                        oEndDate.setFullYear(2024);
                        oEndDate.setMonth(1);// 月份为0-11 
                        oEndDate.setDate(1);
                        oEndDate.setHours(0);
                        oEndDate.setMinutes(0);
                        oEndDate.setSeconds(0);
                        // 求出开始和结束时间的秒数（除以1000）
                        iRemain = (oEndDate.getTime()-oStarDate.getTime())/1000;
                        // 总的秒数 除以一天得秒数，再取出整数部分，就得出 有多少天
                        sDate = setDig(parseInt(iRemain/(60*60*24)),2);
                        // 总的秒数/一天的秒数 取秒数 ，就是把整数天 扣除之后，剩的总秒数
                        iRemain %= 60*60*24 // iremain = iremain%60*60*24
                        // 剩下的总秒数 / 一个小时的秒数，再取整数部分，就是有多少小时
                        sHour = setDig(parseInt(iRemain/(60*60)),2);
                        // 剩下的总秒数 / 一个小时的秒数， 再取余数，就是扣除小时以后 剩下的总秒数
                        iRemain %= 60*60;
                        // 剩下的总秒数 / 一分钟的秒数， 取整数部分 就是有多少分钟
                        sMin = setDig(parseInt(iRemain/60),2);
                        // 剩下的 总秒数 / 一分钟的秒数 ，再取余数，就是扣除分钟之后，剩下的总秒数
                        iRemain %= 60;
                        // 剩下的秒数
                        sSec = setDig(iRemain,2);
                        // 剩下的毫秒数
                        sMsec = sSec *100;
                    }
                    // 更改显示的时间
                    function updateTimeShow(){
                        $("#timeDay").text(sDate);
                        $("#timeHour").text(sHour);
                        $("#timeMin").text(sMin);
                        $("#timeSec").text(sSec);
                    }
                    // 每一秒执行一次时间更新
                    function autoTime(){
                        getDate();
                        // console.log(sDate,sHour,sMin,sSec);
                        // 如果小于0， 清楚调用自己，并且返回
                        if(iRemain<0){
                            clearInterval(setT);
                            return;
                        }
                        updateTimeShow();
                        var setT = setInterval(autoTime,1000);
                    }
                    autoTime();
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>