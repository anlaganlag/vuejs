<template>
  <div id="app">
    <Stack :arr="calImg(list)" />
  </div>
</template>

<script>
import Stack from './components/Stack.vue'

export default {
  name: 'App',
  data(){
    return {
      list:["X1", "X2", 2, 2, 2, 2, "A", "A", "A", "K", "Q", "Q", 0, 0, 0, 9, 9] }
  },
  methods:{
        calImg(arr) {
                const l = ["S","H","D","C"]
      return arr.map((i) => `./imgs/${i+l[ Math.floor(Math.random()*(l.length))]}.png`);
    },

  },
  components: {
    Stack
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
