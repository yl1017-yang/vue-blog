import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue';
import List from './components/List.vue';
import Detail from './components/Detail.vue';
import Author from './components/Author.vue';
import Comments from './components/Comments.vue';
import Error from './components/Error.vue';

//https://router.vuejs.org/guide/essentials/named-views.html#nested-named-views   여기 참고

const routes = [
  {
    path: "/vue-blog/detail/:id(\\d+)",  //:id(\\d+) 숫자만 들어오는 정규식 vue router 홈페이지 있음
    component: Detail,
    children: [
      {
        path: "author", // /vue-blog/detail/0/author
        component: Author,
      },
      {
        path: "comments", // detail/0/comments
        component: Comments,
      },
    ]
  },  
  {
    path: "/vue-blog/list",
    component: List,
  },
  {
    path: "/vue-blog/",
    component: Home,
  },  
  {
    path: "/vue-blog/:anything(.*)",  //404 페이지  :sdmcklsdmcl 순서가 아래에 있음 괜찮음
    component: Error,
  },
  
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;