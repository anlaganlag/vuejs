<template>
  <div id="app">
    <h2>{{ $store.state.count }}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <hello-world />
    <!-- {{ store.state.count }} -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
export default {
  name: "App",

  methods: {
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
    decrement() {
      this.$store.commit("decrement");
      console.log(this.$store.state.count);
    },
  },
  components: { HelloWorld },
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
