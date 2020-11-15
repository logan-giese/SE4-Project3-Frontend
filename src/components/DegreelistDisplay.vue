<template>
<tr class="list-item">
    <td>{{ degree.plan_id }}</td>
    <td>{{ degree.plan_name }}</td>
    <td>
        <router-link :to="{ name: 'view-degree', params: { id: degree.plan_id } }">
            <span>View</span>
        </router-link>
        <span> | </span>
        <router-link :to="{ name: 'edit-degree', params: { id: degree.plan_id } }">
            <span>Edit</span>
        </router-link>
        <span> | </span>
        <router-link :to="{ name: 'delete-degree', params: { id: degree.plan_id } }">
            <span>Delete</span>
        </router-link>
    </td>
</tr>
</template>

<script>
    export default {
        props: {
            degree: Object
        }
    }
</script>

<style></style>
