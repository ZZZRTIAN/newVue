<template>
  <footer>
    <div>
      <div class="record-box">
        <div class="tts_play"></div>
        <div class="self"></div>
        <div class="record">
          <div class="recordIcon"></div>
        </div>
        <p class="cancel">上滑取消</p>
      </div>
      <div class="vwave">
        <div class="waveWrapperInner waveTop"></div>
        <div class="waveWrapperInner waveMid"></div>
      </div>
    </div>
  </footer>
</template>

<script>
  
</script>

<style lang="scss">
  @import '../../style/px2rem.scss';
  $designWidth : 640; //写scss之前，必须要先定义designWidth。
  
  footer{
    position: fixed;
    bottom: 0;
    max-width: 16rem;
    min-width: 8rem;
    height: px2rem(210);
    width: 100%;
    margin: 0 auto;
  }
</style>
