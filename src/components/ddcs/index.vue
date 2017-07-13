<template>
  <!--<p>chaoshi</p>-->
  <div id="container">
      <!--<div class="lun">-->
          <v-swper></v-swper>
      <!--</div>-->
      <p class="tiao"></p>
      <div class="gongneng">
        <div v-for="(item,index) in gongnengList">
          <img v-lazy="item['imageUrl']" >
          <p>{{item.remark}}</p>
        </div>
      </div>
      <p class="tiao"></p>
    <!-- 主题部分 -->
      <div class="zhuti">
        <p class="img"><img src="https://img.dmallcdn.com/mIndex/201706/2d601d49-cfbc-45f6-80b2-f0ec4f49f8ec_750H" ></p>
        <p class="tiao2"></p>
        <div class="imgList">
          <p><img v-lazy="zhutiList[0]['imageUrl']" ></p>
          <div>
            <img v-lazy="zhutiList[1]['imageUrl']" >
            <img v-lazy="zhutiList[2]['imageUrl']" >
          </div>
        </div>
        <div class="clear"></div>
        <p class="tiao"></p>
        <div class="cuxiao">
          <img src="https://img.dmallcdn.com/mIndex/201707/7ff8bc22-4703-4328-afa0-dacff0275ec1_750H" >
        </div>
        <p class="tiao"></p>
      </div>
      <!--  超市优选  -->
      <div class="youxuan">
        <p class="img"><img src="https://img.dmallcdn.com/mIndex/201706/3571bfa9-37da-43db-80ee-f82665c15403_750H" ></p>
        <div class="typeList">
          <div class="lineTop" >
            <img v-for="(item,index) in youXuan1" v-lazy="item['imageUrl']" >
          </div>
          <div class="lineBot">
            <img v-for="(item,index) in youXuan2" v-lazy="item['imageUrl']">
          </div>
        </div>
        <p class="tiao"></p>
        <div class="cuxiao">
          <img src="https://img.dmallcdn.com/mIndex/201707/656ecf5c-f734-4bdc-979b-d39c81de5979_750H" >
        </div>
        <p class="tiao"></p>
      </div>
      <!--  生活常伴  -->
      <div class="shenghuo">
        <p class="img">
          <img src="https://img.dmallcdn.com/mIndex/201706/8f9b4593-a350-4277-acb0-2ac78c098523_750H" >
        </p>
        <div class="shenghuoList">
          <p><img v-lazy="shenghuo[0]['imageUrl']" ><img v-lazy="shenghuo[1]['imageUrl']" ></p>
          <div>
            <img v-for="item in SH_list" v-lazy="item['imageUrl']" >
            <!--<img src="../assets/xuegao.png" ><img src="../assets/xuegao.png" ><img src="../assets/xuegao.png" >-->
          </div>
        </div>
        <p class="tiao"></p>
      </div>
      <!--  健康蔬菜   -->
      <div class="shucai">
        <p class="img"><img src="https://img.dmallcdn.com/mIndex/201707/6fa3a415-a13a-45f2-b850-f69e18928da9_750H"></p>
        <div class="shuList" v-for="item in shucai">
            <img v-lazy="item['imageUrl']" >
            <p>{{item.data.name}}</p>
            <div class="pric">
              <span>￥{{((item.data.price)/100).toFixed(2)}}</span>
              <i>￥{{((item.data.promotionPrice)/100).toFixed(2)}}</i>
              <p>+</p>
            </div>
        </div>

      </div>
      <p class="clear"></p>
      <!--  新鲜水果  -->
      <div class="shucai">
        <p class="img"><img src="https://img.dmallcdn.com/mIndex/201707/39862fb5-136c-4397-af5f-cbef916dfced_750H"></p>
        <div class="shuList" v-for="item in shuiguo">
          <img v-lazy="item['imageUrl']" >
          <p>{{item.data.name}}</p>
          <div class="pric">
            <span>￥{{((item.data.price)/100).toFixed(2)}}</span>
            <i>￥{{((item.data.promotionPrice)/100).toFixed(2)}}</i>
            <p>+</p>
          </div>
        </div>

        <p class="clear"></p>
      </div>
      <!--  乳制品  -->
      <div class="mike">
        <p class="tiao"></p>
        <p class="img"><img src="https://img.dmallcdn.com/mIndex/201707/1364353a-4048-4f6e-b6e0-d2c7272d1dc3_750H"></p>
        <div class="shuList" v-for="item in mike">
          <img v-lazy="item['imageUrl']" >
          <div class="te">{{item.data.promotionDisplayLable}}</div>
          <p>{{item.data.name}}</p>
          <div class="pric">
            <span>￥{{((item.data.price)/100).toFixed(2)}}</span>
            <i>￥{{((item.data.promotionPrice)/100).toFixed(2)}}</i>
            <p>+</p>
          </div>
        </div>
        <p class="clear"></p>
      </div>
    <!--  肉禽蛋  -->
    <div class="mike">
      <p class="tiao"></p>
      <p class="img"><img src="https://img.dmallcdn.com/mIndex/201707/af5d1a5c-ed16-423a-b152-94d108e77c27_750H"></p>
      <div class="shuList" v-for="item in rou">
        <img v-lazy="item['imageUrl']" >
        <div class="te">{{item.data.promotionDisplayLable}}</div>
        <p>{{item.data.name}}</p>
        <div class="pric">
          <span>￥{{((item.data.price)/100).toFixed(2)}}</span>
          <i>￥{{((item.data.promotionPrice)/100).toFixed(2)}}</i>
          <p>+</p>
        </div>
      </div>
      <p class="clear"></p>
    </div>
    <!--  主食副食  -->
    <div class="mike">
      <p class="tiao"></p>
      <p class="img"><img src="https://img.dmallcdn.com/mIndex/201707/4a5c2f52-1cdb-496f-abfc-87693b353b2f_750H"></p>
      <div class="shuList" v-for="item in zhushi">
        <img v-lazy="item['imageUrl']" >
        <div class="te">{{item.data.promotionDisplayLable}}</div>
        <p>{{item.data.name}}</p>
        <div class="pric">
          <span>￥{{((item.data.price)/100).toFixed(2)}}</span>
          <i>￥{{((item.data.promotionPrice)/100).toFixed(2)}}</i>
          <p>+</p>
        </div>
      </div>
      <p class="clear"></p>
    </div>
    <!--  品质水产  -->
    <div class="mike">
      <p class="tiao"></p>
      <p class="img"><img src="https://img.dmallcdn.com/mIndex/201707/fc548e20-0840-4f9a-bd18-814ce22205c0_750H"></p>
      <div class="shuList" v-for="item in shuichan">
        <img v-lazy="item['imageUrl']" >
        <div class="te">{{item.data.promotionDisplayLable}}</div>
        <p>{{item.data.name}}</p>
        <div class="pric">
          <span>￥{{((item.data.price)/100).toFixed(2)}}</span>
          <i>￥{{((item.data.promotionPrice)/100).toFixed(2)}}</i>
          <p>+</p>
        </div>
      </div>
      <p class="clear"></p>
    </div>
    <!--  粮油副食  -->
    <div class="mike">
      <p class="tiao"></p>
      <p class="img"><img src="https://img.dmallcdn.com/mIndex/201707/ce55264a-1875-4d4c-9a60-a25880db51eb_750H"></p>
      <div class="shuList" v-for="item in liangyou">
        <img v-lazy="item['imageUrl']" >
        <div class="te">{{item.data.promotionDisplayLable}}</div>
        <p>{{item.data.name}}</p>
        <div class="pric">
          <span>￥{{((item.data.price)/100).toFixed(2)}}</span>
          <i>￥{{((item.data.promotionPrice)/100).toFixed(2)}}</i>
          <p>+</p>
        </div>
      </div>
      <p class="clear"></p>
    </div>
    <!--  酒水饮料  -->
    <div class="mike">
      <p class="tiao"></p>
      <p class="img"><img src="https://img.dmallcdn.com/mIndex/201707/439ce243-9fa2-4b6a-8045-72d99909eb21_750H"></p>
      <div class="shuList" v-for="item in jiushui">
        <img v-lazy="item['imageUrl']" >
        <div class="te">{{item.data.promotionDisplayLable}}</div>
        <p>{{item.data.name}}</p>
        <div class="pric">
          <span>￥{{((item.data.price)/100).toFixed(2)}}</span>
          <i>￥{{((item.data.promotionPrice)/100).toFixed(2)}}</i>
          <p>+</p>
        </div>
      </div>
      <p class="clear"></p>
    </div>
    <!--  休闲零食  -->
    <div class="mike">
      <p class="tiao"></p>
      <p class="img"><img src="https://img.dmallcdn.com/mIndex/201707/a04cf8ed-62e1-467f-9037-0e9ed6687c89_750H"></p>
      <div class="shuList" v-for="item in lingshi">
        <img v-lazy="item['imageUrl']" >
        <div class="te">{{item.data.promotionDisplayLable}}</div>
        <p>{{item.data.name}}</p>
        <div class="pric">
          <span>￥{{((item.data.price)/100).toFixed(2)}}</span>
          <i>￥{{((item.data.promotionPrice)/100).toFixed(2)}}</i>
          <p>+</p>
        </div>
      </div>
      <p class="clear"></p>
    </div>
    <!--  个人护理  -->
    <div class="mike">
      <p class="tiao"></p>
      <p class="img"><img src="https://img.dmallcdn.com/mIndex/201707/a258da2b-34f6-45e3-9887-7fb82230472b_750H"></p>
      <div class="shuList" v-for="item in huli">
        <img v-lazy="item['imageUrl']" >
        <div class="te">{{item.data.promotionDisplayLable}}</div>
        <p>{{item.data.name}}</p>
        <div class="pric">
          <span>￥{{((item.data.price)/100).toFixed(2)}}</span>
          <i>￥{{((item.data.promotionPrice)/100).toFixed(2)}}</i>
          <p>+</p>
        </div>
      </div>
      <p class="clear"></p>
    </div>


    <p class="tiao"></p>
    <div class="footerImg"><img src="//img.dmall.com/mIndex/201603/c076c74f-6dc9-4c5f-a7e4-eccd748abb40" ></div>
    <!--<p class="a"></p>-->
  </div>
