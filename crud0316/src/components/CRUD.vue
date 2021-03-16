<template>
  <div id="crud">
    <input v-model="msg" />
    <button @click="create(msg)">Create</button>
    <p v-for="(i, idx) in items" :key="i">
      {{ i }}
      <button @click="update(idx, msg)">Update</button>
      <button @click="del(idx)">Delete</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "CRUD",
  props: {
    items: Array,
    msg: String,
  },
  methods: {
    create(text) {
      this.items.push(text);
    },
    update(idx, msg) {
      this.items.splice(idx, 1, msg);
    },
    del(idx) {
      this.items.splice(idx, 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
