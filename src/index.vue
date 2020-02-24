<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
    <text class="greeting" @click="jumpPage">Thisfdsfasdf is Index!</text>
        <text ref="address">{{content}}</text>
        <list class="list" @click="onSelected(item,index)">
            <cell class="cell" v-for="item in lists">
             <div class="panel">
              <text class="text">{{item}}</text>
           </div>
          </cell>
        </list>


        <button class="search" @click="doSearch" style="backgroundColor:blue; width:300px; height:80px; font-size: 50px">搜索</button>
        <div style="align-items: center">
             <eeui-amap style="width:750px;height:800px"
              :sdkKey="{ios:'ecfdeb313708c7091b0d474471173c05'}"
              :center="point.position"
              :zoom="15" ref="crmMap" @showSearchResult="searchResult" @showNearPOIResult="nearPOIResult" >
            <eeui-amap-marker :position="point.position" :title="point.title"></eeui-amap-marker>
            </eeui-amap>   
        </div>

  </div>
</template>



<script>
const navigator = weex.requireModule('navigator') 
const modal = weex.requireModule('modal')
const amap = weex.requireModule('eeui-amap')

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
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
      point: {
                    position: [116.397721,39.904058],
                    title: 'This is a marker'
                },
      lists: [],
      content: "我是变量--"
    }
  },
  mounted() {//挂载方法
    const receiveValue = new BroadcastChannel('channel1')
    receiveValue.onmessage = function (event) {
      // modal.toast({message:event.data, duration: 0.5})
    }
  },
  created: function () {
    console.log("++" + weex.config.nativeKey)
  },
  methods: {
            jumpPage () {  
                console.log('push++')
                navigator.push({
                    url: 'http://192.168.0.100:8081/dist/indexpath.js',
                    animated: "true"
                });
            },
            doSearch() {
              this.$refs.crmMap.searchInfo("北京动物园")
            },
            searchResult(e) {
              modal.toast({ message: e.result, duration: 0.2 });
              this.content = e.result
            },
            nearPOIResult(e) {
              // modal.toast({ message: JSON.strinagify(e), duration: 0.2 });
              e.result.forEach(item => {
                this.lists.push(item)
              }); 
            },
      "onSelected":function(item,index){
        console.log('===' + index)
         this.$refs.crmMap.selectAnnotationInfo(3)
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
  .cell {
    text-align: center;
    margin-top: 70px;
    font-size: 30px;
    color: #41B883;
  }
</style>
