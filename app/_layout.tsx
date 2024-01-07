
import { Slot, Stack, useRouter, useSegments } from "expo-router";

import { useContext, useEffect } from "react";
import { AuthProvider } from "../utils/AuthContext";

import { Provider } from "react-native-paper";
import { AuthContext } from "../utils/AuthContext";
import useRefreshToken from "../utils/refresh";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const InitialLayout = () => {

    const { authState } = useContext(AuthContext);
    const router = useRouter();
    const segments = useSegments();
    const refresh = useRefreshToken();


    useEffect(() => {

        const verifyTokenValidity = async () => {
            const inTabsGroup = segments[0] === '(auth)';
            const isLoggedIn = await refresh();
            if (isLoggedIn && !inTabsGroup) {
                if (authState.role == "tpo") {
                    router.replace({
                        pathname: '/(auth)/tpo/addcompany',
                    })
                } else if (authState.role == 'student')
                    router.replace('/(auth)/student/placements')
                else if (authState.role == 'hod')
                    router.replace('/(auth)/hod/')
                else if (authState.role == 'alumni')
                    router.replace('/(auth)/alumni/')
            } else {
                router.replace('/(public)/welcome')
            }

        }
        verifyTokenValidity();
    }, [authState.access_token])


    return <Slot />

}



const RootLayout = () => {

    const queryClient = new QueryClient();;

    return (
        <Provider>
        <AuthProvider>
                <QueryClientProvider client={queryClient}>
                    <InitialLayout />
                </QueryClientProvider>
        </AuthProvider>
        </Provider>
    )

}




export default RootLayout;