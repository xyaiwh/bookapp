// import { resolve } from "core-js/fn/promise";
import Vue from "vue";
import VueRouter from "vue-router";
import bookIndex from "../views/bookIndex.vue";
// import bookChapter from "../views/bookChapter.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "bookIndex",
    component: bookIndex
  },
  {
    path:'/chapter/:pageId',
    name:'bookChapter',
    meta:{
      keepAlive:true
    },
    // component: bookChapter
    component:resolve=>require(['../views/bookChapter'],resolve)
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
