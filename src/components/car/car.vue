<template>
    <!--设置整体的宽度，也是最外层的包裹，整体以rem布局，根font-size为100px-->
    <div class="Cart-w">
        <!--头部标题-->
        <div class="Cart-beader">
            购物车
        </div>
        <!--头部地址-->
        <div class="Cart-site">
            <div>
                <p>多点君需要你的详细地址哟~</p>
                <p>送至 : 西三小筑球场 </p>
            </div>
            <!--&gt；符号-->
            <span id="a666"></span>
        </div>
        <!--多点超市天通院店-->
        <h4 class="Cart-mu">
            <span @click="allCheck()">
                <!--两个对号，隐藏掉一个-->
                <ul>
                    <li>ヘ</li>
                    <li v-if="this.che">ヘ</li>
                </ul>
            </span>
            <span></span>
            <span>多点超市(天通苑店)</span>
            <span></span>
        </h4>
        <!--购物车，复制4个-->
        <div class="Cart-cart" v-for="item in myCar" v-if="item.count" :key="item.id">
            <span @click="check(item)">
                <ul>
                    <li>ヘ</li>
                    <li v-if="item.isCheck">ヘ</li>
                </ul>
            </span>
            <div class="Cart-cart_D">
                <div>
                    <p>{{ item.data.name }}</p>
                    <p>
                        <span>￥</span>{{ ((item.data.promotionPrice)/100).toFixed(2) }}</p>
                </div>
                <div>
                    <ul>
                        <li @click="redu(item)">-</li>
                        <span>{{item.count}}</span>
                        <li @click="add(item)">+</li>
                    </ul>
                </div>
            </div>
    
        </div>
    
        <!--结算-->
        <div class="Cart-free">
            <span></span>
            <div>
                新人免邮啦！满19元即可享受特权~
            </div>
        </div>
        <div class="Cart-total">
            <div class="Cart-total_D">
                <p>合计：
                    <span>￥</span>
                    <span>{{totl.toFixed(2)}}</span>（不含运费）</p>
                <p>促销以抵金额：￥00.00</p>
            </div>
            <div>
                选好了
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            che: false,
            num: 0,
            num2: 0
        }
    },
    computed: {
        myCar() {
            return this.$store.state.obj;
        },
        totl() {
            return this.$store.state.totlMoney;
        }
    },
    methods: {
        add(item) {
            // console.log(item)
            this.$store.commit('addList', item);
            this.tot(item);
        },
        tot(item) {
            var totl = this.$store.state.obj;
            // console.log(totl[100255532])
            this.$store.state.totlMoney = 0;
            this.$store.state.totlcount = 0;
            for (var i in totl) {
                if (totl[i].isCheck == true) {
                    this.$store.state.totlcount += totl[i].count;
                    this.$store.state.totlMoney += (totl[i].data.promotionPrice / 100) * totl[i].count;
                }
                if (this.num == this.num2) {
                    this.che = true;
                }
            }




            return this.$store.state.totlMoney;
        },
        redu(item) {
            this.$store.commit('reduList', item);
            this.tot(item);
        },
        check(item) {
            item.isCheck = !item.isCheck;
            // console.log(item.isCheck);
            var totl = this.$store.state.obj;
            this.num = 0;
            this.num2 = 0
            for (var i in totl) {
                if (totl[i].isCheck == false) {
                    this.che = false;
                } else {
                    this.num++;
                }
                this.num2++;
            }

            console.log(this.num)
            console.log(this.num2)
            this.tot(item);
        },
        allCheck() {
            var totl = this.$store.state.obj;
            this.che = !this.che;
            if (this.che) {
                for (var i in totl) {
                    totl[i].isCheck = true;
                }
            } else {
                for (var i in totl) {
                    totl[i].isCheck = false;
                }
            }
            this.tot();
        }
    },
    created() {
        this.tot();
    }
}
</script>
<style>
body {
    background: #f6f6f6;
}

.Cart-w {
    width: 100%;
    background: #f6f6f6;
}

.Cart-beader {
    height: 0.42rem;
    background: #fff;
    font-size: 0.16rem;
    font-weight: bold;
    text-align: center;
    line-height: 0.42rem;
    box-shadow: 0 0 0.1rem rgba(0, 0, 0, .2);
    color: #999;
}

.Cart-site {
    padding-top: 0.001rem;
    margin-top: 0.1rem;
    height: 0.68rem;
    background: url(https://static.dmall.com/kayak-project/cart/dist/cart/common/image/shoppingline.png) repeat-x 0 0, #fff;
    background-size: 0.35rem 0.02rem;
    position: relative;
}

.Cart-site>div {
    height: 0.48rem;
    width: 90%;
    margin: 0.1rem 0 0 3%;
}

.Cart-site>div>p {
    line-height: 0.24rem;
}

.Cart-site>div>p:last-child {
    color: grey;
    font-size: 0.13rem;
}

#a666::after {
    content: " ";
    display: inline-block;
    /*-webkit-transform: rotate(45deg);*/
    transform: rotate(45deg);
    height: 0.1rem;
    width: 0.1rem;
    border-width: 0.02rem 0.02rem 0 0;
    border-color: #c8cccd;
    border-style: solid;
    position: absolute;
    top: 50%;
    margin-top: -0.05rem;
    right: 3%;
}

