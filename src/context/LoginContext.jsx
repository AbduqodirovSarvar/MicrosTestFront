import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext()

export const LoginProvider = ({children}) => {
    const localData = JSON.parse(localStorage.getItem('token'))
    const [adToken , setAdToken] = useState();

    useEffect(() => {
        if (adToken) {
            localStorage.setItem('token', JSON.stringify(adToken))
        }
    }, [adToken])

    return (
        <LoginContext.Provider value={{adToken, setAdToken}}>
            {children}
        </LoginContext.Provider>
    )
    
}

