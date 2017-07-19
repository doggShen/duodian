import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    show: false,
    show1: false,
    cans: [],
    obj: {},
    content: 1,
    totlMoney: 0,
    totlcount: 0
}
const mutations = {
    porpupFn(state) {
        state.show = !state.show;
    },
    porpupFn1(state) {
        state.show1 = !state.show1;
    },
    fenlei(state, req) {
        state.cans = req.body.data.list;
    },
    addList(state, i) {
        // for (var i = 0; i < state.cargoList.length; i++) {
        //     var flg = state.cargoList[i].storeId == item.storeId ? false : true;
        //     console.log(flg)
        //     if (flg) {
        //         // 商品第一次被推进去讲number 属性赋值为1
        //         item.number = 1;
        //         // 推进去就是默认被选中
        //         item.isCheck = true;
        //         // 将该商品推到数组
        //         state.cargoList.push(item);
        //     } else {
        //         // 否则商品数量加1
        //         item.number++;
        //     }
        // }
        // console.log(i);
        if (!state.obj[i.spId]) {
            i.count = state.content;
            i.isCheck = true;
            state.obj[i.spId] = i;
        } else {
            i.count = i.count + 1;
        }

    },
    addListq(state, i) {
        if (!state.obj[i.skuId]) {
            i.count = state.content;
            i.isCheck = true;
            state.obj[i.skuId] = i;
        } else {
            i.count = i.count + 1;
        }

    },
    reduList(state, i) {

        if (i.count) {
            i.count--
        } else {
            delete state.obj.i
        }
    }


}
const actions = {

}

const getters = {

}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})