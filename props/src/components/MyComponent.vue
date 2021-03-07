<template>
  <div class="hello">
    <div>从props来的parrentMsg => {{ gal + parentMsg }}</div>
    <div>自己的msg ==> {{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["parentMsg","gal"],
  data() {
    return {
      msg: "这是子组件的msg",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
