<template>
    <div class="submit-form">
        <div v-if="!submitted">
                <div class="form-group">
                <label for="number"> Number </label>
                <input
                class="form-control"
                id="description"
                required
                v-model="degree.number"
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
                v-model="degree.name"
                name="name"
                />
            </div>
            <div class="form-group">
                <label for="department"> Department </label>
                <input
                class="form-control"
                id="department"
                required
                v-model="degree.department"
                name="department"
                />
            </div>
            <button @click="saveDegree" class="btn btn-success">Save</button>
        </div>
        <div v-else>
            <h4>Submission complete</h4>
            <button class="btn btn-sucess" @click="newDegree">Add</button>
        </div>
    </div>
</template>

<script>
import CourseServices from '@/services/courseservices.js'
export default {
    name: "add-degree",
    data(){
        return{
            degree:{
                id:null,
            },
            submitted:false
        };
    },
    methods: {
        saveDegree(){
            var data ={
                name: this.degree.name,


            };
            CourseServices.addPlan(data)
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
            this.degree={};
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