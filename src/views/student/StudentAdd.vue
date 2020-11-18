<template>
<div class="submit-form">
    <h1>DegreePlan - Add Student</h1>

    <div v-if="!submitted">
        <div class="form-group">
            <label for="student_id"> Student ID </label>
            <input
                   type="number"
                   class="form-control"
                   id="student_id"
                   required
                   v-model="student.student_id"
                   name="student_id"
                   />
        </div>
        <div class="form-group">
            <label for="student_first_name"> First Name </label>
            <input
                   class="form-control"
                   id="student_first_name"
                   required
                   v-model="student.student_first_name"
                   name="student_first_name"
                   />
        </div>
        <div class="form-group">
            <label for="student_initial"> Initial </label>
            <input
                   type="text"
                   class="form-control"
                   id="student_initial"
                   required
                   v-model="student.student_initial"
                   name="student_initial"
                   maxlength="1"
                   />
        </div>
        <div class="form-group">
            <label for="student_last_name"> Last Name </label>
            <input
                   type="text"
                   class="form-control"
                   id="student_last_name"
                   required
                   v-model="student.student_last_name"
                   name="student_last_name"
                   />
        </div>
        <div class="form-group">
            <label for="student_major"> Major </label>
            <input
                   type="text"
                   class="form-control"
                   id="student_major"
                   required
                   v-model="student.student_major"
                   name="student_major"
                   />
        </div>
        <div class="form-group">
            <label for="student_gpa"> GPA </label>
            <input
                   type="number"
                   class="form-control"
                   id="student_gpa"
                   required
                   v-model="student.student_gpa"
                   name="student_gpa"
                   min="0"
                   max="4"
                   step=".01"
                   />
        </div>
        <div class="form-group">
            <label for="student_expected_grad_date"> Expected Grad. Date </label>
            <input
                   type="date"
                   class="form-control"
                   id="student_expected_grad_date"
                   required
                   v-model="student.student_expected_grad_date"
                   name="student_expected_grad_date"
                   />
        </div>
        <div class="form-group">
            <label for="plan_id"> Plan ID </label>
            <input
                   type="number"
                   class="form-control"
                   id="plan_id"
                   required
                   v-model="student.plan_id"
                   name="plan_id"
                   />
        </div>
        <div class="form-group">
            <label for="advisor_id"> Advisor ID </label>
            <input
                   type="number"
                   class="form-control"
                   id="advisor_id"
                   required
                   v-model="student.advisor_id"
                   name="advisor_id"
                   />
        </div>
        <br/>
        <button @click="saveStudent" class="btn btn-success">Save</button>
        </div>
        <div v-else>
            <h4>Submission complete</h4>
            <button class="btn btn-sucess" @click="newStudent">Add</button>
        </div>
    </div>
</template>

<script>
    import CourseServices from '@/services/courseservices.js'
    export default {
        name: "add-student",
        data() {
            return {
                student: {
                    student_id: 0,
                    student_last_name: "",
                    student_first_name: "",
                    student_initial: "",
                    student_major: "",
                    student_gpa: 4.0,
                    student_expected_grad_date: null,
                    plan_id: 0,
                    advisor_id: 0
                },
                submitted: false
            };
        },
        methods: {
            saveStudent(){
                var data = {
                    student_id: this.student.student_id,
                    student_last_name: this.student.student_last_name,
                    student_first_name: this.student.student_first_name,
                    student_initial: this.student_initial,
                    student_major: this.student.student_major,
                    student_gpa: this.student.student_gpa,
                    student_expected_grad_date: this.student.student_expected_grad_date,
                    plan_id: this.student.plan_id,
                    advisor_id: this.student.advisor_id
                };
                CourseServices.addStudent(data)
                .then(response => {
                    this.student.student_id = response.data.student_id;
                    console.log(response.data);
                    this.submitted = true;
                })
                .catch(e => {
                    console.log(e);
                });

            },
            newStudent() {
                this.submitted = false;
                this.student = {};
            }
        }

    };
</script>
<style scoped>
    .submit-form {
        max-width:700px;
        margin:auto;
    }
    #student_initial {
        width: 20px;
    }
</style>