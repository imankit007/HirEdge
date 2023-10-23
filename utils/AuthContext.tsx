import { useContext, createContext, useState } from "react";

type AuthStateType = {
    access_token: string | null;
    role: string | null;
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
        access_token: null,
        role: null,
    })


    const logout = () => {
        setAuthState({
            access_token: null,
            role: null,
        });
    }

    const getAccessToken = () => {
        return authState.access_token;
    }


    return (


        <Provider
            value={{ authState, setAuthState, logout, getAccessToken }}>
            {children}
        </Provider>
    )

}

export { AuthContext, AuthProvider };


