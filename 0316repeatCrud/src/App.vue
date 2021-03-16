<template>
  <div id="app">
    <input v-model="msg" />
    <button @click="create(msg)">Create</button>

    <CRUD v-for="(item,idx) in items" :msg="msg" :key="item.id" :item="item" :idx="idx" @del="del"/>
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
      items: ["r","g","b"],
      postFontSize: 1,
    };
  },
  methods: {
    create(text) {
      this.items.push(text);
    },
    del(idx){
      this.items.splice(idx,1)
    }
  },
};
</script>
