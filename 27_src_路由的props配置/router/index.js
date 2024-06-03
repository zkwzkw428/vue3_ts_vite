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
      children: [
        {
            name: 'xiangxi',
            path: "detail/:id/:message/:content?",
            component: TestDetail,
            // props的第一种写法：布尔类型
            // 表示将所有的params参数都以props的的形式传递给对应的路由组件
            // props:true,

            // props的第二种写法：函数
            props: ({params:{id, message, content}}) => {
              // console.log(route);
              return {
                id,message,content
              }
            }

            // props的第三种写法:对象
            // 用的很少，因为数据定死了，没意义
            // props: {
            //   a: 100,
            //   b: 200,
            //   c: 300,
            // }
        }
      ]
    },
  ],
});
export default router;
