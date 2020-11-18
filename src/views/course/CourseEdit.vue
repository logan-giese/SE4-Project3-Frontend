<template>
    <div v-if="currentCourse" class="edit-form">
        <h1>DegreePlan - Edit Course</h1>
        <h2>{{ currentCourse.number }} - {{ currentCourse.name }}</h2>

        <form>
            <div class="form-group">
                <label for="department"> Department </label>
                <input type="text" class="form-control" id="department"
                       v-model="currentCourse.department"
                       />
            </div>
            <div class="form-group">
                <label for="number"> Number </label>
                <input type="text" class="form-control" id="number"
                       v-model="currentCourse.number"
                       />
            </div>
            <div class="form-group">
                <label for="name"> Name </label>
                <input type="text" class="form-control" id="name"
                       v-model="currentCourse.name"
                       />
            </div>
            <div class="form-group">
                <label for="description"> Description </label>
                <textarea class="form-control" id="description"
                       v-model="currentCourse.description"
                       />
            </div>
            <div class="form-group">
                <label for="hours"> Hours </label>
                <input type="number" class="form-control" id="hours"
                       v-model="currentCourse.hours"
                       />
            </div>
            <div class="form-group">
                <label>Status:</label>
                {{ this.published ? "Updated" : "Pending" }}
            </div>
        </form>
        <br/>
        
        <button class="badge badge-danger mr-2" @click="$router.go(-1)">
            Cancel
        </button>

        <router-link :to="{ name: 'delete-course', params: { id: currentCourse.course_id } }" tag="button">
            Delete
        </router-link>
        
        <button type="submit" class="badge badge-success" @click="updateCourse">
            Update 
        </button>
        
        <p>{{ message }}</p>
    </div>
    <div v-else>
        <br />
        <p> Please select a course first...</p>
    </div>
</template>
<script>
    import CourseServices from '@/services/courseservices.js'
    export default{
        name: "course",
        props: ['id'],
        data() {
            return {
                currentCourse: {},
                message: '',
                published: false
            };
        },
        methods: {
            getCourse(id) {
                CourseServices.getCourse(id)
                .then(response=>{
                    this.currentCourse = response.data[0];
                })
                .catch(error => {
                    this.message = error.response.data.message
                });
            },
            updateCourse() {
                var data = {
                    course_id: this.currentCourse.course_id,
                    department: this.currentCourse.department,
                    number: this.currentCourse.number,
                    name: this.currentCourse.name,
                    description: this.currentCourse.description,
                    hours: this.currentCourse.hours,
                    level: this.currentCourse.level,
                    term: this.currentCourse.term
                };
                CourseServices.updateCourse(this.currentCourse.course_id, data)
                .then(() => {
                    this.published = true
                    this.$router.push({ name: "view-course", params: { id: this.currentCourse.course_id } })
                })
                .catch(error => {
                    this.message = error.response.data.message
                });
            }
        },
        mounted(){
            this.message = '';
            this.getCourse(this.id);
        }
    };
</script>
<style>
    .edit-form {
        max-width: 700px;
        margin:auto
    }
    #description {
        width: 200px;
        height: 70px;
    }
</style>
