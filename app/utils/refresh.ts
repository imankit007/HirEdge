

import axios from "./axios";
import { getValueFor } from "./useSecureStore";


const useRefreshToken = () => {

   

    const refresh = async () => {
        try{
        const refresh_token  = await getValueFor('refresh_token');
        console.log('refresh called');
        if(!refresh_token){
            return null;
        }
        const response = await axios.get('/refresh', {
            headers: {
                "Content-Type":'application/json',
                "Cookie": `refresh_token=${refresh_token}`
            },
            withCredentials: true
        }); 

        

        return {access_token: response.data.access_token, role: response.data.role};

    }catch(e){
        console.log(e);
        return null;
    }
    }
    return refresh;
}

export default useRefreshToken;