</template>

<script>
import Swper from "../swper";

      
export default {
 data(){
  return {
      gongnengList:[],
      youXuan1:[],
      youXuan2:[],
      zhutiList:[],
      shenghuo:[],
      SH_list:[],
      shucai:[],
      shuiguo:[],
      mike:[],
      rou:[],
      zhushi:[],
      shuichan:[],
      liangyou:[],
      jiushui:[],
      lingshi:[],
      huli:[]
  }
 },
  methods:{

      getData() {
       var $this = this;
       this.$http.get('../../static/ddcs.json').then(function (res) {
          console.log(res)
         $this.gongnengList = res.data.data.pageModules[2].dataList;
         $this.youXuan1 = res.data.data.pageModules[7].dataList;
         $this.youXuan2 = res.data.data.pageModules[8].dataList;
         $this.zhutiList = res.data.data.pageModules[4].dataList;
         $this.shenghuo = res.data.data.pageModules[11].dataList;
         $this.SH_list = $this.shenghuo.splice(2);
         $this.shucai = res.data.data.pageModules[13].dataList;
         $this.shuiguo = res.data.data.pageModules[15].dataList;
         $this.mike = res.data.data.pageModules[17].dataList;
         $this.rou = res.data.data.pageModules[19].dataList;
         $this.zhushi = res.data.data.pageModules[21].dataList;
         $this.shuichan = res.data.data.pageModules[23].dataList;
         $this.liangyou = res.data.data.pageModules[25].dataList;
         $this.jiushui = res.data.data.pageModules[27].dataList;
         $this.lingshi = res.data.data.pageModules[30].dataList;
         $this.huli = res.data.data.pageModules[32].dataList;
         $this.lunbo = res.data.data.pageModules[0].dataList;

      console.log($this.huli)

//         console.log($this.mike)
       })
     }
  },
  created(){
     this.getData();
  },
  components: {
        "v-swper": Swper
  },
}
</script>

