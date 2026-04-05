import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppProvider= ({children})=>{

    const [role, setRole ] = useState('viewer')

    //persist role
    useEffect(()=>{
        const savedRole = localStorage.getItem('role');
        if(savedRole){
            setRole(savedRole);
        }
    },[]);

    const handleRoleChange = (newRole)=>{
        setRole(newRole);
        localStorage.setItem('role', newRole);
    }
    return(
        <AppContext.Provider value={{role, handleRoleChange}}>
            {children}
        </AppContext.Provider>
    )
    

}

export default AppProvider;