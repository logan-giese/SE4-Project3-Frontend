<template>
    <div class="submit-form">
        <div v-if="!submitted">
                <div class="form-group">
                <label for="number"> Number </label>
                <input
                class="form-control"
                id="description"
                required
                v-model="student.number"
                name="number"
                />
            </div>
            <div class="form-group">
                <label for="name"> Name </label>
                <input
                type="text"
                class="form-control"
                id="name"
                required
                v-model="student.name"
                name="name"
                />
            </div>
            <div class="form-group">
                <label for="department"> Department </label>
                <input
                class="form-control"
                id="department"
                required
                v-model="student.department"
                name="department"
                />
            </div>
            <button @click="saveStudent" class="btn btn-success">Save</button>
        </div>
        <div v-else>
            <h4>Submission complete</h4>
            <button class="btn btn-sucess" @click="newStudent">Add</button>
        </div>
    </div>
</template>

<script>
import courseservices from "../services/courseservices";
export default {
    name: "add-student",
    data(){
        return{
            student:{
                id:null,
            },
            submitted:false
        };
    },
    methods: {
        saveStudent(){
            var data ={
                name: this.student.name,


            };
            courseservices.addStudent(data)
            .then(response=>{
                this.degree.id=response.data.id;
                console.log(response.data);
                this.submitted=true;
            })
            .catch(e=>{
                console.log(e);

            });

        },
        newCourse(){
            this.submitted=false;
            this.student={};
        }
    }
    
};
</script>
<style scoped>
.submit-form{
    max-width:300px;
    margin:auto;
}
</style>