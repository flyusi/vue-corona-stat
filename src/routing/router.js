import VueRouter from "vue-router";
import { About, Main } from "../pages";

const routes = [
    { path: "/", component: Main },
    { path: "/about", component: About }
]

export const router = new VueRouter({ routes });