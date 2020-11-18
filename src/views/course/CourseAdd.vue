<template>
<div class="submit-form">
    <h1>DegreePlan - Add Course</h1>

    <div v-if="!submitted">
        <div class="form-group">
            <label for="department"> Department </label>
            <input
                   class="form-control"
                   id="department"
                   required
                   v-model="course.department"
                   name="department"
                   />
        </div>
        <div class="form-group">
            <label for="number"> Number </label>
            <input
                   class="form-control"
                   id="number"
                   required
                   v-model="course.number"
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
                   v-model="course.name"
                   name="name"
                   />
        </div>
        <div class="form-group">
            <label for="description"> Description </label>
            <textarea
                      class="form-control"
                      id="description"
                      v-model="course.description"
                      name="description"
                      />
        </div>
        <div class="form-group">
            <label for="hours"> Hours </label>
            <input
                   type="number"
                   class="form-control"
                   id="hours"
                   required
                   v-model="course.hours"
                   name="hours"
                   />
        </div>
        <br/>
        <button @click="saveCourse" class="btn btn-success">Save</button>
    </div>
    <div v-else>
        <h4>Submission complete</h4>
        <button class="btn btn-sucess" @click="newCourse">Add</button>
    </div>
    </div>
</template>

<script>
    import CourseServices from '@/services/courseservices.js'
    export default {
        name: "add-course",
        data(){
            return{
                course: {
                    course_id: null,
                    department: "",
                    number: "",
                    name: "",
                    description: "",
                    hours: 0
                },
                submitted:false
            };
        },
        methods: {
            saveCourse(){
                var data ={
                    department: this.course.department,
                    number: this.course.number,
                    name: this.course.name,
                    description: this.course.description,
                    hours: this.course.hours
                };

                CourseServices.addCourse(data)
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
    .submit-form {
        max-width:700px;
        margin:auto;
    }
    #description {
        width: 200px;
        height: 70px;
    }
</style>