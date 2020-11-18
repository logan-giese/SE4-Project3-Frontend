<template>
<div>
    <h1>Degreeplan - View Advisor</h1>
    <h3>{{ message }}</h3>

    <button v-on:click="$router.go(-1)">back</button>
    <router-link :to="{ name: 'edit-advisor', params:{ id: advisor.id }}" tag="button">Edit</router-link>
    <router-link :to="{ name: 'delete-advisor', params: { id: advisor.id }}" tag="button">Delete</router-link>
    <br/><br/>

    <table>
        <tr>
            <th class="list-header" width="140px"></th>
            <th class="list-header" width="480px"></th>
        </tr>
        <tr>
            <td>ID</td>
            <td>{{ advisor.id }}</td>
        </tr> 
        <tr>
            <td>First Name</td>
            <td>{{ advisor.firstname}}</td>
        </tr>
        <tr>
            <td>Last Name</td>
            <td>{{ advisor.lastname }}</td>
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
            advisor: Object
        }
    },
    methods: {
        getAdvisor: function() {
            CourseServices.getAdvisor(this.id)
            .then(response => {
                this.advisor = response.data[0]
                this.message = ""
            })
            .catch(error =>{
                this.message = error.response.data.message
            })
        }
    },
    created()
    {
        this.getAdvisor()
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
