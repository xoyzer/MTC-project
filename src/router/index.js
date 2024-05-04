import { createRouter, createWebHistory } from "vue-router";
import Register from "@/views/Register.vue";
import Info from "@/views/Info.vue";
import Account from "@/views/Account.vue";
import UserLogin from "@/views/mobile/UserLogin.vue";
import Map from "@/views/mobile/Map.vue";
import Cart from "@/views/mobile/Cart.vue";
import Appointment from "@/views/mobile/Appointment.vue";
import UserOrders from "@/views/mobile/UserOrders.vue";

const routes = [
    {
        path: "/register",
        name: "register",
        component: Register,
    },
    {
        path: "/info",
        name: "info",
        component: Info,
    },
    {
        path: "/account",
        name: "account",
        component: Account,
    },
    {
        path: "/login",
        name: "login",
        component: UserLogin,
    },
    {
        path: "/map",
        name: "map",
        component: Map,
    },
    {
        path: "/cart",
        name: "cart",
        component: Cart,
    },
    {
        path: "/appointment",
        name: "appointment",
        component: Appointment,
    },
    {
        path: "/orders",
        name: "orders",
        component: UserOrders,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
