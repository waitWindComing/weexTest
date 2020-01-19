<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
    <text class="greeting" @click="jumpPage">Thisfdsfasdf is Index!</text>
  </div>
</template>



<script>
const navigator = weex.requireModule('navigator') 
const modal = weex.requireModule('modal')

//weexVC.instance?.fireGlobalEvent("globalE", params: ["key" : "this value"])
var globalEvent = weex.requireModule('globalEvent');
globalEvent.addEventListener('globalE', function(e) {
  console.log(e.key);
});

export default { 
  name: 'App',
  sevalue: '我就传个值怎么了',
  components: { 
    
  },
  data () {
    return { 
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  },
  mounted() {//挂载方法
    const receiveValue = new BroadcastChannel('channel1')
    receiveValue.onmessage = function (event) {
      modal.toast({message:event.data, duration: 0.5})
    }
  },
  created: function () {
    console.log("++" + weex.config.nativeKey)
  },
  methods: {
            jumpPage () {  
                console.log('push++')
                navigator.push({
                    url: 'http://10.0.24.133:8081/dist/indexpath.js',
                    animated: "true"
                });
            }
        }
}
</script>




<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
</style>
