<template>
    <el-card class="box-card" shadow="never">
        <div class="todoTitle">
                <img src="@/assets/image/weather.png" style="height: 20px;width:20px"/>
        </div>   
        <div style="background-color: rgba(0,0,0,0);">
            <div style="display: flex;justify-content: space-evenly;padding-top: 4px;background-color: rgba(0,0,0,0);">
                <div id="he-plugin-standard"></div>
            </div>
        </div>
    </el-card>
</template>

<script>

export default {
    name:'weather',
    components: {
    },
    data(){
        return{
            week:''
        }
    },
    created(){
        window.WIDGET = {
            "CONFIG": {
                "layout": "1",
                "width": "450",
                "height": "161",
                "background": "4",
                "dataColor": "000000",
                "backgroundColor": "FFFFFF",
                "language": "zh",
                "borderRadius": "0",
                "key": "466206aafc5d4f0399e31126a7316941"
            }
        };
        (function (d) {
        var c = d.createElement('link')
        c.rel = 'stylesheet'
        c.href = 'https://widget.qweather.net/standard/static/css/he-standard.css?v=2.0'
        var s = d.createElement('script')
        s.src = 'https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0'
        var sn = d.getElementsByTagName('script')[0]
        sn.parentNode.insertBefore(c, sn)
        sn.parentNode.insertBefore(s, sn)
        s.onload=()=>{
            // //自动宽度
            // setTimeout(() => {
            //     document.getElementById("he-plugin-standard").style.width  = "100%";
            // }, 100);
        }
        })(document)
    },
    mounted(){

    },
    methods: {
        getWeek(day){
            //获取当前时间,day为number，
            let myDate = new Date()  
            var targetday_milliseconds = myDate.getTime() + 1000 * 60 * 60 * 24 * day;
            myDate.setTime(targetday_milliseconds);
            let wk = myDate.getDay()  
            let yy = String(myDate.getFullYear())  
            let mm = myDate.getMonth() + 1  
            let dd = String(myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate())  
            let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
            let week = weeks[wk]  
            let nowDate = yy + '-' + mm + '-' + dd  
            let nowWeek = week
            return nowWeek
        },
    }
}
</script>
<style scoped>
.box-card{
    margin-top: 8px;
    border: none;
    background-color: rgba(0,0,0,0);
}
.todoTitle{
    display: flex;
}
.weekStyle{
    position:absolute;
    top: 80px;
    text-align: right;
    display: flex;
    z-index: 999;
}
::v-deep .wv-n-h-row{
    background-color: rgba(0,0,0,0);
}
::v-deep .wv-lt-location>span {
    font-size: 2em;
}
::v-deep #he-plugin-standard{
    background-color: rgba(0,0,0,0);
}
::v-deep .wv-lt-location>a{
    font-size: 1em;
    color: #3c80c5 !important;
    border: 1px solid #3c80c5;
    text-decoration:none;
    border-radius: 8px;
    padding: 0 4px;
    margin-top: 4px;
    visibility:hidden;
}
::v-deep .wv-n-h-now-tmp{
    font-size: 3em;
    position: relative;
    padding-top: 0.1em;
}
::v-deep .wv-n-h-now-aqi-item{
    padding-right: 10px;
}
/* 隐藏a标签 */
::v-deep .wv-lt-refresh a{
    visibility:hidden;
}
::v-deep .wv-f-forecast-img>a>img {
    display: table-row;
    margin: auto;
    width: 3.1em;
}
</style>