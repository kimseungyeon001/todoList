import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);


const routes: RouteConfig[] = [
  {
    path: '/:status?',
    name: 'item-list',
    component: () => import(/* webpackChunkName: "about" */ '../views/item-list.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
