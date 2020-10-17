import router from "./router";
import Vue from "vue";
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import vuetify from "./plugins/vuetify";
import store from "./store/index";
import App from "./App.vue"

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");