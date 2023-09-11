
<template>
    <div id="app" style="display: flex;">
        <transition name='fade'>
            <div class="box1" v-if="nav_show">
                <div class="title">博客存档区</div>
                <dv-decoration-9 style="width:100px;height:100px;margin-left: 50px; color: #ffff;">1%</dv-decoration-9>
            </div>
        </transition>
        <transition name='fade'>
            <div class="box2" v-if="nav_show">
                <div class="title">国风收藏集</div>
            </div>
        </transition>    
        <transition name='fade'>
            <div class="box3" v-if="nav_show">
                <div class="title">三国群雄志</div>
            </div>
        </transition>  
        <transition name='fade'>
            <div class="box4" v-if="nav_show">
                <div class="title">未来规划台</div>
            </div>
        </transition>
        <transition name='fade'>
            <div class="box5" v-if="nav_show">
                <div class="title">稀奇古怪所</div>
            </div>
        </transition>
        
    </div>
  </template>
  
  <script>
  export default {
    name:'app',
    data() {
      return {
          nav_show:false
      }
    },
    methods: {
        handleScroll() {
          // 页面滑动的距离
        let scrollTop = document.documentElement.scrollTop
        // 当页面滑动的距离大于300px时元素显示，否则不显示
        if (scrollTop >= 300) {
          this.nav_show = true
        } else {
          this.nav_show = false
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    // 组件销毁前
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll)
    }
  };
  </script>
  <style scoped>

    .box1 {
        position: relative;
        top: 20px;
        left: 14%;
        width: 200px;
        height: 200px;
        background-image: url('@/assets/image/进行中.jpg');
        background-size: 100% 100%;
    }
    .box2{
        position: relative;
        top: 20px;
        left: 19%;
        width: 200px;
        height: 200px;
        background-image: url('@/assets/image/敬请期待.jpg');
        background-size: 100% 100%;
    }
    .box3{
        position: relative;
        top: 20px;
        left: 24%;
        width: 200px;
        height: 200px;
        background-image: url('@/assets/image/敬请期待.jpg');
        background-size: 100% 100%;
    }
    .box4{
        position: relative;
        top: 20px;
        left: 29%;
        width: 200px;
        height: 200px;
        background-image: url('@/assets/image/敬请期待.jpg');
        background-size: 100% 100%;
    }
    .box5{
        position: relative;
        top: 20px;
        left: 34%;
        width: 200px;
        height: 200px;
        background-image: url('@/assets/image/敬请期待.jpg');
        background-size: 100% 100%;        
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 1.5s
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
    .title{
        font-size: 18px;
        font-family: zengguofan;
        color: #fff;
        margin-top: 220px;
    }
  </style>