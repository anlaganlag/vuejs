<template>
  <div id="app">
    <!-- <Stack :arr="calImg(pick)" /> -->

    <Stack v-show="showpick" :arr="calOriImg(pick)" class="forAllCard" />
    <h1>赖子</h1>
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
          showr1 = true;


          showr2 = false;
          showr3 = false;
        }
      "
    >
      1
    </button>
    <button
      @click="
        () => {
          show2 = !show2;
          showr2 = true;

          show1 = true;
          show3 = true;
          showr1 = false;
          showr3 = false;
        }
      "
    >
      2
    </button>

    <button
      @click="
        () => {
          show3 = !show3;
          showr3 = true;

          showr1 = false;
          showr2 = false;
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


    <h1>底牌</h1>

    <Stack v-show="showr1" v-if="show1" :arr="calImg(sorted(dealed[1]))" />
    <Stack v-show="showr1" v-else :arr="calImg(sorted(completed[0]))" />

    <h1>第一玩家</h1>
    <Stack v-show="showr2" v-if="show2" :arr="calImg(sorted(dealed[2]))" />
    <Stack v-show="showr2" v-else :arr="calImg(sorted(completed[1]))" />

    <h1>第二玩家</h1>

    <Stack v-show="showr3" v-if="show3" :arr="calImg(sorted(dealed[3]))" />
    <Stack v-show="showr3" v-else :arr="calImg(sorted(completed[2]))" />

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
      all: py.allCard1,
      all2: py.allCard2,
      showpick: false,
      showit: true,
      show1: true,
      showr1: true,
      show2: false,
      show3: false,
      pickone: [],
      pickoneNum: [],
      cc: false,
    };
  },
  created: function () {
    // `this` 指向 vm 实例
    this.getPicked();
  },
  computed: {
    // showButton: function () {
    //   this.showit = !this.showit;
    //   return
    // },
    pick: function () {
      let arr = this.all.slice(0, 52);
      let idx1 = Math.floor(Math.random() * arr.length);
      const res1 = arr.splice(idx1, 1);
      console.log(res1[0].card);

      let idx2 = Math.floor(Math.random() * arr.length);
      const res2 = arr.splice(idx2, 1);
      console.log(res2[0].card);

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
      const r = this.getCard(shuffled.slice(0, 3));
      const h1 = this.getCard(shuffled.slice(3, 20));
      const h2 = this.getCard(shuffled.slice(20, 37));
      const h3 = this.getCard(shuffled.slice(37, 54));
      return [r, h1, h2, h3];
    },
    completed: function () {
      const hands = this.dealed.slice(1);
      const ans = hands.map((i) => i.concat(this.dealed[0]));
      return ans;
    },
  },
  methods: {
    sorted: function (l) {
      let arr = l;
      arr.sort((a, b) => this.all2[b] - this.all2[a]);
      return arr;
    },
    getCard: function (l) {
      return l.map((i) => i.card);
    },
    getPicked() {
      this.pickone = [this.pick[0].card, this.pick[1].card];
      this.pickoneNum = this.pickone.map((i) => i[0]);
    },
    calImg(arr) {
      return arr.map(
        (i) => {
          const ans = this.pickoneNum.includes(i[0])
            ? `./imgs/${i}t.png`
            : `./imgs/${i}.png`;
          return ans;
        }
        // (i) => `static/vue/imgs/${i.card}.png`
      );
    },
    calOriImg(arr) {
      return arr.map(
        (i) => {
          return `./imgs/${i.card}.png`;
        }
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
.forAllCard img {
  border: 5px solid red;
}
h1 {
  color: white;
}
</style>
