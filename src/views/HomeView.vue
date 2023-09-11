<template>
    <div class="Home">
        <div class="box">
            <div class="banner">
                <h1>云边有个小卖部</h1>
                <h6>
                    &ensp;&ensp;&ensp;&ensp;&ensp;YUN
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;BIAN
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;YOU
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;GE
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;XIAO
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;MAI
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;BU
                </h6>
            </div>
        </div>
        <div ref="vantaRef" style="width: 100%; height: 65%"></div>
        <!-- <Search class="Search"/> -->
        <CountDown class="countDown"/>
        <!-- <Weather class="weather"/> -->
        <Time class="time"/>
        <downArrow class="downArrow"/>
        <Page/>
    </div>
</template>

<script>
import Search from '@/components/Search.vue';
import CountDown from '@/components/countDown.vue';
import * as THREE from "three";
import CLOUDS from "vanta/src/vanta.clouds";
import Weather from '@/components/weather.vue';
import Page from '@/components/page.vue';
import Time from '@/components/time.vue';
import downArrow from '@/components/downArrow.vue';

    export default {
        components:{Search,CountDown,Weather,Page,Time,downArrow},
        data(){
            return{
                show:true
            }
        },
        mounted() {
            this.vantaEffect = CLOUDS({
                el: this.$refs.vantaRef,
                THREE: THREE,
            })
            this.VANTA.CLOUDS({
                el: this.$refs.vantaRef,
                /*以下为样式配置*/
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.0,
                minWidth: 200.0,
                skyColor: 0x26b9f2,
                cloudColor: 0xb7c9e8,
                cloudShadowColor: 0x2f3a48,
                sunColor: 0x5c452f,
                sunGlareColor: 0xd4a798,
                sunlightColor: 0xdc9c59,
                speed: 1.2,
            })
        },
        beforeDestroy() {
            if (this.vantaEffect) {
                this.vantaEffect.destroy();
            }
        },
        methods:{
            
        }


    }
</script>

<style scoped>
    .Home{
        position: relative;
        width: 100%;
        height: 100%;
    }
    .banner {
        z-index: 999;
        position: absolute;
        top: 150px;
        left: 35.5%;
        color: #fff;
        font-family: aimin;
        background-image: -webkit-linear-gradient(left, #E6D205, #147B96 25%, #E6D205 50%, #147B96 75%, #E6D205);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-background-size: 200% 100%;
    }
    .box {
        position: relative;
    }
    h6{
        text-align: left;
    }
    h1 {
        font-size: 76px;
    }
    
    .countDown{
        position: absolute;
        top: 18%;
        left: 35%;
    }
    .weather{
        position: absolute;
        z-index: 999;
        top: 20px;
        left: 40px;
    }

    .time{
        position: absolute;
        top: 53%;
        left: 44%;
    }
    .downArrow{
        margin-top: 80px;
        margin-left: 17%;
    }
</style>