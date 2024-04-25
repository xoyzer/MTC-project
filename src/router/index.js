import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Register from "../views/Register.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
        },
    },
    {
        path: "/register",
        name: "register",
        // meta: { layout: "empty" },
        // component: () => import("../views/Register.vue"),
        component: Register,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
