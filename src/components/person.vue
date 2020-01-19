<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
    <text class="message" @click="jumpPage">This is person {{content}}!</text>
    <crmMap ref="crmM" style="width:300px;height:300px" showTraffic="true" @mapLoaded="onMapLoaded"></crmMap>
  </div>
</template>





<script>
const navigator = weex.requireModule('navigator')
const modal = weex.requireModule('modal')

export default { 
  name: 'App',
  components: {
    // HelloWorld
    
  },
  data () {
    return {
      content: "我是变量--",
      logo: "xcassets:test"
    }
  },
  
  methods: {
            jumpPage() { 
                console.log('push+2')
                navigator.push({
                    url: 'http://10.0.24.133:8081/dist/components/person.js',
                    animated: "true"
                });
            }, 
            onMapLoaded(e) {
                // modal.toast({ message: JSON.stringify(e), duration: 0.2 });
                // this.$refs.crmM.focus()  
            },
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
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
