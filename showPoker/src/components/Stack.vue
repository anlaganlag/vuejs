<template>
  <div class="stack">
    <ul>
      <li v-for="(i, idx) in arr" :key="i+Math.random()" :class="calculate(idx)">
        <img :src=i />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Stack",
  data() {
    return {
      styleObject: {
        color: "red",
        zIndex: 0,
        left: "75px",
      },
    };
  },
  methods: {
    calculate(index) {
      return `card card${index}`;
    },
    getImg(i) {
      const l = ["S","H","D","C"]
      let idx = Math.floor(Math.random()*4)
      return `./imgs/${i+l[idx]}.png`;
    },

  },

  props: {
    arr: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.stack li {
  list-style-type: none;
}
.card {
  position: absolute;
}
.card0 {
  left: 0px;
  z-index: 0;
}
.card1 {
  left: 100px;
  z-index: 1;
}
.card2 {
  left: 200px;
  z-index: 2;
}
.card3 {
  left: 230px;
  z-index: 3;
}.card4 {
  left: 260px;
  z-index: 4;
}.card5 {
  left: 290px;
  z-index: 5;
}.card6 {
  left: 320px;
  z-index: 6;
}.card7 {
  left: 350px;
  z-index: 7;
}.card8 {
  left: 380px;
  z-index: 8;
}.card9 {
  left: 410px;
  z-index: 9;
}
.card10 {
  left: 440px;
  z-index: 10;
}
.card11 {
  left: 470px;
  z-index: 11;
}
.card12 {
  left: 500px;
  z-index: 12;
}
.card13 {
  left: 530px;
  z-index: 13;
}
.card14 {
  left: 560px;
  z-index: 14;
}
.card15 {
  left: 590px;
  z-index: 15;
}
.card16 {
  left: 620px;
  z-index: 16;
}
</style>
