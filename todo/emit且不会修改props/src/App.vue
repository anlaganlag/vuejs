<template>
  <div id="app">
    <input v-model="msg" />
    <button @click="create(msg)">Create</button>

    <CRUD
      v-for="(item, idx) in items"
      :key="idx"
      :item="item"
      :idx="idx"
      @del="del(idx)"
      @update="update(idx)"
    />
  </div>
</template>

<script>
import CRUD from "./components/CRUD.vue";

export default {
  name: "App",
  components: {
    CRUD,
  },
  data() {
    return {
      msg: "",
      items: ["r", "g", "b"],
      postFontSize: 1,
    };
  },
  methods: {
    create(msg) {
      this.items.push(msg);
    },
    del(idx) {
      this.items.splice(idx, 1);
    },
    update(idx) {
      if (this.msg) {
        this.items.splice(idx, 1, this.msg);
      }
    },
  },
};
</script>
