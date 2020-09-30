import Vue from "vue";
import Router from "vue-router";
import List from "./views/courselist.vue";
import courseadd from "./components/CourseAdd.vue";

Vue.use(Router);


export default new Router ({
    mode: "history",
    base: process.env.NODE_ENV === "development" ? "/" : "/mycourses-vue/",
    
    routes: [{
        path: "/",
        name: "list",
        component: List
    },
    {
        path:"/add",
        name: "add",
        component: courseadd
    }

    ]
})