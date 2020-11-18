<template>
<tr class="list-item">
    <td>{{ student.student_id }}</td>
    <td>{{ student.student_first_name }} {{ student.student_initial }} {{ student.student_last_name }}</td>
    <td>{{ student.student_major }}</td>
    <td>
        <router-link :to="{ name: 'view-student', params: { id: student.student_id } }">
            <span>View</span>
        </router-link>
        <span> | </span>
        <router-link :to="{ name: 'edit-student', params: { id: student.student_id } }">
            <span>Edit</span>
        </router-link>
        <span> | </span>
        <router-link :to="{ name: 'delete-student', params: { id: student.student_id } }">
            <span>Delete</span>
        </router-link>
    </td>
</tr>
</template>

<script>
    export default {
        props: {
            student: Object
        }
    }
    
</script>

<style></style>