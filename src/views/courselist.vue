<template>
<div>
    <h1>MyCourses - Course List</h1>
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
                message: "Loading...",
                page: 1,
                searchQuery: ""
            }
        },
        methods: {
            getCourseList: function() {
                CourseServices.getCourses(this.page, this.searchQuery)
                .then(response => {
                    this.courses = response.data
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
                    this.getCourseList();
                    // Update url query
                    this.$router.push({query: {page: this.page}});
                }
            },
            nextPage: function() {
                if (this.courses.length > 0) {
                    this.page += 1;
                    // Request next page
                    this.getCourseList();
                    // Update url query
                    this.$router.push({query: {page: this.page}});
                }
            },
            runSearch: function() {
                // Reset page to one
                this.page = 1;
                // Request search results
                this.getCourseList();
                // Update url query (page was reset)
                this.$router.push({query: {page: this.page}});
                console.log("Searching for courses matching query: "+this.searchQuery);
            }
        },
        created() {
            // Get page number from URL
            if (this.$route.query.page != undefined && this.$route.query.page != "")
                this.page = parseInt(this.$route.query.page);
            // Get course list from backend API
            this.getCourseList();
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
