import { createApp } from "vue";

import {
    createRouter,
    createWebHistory
} from "vue-router";

import App from "./App.vue";

import Home from "./views/Home.vue";
import Images from "./views/Images.vue";
import Accordion from "./views/Accordion.vue";
import Grid from "./views/Grid.vue";

import "./style.css";
   
const routes = [
    {
        path: "/",
        component: Home
    },

    {
        path: "/images",
        component: Images
    },

    {
        path: "/accordion",
        component: Accordion
    },

    {
        path: "/grid",
        component: Grid
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App)
    .use(router)
    .mount("#app");