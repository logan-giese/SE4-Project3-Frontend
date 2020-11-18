<template>
<div>
    <h1>DegreePlan - Advisor View</h1>
    <h3>{{ message }}</h3>
    <div id = "page-buttons">
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
            <th class="list-header" width="100px">ID</th>
            <th class="list-header" width="540px">Name</th>
            <th class="list-header" width="142px">Actions</th>
        </tr>
        <AdvisorListDisplay v-for='advisor in advisors' :key="advisor.advisor_id" :advisor="advisor" />
    </table>
</div>
</template>

<script>
    import AdvisorListDisplay from '@/components/AdvisorListDisplay.vue'
    import CourseServices from '@/services/courseservices.js'
    export default {
        components: {
            AdvisorListDisplay
        },
        data() {
            return {
                advisors: [],
                message: "Loading...",
                page: 1,
                searchQuery: ""
            }
        },
        methods: {
            getAdvisorList: function() {
                CourseServices.getAdvisors(this.page, this.searchQuery)
                .then(response =>{
                    this.advisors = response.data
                    this.message = ""
                })
                .catch(error => {
                    this.message = error.response.data.message
                })
            },
            prevPage: function() {
                if (this.page > 1) {
                    this.page -= 1;
                    this.getAdvisorList();
                    this.$router.push({query: {page: this.page}});
                }
            },
            nextPage: function() {
                this.page = 1;
                this.getAdvisorList();
                this.router.push({query: {pate: this.page}});
                console.log("Searching for adbisors matchng query: "+this.searchQuery);
            }
        },
        created() {
            if (this.$router.query.page != undefined && this.$route.query.page != "")
            this.page = parseInt(this.$route.query.page);
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
