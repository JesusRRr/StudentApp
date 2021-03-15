import fetch from 'unfetch';

const checkStatus = res =>{
    if (res.ok){
        return res;
    }
    const error = new Error(res.statusText);
    error.response = res;
    return Promise.reject(error);
}
export const getAllStudents = () =>
    fetch("http://localhost:8080/api/students")
        .then(checkStatus);