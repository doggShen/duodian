<template>
<div class="w">
    <div class="Mem-header">
        <div class="Mem-title">
            <p>Hello{{a}}</p>
            <ul class="Mem-centre">
                 <li>
                    <span></span>
                    <p>会员中心</p>
                </li>
                <li>
                    <span></span>
                    <p>会员专属码</p>
                </li>
            </ul>
        </div>
        <ul class="Mem-nva">
            <li v-for="item in b" :key="item.id" >
                <img :src="item.logo" alt="">
                <p>{{item.name}}</p>
            </li>
        </ul>
        <ul class="Mem-inte">
            <li v-for="item in c" :key="item.id" >
                <p>{{item.nanber}}</p>
                <p>{{item.name}}</p>
            </li>
        </ul>
    </div>
    <div class="Mem-notice">
        <span>{{e.not1}}</span>
        <p>{{e.not2}}</p>
         
    </div>
    <img :src="f" alt="" class="Mem-dre">
    <img :src="g"  class="Mem-pay">
    <img :src="s" alt="" class="Mem-vitalr">
</div>
</template>
<script>

    export default{
        data () {
        return {
          a:'',
          b:[],
          c:[],
          e:{},
          f:"",
          g:"",
          s:""
        }
    },
    methods: {
        //获取数据的
        getData:function(){
            var $this=this;
            this.$http.get('../../static/mem.json').then(function(res){
               $this.s=res.data.vitalr;
               $this.g=res.data.pay;
               $this.f=res.data.dre;
               $this.e=res.data.notice;
               $this.c=res.data.inte;
               $this.b=res.data.nva;
               $this.a=res.data.data.levelName;
            })
            
        }
    },
    created () {
        this.getData();
    }


    }      
</script>
<style>
.w{
    width:100%;
}
.Mem-header{
    height:2.53rem;
    position:relative;
}
.Mem-title{
    height:1.7rem;
    background:#fca66c;
}
.Mem-title>p{
    height:0.3rem;
    line-height:0.4rem;
    color:#fff;
    text-align: center;
    vertical-align: text-bottom;
    padding: 0.1rem 0.15rem 0;
    font-size: 0.16rem;
    font-weight: 400;
}
.Mem-centre{
    margin-top:0.1rem;
    height:0.55rem;
    display:flex;
}
.Mem-centre>li{
    width:50%;
    text-align:center;
    background-color: #fca66c;
}
.Mem-centre>li>p{
    font-size:0.12rem;
    color:#fff;
}
.Mem-centre>li:first-child>span{
    width:0.4rem;
    height:0.4rem;
    display: inline-block;
    background: url(https://static.dmall.com/kayak-project/active/html/dist/image/sprt.png)no-repeat -0.5rem 0rem;
    background-size:2rem 1rem; 
}
.Mem-centre>li:last-child>span{
    width:0.4rem;
    height:0.4rem;
    display: inline-block;
    background: url(https://static.dmall.com/kayak-project/active/html/dist/image/sprt.png)no-repeat ;
    background-size:2rem 1rem; 
}

.Mem-nva{
    height:0.83rem;
    display:flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    background-color: white;
}
.Mem-nva>li{
    width:20%;
    text-align:center;
}
.Mem-nva>li>p{
    font-size:0.12rem;
    color: #281e29;
    font-size: 0.11rem;
}
.Mem-nva>li>img{
    width:0.3rem;
    height:0.3rem;
}
.Mem-inte{
    width:90%;
    height:0.62rem;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    top:1.2rem;
    left:50%;
    margin-left:-45%;
    background:#fff;
    border-radius: 0.03rem 0.03rem 0 0;
    box-shadow: 0 0 0.05rem 0.01rem rgba(0,0,0,.1);
}
.Mem-inte>li{
    height:0.42rem;
    width:25%;
    text-align:center;
}
.Mem-inte>li>p{
    font-size:0.12rem;
    height:0.18rem;
    line-height:0.18rem;
}
.Mem-inte>li>p:last-child{
    color:#281e29;
    font-size:0.12rem;
}
.Mem-notice{
    height:0.4rem;
    margin-top:0.1rem;
    line-height:0.4rem;
    font-size:0.12rem;
}
.Mem-notice>span{
    width: 18%;
    display: inline-block;
    font-size:0.14rem;
    color: #404040;
    font-weight:bold; 
    text-align: right;
}
.Mem-notice>p{
    width: 60%;
    display: inline-block;
    color: #333;
}
.Mem-dre{
     width:100%;
     height:2.36rem;
      width: 100%;
}
.Mem-pay{
    height:0.805rem;
    display:flex;
     width: 100%;
      margin-top:-0.04rem; 
}
.Mem-vitalr{
    height:6.99rem;
    width: 100%;
}
</style>