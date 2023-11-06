import axios from "axios";


//replace the baseURL with IP of your machine
// ipconfig - to find the ip address of machine


const instance = axios.create({
    baseURL:'http://192.168.60.68:8081',
    responseType: 'json'

})


export const axiosPrivate = axios.create({
    baseURL: 'http://192.168.60.68:8081',
    withCredentials: true,
    headers:{
        "Content-Type": 'application/json',
    }
})

export default instance;