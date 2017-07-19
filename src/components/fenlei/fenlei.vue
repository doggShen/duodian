<template>
    <div class="fenlei">
        <div class="header">
            <div>多点超市</div>
            <span>
                <img src="../../../src/common/img/fdj.png" @click="showFn()" />
            </span>
            <span>
                <img src="../../../src/common/img/ld.png" />
            </span>
            <ul>
                <li class="firstLi" @click="flag=true">全部分类</li>
                <li v-for="item in listr" @click="chg(item)">{{ item.catName }}</li>
                <!--" @click="awdead = item.carName;listurl()-->
            </ul>
        </div>
    
        <ul class="sixImg">
    
            <li v-for="(item,index) in fake">
    
                <div class="sixImg_img">
    
                    <img v-lazy="item.img">
    
                    <!--<img src="https://img.dmallcdn.com/cornerMarkV3/11/1_360x360H" style="position:absolute; z-index:10;left:0;top:0;" />-->
    
                </div>
    
                <div class="sixImg_youh">
    
                    <span v-if="item.promotionInfo.matchedPros.length>0?true:false">特价</span>
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
    
                </div>
    
                <p @click="add(item)">+</p>
    
            </li>
    
        </ul>
    
        <div class="qbfl" v-if="flag">
            <ul class="ul_left">
                <li @click="left(index)" v-for="(item,index) in listl" :class="{active : leftIndex == index}">{{ item.catName }}</li>
            </ul>
            <ul class="ul_mid">
                <li v-for="(item, index) in listm" @click="middle(index,item)" :class="{active : midIndex == index}">{{ item.catName }}</li>
            </ul>
            <ul class="ul_right">
                <li v-for="(item, index) in listr" @click="right(index,item)" :class="{active : rightIndex == index}">{{ item.catName }}</li>
            </ul>
        </div>
        <v-search></v-search>
    </div>
</template>
<script>
import search from "../../components/search/search";
export default {
    components: {
        'v-search': search
    },
    data() {

        return {
            listl: [],
            listm: [],
            listr: [],
            flag: false,
            leftIndex: " ",
            midIndex: " ",
            rightIndex: " ",
            awdead: "国产水果",
            fake: []
        }

    },
    methods: {
        showFn() {
            this.$store.commit('porpupFn')
        },
        request() {
            this.$http.get("../../../static/list.json").then(res => {
                // console.log(res.body.data.categoryInfo.categorys)
                this.listl = res.body.data.categoryInfo.categorys;

            })
        },
        left(index) {
            this.listm = this.listl[index].childCmCategories;
            //  console.log(this.listm)
            this.listr = []
            this.leftIndex = index;
        },
        middle(index, item) {
            this.listr = this.listm[index].childCmCategories
            // console.log(item)
            this.midIndex = index;
        },
        right(index, item) {
            this.flag = !this.flag;
            this.rightIndex = index;
            // console.log(item)
            this.awdead = item.catName;
            this.listurl()
        },
        listurl() {
            this.$http.jsonp('https://gatewx.dmall.com/search/result?param=%7B%22keyword%22%3A%22' + this.awdead + '%22%2C%22pairs%22%3A%221-10437%22%2C%22pageNum%22%3A%221%22%2C%22index%22%3A1%2C%22pageSize%22%3A20%7D&token=180DD99790479F6661A7631E63E851E6CCC1220E816FFA5BF9AAE4FEB0983621C91C4E4CDC646F0E4842C6B3BA2EC14BDD5E506DE86092704FFAAA8C5AEEA91DF37A33160A0D9ED37FB12AE98FDA9C3C755C9B6E9D2FD0DBAD0C148B0352D9E55EAD28AC247E0CC4E8B4716430A27F1AB433E93B693163937CB69F046970D15F&source=2&tempid=C7983DF1925000028B468A009BB0185A&pubParam=%7B%7D&_=1499776612193').then(req => {
                // console.log(req.body.data.list);
                this.fake = req.body.data.list;
            })
        },
        chg(item) {
            this.awdead = item.catName;
            this.listurl()
        },
        add(item) {
            console.log(item)
            // this.$store.commit('addList', item)
        },
        // tot() {
        //     var totl = this.$store.state.obj;
        //     // console.log(totl[100255532])
        //     this.$store.state.totlMoney = 0;
        //     for (var i in totl) {
        //         this.$store.state.totlMoney += (totl[i].data.promotionPrice / 100) * totl[i].count;
        //     }
        //     return this.$store.state.totlMoney;
        // }
    },
    mounted() {
        this.request();
        this.listurl()
    }

}
</script>
<style scoped>
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

    width: 33.3%;

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

.sixImg .sixImg_goods_money span:nth-of-type(1) {

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

.header div {
    width: 100%;
    height: .5rem;
    text-align: center;
    line-height: .5rem;
    font-size: .18rem;
    background-color: white;
}

.header>span img {
    width: .25rem;
}

.header>span:first-of-type {
    position: absolute;
    width: .25rem;
    right: .15rem;
    top: .09rem;
}

.header>span:nth-of-type(2) {
    position: absolute;
    right: .5rem;
    top: .1rem;
}

.firstLi {
    padding-left: .3rem;
    width: .7rem;
    background: url(../../../src/common/img/more.png) no-repeat;
    background-size: 20px;
    background-position: 10px;
    background-color: white;
}

.header>ul {
    display: flex;
    width: 100%;
    background-color: white;
}

.header>ul>li {
    width: .7rem;
    height: .3rem;
    text-align: center;
    line-height: .3rem;
}

.qbfl {
    width: 100%;
    height: 90%;
    background-color: yellowgreen;
    position: fixed;
    bottom: 0;
}


.qbfl ul {
    width: 33.33%;
    float: left;
    height: 100%;
}

.qbfl ul li {
    height: .44rem;
    text-align: center;
    line-height: .44rem;
    background-color: rgba(1, 1, 1, 0)
}

.qbfl .ul_left {
    background-color: #fff;
}

.qbfl .ul_mid {
    background-color: #f6f6f6;
}

.qbfl .ul_right {
    background-color: #f0f0f0;
}

.active {
    color: #ff712b;
    background-color: #f0f0f0;
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