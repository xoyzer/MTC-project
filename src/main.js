import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import HomeView from "./views/HomeView.vue";
import Register from "./views/Register.vue";
import Info from "./views/Info.vue";
import Account from "./views/Account.vue";
const router = createRouter({
    routes: [
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
    ],
    history: createWebHistory(),
});

const app = createApp(App);
app.use(router);
app.mount("#app");
