import Vue from "vue";
import Router from "vue-router";
import CourseList from "./views/courselist.vue";
import StudentList from "./views/studentlist.vue";
import courseadd from "./components/courseadd.vue";
import CourseView from "./views/courseview.vue";
import deletecourse from "./views/coursedelete.vue";
import courseedit from "./components/CourseEdit.vue";
import degreeadd from "./components/DegreeAdd.vue";
import studentadd from "./components/StudentAdd.vue";

Vue.use(Router);


export default new Router ({
    mode: "history",
    base: process.env.NODE_ENV === "development" ? "/" : "/degreeplan/",
    
    routes: [{
        path: "/courses",
        name: "list-courses",
        component: CourseList
    },
    {
        path:"/add-course",
        name: "add-course",
        component: courseadd
    },
    {
        path: "/course/:id",
        name: "view-course",
        component: CourseView,
        props: true
    },
    {
        path: "/course-delete/:id",
        name: "delete-course",
        component: deletecourse,
        props: true
    },
    {
        path:"/edit-course",
        name: "edit-course",
        component: courseedit,
        props:true

    },
    {
        path:"/add-degree",
        name: "add-degree",
        component: degreeadd
    },
    {
        path:"/students",
        name:"list-students",
        component: StudentList
    },
    {
        path:"/add-student",
        name: "add-student",
        component: studentadd
    }

    ]
})