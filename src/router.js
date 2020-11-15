import Vue from "vue";
import Router from "vue-router";
import CourseList from "./views/courselist.vue";
import CourseAdd from "./views/course/CourseAdd.vue";
import CourseView from "./views/course/CourseView.vue";
import CourseDelete from "./views/course/CourseDelete.vue";
import CourseEdit from "./views/course/CourseEdit.vue";
import StudentList from "./views/studentlist.vue";
import StudentAdd from "./views/student/StudentAdd.vue";
import DegreeAdd from "./views/degree/DegreeAdd.vue";

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
        component: CourseAdd
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
        component: CourseDelete,
        props: true
    },
    {
        path:"/edit-course",
        name: "edit-course",
        component: CourseEdit,
        props:true
    },
    {
        path:"/students",
        name:"list-students",
        component: StudentList
    },
    {
        path:"/add-student",
        name: "add-student",
        component: StudentAdd
    },
    {
        path:"/add-degree",
        name: "add-degree",
        component: DegreeAdd
    },

    ]
})