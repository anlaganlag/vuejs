<template>
  <div id="crud">
    {{ item }}
    <button @click="$emit('update',idx)">Update</button>
    <button @click="$emit('del',idx)">Delete</button>
  </div>
</template>

<script>
export default {
  name: "CRUD",
  props: {
    item: String,
    idx: Number,
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
