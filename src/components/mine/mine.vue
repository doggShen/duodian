<template >
  <div class="container">
    <header>
      <div class="user">
        <p>您好</p>
        <div>
           <span></span> 普通会员
        </div>
      </div>
      <div class="sao">
        <span></span>
        <strong>会员专属码</strong>
      </div>
      <div class="score">
        <div>
            <span>0.00</span>
            <i>余额</i>
        </div>
        <div>
          <span>0.00</span>
          <i>余额</i>
        </div>
        <div>
          <span>0.00</span>
          <i>余额</i>
        </div>
        <div>
          <span>0.00</span>
          <i>余额</i>
        </div>
      </div>
    </header>
    <p class="tiao"></p>
    <div class="zhifu">
      <div>
        <span></span>
        <i>待支付</i>
      </div>
      <div>
        <span></span>
        <i>未完成</i>
      </div>
      <div>
        <span></span>
        <i>已完成</i>
      </div>
      <div>
        <span></span>
        <i>全部订单</i>
      </div>
      <p class="clear"></p>
    </div>
    <p class="tiao"></p>

    <div class="zhifu gongneng">
      <div>
        <span></span>
        <i>会员中心</i>
        <b>会员有好礼</b>
      </div>
      <div>
        <span></span>
        <i>收货地址</i>
      </div>
      <div>
        <span></span>
        <i>帮助中心</i>
      </div>
      <div>
        <span></span>
        <i>客服电话</i>
      </div>
      <p class="clear"></p>
    </div>
    <div class="zhifu gongneng2">
      <div>
        <span></span>
        <i>体验APP</i>
      </div>
      <div>
        <span></span>
        <i>发票中心</i>
      </div>
      <div>
        <span></span>
        <i>绑卡</i>
      </div>
      <div>
        <span></span>
        <i>邀请</i>
      </div>
      <p class="clear"></p>
    </div>
    <p class="tiao2"></p>
  </div>

</template>




<script>
export default {
  data(){
    return  {

    }
  }
}
</script>

<style>
  .clear{
    height: 0;
    clear: both;
  }
  .tiao{
    height: .1rem;
    background: #f6f6f6;
  }
  .tiao2{
    height: 3rem;
    background: #f6f6f6;
  }
  header{
    height: 1.5rem;
    background: url("../../assets/mine_head.png");
    background-size: 100% 100%;
    position: relative;
    padding-top: 0.1px;
  }
  header .score{
    position: absolute;
    left:0;
    bottom:0;
    height: .53rem;
    width: 100%;
    background: rgba(0,0,0,.1);

    font-size: .12rem;

  }
  header .score div{
    color: white;
    font-weight: 500;
    text-align: center;
    float: left;
    width: 25%;

  }
  header .score div span{
    display: block;
    margin-top: .06rem;
    font-size: .16rem;
  }
  header .score div i{
    display: block;
    font-style: normal;
  }
  header .user{
    margin-top: .18rem;
    margin-left: .7rem;
    float: left;
  }
  header .user p{
    color:white;
    margin-bottom: .08rem;
  }
  header .user>div{
    background: black;
    width: .84rem;
    height: .24rem;
    border-radius: .29rem;
    color:white;
    font-size: .12rem;
    padding: .04rem 0 0 .02rem;;
  }
  header .user div span{
    display: inline-block;
    width: .23rem;
    height: .23rem;
    background: url("../../assets/sprt.png") no-repeat -1.02rem -3.44rem;
    background-size: 3.89rem;
    vertical-align: middle;
  }
  header .sao{
    float: right;
    margin: .2rem .16rem 0 0 ;
  }
  header .sao span{
    display: block;
    width: .4rem;
    height: .4rem;
    background: url("../../assets/sprt.png") no-repeat  -2.52rem -5.86rem;
    background-size: 4rem 7rem;
    transform: translate(50%);
  }
  header .sao strong{
    color: white;
    font-size: .15rem;
  }
  .zhifu{
    padding: .15rem 0;
  }

  .zhifu>div{
    width: 25%;
    float: left;
  }
  .zhifu>div span{
    display: block;
    width: .3rem;
    height: .3rem;
    background: url("../../assets/sprt.png") no-repeat -0rem -6.43rem;
    margin: 0 auto;
    background-size: 4rem 7rem;
  }
  .zhifu>div i{
    font-style: normal;
    font-size: .14rem;
    width: 100%;
    text-align: center;
    display: inline-block;
  }
  .zhifu>div b{
    font-weight: normal;
    font-size: .12rem;
    height: .12rem;
    color: #888888;
    display: block;
    width: 100%;
    text-align: center;
  }
  .gongneng div:first-of-type span{
    background-position: -0rem -6.0rem;;
  }
  .gongneng div:nth-of-type(2) span{
    background-position: -.50rem -6.0rem;;
  }
  .gongneng div:nth-of-type(3) span{
    background-position: -1rem -5.99rem;;
  }
  .gongneng div:last-of-type span{
    background-position: -1.5rem -6.0rem;;
  }

  .gongneng2 div:first-of-type span{
    background-position: -2rem -6rem;;
  }
  .gongneng2 div:nth-of-type(2) span{
    background-position: -2.5rem -6.42rem;;
  }
  .gongneng2 div:nth-of-type(3) span{
    background-position: -2rem -6.44rem;;
  }
  .gongneng2 div:last-of-type span{
    /*background-position: -1.5rem -6.0rem;;*/
    background: url("../../assets/ic.png") no-repeat;
    background-size: .3rem .3rem;
  }
</style>
