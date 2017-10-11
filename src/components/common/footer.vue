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
  export default {
    
  }
</script>

<style lang="scss">
  @import '../../style/px2rem.scss';
  //designWidth 设计图宽度
  $designWidth : 640; 

  footer {
    position: fixed;
    bottom: 0;
    width: 16rem;
    height: px2rem(210);
  }

  .record-box{
    height: px2rem(118);
    margin: px2rem(34) px2rem(59) px2rem(58);
    text-align: center;
    position: relative;
    z-index: 9999;
    .self,.tts_play{
      position: absolute;
      top: 50%;
      margin-top: - px2rem(86/2);
    }
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
    margin: 0 auto;
    display: inline-block;
    .recordIcon {
        background: url(../../images/recordIcon.png) no-repeat;
        width: px2rem(60);
        height: px2rem(60);
        background-size: cover;
        position: absolute;
        margin: px2rem(29) 0 0 px2rem(25.5);
    }
    .waitIcon {
      background-position-x: - px2rem(55);
      animation: waiting 3s infinite linear;
    }
  }

  .self {
    @extend .small_icon;
    background: url(../../images/self_play.png) no-repeat;
    background-size: cover;
    right: 0;
  }

  @keyframes waiting {
    form {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes waiting {
    form {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }

</style>
