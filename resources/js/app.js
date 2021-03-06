/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

import VueRouter from "vue-router";
Vue.use(VueRouter);

import VueAxios from "vue-axios";
import axios from "axios";
Vue.use(VueAxios, axios);

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import HomeComponent from "./components/HomeComponent.vue";
import CreateComponent from "./components/CreateComponent.vue";
import EditComponent from "./components/EditComponent.vue";
import IndexComponent from "./components/IndexComponent.vue";

const routes = [
    {
        name: "home",
        path: "/",
        component: HomeComponent
    },
    {
        name: "create",
        path: "/create",
        component: CreateComponent
    },
    {
        name: "posts",
        path: "/posts",
        component: IndexComponent
    },
    {
        name: "edit",
        path: "/edit/:id",
        component: EditComponent
    }
];

const router = new VueRouter({ mode: "history" });
const app = new Vue(Vue.util.extend({ router })).$mount("#app");
