import axios from "axios"

// API base request URL from environment
var baseURLforClient = (process.env.NODE_ENV === "development" ? "http://localhost/courseapi/" : "/courseapi/");

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
    getDegree(page = 1, searchQuery) {
        var perPage = 80; // Number of results per page
        var search = searchQuery != "" ? "&search="+searchQuery : "";
        return apiClient.get("courses?per_page="+perPage+"&page=" + (parseInt(page)-1)*perPage + search); // Page to offset
    },
    getDegreeById(id) {
        return apiClient.get("courses/" + id);
    },
    updateDegree(id, course) {
        return apiClient.put("courses/" + id, course);
    },
    addDegree(course) {
        return apiClient.post("courses", course);
    },
    deleteDegree(id) {
        return apiClient.delete("courses/" + id);
    }
}