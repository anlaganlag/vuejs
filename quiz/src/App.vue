<template>
  <div id="app">
    <Header />

    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3"
          ><QuestionBox v-if="questions.length" :currentQuestion="questions[index]" :next="next"
        /></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import QuestionBox from "./components/QuestionBox.vue";

export default {
  name: "App",
  components: {
    Header,
    QuestionBox,
  },
  data() {
    return {
      questions: [],
      index: 0,
      // index: 0,
    };
  },
  methods: {
    next() {
      this.index++;
    },
  },
  mounted: function () {
    fetch("https://opentdb.com/api.php?amount=10&category=27&type=multiple", {
      method: "get",
    })
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
        this.questions = json.results;
      });
  },
};
</script>

<style>
</style>
