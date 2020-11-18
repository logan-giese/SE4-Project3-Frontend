<template>
<div>
    <h1>DegreePlan - Student List</h1>
    <h3>{{ message }}</h3>
    <div id="page-buttons">
        <button v-on:click="prevPage">Prev</button>
        <button v-on:click="nextPage">Next</button>
    </div>
    <br/>
    <div id="search-bar">
        <input type="search" v-model="searchQuery" />
        <button v-on:click="runSearch">Search</button>
    </div>
    <br/>
    <table>
        <tr>
            <th class="list-header" width="90px">ID</th>
            <th class="list-header" width="250px">Name</th>
            <th class="list-header" width="250px">Major</th>
            <th class="list-header" width="142px">Actions</th>
        </tr>
        <StudentListDisplay v-for="student in students" :key="student.student_id" :student="student" />
    </table>
</div>
</template>

<script>
    import StudentListDisplay from '@/components/StudentListDisplay.vue'
    import CourseServices from '@/services/courseservices.js'
    export default {
        components: {
            StudentListDisplay
        },
        data() {
            return {
                students: [],
                message: "Loading...",
                page: 1,
                searchQuery: ""
            }
        },
        methods: {
            getStudentList: function() {
                CourseServices.getStudents(this.page, this.searchQuery)
                .then(response => {
                    this.students = response.data
                    this.message = ""
                })
                .catch(error => {
                    this.message = error.response.data.message
                })
            },
            prevPage: function() {
                if (this.page > 1) {
                    this.page -= 1;
                    // Request previous page
                    this.getStudentList();
                    // Update url query
                    this.$router.push({query: {page: this.page}});
                }
            },
            nextPage: function() {
                if (this.students.length > 0) {
                    this.page += 1;
                    // Request next page
                    this.getStudentList();
                    // Update url query
                    this.$router.push({query: {page: this.page}});
                }
            },
            runSearch: function() {
                // Reset page to one
                this.page = 1;
                // Request search results
                this.getStudentList();
                // Update url query (page was reset)
                this.$router.push({query: {page: this.page}});
                console.log("Searching for students matching query: "+this.searchQuery);
            }
        },
        created() {
            // Get page number from URL
            if (this.$route.query.page != undefined && this.$route.query.page != "")
                this.page = parseInt(this.$route.query.page);
            // Get student list from backend API
            this.getStudentList();
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
