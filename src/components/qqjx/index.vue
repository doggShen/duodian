<template>
      <div class="home-con" @click="tot">
            <v-swper></v-swper>
            <img :src="list1" style="width:100%;">
            <div class="list-box">
                  <ul>
                        <li v-for="item in boxlist1">
                              <a :href="item.resource">
                                    <img v-lazy="item.imageUrl">
                                    <p>{{ item.remark }}</p>
                              </a>
                        </li>
                  </ul>
                  <ul>
                        <li v-for="item in boxlist2">
                              <a :href="item.resource">
                                    <img v-lazy="item.imageUrl">
                                    <p>{{ item.remark }}</p>
                              </a>
                        </li>
                  </ul>
            </div>
      
            <div class="weekend_img_one">
                  <!--<img :src="zhoumo" />-->
            </div>
            <div class="jianhuo">
                  <img src="https://img.dmallcdn.com/mIndex/201707/bfd95907-c8b0-4525-b874-0352f6d5ef18_480x480H" />
                  <img class="jianhuo_right" src="https://img.dmallcdn.com/mIndex/201707/3652381f-3bf8-4f91-a56a-a77294caf3f0_480x480H" />
                  <div class="weekend_img_two">
                        <img src="https://img.dmallcdn.com/mIndex/201707/480e9ace-14c0-482c-a1e8-537b95899f42_480x480H" />
                        <img src="https://img.dmallcdn.com/mIndex/201707/dd551135-82eb-4157-8d52-2528310a6fe3_480x480H" />
                  </div>
            </div>
      
            <div class="jxhc">
                  <img src="https://img.dmallcdn.com/mIndex/201707/d1535386-9296-4234-8f96-b5f50e6da3bf_750H" />
            </div>
      
            <div class="nine_img">
                  <img v-for="item in jianhuo" :src="item.imageUrl" />
            </div>
      
            <div class="jxhc">
                  <img :src="danpin" />
            </div>
      
            <ul class="sixImg">
      
                  <li v-for="item in siximg">
                        <div class="sixImg_img">
                              <img v-lazy="item.imageUrl" />
                              <img src="https://img.dmallcdn.com/cornerMarkV3/11/1_360x360H" v-if="item.data.promotionList.length>1 || item.data.promotionDisplayLable=='买1赠1'" style="position:absolute; z-index:10;left:0;top:0;" />
                        </div>
                        <div class="sixImg_youh">
                              <span v-if="item.data.promotionDisplayLable=='特价'">特价</span>
                              <span v-if="item.data.promotionList.length>1 || item.data.promotionDisplayLable=='买1赠1'">买1赠1</span>
                        </div>
                        <div class="sixImg_goods_name">
                              {{ item.data.name }}
                        </div>
                        <div class="sixImg_goods_money">
                              <span>￥{{(item.data.price/100).toFixed(2)}}</span>
                              <br>
                              <span>￥{{(item.data.promotionPrice/100).toFixed(2)}}</span>
                        </div>
                        <p @click="add(item)">+<ball></ball></p>
      
                  </li>
      
            </ul>
      
            <div class="ul_common">
                  <div class="ul_common_head" v-for="item in twoimg">
                        <img v-lazy="item.imageUrl">
                  </div>
      
                  <ul class="sixImg">
                        <li v-for="item in nineimg">
                              <div class="sixImg_img">
                                    <img :src="item.imageUrl" />
                                    <img src="https://img.dmallcdn.com/cornerMarkV3/11/1_360x360H" v-if="item.data.promotionList.length>1 || item.data.promotionDisplayLable=='买1赠1'" style="position:absolute; z-index:10;left:0;top:0;" />
                              </div>
                              <div class="sixImg_youh">
                                    <span v-if="item.data.promotionDisplayLable=='特价'">特价</span>
                                    <span v-if="item.data.promotionList.length>1 || item.data.promotionDisplayLable=='买1赠1'">买1赠1</span>
                              </div>
                              <div class="sixImg_goods_name">
                                    {{ item.data.name }}
                              </div>
                              <div class="sixImg_goods_money">
                                    <span>￥{{(item.data.price/100).toFixed(2)}}</span>
                                    <br>
                                    <span>￥{{(item.data.promotionPrice/100).toFixed(2)}}</span>
                              </div>
                              <p @click="add(item)">+<ball></ball></p>
      
                        </li>
      
                  </ul>
            </div>
            
            <div class="ul_common">
                  <div class="ul_common_head" v-for="item in twoimg1">
                        <img v-lazy="item.imageUrl">
                  </div>
      
                  <ul class="sixImg">
                        <li v-for="item in nineimg1">
                              <div class="sixImg_img">
                                    <img v-lazy="item.imageUrl" />
                                    <img src="https://img.dmallcdn.com/cornerMarkV3/11/1_360x360H" v-if="item.data.promotionList.length>1 || item.data.promotionDisplayLable=='买1赠1'" style="position:absolute; z-index:10;left:0;top:0;" />
                              </div>
                              <div class="sixImg_youh">
                                    <span v-if="item.data.promotionDisplayLable=='特价'">特价</span>
                                    <span v-if="item.data.promotionList.length>1 || item.data.promotionDisplayLable=='买1赠1'">买1赠1</span>
                              </div>
                              <div class="sixImg_goods_name">
                                    {{ item.data.name }}
                              </div>
                              <div class="sixImg_goods_money">
                                    <span>￥{{(item.data.price/100).toFixed(2)}}</span>
                                    <br>
                                    <span>￥{{(item.data.promotionPrice/100).toFixed(2)}}</span>
                              </div>
                              <p @click="add(item)">+<ball></ball></p>
      
                        </li>
      
                  </ul>
            </div>

            <div class="ul_common">
                  <div class="ul_common_head" v-for="item in twoimg2">
                        <img v-lazy="item.imageUrl">
                  </div>
      
                  <ul class="sixImg">
                        <li v-for="item in nineimg2">
                              <div class="sixImg_img">
                                    <img v-lazy="item.imageUrl" />
                                    <img src="https://img.dmallcdn.com/cornerMarkV3/11/1_360x360H" v-if="item.data.promotionList.length>1 || item.data.promotionDisplayLable=='买1赠1'" style="position:absolute; z-index:10;left:0;top:0;" />
                              </div>
                              <div class="sixImg_youh">
                                    <span v-if="item.data.promotionDisplayLable=='特价'">特价</span>
                                    <span v-if="item.data.promotionList.length>1 || item.data.promotionDisplayLable=='买1赠1'">买1赠1</span>
                              </div>
                              <div class="sixImg_goods_name">
                                    {{ item.data.name }}
                              </div>
                              <div class="sixImg_goods_money">
                                    <span>￥{{(item.data.price/100).toFixed(2)}}</span>
                                    <br>
                                    <span>￥{{(item.data.promotionPrice/100).toFixed(2)}}</span>
                              </div>
                              <p  @click="add(item)">+<ball></ball></p>
      
                        </li>
      
                  </ul>
            </div>
            


            <div id="mob">
                  <img src="//img.dmall.com/mIndex/201603/c076c74f-6dc9-4c5f-a7e4-eccd748abb40"/>
            </div>

            <v-search></v-search>
            
      </div>
