<template>
    <div class="home">
          <div class="home-head">
              <div class="home-head-fl">
                  <label for="male">送至：</label><span id="male">昌平区</span><i class="icon iconfont icon-right"></i>
              </div>
              <div class="home-head-fr">
                  <i class="icon iconfont icon-sousuo"></i>
              </div>
          </div>
          <div class="home-content">
              <ul class="list">
                  <li @click="toggle(index ,tab.view)" v-for="(tab,index) in tabs" :class="{active:active==index}">
                  {{tab.type}}
                  </li>
              </ul>
              <component :is="currentView"></component>
          </div>
    </div>
</template>
<script>
import Qqjx from "../qqjx";
import Ddcs from "../ddcs";
export default{
    data(){
        return {
          active: 0,
          currentView: Ddcs,
          tabs: [
          {
          type: '多点超市',
          view: Ddcs
          },
          {
          type: '全球精选',
          view: Qqjx
          }
          ]
        }
    },
     methods: {
     toggle(i, v){
     this.active = i
     this.currentView = v
     }
     }
}
</script>
<style scoped>
.home-head{height:0.44rem;display: flex;align-items:center;justify-content:space-between;padding:0 0.2rem;background-color: white;}
.home-head .home-head-fr i{font-size:0.25rem}
.home-head .home-head-fl i{font-size:0.14rem}
.active{color:red}
.list{display: flex;align-items:center;height:0.4rem;background-color: white;}
.list li {margin:0 0.1rem}
</style>
