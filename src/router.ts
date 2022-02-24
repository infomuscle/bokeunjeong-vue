import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: "/router/test/1",
        name: "RouterTest1",
        component: () => import("./RouterTest1.vue"),
    },
    {
        path: "/router/test/2",
        name: "RouterTest2",
        component: () => import("./RouterTest2.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;