</template>

<script>
import Swper from "../swper";
import search from "../../components/search/search";
import ball from "../ball/checkgood2"
export default {
      components: {
            "v-swper": Swper,
            "v-search":search,
            "ball":ball
      },
      data() {
            return {
                  list: [],
                  list1: "",
                  boxlist1: [],
                  boxlist2: [],
                  zhoumo: "",
                  jianhuo: [],
                  danpin: "",
                  siximg: [],
                  nineimg:[],
                  twoimg: [],
                  twoimg1:[],
                  nineimg1:[],
                  twoimg2:[],
                  nineimg2:[]
            }
      },
      methods: {
            request() {
                  this.$http.get("../../../static/qqjx.json").then(res => {
                        this.list = res.body.data.pageModules;
                        // console.log(res.body.data.pageModules[1].dataList[0].imageUrl);
                        // 买了就赔
                        this.list1 = res.body.data.pageModules[1].dataList[0].imageUrl;

                        // console.log(res.body.data.pageModules[2].dataList);
                        // 10张图片列表
                        this.boxlist1 = res.body.data.pageModules[2].dataList;
                        this.boxlist2 = res.body.data.pageModules[3].dataList;

                        // 10张下面
                        // console.log(res.body.data.pageModules)
                        // this.zhoumo = res.body.data.pageModules[4].bgImgUrl
                        // 件货
                        // this.jianhuo.push(res.body.data.pageModules[7].dataList[0]);
                        for (var i in res.body.data.pageModules[7].dataList) {
                              this.jianhuo.push(res.body.data.pageModules[7].dataList[i])
                        }
                        for (var i in res.body.data.pageModules[8].dataList) {
                              this.jianhuo.push(res.body.data.pageModules[8].dataList[i])
                        }
                        for (var i in res.body.data.pageModules[9].dataList) {
                              this.jianhuo.push(res.body.data.pageModules[9].dataList[i])
                        }
                        // console.log(this.jianhuo)
                        this.danpin = res.body.data.pageModules[10].dataList[0].imageUrl;

                        this.siximg = res.body.data.pageModules[11].dataList;
                        // console.log(this.siximg)

                        // console.log( res.body.data.pageModules[12].dataList)
                        this.twoimg = res.body.data.pageModules[12].dataList

                        // 9img
                        this.nineimg = res.body.data.pageModules[13].dataList
                        // console.log(this.nineimg)

                        this.twoimg1 = res.body.data.pageModules[14].dataList
                        this.nineimg1 = res.body.data.pageModules[15].dataList

                        this.twoimg2 = res.body.data.pageModules[16].dataList
                        this.nineimg2 = res.body.data.pageModules[17].dataList

                        // console.log(res.body.data.pageModules)
                  })
            },
            add(item){
                  console.log(item.data)
                  this.$store.commit('addList', item)
            },
            tot(){
                  var totl = this.$store.state.obj;
                  // console.log(totl[100255532])
                  this.$store.state.totlMoney=0;
                  this.$store.state.totlcount = 0;
                  for(var i in totl){
                        console.log(totl[i]);
                        console.log(totl[i].count);
                        this.$store.state.totlcount+=totl[i].count;
                        this.$store.state.totlMoney += (totl[i].data.promotionPrice/100)*totl[i].count;
                  }
                  // this.$store.commit("totl")
                  return this.$store.state.totlMoney;
            }
      },
      created() {
      this.request()
      }

}

