import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/register",
        name: "register",
        component: () => import("@/views/desktop/Register.vue"),
    },
    {
        path: "/info",
        name: "info",
        component: () => import("@/views/desktop/Info.vue"),
    },
    {
        path: "/account",
        name: "account",
        component: () => import("@/views/desktop/Account.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/mobile/UserLogin.vue"),
    },
    {
        path: "/map",
        name: "map",
        component: () => import("@/views/mobile/Map.vue"),
    },
    {
        path: "/cart",
        name: "cart",
        component: () => import("@/views/mobile/Cart.vue"),
    },
    {
        path: "/appointment",
        name: "appointment",
        component: () => import("@/views/mobile/Appointment.vue"),
    },
    {
        path: "/orders",
        name: "orders",
        component: () => import("@/views/mobile/UserOrders.vue"),
    },
    {
        path: "/test",
        name: "test",
        component: () => import("@/views/desktop/Test.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
