import Vue from "vue";
import VueRouter from "vue-router";
import Parent from "../components/Parent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Parent",
    component: Parent
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
