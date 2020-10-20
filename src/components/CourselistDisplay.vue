<template>
<tr class="list-item">
    <td>{{ course.number }}</td>
    <td>{{ course.name }}</td>
    <td>{{course.id}}</td>
    <td>
        <router-link :to="{ name: 'view', params: { id: course.id } }">
            <span>View</span>
        </router-link>
        <span> | </span>
        <router-link :to="{ name: 'edit', params: { id: course.id } }">
            <span>Edit</span>
        </router-link>
        <span> | </span>
        <router-link :to="{ name: 'delete', params: { id: course.id } }">
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
