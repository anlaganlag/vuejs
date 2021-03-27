<template>
  <div class="">
      <ul>
        <li v-for="item in courseList" :key="item+Math.random()">
          <router-link :to="{'path':'/course-detail/'+item.id}">{{item.name}}</router-link>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg:'课程页面',
      courseList:[]
    }
  },
   mounted:function () {
      //当组件一加载的时候就应该去数据库去获取数据
      this.initCourses()
  },
  methods:{
    initCourses:function () {
      var that = this
      this.$axios.request({
          url:'http://127.0.0.1:8082/course/',
          method:"GET"
      }).then(function (response) {
        console.log(response);
        that.courseList = response.data.courseList  //吧从数据库取的数据赋值到courseList列表里面
      })
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>

