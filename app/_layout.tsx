
import { Slot, Stack, useRouter } from "expo-router";

import { useContext, useEffect } from "react";
import { AuthProvider } from "../utils/AuthContext";


import { AuthContext } from "../utils/AuthContext";

const InitialLayout = () => {

    const router = useRouter();




    return (
        <>
            <Slot />
        </>

    )
}



const RootLayout = () => {
    return (
        <AuthProvider>
        <InitialLayout />
        </AuthProvider>
    )

}




export default RootLayout;