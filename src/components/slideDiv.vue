<template>
    <div>
        <div id="share" style="width: 30%;height: 80px;background-color: rgba(255, 0, 0, 0.5);" @mouseover="startMove(200,'contain',timer)" @mouseout="startMove(-100,'contain',timer)">
            <div id="contain" >
            </div>
        </div>
        <div id="share1" style="width: 30%;height: 80px;background-color: rgba(255, 0, 0, 0.5);" @mouseover="startMove1(200,'contain1',timer1)" @mouseout="startMove1(-100,'contain1',timer1)">
            <div id="contain1" >
            </div>
        </div>

    </div>
</template>

<script>
import {startMove,stopMove } from '@/assets/js/div'
    export default {
        data(){
            return{
                timer:null,
                timer1:null,
            }
        },
        mounted(){},
        methods:{
            startMove(iTarget,id ){
                clearInterval(this.timer);
                const oDiv = document.getElementById(id);
                this.timer = setInterval(() => {
                    const speed = (iTarget - oDiv.offsetLeft) / 8;
                    const roundedSpeed = speed < 0 ? Math.floor(speed) : Math.ceil(speed);
                    if (oDiv.offsetLeft === iTarget) {
                        clearInterval(this.timer);
                    } else {
                        oDiv.style.left = oDiv.offsetLeft + roundedSpeed + 'px';
                    }
                }, 30);
            },
            startMove1(iTarget,id ){
                clearInterval(this.timer1);
                const oDiv = document.getElementById(id);
                this.timer1 = setInterval(() => {
                    const speed = (iTarget - oDiv.offsetLeft) / 8;
                    const roundedSpeed = speed < 0 ? Math.floor(speed) : Math.ceil(speed);
                    if (oDiv.offsetLeft === iTarget) {
                        clearInterval(this.timer1);
                    } else {
                        oDiv.style.left = oDiv.offsetLeft + roundedSpeed + 'px';
                    }
                }, 30);
            },
            // mouseMove(iTarget, id){
            //     // 停止之前的计时器
            //     stopMove(this.timer);
            //     // 启动新的计时器
            //     this.timer = startMove(iTarget, id, this.timer);
            // },
            // mouseMove1(iTarget, id){
            //     // 停止之前的计时器
            //     stopMove(this.timer1);
            //     // 启动新的计时器
            //     this.timer1 = startMove(iTarget, id, this.timer1);
            // }
        },
            
        
    }
</script>

<style scoped>
    /* * {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-image: url('~@/assets/img/bg1.jpg');
        background-size: 100% 100%;
    } */
    #contain {
        width: 80px;
        height: 80px;
        position: relative;
        left: -400px;
        top: 0;
        background: pink;
    }
    #contain1{
        width: 80px;
        height: 80px;
        position: relative;
        left: -400px;
        top: 0;
        background: pink;
    }
    #share {
        width: 25px;
        height: 50px;
        position: absolute;
        left: 0px;
        top: 75px;
        background: lightgreen;
        text-align: center;
        line-height: 25px;
    }
    #share1{
        width: 25px;
        height: 50px;
        position: absolute;
        left: 0px;
        top: 475px;
        background: lightgreen;
        text-align: center;
        line-height: 25px;
    }
</style>