<template>
  <div id="crud">
    <input v-model="msg" />
    <button @click="create()">Create</button>
    <p v-for="(i, idx) in items" :key="i">
      {{ i }}
      <button @click="update(idx)">Update</button>
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
    create() {
      if (this.msg) {
        this.items.push(this.msg);
      }
    },
    update(idx) {
      if (this.msg) {
        this.items.splice(idx, 1, this.msg);
      }
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
