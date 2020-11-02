import Vue from "vue";
import Router from "vue-router";
import CourseList from "./views/courselist.vue";
import courseadd from "./components/courseadd.vue";
import CourseView from "./views/courseview.vue";
import deletecourse from "./views/coursedelete.vue";

Vue.use(Router);


export default new Router ({
    mode: "history",
    base: process.env.NODE_ENV === "development" ? "/" : "/degreeplan/",
    
    routes: [{
        path: "/",
        name: "list",
        component: CourseList
    },
    {
        path:"/add",
        name: "add",
        component: courseadd
    },
    {
        path: "/course/:id",
        name: "view-course",
        component: CourseView,
        props: true
    },
    {
        path: "/delete/:id",
        name: "delete",
        component: deletecourse,
        props: true
    }

    ]
})