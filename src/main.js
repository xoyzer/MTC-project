import { createApp } from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import YmapPlugin from "vue-yandex-maps";



const app = createApp(App);
app.use(router);
app.use(store);
app.use(Vuelidate);
// app.use(YmapPlugin);
app.mount("#app");
