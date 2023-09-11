<!-- 向下箭头 -->
<template>
    <div>
        <dv-decoration-3 style="width:250px;height:30px;" />
        <div style="display: flex;">
            <div class="line"></div>
            <div class="arrowSS">
                <img class="arrowSS_style" src="@/assets/image/向下箭头@2x.svg">
            </div>
            <div class="line1"></div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .line{
        height: 2px;
        width: 35%;
        margin-right: 50px;
        background: url('http://marsgis.cn/img/index/xian-left.png');
        background-size: 130% 2px;   
    }
    .line1{
        height: 2px;
        width: 35%;
        margin-left: 50px;
        background: url('http://marsgis.cn/img/index/xian-right.png');
        background-size: 130% 2px;
    }
    /* 包裹箭头效果的盒子 */
    .arrowSS {
      animation: bounce-inSS 2s infinite; /* 启动动画特效 */
    }

    /* 箭头效果的盒子 */
    .arrowSS_style {
      display: block;
      margin: 0 auto;
      width: 60px;
      height: 60px;
      /* border-right: 3px solid #6ba6c0;
      border-top: 3px solid #6ba6c0;
      -webkit-transform: rotate(135deg); 
      transform: rotate(135deg); */
      cursor: pointer;
    }
    /* 箭头动画 */
    @keyframes bounce-inSS {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }

      40% {
        transform: translateY(-30px);
      }

      60% {
        transform: translateY(-15px);
      }
    }

</style>