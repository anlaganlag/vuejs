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
  height: ;
}
.card0 {
  left: 30px;
  z-index: 0;
}
.card1 {
  left: 60px;
  z-index: 1;
}
.card2 {
  left: 90px;
  z-index: 2;
}
.card3 {
  left: 120px;
  z-index: 3;
}.card4 {
  left: 150px;
  z-index: 4;
}.card5 {
  left: 180px;
  z-index: 5;
}.card6 {
  left: 210px;
  z-index: 6;
}.card7 {
  left: 240px;
  z-index: 7;
}.card8 {
  left: 270px;
  z-index: 8;
}.card9 {
  left: 300px;
  z-index: 9;
}
.card10 {
  left: 330px;
  z-index: 10;
}
.card11 {
  left: 360px;
  z-index: 11;
}
.card12 {
  left: 390px;
  z-index: 12;
}
.card13 {
  left: 420px;
  z-index: 13;
}
.card14 {
  left: 450px;
  z-index: 14;
}
.card15 {
  left: 480px;
  z-index: 15;
}
.card16 {
  left: 510px;
  z-index: 16;
}
</style>
