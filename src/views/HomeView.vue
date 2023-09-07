<template>
    <div class="Home">
        <div ref="vantaRef" style="width: 100%; height: 100%"></div>
        <!-- <Search class="Search"/> -->
        <countDown class="countDown"/>
        <slideDiv/>
    </div>
</template>

<script>
import Search from '@/components/Search.vue';
import countDown from '@/components/countDown.vue';
import slideDiv from '@/components/slideDiv.vue'
import * as THREE from "three";
import FOG  from "vanta/src/vanta.birds";

    export default {
        components:{Search,countDown,slideDiv},
        mounted() {
            this.vantaEffect = FOG ({
                el: this.$refs.vantaRef,
                THREE: THREE,
            });
            // 修改颜色时 cells 需要全大写字母 可生效
            this.VANTA.FOG({
                el: this.$refs.vantaRef,
                /*以下为样式配置*/
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.0,
                minWidth: 200.0,
                highlightColor: 0xa577be,
                midtoneColor: 0xcd4841,
                lowlightColor: 0x473b6b,
                baseColor: 0xdfe3e1,
                blurFactor: 0.52,
                speed: 1.2,
                zoom: 0.3,
            });
        },
        beforeDestroy() {
            if (this.vantaEffect) {
            this.vantaEffect.destroy();
            }
        },

    }
</script>

<style scoped>
    .Home{
        position: relative;
        width: 100%;
        height: 100%;
        /* overflow: hidden;
        background-image: url('@/assets/背景.png');
        background-size: 100%; */
    }
    .Search{
        position: absolute;
        top: 21%;
        left: 1%;
    }
    .countDown{
        position: absolute;
        top: 13%;
        left: 35%;
    }
</style>