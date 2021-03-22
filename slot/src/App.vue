<template>
  <div id="app">
    <current-time class="col-4" />
    <task-input class="col-6" @add-task="addNewTask" />
    <div class="col-12">
      <div class="cardBox">
        <div class="container">
          <h2>任务列表</h2>
          <ul class="taskList">
            <li
              v-for="(taskItem, index) in taskList"
              :key="`${index}_${Math.random()}`"
            >
              <input
                type="checkbox"
                :checked="!!taskItem.finishedAt"
                @input="changeStatus(index)"
              />
              {{ taskItem.task }}
              <span v-if="taskItem.finishedAt">
                {{ taskItem.finishedAt }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CurrentTime from "./components/CurrentTime.vue";
import TaskInput from "./components/TaskInput.vue";

export default {
  name: "App",
  components: {
    TaskInput,
    CurrentTime,
  },
  data: () => ({
    taskList: [],
  }),
  methods: {
    addNewTask(task) {
      this.taskList.push({ task, createdAt: Date.now(), finishedAt: null });
    },
    changeStatus(taskIndex) {
      const task = this.taskList[taskIndex];
      if (task.finishedAt) {
        task.finishedAt = null;
      } else {
        task.finishedAt = (new Date).toLocaleString()
      }
    },
  },
};
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
