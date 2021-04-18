import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue';
import Login from '../views/identity/Login.vue';
import MealType from '../views/meal-type/MealTypeIndex.vue';
import Group from '../views/group/GroupIndex.vue';
import Teacher from '../views/teacher/TeacherIndex.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/identity/login',
        name: 'identity-login',
        component: Login,
    },
    {
        path: '/meal-types',
        name: 'MealTypes',
        component: MealType,
    },
    {
        path: '/groups',
        name: 'Groups',
        component: Group,
    },
    {
        path: '/teachers',
        name: 'Teacher',
        component: Teacher,
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
