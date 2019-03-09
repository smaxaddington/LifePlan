import Vue from 'vue'
import Router from 'vue-router'
import Why from '@/components/Why'
import Hows from '@/components/Hows'
import Login from '@/components/Login'
import EditWhy from '@/components/EditWhy'
import EditHow from '@/components/EditHow'
import How from '@/components/How'
import Whats from '@/components/Whats'
import What from '@/components/What'
import AddHow from '@/components/AddHow'
import AddWhat from '@/components/AddWhat'
import AddGoal from '@/components/AddGoal'
import EditWhat from '@/components/EditWhat'
import Reflections from '@/components/Reflections'
import Reflection from '@/components/Reflection'
import AddReflection from '@/components/addReflection'
import EditReflection from '@/components/editReflection'
import EditGoal from '@/components/editGoal'
import CompleteGoal from '@/components/completeGoal'
import Goals from '@/components/Goals'
import Goal from '@/components/Goal'
import AddToCalendar from '@/components/AddToCalendar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Why',
      component: Why
    },
    {
      path: '/reflections',
      name: 'Reflections',
      component: Reflections
    },
    {
      path: '/addToCalendar',
      name: 'AddToCalendar',
      component: AddToCalendar
    },
    {
      path: '/goals',
      name: 'Goals',
      component: Goals
    },
    {
      path: '/goal',
      name: 'Goal',
      component: Goal
    },
    {
      path: '/addGoal',
      name: 'addGoal',
      component: AddGoal
    },
    {
      path: '/completeGoal',
      name: 'completeGoal',
      component: CompleteGoal
    },
    {
      path: '/reflection',
      name: 'Reflection',
      component: Reflection
    },
    {
      path: '/editReflection',
      name: 'EditReflection',
      component: EditReflection
    },
    {
      path: '/editGoal',
      name: 'EditGoal',
      component: EditGoal
    },
    {
      path: '/addReflection',
      name: 'addReflection',
      component: AddReflection
    },
    {
      path: '/hows',
      name: 'Hows',
      component: Hows
    },
    {
      path: '/how',
      name: 'How',
      component: How
    },
    {
      path: '/editWhy',
      name: 'EditWhy',
      component: EditWhy
    },
    {
      path: '/editHow',
      name: 'EditHow',
      component: EditHow
    },
    {
      path: '/addHow',
      name: 'addHow',
      component: AddHow
    },
    {
      path: '/editWhat',
      name: 'EditWhat',
      component: EditWhat
    },
    {
      path: '/addWhat',
      name: 'addWhat',
      component: AddWhat
    },
    {
      path: '/whats',
      name: 'Whats',
      component: Whats
    },
    {
      path: '/what',
      name: 'What',
      component: What
    },
    // {
    //   path: '/why',
    //   name: 'Why',
    //   component: Why
    // },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
