<template>
      <div class="home-con">
            <v-swper></v-swper>
            <img :src="list1" style="width:100%;">
            <div class="list-box">
                  <ul>
                        <li v-for="item in boxlist1">
                              <a :href="item.resource">
                                    <img :src="item.imageUrl">
                                    <p>{{ item.remark }}</p>
                              </a>
                        </li>
                  </ul>
                  <ul>
                        <li v-for="item in boxlist2">
                              <a :href="item.resource">
                                    <img :src="item.imageUrl">
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
                  <img v-for="item in jianhuo" :src="item.imageUrl"/>
            </div>
      
            <div class="jxhc">
                  <img :src="danpin" />
            </div>
      
            <ul class="sixImg">
      
                  <li v-for="item in siximg">
                        <div class="sixImg_img">
                              <img :src="item.imageUrl" />
                        </div>
                        <div class="sixImg_youh">
                              <span>特价</span>
                              <span>买1赠1</span>
                        </div>
                        <div class="sixImg_goods_name">
                              优选加我蓝莓125g啊山东黄金阿萨德拉速度
                        </div>
                        <div class="sixImg_goods_money">
                              <span>$22.5</span>
                              <br>
                              <span>$16.60</span>
                        </div>
                        <p>+</p>
      
                  </li>
                  
      
            </ul>
      
            <div class="ul_common">
                  <div class="ul_common_head">
                        <img src="https://img.dmallcdn.com/mIndex/201707/86b93d7f-4ef7-478d-adb3-8b7087d7e708_750H" />
                        <img src="https://img.dmallcdn.com/mIndex/201707/86b93d7f-4ef7-478d-adb3-8b7087d7e708_750H">
                  </div>
      
                  <ul class="sixImg">
      
                        <li>
                              <div class="sixImg_img">
                                    <img src="https://img.dmallcdn.com/20161109/7afb6ee0-8988-4f4a-9d93-33d2d87acfc1_360x360H" />
                              </div>
                              <div class="sixImg_youh">
                                    <span>特价</span>
                                    <span>买1赠1</span>
                              </div>
                              <div class="sixImg_goods_name">
                                    优选加我蓝莓125g啊山东黄金阿萨德拉速度
                              </div>
                              <div class="sixImg_goods_money">
                                    <span>$22.5</span>
                                    <br>
                                    <span>$16.60</span>
                              </div>
                              <p>+</p>
      
                        </li>
                        <li>
                              <div class="sixImg_img">
                                    <img src="https://img.dmallcdn.com/20161109/7afb6ee0-8988-4f4a-9d93-33d2d87acfc1_360x360H" />
                              </div>
                              <div class="sixImg_youh">
                                    <span>特价</span>
                                    <span>买1赠1</span>
                              </div>
                              <div class="sixImg_goods_name">
                                    优选加我蓝莓125g啊山东黄金阿萨德拉速度
                              </div>
                              <div class="sixImg_goods_money">
                                    <span>$22.5</span>
                                    <br>
                                    <span>$16.60</span>
                              </div>
                              <p>+</p>
      
                        </li>
                        <li>
                              <div class="sixImg_img">
                                    <img src="https://img.dmallcdn.com/20161109/7afb6ee0-8988-4f4a-9d93-33d2d87acfc1_360x360H" />
                              </div>
                              <div class="sixImg_youh">
                                    <span>特价</span>
                                    <span>买1赠1</span>
                              </div>
                              <div class="sixImg_goods_name">
                                    优选加我蓝莓125g啊山东黄金阿萨德拉速度
                              </div>
                              <div class="sixImg_goods_money">
                                    <span>$22.5</span>
                                    <br>
                                    <span>$16.60</span>
                              </div>
                              <p>+</p>
      
                        </li>
                        <li>
                              <div class="sixImg_img">
                                    <img src="https://img.dmallcdn.com/20161109/7afb6ee0-8988-4f4a-9d93-33d2d87acfc1_360x360H" />
                              </div>
                              <div class="sixImg_youh">
                                    <span>特价</span>
                                    <span>买1赠1</span>
                              </div>
                              <div class="sixImg_goods_name">
                                    优选加我蓝莓125g啊山东黄金阿萨德拉速度
                              </div>
                              <div class="sixImg_goods_money">
                                    <span>$22.5</span>
                                    <br>
                                    <span>$16.60</span>
                              </div>
                              <p>+</p>
      
                        </li>
                        <li>
                              <div class="sixImg_img">
                                    <img src="https://img.dmallcdn.com/20161109/7afb6ee0-8988-4f4a-9d93-33d2d87acfc1_360x360H" />
                              </div>
                              <div class="sixImg_youh">
                                    <span>特价</span>
                                    <span>买1赠1</span>
                              </div>
                              <div class="sixImg_goods_name">
                                    优选加我蓝莓125g啊山东黄金阿萨德拉速度
                              </div>
                              <div class="sixImg_goods_money">
                                    <span>$22.5</span>
                                    <br>
                                    <span>$16.60</span>
                              </div>
                              <p>+</p>
      
                        </li>
                        <li>
                              <div class="sixImg_img">
                                    <img src="https://img.dmallcdn.com/20161109/7afb6ee0-8988-4f4a-9d93-33d2d87acfc1_360x360H" />
                              </div>
                              <div class="sixImg_youh">
                                    <span>特价</span>
                                    <span>买1赠1</span>
                              </div>
                              <div class="sixImg_goods_name">
                                    优选加我蓝莓125g啊山东黄金阿萨德拉速度
                              </div>
                              <div class="sixImg_goods_money">
                                    <span>$22.5</span>
                                    <br>
                                    <span>$16.60</span>
                              </div>
                              <p>+</p>
      
                        </li>
                        <li>
                              <div class="sixImg_img">
                                    <img src="https://img.dmallcdn.com/20161109/7afb6ee0-8988-4f4a-9d93-33d2d87acfc1_360x360H" />
                              </div>
                              <div class="sixImg_youh">
                                    <span>特价</span>
                                    <span>买1赠1</span>
                              </div>
                              <div class="sixImg_goods_name">
                                    优选加我蓝莓125g啊山东黄金阿萨德拉速度
                              </div>
                              <div class="sixImg_goods_money">
                                    <span>$22.5</span>
                                    <br>
                                    <span>$16.60</span>
                              </div>
                              <p>+</p>
      
                        </li>
                        <li>
                              <div class="sixImg_img">
                                    <img src="https://img.dmallcdn.com/20161109/7afb6ee0-8988-4f4a-9d93-33d2d87acfc1_360x360H" />
                              </div>
                              <div class="sixImg_youh">
                                    <span>特价</span>
                                    <span>买1赠1</span>
                              </div>
                              <div class="sixImg_goods_name">
                                    优选加我蓝莓125g啊山东黄金阿萨德拉速度
                              </div>
                              <div class="sixImg_goods_money">
                                    <span>$22.5</span>
                                    <br>
                                    <span>$16.60</span>
                              </div>
                              <p>+</p>
      
                        </li>
                        <li>
                              <div class="sixImg_img">
                                    <img src="https://img.dmallcdn.com/20161109/7afb6ee0-8988-4f4a-9d93-33d2d87acfc1_360x360H" />
                              </div>
                              <div class="sixImg_youh">
                                    <span>特价</span>
                                    <span>买1赠1</span>
                              </div>
                              <div class="sixImg_goods_name">
                                    优选加我蓝莓125g啊山东黄金阿萨德拉速度
                              </div>
                              <div class="sixImg_goods_money">
                                    <span>$22.5</span>
                                    <br>
                                    <span>$16.60</span>
                              </div>
                              <p>+</p>
      
                        </li>
      
                  </ul>
            </div>
      
            <div class="ul_common">
                  <div class="ul_common_head">
                        <img src="https://img.dmallcdn.com/mIndex/201707/86b93d7f-4ef7-478d-adb3-8b7087d7e708_750H" />
                        <img src="https://img.dmallcdn.com/mIndex/201707/86b93d7f-4ef7-478d-adb3-8b7087d7e708_750H">
                  </div>
      
                  <ul class="sixImg">
      
                        <li>
                              <div class="sixImg_img">
                                    <img src="https://img.dmallcdn.com/20161109/7afb6ee0-8988-4f4a-9d93-33d2d87acfc1_360x360H" />
                              </div>
                              <div class="sixImg_youh">
                                    <span>特价</span>
                                    <span>买1赠1</span>
                              </div>
                              <div class="sixImg_goods_name">
                                    优选加我蓝莓125g啊山东黄金阿萨德拉速度
                              </div>
                              <div class="sixImg_goods_money">
                                    <span>$22.5</span>
                                    <br>
                                    <span>$16.60</span>
                              </div>
                              <p>+</p>
      
                        </li>
                        <li>
                              <div class="sixImg_img">
                                    <img src="https://img.dmallcdn.com/20161109/7afb6ee0-8988-4f4a-9d93-33d2d87acfc1_360x360H" />
                              </div>
                              <div class="sixImg_youh">
                                    <span>特价</span>
                                    <span>买1赠1</span>
                              </div>
                              <div class="sixImg_goods_name">
                                    优选加我蓝莓125g啊山东黄金阿萨德拉速度
                              </div>
                              <div class="sixImg_goods_money">
                                    <span>$22.5</span>
                                    <br>
                                    <span>$16.60</span>
                              </div>
                              <p>+</p>
      
                        </li>
                        <li>
                              <div class="sixImg_img">
                                    <img src="https://img.dmallcdn.com/20161109/7afb6ee0-8988-4f4a-9d93-33d2d87acfc1_360x360H" />
                              </div>
                              <div class="sixImg_youh">
                                    <span>特价</span>
                                    <span>买1赠1</span>
                              </div>
                              <div class="sixImg_goods_name">
                                    优选加我蓝莓125g啊山东黄金阿萨德拉速度
                              </div>
                              <div class="sixImg_goods_money">
                                    <span>$22.5</span>
                                    <br>
                                    <span>$16.60</span>
                              </div>
                              <p>+</p>
      
                        </li>
                        <li>
                              <div class="sixImg_img">
                                    <img src="https://img.dmallcdn.com/20161109/7afb6ee0-8988-4f4a-9d93-33d2d87acfc1_360x360H" />
                              </div>
                              <div class="sixImg_youh">
                                    <span>特价</span>
                                    <span>买1赠1</span>
                              </div>
                              <div class="sixImg_goods_name">
                                    优选加我蓝莓125g啊山东黄金阿萨德拉速度
                              </div>
                              <div class="sixImg_goods_money">
                                    <span>$22.5</span>
                                    <br>
                                    <span>$16.60</span>
                              </div>
                              <p>+</p>
      
                        </li>
                        <li>
                              <div class="sixImg_img">
                                    <img src="https://img.dmallcdn.com/20161109/7afb6ee0-8988-4f4a-9d93-33d2d87acfc1_360x360H" />
                              </div>
                              <div class="sixImg_youh">
                                    <span>特价</span>
                                    <span>买1赠1</span>
                              </div>
                              <div class="sixImg_goods_name">
                                    优选加我蓝莓125g啊山东黄金阿萨德拉速度
                              </div>
                              <div class="sixImg_goods_money">
                                    <span>$22.5</span>
                                    <br>
                                    <span>$16.60</span>
                              </div>
                              <p>+</p>
      
                        </li>
                        <li>
                              <div class="sixImg_img">
                                    <img src="https://img.dmallcdn.com/20161109/7afb6ee0-8988-4f4a-9d93-33d2d87acfc1_360x360H" />
                              </div>
                              <div class="sixImg_youh">
                                    <span>特价</span>
                                    <span>买1赠1</span>
                              </div>
                              <div class="sixImg_goods_name">
                                    优选加我蓝莓125g啊山东黄金阿萨德拉速度
                              </div>
                              <div class="sixImg_goods_money">
                                    <span>$22.5</span>
                                    <br>
                                    <span>$16.60</span>
                              </div>
                              <p>+</p>
      
                        </li>
                        <li>
                              <div class="sixImg_img">
                                    <img src="https://img.dmallcdn.com/20161109/7afb6ee0-8988-4f4a-9d93-33d2d87acfc1_360x360H" />
                              </div>
                              <div class="sixImg_youh">
                                    <span>特价</span>
                                    <span>买1赠1</span>
                              </div>
                              <div class="sixImg_goods_name">
                                    优选加我蓝莓125g啊山东黄金阿萨德拉速度
                              </div>
                              <div class="sixImg_goods_money">
                                    <span>$22.5</span>
                                    <br>
                                    <span>$16.60</span>
                              </div>
                              <p>+</p>
      
                        </li>
                        <li>
                              <div class="sixImg_img">
                                    <img src="https://img.dmallcdn.com/20161109/7afb6ee0-8988-4f4a-9d93-33d2d87acfc1_360x360H" />
                              </div>
                              <div class="sixImg_youh">
                                    <span>特价</span>
                                    <span>买1赠1</span>
                              </div>
                              <div class="sixImg_goods_name">
                                    优选加我蓝莓125g啊山东黄金阿萨德拉速度
                              </div>
                              <div class="sixImg_goods_money">
                                    <span>$22.5</span>
                                    <br>
                                    <span>$16.60</span>
                              </div>
                              <p>+</p>
      
                        </li>
                        <li>
                              <div class="sixImg_img">
                                    <img src="https://img.dmallcdn.com/20161109/7afb6ee0-8988-4f4a-9d93-33d2d87acfc1_360x360H" />
                              </div>
                              <div class="sixImg_youh">
                                    <span>特价</span>
                                    <span>买1赠1</span>
                              </div>
                              <div class="sixImg_goods_name">
                                    优选加我蓝莓125g啊山东黄金阿萨德拉速度
                              </div>
                              <div class="sixImg_goods_money">
                                    <span>$22.5</span>
                                    <br>
                                    <span>$16.60</span>
                              </div>
                              <p>+</p>
      
                        </li>
      
                  </ul>
            </div>
      </div>
