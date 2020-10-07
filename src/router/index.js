import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contacts from "../views/Contacts.vue";
import User from "../views/User.vue";
import Main from "../views/Main.vue";
import Chat from "../views/Chat.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
    children: [
      {
        path: '/',
        name: "Home",
        component: Home,
      },
      {
        path: '/contacts',
        name: "Contacts",
        component: Contacts,
      },
      {
        path: '/user',
        name: "User",
        component: User,
      },
    ],
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
  {
    path: '/chat/:id/:name',
    name: 'Chat',
    component: Chat,
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
