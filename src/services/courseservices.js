import axios from "axios"

const apiClient = axios.create({
    baseURL: "http://team4.eaglesoftwareteam.com/courseapi/", // deployed API URL
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        crossDomain: true
    },
    transformRequest: (data, headers) => {
        let token= localStorage.getCourse('token')
        let authHeader= ""
        if(token != null && token !="")
            authHeader="Bearer"+token
        headers.common["Authorization"] = authHeader
        return JSON.stringify(data)
    }
})

export default{
    getCourses(){
        return apiClient.get("courses")
    },
    getCourse(id){
        return apiClient.get("course/"+ id)
    }
    
}