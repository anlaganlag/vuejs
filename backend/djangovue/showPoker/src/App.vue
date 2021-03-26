<template>
  <div id="app">
    <Stack :arr="calImg(dealCards()[0])" />

    <h1>底牌</h1>
    <Stack :arr="calImg(dealCards()[1].sort((a, b) => b.value - a.value))" />

    <h1>第一玩家</h1>
    <Stack :arr="calImg(dealCards()[2].sort((a, b) => b.value - a.value))" />


    <h1>第二玩家</h1>
    <Stack :arr="calImg(dealCards()[3].sort((a, b) => b.value - a.value))" />


    <h1>第三玩家</h1>
  </div>
</template>

<script>
import Stack from "./components/Stack.vue";
import py from "./data";
export default {
  name: "App",
  data() {
    return {
      all: py.allCard,
    };
  },
  methods: {
    calImg(arr) {
      return arr.map(
        // (i) => `static/vue/imgs/${i}.png`
        (i) => `./imgs/${i.card}.png`
      );
    },
    dealCards() {
      const arr = this.all;
      var shuffled = arr.slice(0),
        i = arr.length,
        temp,
        index;
      while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
      }
      const r = shuffled.slice(0,3)
      const h1 = shuffled.slice(3,20)
      const h2 = shuffled.slice(20,37)
      const h3 = shuffled.slice(37,54)
      return [r,h1,h2,h3]
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
