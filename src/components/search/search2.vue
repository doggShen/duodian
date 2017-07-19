<template>
    <div class="search_box" v-show="showFn1">
        <div class="search_header">
            <span @click="closeFn1()">
                <</span>
                    <input placeholder="搜索您想要的商品"  v-model="msg" @keydown.enter="keygo()"/>
        </div>
        <div class="fake_div">
        </div>
               
        <div class="sec">
            <div class="nav">
                <span @click="xlgo()">销量</span>
                <span @click="peicego()">价格</span>
            </div>
            
    
        </div>
        <ul class="sixImg">
    
                <li v-for="item in jsonpFn">
    
                    <div class="sixImg_img">
    
                        <img :src="item.img">
    
                        <!--<img src="https://img.dmallcdn.com/cornerMarkV3/11/1_360x360H" style="position:absolute; z-index:10;left:0;top:0;" />-->
    
                    </div>
    
                    <div class="sixImg_youh">
    
                        <!--<span v-if="item.promotionInfo.matchedPros.length>0?true:false">特价</span>-->
                        <!--v-if="item.matchedPros[0].displayInfo=='特价'"-->
                        <!--<span>买1赠1</span>-->
    
                    </div>
    
                    <div class="sixImg_goods_name">
    
                        {{item.title}}
                       
    
                    </div>
    
                    <div class="sixImg_goods_money">
    
                        <!--<span>￥10</span>-->
    
                        <br>
    
                        <span>￥{{(item.price/100).toFixed(2)}}</span>
                        <!--<span>10.00</span>-->
    
                    </div>
    
                    <p>+</p>
    
                </li>
    
            </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            flag:true,
            flagq:true,
            msg:" "
        }
    },
    computed: {
        showFn1() {
            return this.$store.state.show1;
        },
        jsonpFn(){
            // console.log(this.$store.state.cans)
           return this.$store.state.cans
        }

    },
    methods: {
        closeFn1() {
            return this.$store.commit('porpupFn1')
        },
        peicego(){
            if(this.flag){
                this.$store.state.cans.sort(function(a,b){
                    return a.price-b.price;
                })  
            }else{
                this.$store.state.cans.sort(function(a,b){
                    return b.price-a.price;
                })  
            }
            this.flag = !this.flag
        },
        xlgo(){
            if(this.flagq){
                this.$store.state.cans.sort(function(a,b){
                    return a.stock-b.stock;
                })  
            }else{
                this.$store.state.cans.sort(function(a,b){
                    return b.stock-a.stock;
                })  
            }
            this.flagq = !this.flagq
        },
        keygo(){
            this.$http.jsonp('https://gatewx.dmall.com/search/result?param=%7B%22keyword%22%3A%22'+this.msg+'%22%2C%22pairs%22%3A%221-10437%22%2C%22pageNum%22%3A%221%22%2C%22index%22%3A1%2C%22pageSize%22%3A20%7D&token=180DD99790479F6661A7631E63E851E6CCC1220E816FFA5BF9AAE4FEB0983621C91C4E4CDC646F0E4842C6B3BA2EC14BDD5E506DE86092704FFAAA8C5AEEA91DF37A33160A0D9ED37FB12AE98FDA9C3C755C9B6E9D2FD0DBAD0C148B0352D9E55EAD28AC247E0CC4E8B4716430A27F1AB433E93B693163937CB69F046970D15F&source=2&tempid=C7983DF1925000028B468A009BB0185A&pubParam=%7B%7D&_=1499776612193').then(res => {
                this.$store.state.cans = res.body.data.list;
            })
        }
    },
    
}
</script>
<style scoped>
    .search_header {
        width: 100%;
        height: .44rem;
        line-height: .44rem;
        background-color: white;
        box-shadow: 3px 0 10px #999;
        position: fixed;
        top: 0;
        left: 0;
    }

    .search_header span {
        display: inline-block;
        width: .32rem;
        height: .32rem;
        border-radius: 50%;
        background-color: #333;
        color: #fff;
        text-align: center;
        line-height: .32rem;
        margin-left: .1rem;
        margin-right: .05rem;
    }

    .search_header input {
        width: 72%;
        height: .3rem;
        padding-left: .27rem;
        padding-right: .16rem;
        border-radius: 2px;
        border: 1px solid #999;
    }

    .fake_div {
        width: 100%;
        height: .44rem;
    }

    .hot {
        height: .46rem;
        line-height: .46rem;
        text-indent: .1rem;
        color: #cbcbcb;
        border-bottom: 1px solid #cbcbcb;
        background-color: white;
    }

    .myUl {
        /*/*display: flex;*/
        flex-wrap: wrap;
        position: relative;
        background-color: white;
        /*height: 100%;*/
        overflow: auto;

    }

    .myUl li {
        /*float: left;*/
        box-sizing: border-box;
        width: 49%;
        margin-left: 5px;
        margin-top: 5px;
        padding: 6px 10px;
        border: 1px solid #edefef;
        border-radius: 18px;
    }

    .nav {
        height: .4rem;
        width: 100%；
    }

    .nav span {
        display: inline-block;
        width: 49%;
        text-align: center;
        line-height: .4rem;
        background-color: white;
    }

    .sixImg .sixImg_img img {

        width: 1.65rem;
        padding:.16rem;
    }

    .sixImg_youh span {

        padding: .03rem .06rem;

        margin: 0 1px;

        color: white;

        display: inline-block;

        background-color: #ff6161;

        border-radius: 3px;
    }

    .search_box .sixImg li {

        float: left;

        width: 49%;
        margin-top: .05rem;

        /*height: 2.46rem;*/

        padding: .1rem .04rem;

        border: 1px solid #f4f4f4;

        /*height: 2.56rem;*/
        
        position: relative;
    }

    .sixImg div {

        width: 100%;
        overflow: hidden;
        /*height: 2.56rem;*/
    }

    .sixImg_goods_name {

        overflow: hidden;

        height: .18rem;

        margin-bottom: .10rem;

        color: #21292b;

        font-size: .14rem;

        line-height: .18rem;
    }

    .sixImg .sixImg_goods_money {
        font-size: .12rem;
    }

    .sixImg .sixImg_goods_money span:nth-of-type(1) {

        font-size: .14rem;

        color: #ff712b;
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

    .search_box {
        position: fixed;
        top: 0;
        z-index: 999;
        /*height: 100%;*/
        background-color: white;
        width: 100%;
    }

    .sixImg{
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        background-color: #f6f6f6;
        overflow-y: auto;
    }
</style>
