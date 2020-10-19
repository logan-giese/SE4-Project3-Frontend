<template>
    <div class="submit-form">
        <div v-if="!submitted">
                <div class="form-group">
                <label for="number">Number </label>
                <input
                class="form-control"
                id="description"
                required
                v-model="course.number"
                name="number"
                />
            </div>
            <div class="form-group">
                <label for="name">Name </label>
                <input
                type="text"
                class="form-control"
                id="name"
                required
                v-model="course.name"
                name="name"
                />
            </div>
            
            <div class="form-group">
                <label for="description">Description </label>
                <input
                class="form-control"
                id="description"
                required
                v-model="course.description"
                name="description"
                />
            </div>
        
            <button @click="saveCourse" class="btn btn-success">Save</button>
        </div>
        <div v-else>
            <h4>Submission complete</h4>
            <button class="btn btn-sucess" @click="newCourse">Add</button>
        </div>
    </div>
</template>

<script>
import courseservices from "../services/courseservices";
export default {
    name: "add-course",
    data(){
        return{
            course:{
                id:null,
                title: "",
                description: "",
                published: false
            },
            submitted:false
        };
    },
    methods: {
        saveCourse(){
            var data ={
                title: this.course.title,
                description: this.course.description
            };
            courseservices.create(data)
            .then(response=>{
                this.course.id=response.data.id;
                console.log(response.data);
                this.submitted=true;
            })
            .catch(e=>{
                console.log(e);

            });

        },
        newCourse(){
            this.submitted=false;
            this.course={};
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