</script>

<style scoped>
/**/

.home-con {
      position: absolute;
      left: 0;
      right: 0;
      top: 0.84rem;
      bottom: 0;
      overflow: auto;
}





/*nav列表*/

.list-box ul {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      background-color: white;
}

.list-box ul li {
      width: 20%;
      text-align: center;
      margin: 0.1rem 0;
}

.list-box ul li img {
      width: 100%;
}





/*全球精选商品列表*/

.weekend_img_one img {
      width: 100%;
      height: 1.3964rem;
}

.jianhuo {
      width: 100%;
      height: 2.43rem;
}

.jianhuo>img:first-of-type {
      height: 100%;
      width: 50%;
      float: left;
}

.jianhuo .jianhuo_right {
      width: 50%;
      height: 1.22rem;
      float: right;
}

.weekend_img_two {
      width: 50%;
      height: 1.21rem;
      float: right;
}

.weekend_img_two img {
      float: left;
      width: 1.035rem;
}

.jxhc img {
      width: 100%;
}

.nine_img {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
}

.nine_img img {
      width: 33%;
      height: 1.656rem;
}

.sixImg .sixImg_img img {
      width: 1.28rem;
      height: 1.28rem;
}

.sixImg_youh span {
      padding: .03rem .06rem;
      margin: 0 1px;
      color: white;
      display: inline-block;
      background-color: #ff6161;
      border-radius: 3px;
}

.sixImg li {
      float: left;
      width: 33%;
      height: 2.46rem;
      padding: .1rem .04rem;
      border: 1px solid #f4f4f4;
}

.sixImg div {
      width: 1.28rem;
}

.sixImg_goods_name {
      overflow: hidden;
      height: .36rem;
      margin-bottom: .10rem;
      color: #21292b;
      font-size: .14rem;
      line-height: .18rem;
}

.sixImg .sixImg_goods_money {
      font-size: .12rem;
}

.sixImg .sixImg_goods_money span:nth-of-type(2) {
      font-size: .14rem;
      color: #ff712b;
}

.sixImg li {
      position: relative;
}

.sixImg p {
      width: .3rem;
      height: .2rem;
      border: 1px solid #ff6161;
      color: #ff6161;
      font-size: .19rem;
      position: absolute;
      right: 5px;
      bottom: 5px;
      line-height: .2rem;
      text-align: center;
}

.ul_common_head img {
      width: 100%;
}

.ul_common {
      clear: both;
      padding-top: .2rem;
}

#mob img{
      width: 100%;
      margin-top: .4rem;
}
#mob{
      margin-top: .4rem;
}

img{
      -webkit-transition: all 2s;
      -o-transition: all 2s;
      transition: all 2s;
}
img[lazy=loading] {
      opacity: 0;
}
img[lazy=error] {

}
img[lazy=loaded] {
  opacity: 1;
}


</style>