<style>
  .a{
    height:.5rem;
    background: red;
  }
  .clear{
    clear: both;
    height: 0;
  }
  .lun{
    width: 100%;
    height: 1.6559rem;
    background: red;
  }
  .tiao{
    width: 100%;
    height: .12rem;
    background: #f6f6f6;
  }
  .gongneng div img{
    display: block;
    width: .8278rem;
    height: .5519rem;
    margin: 0 auto;
  }
  .gongneng div p{
    color: #888;
    font-size: .12rem;
    text-align: center;
  }
  .gongneng{
    display: flex;
    align-content: space-between;
  }
  .gongneng div{
    margin: .05rem 0 .1rem 0;
    background-color: white;
  }
/*   主题部分  */
  .zhuti .img{
    width: 100%;
    height: .3863rem;
  }
  .zhuti .img img{
    width: 100%;
    height: 100%;
  }
  .tiao2{
    height:.02rem;
    background: #f6f6f6;
  }
  .zhuti .imgList p{
    float: left;
  }
  .zhuti .imgList p img{
    width: 2.07rem;
    height: 2.4288rem;
  }
  .zhuti .imgList div{
    /*display: inline-block;*/
    float: left;
    border-left: .01rem solid #f6f6f6;
  }
  .zhuti .imgList div img{
    display: block;
    width: 2.06rem;
    height: 1.2144rem;
  }
  .zhuti .imgList div img:first-of-type{
    border-bottom: .01rem solid #f6f6f6;
  }
   .cuxiao{
    height: .828rem;
    width: 100%;
  }
   .cuxiao img{
    width: 100%;
    height: 100%;
  }

  /*  超市优选   */
  .youxuan .img{
    width: 100%;
    height: .3863rem;

  }
  .youxuan .img img{
    width: 100%;
    height: 100%;
  }
  .youxuan .typeList .lineTop{
    border-top: .02rem solid #f6f6f6;
    border-bottom: .01rem solid #f6f6f6;
  }
  .youxuan .typeList .lineTop img{
    width: 1.3798rem;
    height: 1.6559rem;
    display: inline-block;
  }

  .youxuan .typeList .lineBot img{
    width: 1.3798rem;
    height: 1.6559rem;

  }

  /*   生活常伴   */

  .shenghuo  .img{
    width: 100%;
    height: .3863rem;
    border-bottom: .02rem solid #f6f6f6;
  }
  .shenghuo .img img{
    width: 100%;
    height: 100%;
  }
  .shenghuo .shenghuoList p img{
    width: 2.07rem;
    height: .9936rem;
  }
  .shenghuo .shenghuoList div{
    width: 100%;
  }
  .shenghuo .shenghuoList div img{
    width: 25%;
    height: 1.6559rem;
  }

  /*  健康蔬菜  */
  .shucai .img img{
    height: 1.2695rem;
    width: 100%;
  }
  .shucai .shuList{
    float: left;
    width: 1.38rem;
    /*padding: 10px 5px;*/
  }
  .shucai .shuList>img{
    display: block;
    width: 1.28rem;
    height: 1.28rem;
    margin: .1rem 0;
    /*margin: 0 auto;*/
  }
  .shucai .shuList p{
    height: 36px;
    margin-bottom: 10px;
    color: #21292b;
    font-size: 14px;
    line-height: 18px;
    margin: 0 auto;
    width: 1.1798rem;
    margin-top: .2rem;
  }
  .shucai .shuList .pric{
    width: 1.1798rem;
    margin: 0 auto;
    position: relative;
    margin-bottom: .1rem;
  }
  .shucai .shuList .pric i{
    font-style: normal;
    font-size: .14rem;
    color:#ff9866;
    display: block;
  }
  .shucai .shuList .pric span{
    text-decoration: line-through;
    color:#808080;
    display: block;
    font-size: .12rem;
  }
  .shucai .shuList .pric>p{
    position: absolute;
    right:0;
    bottom: 0;
    font-size: .25rem;
    cursor: pointer;
    border: .01rem solid #ffb89c;
    width: .24rem;
    height: .18rem;
    color: #ffb89c;
    text-align: center;
    line-height: .15rem;
  }

  /*   乳制品  */
  .mike .img img{
    height: 1.2695rem;
    width: 100%;
  }
  .mike .shuList{
    box-sizing: border-box;
    float: left;
    width:33.3%;
    background-color:#fff;
    padding-left:.12rem;
  }
  .mike .shuList>img{
    display: block;
    width: 100%;
    height: 1.28rem;
    margin: .1rem 0;
    /*margin: 0 auto;*/
  }
  .mike .shuList .te{
    background: #ff6161;
    width: .36rem;
    height: .18rem;
    line-height: .18rem;
    text-align: center;
    color: white;
    font-size: .1rem;
    border-radius: .02rem;
    /*margin-left: .12rem;*/
    margin-bottom: .07rem;
  }
  .mike .shuList>p{
    height: .36rem;
    margin-bottom: .10rem;
    color: #21292b;
    font-size: .14rem ;
    line-height: .18rem;
    /*margin: 0 auto;*/
    width: 1.1798rem;
    /*margin-top: .2rem;*/
  }
  .mike .shuList .pric{
    width: 1.1798rem;
    /*margin: 0 auto;*/
    position: relative;
    margin-bottom: .1rem;
  }
  .mike .shuList .pric i{
    font-style: normal;
    font-size: .14rem;
    color:#ff9866;
    display: block;
  }
  .mike .shuList .pric span{
    text-decoration: line-through;
    collor:#808080;
    display: block;
    font-size: .12rem;
  }
  .mike .shuList .pric>p{
    position: absolute;
    right:0;
    bottom: 0;
    font-size: .25rem;
    cursor: pointer;
    border: .01rem solid #ffb89c;
    width: .24rem;
    height: .18rem;
    color: #ffb89c;
    text-align: center;
    line-height: .15rem;
  }
  .footerImg img{
    width: 100%;
    height: .6955rem;
  }

img {
    -webkit-transition: all 2s;
    -o-transition: all 2s;
    transition: all 2s;
}

img[lazy=loading] {
    opacity: 0;
}

img[lazy=error] {}

img[lazy=loaded] {
    opacity: 1;
}
</style>
