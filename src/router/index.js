import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/adminsRegister",
        name: "adminsRegister",
        component: () => import("@/views/desktop/AdminsRegister.vue"),
    },
    {
        path: "/adminsLogin",
        name: "adminsLogin",
        component: () => import("@/views/desktop/AdminsLogin.vue"),
    },
    {
        path: "/info",
        name: "info",
        component: () => import("@/views/desktop/Info.vue"),
    },
    {
        path: "/",
        name: "account",
        component: () => import("@/views/desktop/Account.vue"),
    },
    {
        path: "/clientsLogin",
        name: "clientsLogin",
        component: () => import("@/views/mobile/ClientsLogin.vue"),
    },
    {
        path: "/clientsRegister",
        name: "clientsRegister",
        component: () => import("@/views/mobile/ClientsRegister.vue"),
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
