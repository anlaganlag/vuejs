<template>
  <div id="app">
    <Stack :arr="calImg(dealed[0])" />

    <h1>底牌</h1>
    <Stack :arr="calImg(dealed[1])" />

    <h1>第一玩家</h1>
    <Stack :arr="calImg(dealed[2])" />

    <h1>第二玩家</h1>

    <Stack :arr="calImg(dealed[3])" />

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
  computed: {
    dealed: function () {
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
      const r = shuffled.slice(0, 3).sort((a, b) => b.value - a.value);
      const h1 = shuffled.slice(3, 20).sort((a, b) => b.value - a.value);
      const h2 = shuffled.slice(20, 37).sort((a, b) => b.value - a.value);
      const h3 = shuffled.slice(37, 54).sort((a, b) => b.value - a.value);
      console.log(r[0].card);
      return [r, h1, h2, h3];
    },
  },
  methods: {
    calImg(arr) {
      return arr.map(
        // (i) => `static/vue/imgs/${i}.png`
        (i) => `./imgs/${i.card}.png`
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
