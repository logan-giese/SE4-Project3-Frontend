<template>
<div class ='field'>
    <tr>
        <td>
            <input type="text" v-model="course.name">
        </td>

        <td>
            <input type="text" v-model="course.description">
        </td>
        <td>
            <input type="text" v-model="course.number">
        </td>
        <td>
            <button @click="addCourse">Save</button>
        </td>
        </tr>
</div>
</template>

<script>
export default {
    data:function(){
        return{
            course:{}
        }
    },
    methods: {
        enableEdit: function(){
            this.editForm=true
        },
        addCourse: function() {
            this.$emit("addCourse", this.course)
        }
    }
    
}
</script>