import axios from "axios";


//replace the baseURL with IP of your machine
// ipconfig - to find the ip address of machine
const baseURL = 'http://192.168.27.171:5000';


const instance = axios.create({
    baseURL:baseURL,
    responseType: 'json'

})


export const axiosPrivate = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    headers:{
        "Content-Type": 'application/json',
    }
})

export default instance;