</template>

<script>
import Swper from "../swper";
export default {
      components: {
            "v-swper": Swper
      },
      data() {
            return {
                  list: [],
                  list1:"",
                  boxlist1:[],
                  boxlist2:[],
                  zhoumo:"",
                  jianhuo:[],
                  danpin:"",
                  siximg:[]
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
                        this.boxlist2 =  res.body.data.pageModules[3].dataList;

                        // 10张下面
                        // console.log(res.body.data.pageModules)
                        // this.zhoumo = res.body.data.pageModules[4].bgImgUrl
                        // 件货
                        // this.jianhuo.push(res.body.data.pageModules[7].dataList[0]);
                        for(var i in res.body.data.pageModules[7].dataList){
                              this.jianhuo.push(res.body.data.pageModules[7].dataList[i])
                        }
                        for(var i in res.body.data.pageModules[8].dataList){
                              this.jianhuo.push(res.body.data.pageModules[8].dataList[i])
                        }
                        for(var i in res.body.data.pageModules[9].dataList){
                              this.jianhuo.push(res.body.data.pageModules[9].dataList[i])
                        }
                        console.log(this.jianhuo)
                        this.danpin = res.body.data.pageModules[10].dataList[0].imageUrl;

                        this.siximg =  res.body.data.pageModules[10].dataList;
                        console.log(this.siximg)
                  })
            }
      },
    created(){
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
}

.list-box ul li {
      width: 20%;
      text-align: center;
      margin: 0.1rem 0;
}
.list-box ul li img{
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
      width: 2.07rem;
      float: left;
}

.jianhuo .jianhuo_right {
      width: 2.07rem;
      height: 1.22rem;
      float: right;
}

.weekend_img_two {
      width: 2.07rem;
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
      width: 1.3rem;
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
</style>
