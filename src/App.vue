<template>
  <div id="app">
    <router-view></router-view>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import axios from 'axios'
import wx from 'weixin-js-sdk'
import FooterNav from './components/common/footer.vue'
export default {
  name: 'app',
  components: {
    FooterNav
  },
  mounted() {
//    axios.get('/api/wechat/jsconfig', {
//        params: {
//          url: window.location.href.split('#')[0]
//        }
//      })
//      .then((response) => {
//        wx.config(response.data)
//
//        wx.ready(()=>{
//
//        })
//      })
//      .catch(function (err) {
//        console.log('err:' + err)
//      })
  }
}
</script>

<style lang="scss">
  @import 'style/px2rem.scss';
  @import 'style/common.scss';
  #app{
    max-width: px2rem(640); 
    min-width: px2rem(320); 
    width: 100%; 
    height: 100%; 
    margin: 0 auto; 
  }
</style>
