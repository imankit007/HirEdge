import axios from "axios";


const instance = axios.create({
    baseURL:'http://192.168.125.131:5000',
    responseType: 'json'

})


export const axiosPrivate = axios.create({
    baseURL: 'http://192.168.125.131:5000',
    withCredentials: true,
    headers:{
        "Content-Type": 'application/json',
    }
})

export default instance;