import axios from "axios";


//replace the baseURL with IP of your machine
// ipconfig - to find the ip address of machine


const instance = axios.create({
    baseURL:'http://192.168.191.68:5000',
    responseType: 'json'

})


export const axiosPrivate = axios.create({
    baseURL: 'http://192.168.191.131:5000',
    withCredentials: true,
    headers:{
        "Content-Type": 'application/json',
    }
})

export default instance;