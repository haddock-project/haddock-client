import { createApp } from 'vue'
import Default from './Default.vue'
import './assets/tailwind-init.css'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(Default)

const options = {
    transition: "Vue-Toastification__bounce",
    maxToasts: 2,
    newestOnTop: true,
};

app.use(Toast, options);


app.mount('#app')