import { createRouter, createWebHistory } from "vue-router"

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: () => import("../components/Login.vue") },
  { path: "/home", component: () => import("../components/Home.vue") },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  // to 去 from 现在 next放行
  if (to.path == "/login") return next()
  if (!window.sessionStorage.getItem("token")) {
    return next("/login")
  }
  next()
})

export default router
