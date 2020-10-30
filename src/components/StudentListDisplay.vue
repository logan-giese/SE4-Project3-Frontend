<template>
<tr class="list-item">
    <td>{{ student.number }}</td>
    <td>{{ student.name }}</td>
    <td>{{student.id}}</td>
    <td>
        <router-link :to="{ name: 'view', params: { id: student.id } }">
            <span>View</span>
        </router-link>
        <span> | </span>
        <router-link :to="{ name: 'edit', params: { id: student.id } }">
            <span>Edit</span>
        </router-link>
        <span> | </span>
        <router-link :to="{ name: 'delete', params: { id: student.id } }">
            <span>Delete</span>
        </router-link>
    </td>
</tr>
</template>

<script>
    export default {
        props: {
            course: Object
        }
    }
    
</script>

<style></style>