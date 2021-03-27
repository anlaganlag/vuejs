import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Micro from '@/components/Micro'
import News from '@/components/News'
import Course from '@/components/Course'
import CourseDetail from '@/components/CourseDetail'
import NotFound from '@/components/NotFound'



Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/index',
      name: 'index',
      component: Index
    },
     {
      path: '/login',
      name: 'Login',
      component: Login
    },
     {
      path: '/course',
      name: 'Course',
      component: Course
    },
     {
      path: '/course-detail/:id/',
      name: 'CourseDetail',
      component: CourseDetail
    },
     {
      path: '/micro/',
      name: 'Micro',
      component: Micro
    },
    {
      path: '/course-detail/:id/',
      name: 'CourseDetail',
      component: CourseDetail
    },
     {
      path: '/news/',
      name: 'News',
      component: News
    },
    {
      path: '*',
      component: NotFound
    }
  ],
  mode:'history'
})

