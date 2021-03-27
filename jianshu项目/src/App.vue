<template>
  <div id="app">
    <!--首页里面永远是固定的东西-->
    <ul class="nav nav-tabs">
      <li><router-link to="/index">首页</router-link>  <!--用于点击查看组件--></li>
      <li><router-link to="/micro">学位课</router-link>  <!--用于点击查看组件--></li>
      <li><router-link to="/course">课程</router-link></li>  <!--用于点击查看组件-->
      <li><router-link to="/news">深科技</router-link></li>  <!--用于点击查看组件-->
      <!--如果已经登录了，就不用在登录了，在页面还是显示当前用户和注销，如果没有登录就显示登录-->
      <li v-if="this.$store.state.username">
        <span><a>欢迎{{ this.$store.state.username }}登录</a></span>
        <span><a @click="logout()">注销</a></span>
      </li>
      <li v-else> <router-link to="/login">登录</router-link></li>
    </ul>
   <router-view/>  <!--组件显示的位置-->
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    logout(){
      this.$store.state.username=''
      this.$store.state.token=''
    }
  }
}
</script>

<style>


</style>

