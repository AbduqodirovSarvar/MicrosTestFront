import { createContext, useEffect, useState } from "react";

export const AdminContext = createContext()

export const AdminProvider = ({children}) => {
    const localData = JSON.parse(localStorage.getItem('token'))
    const [adminToken , setAdminToken] = useState();

    useEffect(() => {
        if (adminToken) {
            localStorage.setItem('token', JSON.stringify(adminToken))
        }
    }, [adminToken])

    return (
        <AdminContext.Provider value={{adminToken, setAdminToken}}>
            {children}
        </AdminContext.Provider>
    )
    
}

