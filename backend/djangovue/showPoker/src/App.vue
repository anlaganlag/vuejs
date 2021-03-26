<template>
  <div id="app">
    <Stack :arr="calImg(py[3])" />
    <h1>底牌</h1>
    <Stack :arr="calImg(py[0])" />
    <h1>第一玩家</h1>
    <Stack :arr="calImg(py[1])" />
    <h1>第二玩家</h1>

    <Stack :arr="calImg(py[2])" />
    <h1>第三玩家</h1>
  </div>
</template>

<script>
import Stack from "./components/Stack.vue";
import  py from "./data";
export default {
  name: "App",
  data() {
    console.log(py.data);
    return {
py:py.data
  }},
  methods: {
    calImg(arr) {
      return arr.map(
        (i) => `static/vue/imgs/${i}.png`
      );
    },
  },
  components: {
    Stack,
  },
};
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
