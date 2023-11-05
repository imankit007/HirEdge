import axios from "axios";


const instance = axios.create({
    baseURL:'http://192.168.160.1:5000',
    responseType: 'json'

})


export const axiosPrivate = axios.create({
    baseURL: 'http://192.168.160.1:5000',
    withCredentials: true,
    headers:{
        "Content-Type": 'application/json',
    }
})

export default instance;