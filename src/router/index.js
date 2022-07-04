import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Post from '../views/Post.vue';
import PostEdit from '../views/PostEdit.vue';
import PostAdd from '../views/PostAdd';
import UserAdd from '../views/UserAdd';
import Login from '../views/Login';



const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/post",
    name: "Post",
    component: Post,
  },
  {
    path: "/post/edit/:id",
    name: "PostEdit",
    component: PostEdit,
  },
  {
    path: "/post/create",
    name: "PostAdd",
    component: PostAdd,
  },
  {
    path: "/singup",
    name: "UserAdd",
    component: UserAdd,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
