<template>
  <div id="app">
    {{ $store.state.count}}
    <button @click="add">+</button>
    <button @click="addN(5)">+5</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods:{
    add(){
      this.$store.commit("add")
    },
    addN(count){
      this.$store.commit('addN',count)
    },
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
