<template>
<div>
    <h1>MyCourses - Course List</h1>
    <h3>{{ message }}</h3>
</div>    
</template>

<script>
import CourseServices from '@/services/courseservices.js'
export default {
    props:{MyID: Number},
    data(){
        return {
            message: "Loading..."
        }

    },
    methods: {
        getCourse: function(){
           return CourseServices.getCourse(this.MyID)
        }
    },
    created()
    {
        this.getCourse(this.MyID)
    }
}
</script>

<style>
    table {
        margin: auto;
    }
    td {
        border-bottom: solid 1px rgba(0,0,0,0.35);
    }
    .list-item {
        text-align: left;
    }
    .list-header {
        font-weight: bold;
    }
</style>