.Cart-mu {
    width: 100%;
    height: 0.44rem;
    margin-top: 0.1rem;
    background: #fff;
    padding-top: 0.0001rem;
    margin-top: 0.1rem;
}

.Cart-mu>span {
    height: 0.44rem;
    float: left;
}

.Cart-mu>span:first-child {
    width: 8%;
    position: relative;
}

.Cart-mu>span:first-child li {
    width: 0.22rem;
    height: 0.22rem;
    border-radius: 50%;
    text-align: center;
    line-height: 0.22rem;
    transform: rotateX(180deg);
    background: #ff712b;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -0.11rem;
    margin-left: -0.07rem;
}

.Cart-mu>span:first-child li:first-child {
    display: none;
}

.Cart-mu>span:nth-child(2) {
    width: 8%;
    background: url(https://img.dmallcdn.com/bizItem/201610/5491eb6a-8a7b-4621-89ad-f22e904b6e7f)no-repeat 0.05rem center;
    background-size: 0.3rem 0.2rem;
}

.Cart-mu>span:nth-child(3) {
    width: 71%;
    line-height: 0.44rem;
    color: grey;
    font-size: 0.13rem;
    font-weight: normal;
    text-indent: 0.05rem;
}

.Cart-mu>span:last-child {
    position: relative;
    width: 13%;
}

.Cart-mu>span:nth-child(4)::after {
    content: " ";
    display: inline-block;
    /*-webkit-transform: rotate(45deg);*/
    transform: rotate(45deg);
    height: 0.1rem;
    width: 0.1rem;
    border-width: 0.02rem 0.02rem 0 0;
    border-color: #c8cccd;
    border-style: solid;
    position: absolute;
    top: 50%;
    margin-top: -0.05rem;
    right: 0.12rem;
}

.Cart-cart {
    margin-top: 0.01rem;
    height: 0.7rem;
    background: #fff;
}

.Cart-cart>span {
    width: 8%;
    height: 0.7rem;
    display: inline-block;
    position: relative;
}

.Cart-cart>span:first-child li {
    width: 0.22rem;
    height: 0.22rem;
    border-radius: 50%;
    text-align: center;
    line-height: 0.22rem;
    transform: rotateX(180deg);
    background: #ff712b;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -0.11rem;
    margin-left: -0.07rem;
}

.Cart-cart>span:first-child li:first-child {
    display: none;
}

.Cart-cart_D {
    width: 90%;
    height: 0.7rem;
    display: inline-block;
    vertical-align: top;
    position: relative;
}

.Cart-cart_D>div:first-child {
    position: absolute;
    top: 50%;
    margin-top: -0.25rem;
}

.Cart-cart_D>div>p {
    height: 0.25rem;
    line-height: 0.25rem;
    text-indent: 0.03rem;
}

.Cart-cart_D>div>p:first-child {
    font-size: 0.13rem;
}

.Cart-cart_D>div>p:nth-child(2) {
    font-size: 0.16rem;
    font-weight: 900;
}

.Cart-cart_D>div>p:nth-child(2)>span {
    font-weight: normal;
    font-size: 0.13rem;
}

.Cart-cart_D>div:last-child {
    width: 1rem;
    height: 0.7rem;
    position: absolute;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.Cart-cart_D>div:last-child li {
    display: inline-block;
    width: 0.3rem;
    height: 0.2rem;
    border: 0.01rem solid #ff712b;
    font-size: 0.25rem;
    text-align: center;
    line-height: 0.18rem;
    color: #ff712b;
}

.Cart-cart_D>div:last-child>ul>span {
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    text-align: center;
    line-height: 0.2rem;
    font-size: 0.14rem;
    font-weight: bold;
    vertical-align: text-top;
}

.Cart-free {
    height: 0.34rem;
    background: #fff7eb;
}

.Cart-free>span {
    display: inline-block;
    width: 8%;
    height: 0.34rem;
    background: url(https://static.dmall.com/kayak-project/kayak-lib/dist/kayak-lib/globalstyle/sprt.png?t=201702072136)no-repeat -0.4rem -2.22rem;
    background-size: 4.00rem 6.0rem;
}

.Cart-free>div {
    width: 90%;
    display: inline-block;
    line-height: 0.34rem;
    font-size: 0.13rem;
    color: #21292b;
    vertical-align: top;
}

.Cart-total {
    height: 0.65rem;
    position: relative;
    background: #fff;
}

.Cart-total_D {
    width: 3.55rem;
    height: 0.4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -0.2rem;
    margin-left: -1.75rem;
}

.Cart-total_D>p:first-child {
    height: 0.24rem;
    line-height: 0.24rem;
    font-size: 0.14rem;
    color: #ff712b;
}

.Cart-total_D>p:first-child>span:first-child {
    vertical-align: top;
    font-size: 0.12rem;
}

.Cart-total_D>p:first-child>span:last-child {
    font-size: 0.18rem;
    font-weight: 900;
}

.Cart-total_D>p:last-child {
    height: 0.16rem;
    margin-top: 0.08rem;
    line-height: 0.16rem;
    font-size: 0.12rem;
    color: grey;
}

.Cart-total>div:last-child {
    position: absolute;
    right: 0.1rem;
    top: 50%;
    margin-top: -0.22rem;
    width: 0.84rem;
    height: 0.44rem;
    background: #ff712b;
    text-align: center;
    line-height: 0.44rem;
    color: #fff;
}
</style>