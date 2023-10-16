import { Redirect } from "expo-router"
import { useContext } from "react";
import { AuthContext } from "../utils/AuthContext";



const StartPage = () => {

    const { authState } = useContext(AuthContext);
    if (authState.authenticated == false)
        return (
            <Redirect href={"/(public)/welcome"} />
        )
    else {


    }

}

export default StartPage;