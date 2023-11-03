
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import axios from "./axios";
import { getValueFor } from "./useSecureStore";
import { Redirect, router } from "expo-router";


const useRefreshToken = () => {
    const { setAuthState} = useContext(AuthContext)

    const refresh = async () => {
        try{
        
        const refresh_token  = await getValueFor('refresh_token');
        
        if(!refresh_token){
            router.replace('/welcome');
        }

        const response = await axios.get('/refresh', {
            headers: {
                "Content-Type":'application/json',
                "Cookie": `refresh_token=${refresh_token}`
            },
            withCredentials: true
        }); 
        console.log(response.data);
    
        if(response.status==200){
            
            setAuthState({access_token: response.data?.access_token, role: response.data?.role})
            return true;
    }
    }catch(e){
        console.log(e);
        return false;
    }
    }
    return refresh;
}

export default useRefreshToken;