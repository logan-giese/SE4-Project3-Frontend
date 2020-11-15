<template>
<div>
    <h1>DegreePlan - View Course</h1>
    <h3>{{ message }}</h3>
    
    <button v-on:click="$router.go(-1)">Back</button>
    <router-link :to="{ name: 'edit-course', params: { id: course.course_id } }" tag="button">Edit</router-link>
    <router-link :to="{ name: 'delete-course', params: { id: course.course_id } }" tag="button">Delete</router-link>
    <br/><br/>
    
    <table>
        <tr>
            <th class="list-header" width="140px"></th>
            <th class="list-header" width="480px"></th>
        </tr>
        <tr>
            <td>Number</td>
            <td>{{ course.number }}</td>
        </tr>
        <tr>
            <td>Name</td>
            <td>{{ course.name }}</td>
        </tr>
        <tr>
            <td>Department</td>
            <td>{{ course.department }}</td>
        </tr>
        <tr>
            <td>Description</td>
            <td>{{ course.description }}</td>
        </tr>
        <tr>
            <td>Hours</td>
            <td>{{ course.hours }}</td>
        </tr>
        <tr>
            <td>Level</td>
            <td>{{ course.level }}</td>
        </tr>
        <tr>
            <td>Term</td>
            <td>{{ course.term_start }}</td>
        </tr>
    </table>
</div>    
</template>

<script>
import CourseServices from '@/services/courseservices.js'
export default {
    props: ['id'],
    data() {
        return {
            message: "Loading...",
            course: Object
        }
    },
    methods: {
        getCourse: function() {
            CourseServices.getCourse(this.id)
            .then(response => {
                this.course = response.data[0]
                this.message = ""
            })
            .catch(error => {
                this.message = error.response.data.message
            })
        }
    },
    created()
    {
        this.getCourse()
    }
}
</script>

<style scoped>
    table {
        margin: auto;
    }
    td {
        padding: 4px 14px;
    }
    td:nth-child(1) {
        font-weight: bold;
        text-align: right;
        border-right: solid 1px rgba(0,0,0,0.35);
    }
    td:nth-child(2) {
        text-align: left;
    }
</style>
