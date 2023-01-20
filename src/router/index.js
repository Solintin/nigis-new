/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "@/views/loginview.vue";
import Register from  "@/views/registerview.vue";
import FormPage from "@/views/form.vue";



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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
