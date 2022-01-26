import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import Goals from "../views/workouts/Goals.vue"
import lotty from "../views/workouts/Lotty.vue"
import Gym from "../views/workouts/Gym.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [{
  path: "/",
  name: "Home",
  component: Gym,
}, {
  path: "/workouts/Gym",
  name: "Gym",
  component: Gym,
}, {
  path: "/workouts/lotty",
  name: "Lotty",
  component: lotty,
}, {
  path: "/workouts/goals",
  name: "Goals",
  component: Goals,
}]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
