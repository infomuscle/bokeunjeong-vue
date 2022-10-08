import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: "/",
        name: "Portfolio",
        component: () => import("./Portfolio.vue"),
    },
    {
        path: "/sample",
        name: "Sample",
        component: () => import("./Sample.vue"),
    },
    {
        path: "/error",
        name: "Error",
        component: () => import("./Error.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;