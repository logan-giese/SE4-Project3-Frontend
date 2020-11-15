<template>
<tr class="list-item">
    <td>{{ course.number }}</td>
    <td>{{ course.name }}</td>
    <td>
        <router-link :to="{ name: 'view-course', params: { id: course.course_id } }">
            <span>View</span>
        </router-link>
        <span> | </span>
        <router-link :to="{ name: 'edit-course', params: { id: course.course_id } }">
            <span>Edit</span>
        </router-link>
        <span> | </span>
        <router-link :to="{ name: 'delete-course', params: { id: course.course_id } }">
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
