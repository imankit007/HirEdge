import { useContext, createContext, useState } from "react";

type AuthStateType = {
    accessToken: string | null;
    authenticated: boolean | null;
}

type AuthContextType = {
    authState: AuthStateType;
    setAuthState: React.Dispatch<React.SetStateAction<AuthStateType>>
    logout: () => void;
    getAccessToken: () => void;
}


const AuthContext = createContext({} as AuthContextType);


const { Provider } = AuthContext;


const AuthProvider = ({ children }: any) => {
    const [authState, setAuthState] = useState<AuthStateType>({
        accessToken: null,
        authenticated: false,
    })


    const logout = () => {
        setAuthState({
            accessToken: null,
            authenticated: false,
        });
    }

    const getAccessToken = () => {
        return authState.accessToken;
    }


    return (


        <Provider
            value={{ authState, setAuthState, logout, getAccessToken }}>
            {children}
        </Provider>
    )

}

export { AuthContext, AuthProvider };


