<template>
  <div class="cardBox">
    <div class="container">
      <h3>今天:{{ getCurrentDate }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurrentTime",
  computed: {
    getCurrentDate() {
      const browserLocale =
        navigator.languages && navigator.languages.length
          ? navigator.languages[0]
          : navigator.language;
      const intlDateTime = new Intl.DateTimeFormat(browserLocale, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      });

      return intlDateTime.format(new Date());
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
