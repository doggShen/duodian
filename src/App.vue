<template>
  <div id="app">
      <v-content></v-content>
      <v-footer></v-footer>
  </div>
</template>

<script>
import Content from "./components/content/content";
import Footer from "./components/footer/footer";
export default {
  name: 'app',
  components:{
          "v-footer":Footer,
          "v-content":Content
    }
}
</script>

<style>
*{
margin:0;
padding:0;
}
html{
  background-color: #f6f6f6;
}
li{
  background-color: white;
}
</style>
