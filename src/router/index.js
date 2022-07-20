import { createRouter, createWebHistory } from "vue-router";

import MainLayout from '../layouts/MainLayout.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: MainLayout
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;