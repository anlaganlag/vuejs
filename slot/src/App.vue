<template>
  <div id="app">
    <current-time/>
    <task-input />

  </div>
</template>

<script>
import CurrentTime from './components/CurrentTime.vue'
import TaskInput from './components/TaskInput.vue'

export default {
  name: 'App',
  components: {
    TaskInput,
    CurrentTime,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
