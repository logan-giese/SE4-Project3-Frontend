<template>
<div>
    <h1>MyCourses - Course List</h1>
    <h3>{{ message }}</h3>
    <table>
        <tr>
            <th class="list-header" width="100px">Number</th>
            <th class="list-header" width="540px">Name</th>
            <th class="list-header" width="142px">Actions</th>
        </tr>
        <CourselistDisplay v-for="course in courses" :key="course.id" :course="course" />
    </table>
</div>
</template>

<script>
    import CourselistDisplay from '@/components/CourselistDisplay.vue'
    import CourseServices from '@/services/courseservices.js'
    export default {
        components: {
            CourselistDisplay
        },
        data() {
            return {
                courses: [],
                message: "Loading..."
            }
        },
        created() {
            CourseServices.getCourses()
            .then(response => {
                this.courses = response.data
                this.message = ""
            })
            .catch(error => {
                this.message = error.response.data.message
            })
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
