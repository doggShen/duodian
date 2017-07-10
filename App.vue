<template>
  <div id="app">
  
    <router-view></router-view>
    <ul>
      <router-link tag="li" to="/">外卖</router-link>
      <router-link tag="li" to="/find">发现</router-link>
      <router-link tag="li" to="/order">订单</router-link>
      <router-link tag="li" to="/mine">我的</router-link>
    </ul>
  
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
  padding: 0;
  margin: 0
}


/*html{
  font-size: 100px;
}*/

ul {
  list-style: none;
  display: flex;
  align-items: center;
  position: fixed;
  line-height: .5rem;
  background-color: #dfdfdf;
  bottom: 0;
  left: 0;
  right: 0;
  height: .5rem;
}

ul li {
  font-size: .14rem;
  width: 25%;
  text-align: center;
}
</style>
