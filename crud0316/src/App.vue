<template>
  <div id="app">
    <HelloWorld
      :items="items"
      :create="create"
      :msg="msg"
      :update="update"
      :del="del"
    />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      items: ["alex", "AAA", "bbb", "ccc"],
      msg: "",
    };
  },
  methods: {
    create(text) {
      this.items.push(text);
    },
    update(idx, msg) {
      this.items.splice(idx, 1, msg);
    },
    del(idx) {
      console.log(idx);
      this.items.splice(idx, 1);
    },
  },
};
</script>

