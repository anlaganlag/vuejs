<template>
  <div id="app">
    <!-- <Stack :arr="calImg(pick)" /> -->

    <Stack v-show="showpick" :arr="calImg(pick)" />
    <h1>赖子</h1>

    <Stack v-show="showit" :arr="calImg(dealed[0])" />
    <button
      @click="
        () => {
          showit = !showit;
        }
      "
    >
      底牌
    </button>
        <button
      @click="
        () => {
          show1 = !show1;
        }
      "
    >
      1
    </button>
        <button
      @click="
        () => {
          show2 = !show2;
        }
      "
    >
      2
    </button>

        <button
      @click="
        () => {
          show3 = !show3;
        }
      "
    >
      3
    </button>

        <button
      @click="
        () => {
          showpick = !showpick;
        }
      "
    >
      显示赖子
    </button>

    <Stack v-show="show1" :arr="calImg(dealed[1])" />

    <h1>第一玩家</h1>
    <Stack v-show="show2" :arr="calImg(dealed[2])" />

    <h1>第二玩家</h1>

    <Stack v-show="show3" :arr="calImg(dealed[3])" />

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
      showpick:false,
      showit: false,
      show1: true,
      show2: false,
      show3: false,
    };
  },
  computed: {
    // showButton: function () {
    //   this.showit = !this.showit;
    //   return
    // },
    pick: function () {
      let arr = this.all.slice(0);
      let idx1 = Math.floor(Math.random() * arr.length);
      const res1 = arr.splice(idx1, 1);

      let idx2 = Math.floor(Math.random() * arr.length);
      const res2 = arr.splice(idx2, 1);
      // console.log([...res1, ...res2]);
      return [...res1, ...res2];
    },
    dealed: function () {
      let shuffled = this.all.slice(0);
      let temp = null;
      let i = shuffled.length;
      let index = null;

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
      return [r, h1, h2, h3];
    },
  },
  methods: {
    calImg(arr) {
      return arr.map(
        (i) => `./imgs/${i.card}.png`
        // (i) => `static/vue/imgs/${i.card}.png`
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
