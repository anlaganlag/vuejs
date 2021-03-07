<template>
  <div class="hello">
    <li>{{ todo.id+1 +( todo.text )}}</li>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      cmsg: "来自子组件",

    };
  },
  props: {
    msg: String,
    gal: String,
    todo: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
