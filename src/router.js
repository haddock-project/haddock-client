import {createRouter, createWebHistory} from "vue-router";

// Create routes
const routes = [
    { path: '/', name: "Home", component: () => import('./views/Main.vue') },
    { path: '/settings', name: "Settings", component: () => import('./views/Settings.vue') },
    { path: "/:catchAll(.*)", component: () => import('./views/NotFound.vue') }
]


// Create a new router instance and pass the `routes` option
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;