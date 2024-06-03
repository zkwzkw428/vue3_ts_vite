import { createRouter, createWebHashHistory } from "vue-router";
import TestHome from "../views/TestHome.vue";
import TestAbout from "../views/TestAbout.vue";
import TestNews from "../views/TestNews.vue";
// 二级路由组件
import TestDetail from "../views/TestDetail.vue";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/home",
      component: TestHome,
    },
    {
      path: "/about",
      component: TestAbout,
    },
    {
      path: "/news",
      component: TestNews,
      children: {
        path: "detail",
        component: TestDetail,
      },
    },
  ],
});
export default router;
