import Vue from "vue";
import Router from "vue-router";
import List from "./views/courselist.vue";
import courseadd from "./components/CourseAdd.vue";
import courseedit from "./components/CourseEdit.vue";

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
    },
    {
        path:"/edit",
        name: "edit",
        component: courseedit,
        props:true

    }

    ]
})