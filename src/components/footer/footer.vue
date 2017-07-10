<template>
      <div class="footer">
            <ul>
                <li>
                    <router-link to="/home">
                            <i class="icon iconfont icon-shouye"></i>
                            <p>首页</p>
                      </router-link>
                </li>
                <li>
                    <router-link to="/fenlei">
                           <i class="icon iconfont icon-fenlei1"></i>
                            <p>分类</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/vip">
                            <i class="icon iconfont icon-huiyuan"></i>
                            <p>会员</p>
                    </router-link>
                </li>
                <li>
                  <router-link to="/car">
                          <i class="icon iconfont icon-gouwuche-copy"></i>
                          <p>购物车<p/>
                  </router-link>
                </li>
                <li>
                  <router-link to="/mine">
                          <i class="icon iconfont icon-wode"></i>
                          <p>我的<p/>
                  </router-link>
                </li>
            </ul>
      </div>
</template>

<script>
</script>

<style>
.footer{height:0.5rem;background:#fff;position:absolute;left:0;right:0;bottom:0;border-top:1px solid #ccc;}
.footer ul {display:flex;width:100%;align-items: center;height:0.5rem}
.footer ul li{width:33.33%;text-align:center;font-size:0.14rem;}
.footer ul li i{font-size:0.2rem}
.footer ul li a{color:#333}
.footer ul li .router-link-active{color:#d12f38}
</style>
