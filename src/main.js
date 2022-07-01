import { createApp } from 'vue'
import Default from './Default.vue'
import './assets/tailwind-init.css'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import i18n from './i18n'
import router from './router'

// create the app
const app = createApp(Default)

// Notifications settings
const options = {
    transition: "Vue-Toastification__bounce",
    maxToasts: 2,
    newestOnTop: true,
};

i18n.then((i18n) => {
    // register the plugins
    app.use(Toast, options);
    app.use(router);
    app.use(i18n);
    app.mount('#app')
})