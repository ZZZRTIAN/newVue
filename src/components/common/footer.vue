<template>
  <footer>
    <div class="record-box">
      <!-- <p class="cancel">上滑取消</p> -->
      <v-touch 
        v-on:tap="shortTouch('tts')"
        v-on:press="touch('tts')"
        v-on:pressup="touchEnd('tts')" 
        v-bind:class="{ 'touch':toTouch === 'tts','playing':Play === 'tts'}"
        class="small_icon tts_play"></v-touch>
      <v-touch 
        v-on:tap="shortTouch('wx')"
        v-on:press="touch('wx')"
        v-on:pressup="touchEnd('wx')" 
        v-bind:class="{ 'touch':toTouch === 'wx','playing':Play === 'wx'}"
      class="small_icon self"></v-touch>
      <v-touch class="record">
        <div class="recordIcon"></div>
      </v-touch>
    </div>
    <div class="vwave">
      <div class="waveWrapperInner wave1"></div>
      <div class="waveWrapperInner wave2"></div>
      <div class="waveWrapperInner wave3"></div>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        toTouch: '',
        Play: '',
        hasTouch: false
      }
    },
    methods:{
      test() {
        
      },
      shortTouch(target){
        if(this.hasTouch) return ''

        this.hasTouch = true
        this.toTouch = target
        // this.touch()

        this.toPlay(target)
      },
      touch(target){
        if(this.hasTouch) return ''

        this.hasTouch = true
        this.toTouch = target
      },
      touchEnd(target){
        this.toPlay(target)
      },
      toPlay(target){
        setTimeout(() => {
          this.toTouch = ''
          this.Play = target
        },500)
        
        setTimeout(() => {
          this.Play = ''
          this.hasTouch = false
        },2000)
      }
    }
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

  .vwave {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
    left: 0;

    .waveWrapperInner {
      position: absolute;
      left: 0;
      width: 200%;
      height: 100%;
      background-repeat: repeat no-repeat;
      background-position: 0 bottom;
      transform-origin: center bottom;
      -webkit-transform-origin: center bottom;
      background-image: url(../../images/wave.png);
      background-size: 50% 66%;
      animation: move_wave 3s linear infinite;
    }
    .wave1 {
      opacity: .2;
              animation-delay: -0.8s; 
      -webkit-animation-delay: -0.8s; 
    }
    .wave2 {
      opacity: .4;
              animation-delay: -1.6s;
      -webkit-animation-delay: -1.6s;  
    }
    .wave2 {
      opacity: .6;
              animation-delay: -2.4s;
      -webkit-animation-delay: -2.4s;  
    }
  }

  .touch {
    background-position-y: 3px;
  }
  .playing{
    background-position: - px2rem(85) 2px;
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

  @keyframes move_wave {
    0% {
      transform: translateX(0) translateZ(0) scaleY(1);
    }
    50% {
      transform: translateX(-25%) translateZ(0) scaleY(0.55);
    }
    100% {
      transform: translateX(-50%) translateZ(0) scaleY(1);
    }
  }
  @-webkit-keyframes move_wave {
    0% {
      transform: translateX(0) translateZ(0) scaleY(1);
    }
    50% {
      transform: translateX(-25%) translateZ(0) scaleY(0.55);
    }
    100% {
      transform: translateX(-50%) translateZ(0) scaleY(1);
    }
  }

</style>
