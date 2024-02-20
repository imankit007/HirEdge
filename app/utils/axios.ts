import axios from "axios";


//replace the baseURL with IP of your machine
// ipconfig - to find the ip address of machine
<<<<<<< Updated upstream
const baseURL = 'http://192.168.40.68:5000';
=======
const baseURL = 'http://192.168.173.131:5000';
>>>>>>> Stashed changes


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