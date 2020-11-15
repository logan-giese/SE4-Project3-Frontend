
<template>
    <div v-if="currentCourse" class="edit-form">
        <h4>Degree Edit</h4>
        <form>
            <div class="form-group">
                <label for="number">Number</label>
                <input type="text" class="form-control" id="number"
                v-model="currentDegree.number"
                />
            </div>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name"
                v-model="currentDegree.name"
                />
            </div>
            <div class="form-group">
                <label>Status:</label>
                {{currentCourse.published ? "Published": "Pending"}}
            </div>
        </form>
        <button class="badge badge-primary mr-2"
        v-if="currentCourse.published"
        @click="updatedPublished(false)"
        >
        UnPublish
        </button>
        <button v-else class="badge badge-primary mr-2"
        @click="updatePublished(true)"
        >
        Published
        </button>
        <button class="badge badge-danger mr-2"
        @click="deleteCourse"
        >
        Delete 
        </button>
        <button type="submit" class="badge badge-success"
        @click="updateCourse"
        >
        Update 
        </button>
        <p>{{message}}</p>
    </div>
    <div v-else>
        <br />
        <p> Please click on a Course...</p>
    </div>
</template>
 <script>
 import CourseServices from '@/services/courseservices.js'
 export default{
     name:"course",
     props: ['id'],
     data(){
         return{
             currentCourse: null,
             message:''
         };
     },
     methods:{
         getCourse(id){
             courseservices.getCourseById(id)
             .then(response=>{
                 this.currentCourse=response.data[0];
                 console.log("course="+response.data);
             })
             .catch(e=>{
                 console.log(e);
             });
             
         },
         onCancel(){
        console.log('CANCEL SUBMIT');
        this.show = false;
        this.$router.push({ name: 'users' });
        
        },

         updateCourse(status){
             var data={
                 number: this.currentCourse.id,
                 name: this.currentCourse.name,
                 description:this.currentCourse.description,
                 published: status
             };
             CourseServices.updateCourse(this.currentCourse.id,data)
             .then(response=>{
                 this.currentCourse.published=status;
                 console.log(response.data);

             })
             .catch(e=>{
                 console.log(e);
             });
         },
     },
         mounted(){
             this.message='';
             this.getCourse(this.id);

         }
 };
 </script>
 <style>
 .edit-form{
     max-width: 300px;
     margin:auto
 }
 </style>
    
