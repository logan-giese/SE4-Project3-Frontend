<template>
<div>
    <h1>Are you sure you want to delete {{ course.name }}?</h1>
    
    <button v-on:click="deleteCourse()">Yes</button>
    <button v-on:click="$router.go(-1)">No</button>
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
        },
        deleteCourse: function(){
            CourseServices.deleteCourse(this.id)
            this.$router.go(-1)
        }
    },
    created()
    {
        this.getCourse()
    }
}
</script>