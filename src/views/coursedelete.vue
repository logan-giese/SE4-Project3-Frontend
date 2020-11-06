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
        deleteCourse: function() {
            CourseServices.deleteCourse(this.id)
            setTimeout(() => {
                // If the user came from the view course page, go back twice (to get to the course list)
                if (this.prevRoute.name == "view-course")
                    this.$router.go(-2)
                else
                    this.$router.go(-1)
            }, 150) // Small delay to allow DB to process deletion
        }
    },
    created()
    {
        this.getCourse()
    },
    // Set up local variable to identify which page the user came from (accessed by this.prevRoute)
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.prevRoute = from
        })
    }
}
</script>