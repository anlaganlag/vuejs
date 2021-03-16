<template>
  <div id="app">
    <CRUD
      :items="items"
      :msg="msg"
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
      items: ["python", "javascrip", "Backend", "Frontend"],
      msg: "",
    };
  },

};
</script>

