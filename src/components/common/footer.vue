<template>
  <footer>
    <div class="record-box">
      <!-- <p class="cancel">上滑取消</p> -->
      <div class="small_icon tts_play"></div>
      <div class="small_icon self"></div>
      <div class="record">
        <div class="recordIcon"></div>
      </div>
    </div>
    <div class="vwave">
      <div class="waveWrapperInner waveTop"></div>
      <div class="waveWrapperInner waveMid"></div>
    </div>
  </footer>
</template>

<script>
  
</script>

<style lang="scss">
  @import '../../style/px2rem.scss';
  $designWidth : 750; //写scss之前，必须要先定义designWidth。

  footer {
    position: fixed;
    bottom: 0;
    max-width: 16rem;
    min-width: 8rem;
    height: px2rem(210);
    background-color: rebeccapurple
  }

  .record-box{
    height: px2rem(118);
    width: 100%;
    position: relative;
    z-index: 9999;
    text-align: center;
  }

  .small_icon {
    border-radius: 50%;
    height: px2rem(86);
    width: px2rem(82);
  }

  .tts_play {
    @extend .small_icon;
    background: url(../../images/tts_play.png) no-repeat;
    background-size: cover;
  }
  
  .record {
    background: url(../../images/record.png) no-repeat;
    border-radius: 50%;
    background-size: cover;
    width: px2rem(111);
    height: px2rem(118);
  }

  .self {
    @extend .small_icon;
    background: url(../../images/self_play.png) no-repeat;
    background-size: cover;
  }
</style>
