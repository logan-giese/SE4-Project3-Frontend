import Vue from "vue";
import Router from "vue-router";
import courselist from "./components/courselist.vue";
import courseadd from "./components/courseadd.vue";

Vue.use(Router);


export default new Router ({
    mode: "history",
    base: process.env.NODE_ENV === "development" ? "/" : "/mycourses-vue/",
    
    routes: [{
        path: "/",
        name: "list",
        component: courselist
    },
    {
        path:"/add",
        name: "add",
        component: courseadd
    }

    ]
})