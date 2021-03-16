<template>
  <div id="crud">
    <input id="inputText" v-model="msg" />
    <label for="inputText" @click="create(msg)">Create</label>
    <p v-for="(i,idx) in items" :key="i">
      {{ i }}
      <button @click="update(idx,msg)">Update</button>
      <button @click="del(idx)">Delete</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    items: Array,
    create: Function,
    update: Function,
    del:Function,
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
