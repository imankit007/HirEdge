
import { useEffect, useContext } from "react"

import  {axiosPrivate}  from "./axios";
import useRefreshToken from "./refresh";
import { useAuth } from "./AuthContext";


const useAxiosPrivate = () => {
    const refresh = useRefreshToken();

    const authContext = useAuth();

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${authContext?.getAccessToken()}`;
                }
                return config
            }, (error) => { Promise.reject(error) }
        )

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;

                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${authContext?.getAccessToken()}`;
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error)
            }
        )
        return () => {
            axiosPrivate.interceptors.response.eject(responseIntercept);
            axiosPrivate.interceptors.request.eject(requestIntercept);
        }

    }, [authContext, refresh])
    return axiosPrivate;

}
export default useAxiosPrivate;



