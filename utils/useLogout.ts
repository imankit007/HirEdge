import { AuthContext } from './AuthContext'
import { useContext } from 'react'
import { router } from 'expo-router'
import useAxiosPrivate from './axiosPrivate'

import { deleteItem, getValueFor } from './useSecureStore'

const useLogout = () =>{

    const {setAuthState} = useContext(AuthContext);
    const axiosPrivate = useAxiosPrivate();

    const logout = async () =>{
    
        try{

            const refresh_token  = await getValueFor('refresh_token');

            const response = await axiosPrivate.get('/logout',{
                headers: {
                    "Content-Type":'application/json',
                    "Cookie": `refresh_token=${refresh_token}`
                },
                withCredentials: true
            })

            if(response.status==200){
            await deleteItem('refresh_token');

            setAuthState({
                role: null,
                access_token: null,
            })
            router.replace({pathname: '/(public)/welcome'})}
        }catch(err){
            console.log(err);
        }
        
    }
    return logout;
}

export default useLogout;