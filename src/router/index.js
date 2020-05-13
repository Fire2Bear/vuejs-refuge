import Vue from "vue";
import VueRouter from "vue-router";
import PetList from "../views/PetList.vue";
import Pet from "../views/Pet";

Vue.use(VueRouter);

const routes = [
  {
    path: "/pet_list",
    name: "PetList",
    component: PetList
  },
  {
    path: "/pet/:petId",
    name: "Pet",
    component: Pet
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
