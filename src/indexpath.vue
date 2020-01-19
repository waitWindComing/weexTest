<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
    <text class="message" @click="jumpPage">This is indexpath !</text>
    <person/>
  </div>
</template>





<script>
import person from '../src/components/person' 
import index from '../src/index'

const navigator = weex.requireModule('navigator')
const nativeModule = weex.requireModule("CRMNativeTool")
const modal = weex.requireModule('modal')

modal.toast({ message: index.sevalue, duration: 0.1 })

nativeModule.run('123')
nativeModule.getAndCallBack(rsp => {
  modal.toast({ message: rsp, duration: 0.2 }) 
})

const sendValue = new BroadcastChannel('channel1')
const key1 = "indexpath传过来的值 哈哈哈"
sendValue.postMessage(key1)

export default { 
  name: 'AppIndexpath',
  components: {
    person
  },
  data () {
    return {
      logo: "xcassets:test"
    }
  },
  methods: {
            jumpPage () { 
                console.log('push+1')
                navigator.push({
                    url: 'http://10.0.24.133:8081/dist/components/person.js',
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
  .message {
    margin: 30px;
    font-size: 50px;
    color: #c01212;
  }
</style>
