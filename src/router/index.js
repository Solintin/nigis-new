/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "@/views/loginview.vue";
import Register from  "@/views/registerview.vue";
import FormPage from "@/views/form.vue";
import TrackerPage from "@/views/tracker.vue";
import WelcomePage from "@/views/welcome.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
   
  },
  {
    path: "/form",
    name: "FormPage",
    component: FormPage,
   
  },
  {
    path: "/tracker",
    name: "TrackerPage",
    component: TrackerPage,

  },
  {
    path: "/welcome",
    name: "WelcomePage",
    component: WelcomePage,
   
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
