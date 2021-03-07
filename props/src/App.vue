<template>
  <h3> {{ msg}} ...</h3>
  <my-component v-bind:gal="gal" v-bind:parentMsg="msg"></my-component>
</template>

<script>
import MyComponent from './components/MyComponent.vue'

export default {
  name: 'App',
  data (){
    return {
      msg:"这是外层组件的msg",
      gal:"牛逼了"
    }
  },
  components: {
    MyComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
