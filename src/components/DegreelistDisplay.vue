<template>
<tr class="list-item">
    <td>{{ degree.number }}</td>
    <td>{{ degree.name }}</td>
    <td>
        <router-link :to="{ name: 'view', params: { id: degree.id } }">
            <span>View</span>
        </router-link>
        <span> | </span>
        <router-link :to="{ name: 'edit', params: { id: degree.id } }">
            <span>Edit</span>
        </router-link>
        <span> | </span>
        <router-link :to="{ name: 'delete', params: { id: degree.id } }">
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
