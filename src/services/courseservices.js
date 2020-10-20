import axios from "axios"

// API base request URL from environment
var baseURLforClient = (process.env.NODE_ENV === "development" ? "http://localhost/planapi/" : "/planapi/");

const apiClient = axios.create({
    baseURL: baseURLforClient,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        crossDomain: true
    },
    transformRequest: (data, headers) => {
        // Set authentication for request if user token is valid
        let token= localStorage.getItem('token')
        let authHeader= ""
        if(token != null && token !="")
            authHeader="Bearer"+token
        headers.common["Authorization"] = authHeader
        return JSON.stringify(data)
    }
})

export default {
    // Course requests:
    getCourses(page = 1, searchQuery) {
        var perPage = 80; // Number of results per page
        var search = searchQuery != "" ? "&search="+searchQuery : "";
        return apiClient.get("courses?per_page="+perPage+"&page=" + (parseInt(page)-1)*perPage + search); // Page to offset
    },
    getCourseById(id) {
        return apiClient.get("courses/" + id);
    },
    updateCourse(id, course) {
        return apiClient.put("courses/" + id, course);
    },
    addCourse(course) {
        return apiClient.post("courses", course);
    },
    deleteCourse(id) {
        return apiClient.delete("courses/" + id);
    },
    
    // Student requests:
    getStudents(page = 1, searchQuery) {
        var perPage = 80; // Number of results per page
        var search = searchQuery != "" ? "&search="+searchQuery : "";
        return apiClient.get("students?per_page="+perPage+"&page=" + (parseInt(page)-1)*perPage + search); // Page to offset
    },
    getStudent(id) {
        return apiClient.get("students/" + id);
    },
    updateStudent(id, student) {
        return apiClient.put("students/" + id, student);
    },
    addStudent(student) {
        return apiClient.post("students", student);
    },
    deleteStudent(id) {
        return apiClient.delete("students/" + id);
    },

    // Advisor requests:
    getAdvisors(page = 1, searchQuery) {
        var perPage = 80; // Number of results per page
        var search = searchQuery != "" ? "&search="+searchQuery : "";
        return apiClient.get("advisors?per_page="+perPage+"&page=" + (parseInt(page)-1)*perPage + search); // Page to offset
    },
    getAdvisor(id) {
        return apiClient.get("advisors/" + id);
    },
    updateAdvisor(id, advisor) {
        return apiClient.put("advisors/" + id, advisor);
    },
    addAdvisor(advisor) {
        return apiClient.post("advisors", advisor);
    },
    deleteAdvisor(id) {
        return apiClient.delete("advisors/" + id);
    },
    
    // Degree plan requests:
    getPlans(page = 1, searchQuery) {
        var perPage = 80; // Number of results per page
        var search = searchQuery != "" ? "&search="+searchQuery : "";
        return apiClient.get("plans?per_page="+perPage+"&page=" + (parseInt(page)-1)*perPage + search); // Page to offset
    },
    getPlan(id) {
        // NOTE: Returns a collection of the courses in the specified plan (degreeplans natural joined with courseplan)
        return apiClient.get("plans/" + id);
    },
    updatePlan(id, plan) {
        return apiClient.put("plans/" + id, plan);
    },
    addPlan(plan) {
        return apiClient.post("plans", plan);
    },
    deletePlan(id) {
        return apiClient.delete("plans/" + id);
    }
}