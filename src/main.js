import { createApp } from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Vuelidate);
app.mount("#app");
